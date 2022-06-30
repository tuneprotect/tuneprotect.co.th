import {$, $$} from "./helper";
import Swal from "sweetalert2";
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";

import {tns} from "tiny-slider/src/tiny-slider"
import {showTitle} from "./form/productHelper";

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


    const $frmBloodCheck = $('#frm_bloodcheck');
    if ($frmBloodCheck) {
        let contactConstraints3 = {
            RefCode: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_ref_code').getAttribute('data-error-required')
                },
            }
        };

        // $$('button[name="action"]', $frmBloodCheck).forEach($el => $el.addEventListener("click", async function (e) {
        //     e.preventDefault();
        //     $$('cite', $frmBloodCheck).forEach($el => $el.remove());
        //     $$('.controls-wrapper', $frmBloodCheck).forEach($el => $el.classList.remove('error'));
        //     $$('input,select,textarea', $frmBloodCheck).forEach($el => $el.classList.remove('error'));
        //
        //     // let data = {
        //     //     refCode: $('#ctrl_ref_code').value,
        //     // }
        //     //
        //     // const result = validate(data, contactConstraints3);
        //     //
        //     // if (result) {
        //     //     Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
        //     //     return false;
        //     // }
        //
        //     // await apiTaxDeduction(data);
        //
        //     if($('#ctrl_ref_code').value === '')
        //     {
        //         Swal.fire({
        //             title: 'Warning!',
        //             text: 'Warning '+ $('#ctrl_ref_code').getAttribute('data-error-required'),
        //             icon: 'Warning',
        //             confirmButtonText: 'OK'
        //         })
        //         return false;
        //     }
        //
        //     let data = {
        //         RefCode: $('#ctrl_ref_code').value,
        //     }
        //     await checkBloodTestCode(data);
        //
        //     return false;
        // }));

        const checkBloodTestCode = async (data) => {

            // console.log(data);

            $frmBloodCheck.classList.add('ajax_loader');
            try {
                let res = await fetch($frmBloodCheck.getAttribute('action'), {
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
                    const $summary_section = $('#summary_section');
                    $summary_section.innerHTML = ``;

                    let respData = response.data;
                    let innerHTML =  ``;
                    respData.map(v => {
                        innerHTML = innerHTML + `<br>
                            <h3 class="text-primary">ข้อมูลลูกค้าในการรับสิทธิ์</h3>
                            <div class="two-col">
                               <div><span>ชื่อ </span><strong>${v.FDNAME}</strong><span> นามสกุล </span><strong>${v.FDSURNAME}</strong></div>
                               <div><span>เลขที่กรมธรรม์ </span><strong>${v.POLICY_NO}</strong></div>
                               <div><span>ประกันภัยที่ได้รับความคุ้มครอง </span><strong>ประกันภัยเบาหวาน โพรเทค</span></strong></div>
                               <div><span>วันที่เริ่มต้นความคุ้มครอง </span><strong>${v.FDFROMDATE}</strong></div>
                               <div><span>วันที่สิ้นสุดความคุ้มครอง </span><strong>${v.FDTODATE}</strong></div>
                               <div><span>Free Blood Test </span><strong>ได้รับ 1 สิทธิ์/ปี</strong></div>
                            </div>
                            <br>`;
                    });

                    const $ddlHospital = $('#ctrl_hospital');
                    const hospital = $ddlHospital.options[$ddlHospital.selectedIndex].text;
                    let param = $('#ctrl_ref_code').value + '|' + hospital;
                    $summary_section.innerHTML = innerHTML;
                    const $submit_section = $('#submit_section');
                    $submit_section.innerHTML = `<div class="btn-wrapper"><a id="btnThank" class="btn btn-primary" href="/${$('html').getAttribute('lang')}/BloodTest/UsedBloodTest/${param}">กดใช้สิทธิ์</a></div>`;

                    toggltField(true);

                } else {
                    Swal.fire(
                        $frmBloodCheck.getAttribute('data-error'),
                        response.message,
                        'error'
                    )
                }
            } catch (err) {
                Swal.fire({
                    title: $frmBloodCheck.getAttribute('data-error'),
                    text: $frmBloodCheck.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $frmBloodCheck.classList.remove('ajax_loader');
        }


        $frmBloodCheck.addEventListener('submit', async (e) => {
            e.preventDefault();
            $$('cite', $frmBloodCheck).forEach($el => $el.remove());
            $$('.controls-wrapper', $frmBloodCheck).forEach($el => $el.classList.remove('error'));
            $$('input,select,textarea', $frmBloodCheck).forEach($el => $el.classList.remove('error'));

            toggltField(false);

            let data = {
                RefCode: $('#ctrl_ref_code').value,
            }

            const result = validate(data, contactConstraints3);

            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                return false;
            }

            await checkBloodTestCode(data);

        });

        $$("#ctrl_hospital").forEach($el => {
            $el.addEventListener("change", function (e) {

                let url = $frmBloodCheck.getAttribute('action2') + $('#ctrl_ref_code').value + '|' + $el.options[$el.selectedIndex].text;
                let btnThank = document.getElementById('btnThank');
                btnThank.href = url;

            });
        });


        // $$('button[name="action"]', $frmBloodCheck).forEach($el => $el.addEventListener("click", async function (e) {
        //     e.preventDefault();
        //     const $ddlHospital = $('#ctrl_hospital');
        //     const hospital = $ddlHospital.options[$ddlHospital.selectedIndex].text;
        //     let param = $('#ctrl_ref_code').value + '|' + hospital;
        //
        //     // const $submit_section = $('#submit_section');
        //     // $submit_section.innerHTML = `<div class="btn-wrapper"><a id="my-link" class="btn btn-primary" href="/${$('html').getAttribute('lang')}/BloodTest/UsedBloodTest/${param}">กดใช้สิทธิ์</a></div>`;
        //     // let link = document.getElementById('my-link');
        //     // link.click();
        //
        //     // $.post($frmBloodCheck.getAttribute('action2') + param, function(response) {
        //     //     // handle your response here
        //     //     console.log(response);
        //     // })
        //
        //     // alert($frmBloodCheck.getAttribute('action2'));
        //     //
        //     // let res = await fetch(url, {
        //     //     method: 'post',
        //     //     headers: {
        //     //         'Accept': 'application/json',
        //     //         'Content-Type': 'application/json',
        //     //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
        //     //     }
        //     // });
        //     //
        //     // return true;
        //
        // }));

    }
});
