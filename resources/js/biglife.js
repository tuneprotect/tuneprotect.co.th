import Swal from "sweetalert2";

require('./main');
import {$, $$, getRadioSelectedValue, scrollToTargetAdjusted} from "./helper"
import validate from "validate.js";
import {showFieldError} from "./validate_form";

document.addEventListener("DOMContentLoaded", function () {
    const toggltField = (isShow) => {
        $$('.hideField').forEach($el => {
            if (isShow) {
                $el.style.removeProperty('display');
            } else {
                $el.style.display = 'none';
            }
        });
    }
    toggltField(false);

    const $form1 = $('#frm_validate');
    if ($form1) {
        let status = document.getElementById("status_api");
        let massage1 = document.getElementById("massage_key");
        let massage2 = document.getElementById("massage_alert");
        let massage3 = document.getElementById("massage_confirm");

        if(status){
            if(!status.value)
            {
                Swal.fire({
                    title: massage2.value,
                    text: massage1.value,
                    icon: 'warning',
                    confirmButtonText: massage3.value
                })
            }
        }
    }

    const $form2 = $('#frm_survey');
    if ($form2) {
        let contactConstraints = {
            name: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_name').getAttribute('data-error-required')
                },
            },
            lastname: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_lastname').getAttribute('data-error-required')
                },
            },
            mobile: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_mobile').getAttribute('data-error-required')
                },
            },
            email: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_email').getAttribute('data-error-required')
                },
            }
        };

        const otpRequest = async (data) => {
            $form2.classList.add('ajax_loader');
            try {
                let res = await fetch(`/${$('html').getAttribute('lang')}/Biglife/SendMessage`, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(data)
                });
                const response = await res.json();
                if (response.status) {
                    toggltField(true);
                    $('#ctrl_otp').value = response.message;
                } else {
                    Swal.fire(
                        $form2.getAttribute('data-error'),
                        response.message,
                        'error'
                    )
                }
            } catch (err) {
                Swal.fire({
                    title: $form2.getAttribute('data-error'),
                    text: $form2.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $form2.classList.remove('ajax_loader');
        }

        function validationData() {
            $$('cite', $form2).forEach($el => $el.remove());
            $$('.controls-wrapper', $form2).forEach($el => $el.classList.remove('error'));
            $$('input,select,textarea', $form2).forEach($el => $el.classList.remove('error'));

            let data = {
                name: $('#ctrl_name').value,
                lastname: $('#ctrl_lastname').value,
                mobile: $('#ctrl_mobile').value,
                email: $('#ctrl_email').value,
                lang:$('html').getAttribute('lang'),
            }

            const result = validate(data, contactConstraints);
            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                scrollToTargetAdjusted($('.controls-wrapper.error'));
                return false;
            }

            let question1 = false;
            let question11  = $('#ctrl_question11').checked ? true : false;
            let question12  = $('#ctrl_question12').checked ? true : false;
            let question13  = $('#ctrl_question13').checked ? true : false;
            let question14  = $('#ctrl_question14').checked ? true : false;
            if(question11||question12||question13||question14){
                question1 = true;
            }

            let question2 = false;
            let question21  = $('#ctrl_question21').checked ? true : false;
            let question22  = $('#ctrl_question22').checked ? true : false;
            let question23  = $('#ctrl_question23').checked ? true : false;
            let question24  = $('#ctrl_question24').checked ? true : false;
            if(question21||question22||question23||question24){
                question2 = true;
            }

            let question3 = true;
            let question31  = getRadioSelectedValue('ctrl_question3');
            if(question31 === undefined){
                question3 = false;
            }
            let marketing  = $('#ctrl_marketing').checked ? true : false;
            if(!(marketing&&question1&&question2&&question3)){
                let massage2 = $('#ctrl_massage2').value;
                let massage3 = $('#ctrl_massage3').value;
                let massage4 = $('#ctrl_massage4').value;

                Swal.fire({
                    title: massage2,
                    text: massage4,
                    icon: 'warning',
                    confirmButtonText: massage3
                })
                return false;
            }
            return  true;
        }

        // $form2.addEventListener('submit', logSubmit);
        // function logSubmit(event) {
        //     event.preventDefault();
        //     if($('#ctrl_otp').value == $('#ctrl_ref_code').value){
        //         return true;
        //     }
        //     else{
        //         let massage2 = $('#ctrl_massage2').value;
        //         let massage3 = $('#ctrl_massage3').value;
        //         let massage6 = $('#ctrl_massage6').value;
        //         Swal.fire({
        //             title: massage2,
        //             text: massage6,
        //             icon: 'warning',
        //             confirmButtonText: massage3
        //         });
        //         return false;
        //     }
        //
        // }

        $$('button[name="action"]', $form2).forEach($el => $el.addEventListener("click", async function (e) {
            e.preventDefault();
            let action = e.target.value;
            let data = {
                name: $('#ctrl_name').value,
                lastname: $('#ctrl_lastname').value,
                mobile: $('#ctrl_mobile').value,
                email: $('#ctrl_email').value,
                lang:$('html').getAttribute('lang'),
            }
            if(action === 'validate'){
                toggltField(false);
                let val = validationData();
                if(val){
                    await otpRequest(data);
                }
            }
            else{
                let val = validationData();
                if(val){
                        if($('#ctrl_otp').value == $('#ctrl_ref_code').value){
                            $form2.submit();
                        }
                        else{
                            let massage2 = $('#ctrl_massage2').value;
                            let massage3 = $('#ctrl_massage3').value;
                            let massage6 = $('#ctrl_massage6').value;
                            Swal.fire({
                                title: massage2,
                                text: massage6,
                                icon: 'warning',
                                confirmButtonText: massage3
                            });
                            return false;
                        }
                }
            }

        }));



        // const validateData = async (action) => {
        //     $$('cite', $form2).forEach($el => $el.remove());
        //     $$('.controls-wrapper', $form2).forEach($el => $el.classList.remove('error'));
        //     $$('input,select,textarea', $form2).forEach($el => $el.classList.remove('error'));
        //
        //     let data = {
        //         name: $('#ctrl_name').value,
        //         lastname: $('#ctrl_lastname').value,
        //         mobile: $('#ctrl_mobile').value,
        //         email: $('#ctrl_email').value,
        //         lang:$('html').getAttribute('lang'),
        //     }
        //
        //     const result = validate(data, contactConstraints);
        //     if (result) {
        //         Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
        //         scrollToTargetAdjusted($('.controls-wrapper.error'));
        //         return false;
        //     }
        //
        //     let question1 = false;
        //     let question11  = $('#ctrl_question11').checked ? true : false;
        //     let question12  = $('#ctrl_question12').checked ? true : false;
        //     let question13  = $('#ctrl_question13').checked ? true : false;
        //     let question14  = $('#ctrl_question14').checked ? true : false;
        //     if(question11||question12||question13||question14){
        //         question1 = true;
        //     }
        //
        //     let question2 = false;
        //     let question21  = $('#ctrl_question21').checked ? true : false;
        //     let question22  = $('#ctrl_question22').checked ? true : false;
        //     let question23  = $('#ctrl_question23').checked ? true : false;
        //     let question24  = $('#ctrl_question24').checked ? true : false;
        //     if(question21||question22||question23||question24){
        //         question2 = true;
        //     }
        //
        //     let question3 = true;
        //     let question31  = getRadioSelectedValue('ctrl_question3');
        //     if(question31 === undefined){
        //         question3 = false;
        //     }
        //     let marketing  = $('#ctrl_marketing').checked ? true : false;
        //     if(!(marketing&&question1&&question2&&question3)){
        //         let massage2 = $('#ctrl_massage2').value;
        //         let massage3 = $('#ctrl_massage3').value;
        //         let massage4 = $('#ctrl_massage4').value;
        //
        //         Swal.fire({
        //             title: massage2,
        //             text: massage4,
        //             icon: 'warning',
        //             confirmButtonText: massage3
        //         })
        //         return false;
        //     }
        //
        //     if(action === 'validate'){
        //         await otpRequest(data);
        //     // }
        //     // else{
        //     //     await sendSurvey(data);
        //     }
        //
        //     return  true;
        //
        // }


        //
        // $form2.addEventListener('submit', async (e) => {
        //     e.preventDefault();
        //     let val = validationData();
        //     if(val){
        //         if($('#ctrl_otp').value == $('#ctrl_ref_code').value){
        //             let data = {
        //                 name: $('#ctrl_name').value,
        //                 lastname: $('#ctrl_lastname').value,
        //                 mobile: $('#ctrl_mobile').value,
        //                 email: $('#ctrl_email').value,
        //                 lang:$('html').getAttribute('lang'),
        //             }
        //             await sendSurvey(data);
        //         }
        //         else{
        //             let massage2 = $('#ctrl_massage2').value;
        //             let massage3 = $('#ctrl_massage3').value;
        //             let massage6 = $('#ctrl_massage6').value;
        //             Swal.fire({
        //                 title: massage2,
        //                 text: massage6,
        //                 icon: 'warning',
        //                 confirmButtonText: massage3
        //             });
        //         }
        //     }
        //
        //     // e.preventDefault();
        //     // toggltField(false);
        //     // // let val = validateData('validate');
        //     // let val = validationData();
        //     // if(val){
        //     //     let data = {
        //     //         name: $('#ctrl_name').value,
        //     //         lastname: $('#ctrl_lastname').value,
        //     //         mobile: $('#ctrl_mobile').value,
        //     //         email: $('#ctrl_email').value,
        //     //         lang:$('html').getAttribute('lang'),
        //     //     }
        //     //     await otpRequest(data);
        //     // }
        //     // return false;
        // });
        //
        // $$('button[name="action"]', $form2).forEach($el => $el.addEventListener("click", async function (e) {
        //
        //     e.preventDefault();
        //     toggltField(false);
        //     // let val = validateData('validate');
        //     let val = validationData();
        //     if(val){
        //         let data = {
        //             name: $('#ctrl_name').value,
        //             lastname: $('#ctrl_lastname').value,
        //             mobile: $('#ctrl_mobile').value,
        //             email: $('#ctrl_email').value,
        //             lang:$('html').getAttribute('lang'),
        //         }
        //         await otpRequest(data);
        //     }
        //     return false;
        //
        //     // e.preventDefault();
        //     // let val = validationData();
        //     // if(val){
        //     //     if($('#ctrl_otp').value == $('#ctrl_ref_code').value){
        //     //         let data = {
        //     //             name: $('#ctrl_name').value,
        //     //             lastname: $('#ctrl_lastname').value,
        //     //             mobile: $('#ctrl_mobile').value,
        //     //             email: $('#ctrl_email').value,
        //     //             lang:$('html').getAttribute('lang'),
        //     //         }
        //     //         await sendSurvey(data);
        //     //     }
        //     //     else{
        //     //         let massage2 = $('#ctrl_massage2').value;
        //     //         let massage3 = $('#ctrl_massage3').value;
        //     //         let massage6 = $('#ctrl_massage6').value;
        //     //         Swal.fire({
        //     //             title: massage2,
        //     //             text: massage6,
        //     //             icon: 'warning',
        //     //             confirmButtonText: massage3
        //     //         });
        //     //     }
        //     // }
        // }));
        //
        //
        //
        // $$('button[name="action"]', $form2).forEach($el => $el.addEventListener("click", async function (e) {
        //     e.preventDefault();
        //     toggltField(false);
        //     let val = validateData(e.target.value);
        //     // if(val){
        //     //     await otpRequest(data);
        //     // }
        // }));
        //
        //
        // $form2.addEventListener('submit', async (e) => {
        //     e.preventDefault();
        //     let val = validateData();
        //     if(val){
        //         if($('#ctrl_otp').value == $('#ctrl_ref_code').value){
        //             // await sendSurvey(data);
        //             e.preventDefault();
        //             return true;
        //         }
        //         else{
        //             let massage2 = $('#ctrl_massage2').value;
        //             let massage3 = $('#ctrl_massage3').value;
        //             let massage6 = $('#ctrl_massage6').value;
        //
        //             Swal.fire({
        //                 title: massage2,
        //                 text: massage6,
        //                 icon: 'warning',
        //                 confirmButtonText: massage3
        //             });
        //         }
        //     }
        //     return false;
        // });

    }

});
