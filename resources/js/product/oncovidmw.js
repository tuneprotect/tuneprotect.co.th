import {
    changeStep, checkAge, formatInputFieldOnlyEnglish,
    formatTelNumber, genPrice, getCountryData, getNationalityData,
    getPackageData,
    getSelectedPrice,
    showTitle,
    validateAgeInPackage, validatePolicy, validatePolicyPayment, validateQuestion
} from "../form/productHelper";
import {
    $,
    $$, calculateAge,
    current_package,
    fadeIn,
    fadeOut,
    getCheckedCheckboxesFor,
    getRadioSelectedValue,
    locale, scrollToTargetAdjusted
} from "../helper";

import {removeError, showDateError, showError, showFieldError, validateField} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {format, isValid, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');

// validate.validators.idcard = function (value, options, key, attributes) {
//
//     if (!value) {
//         return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
//     }
//
//     if (value.length !== 13) {
//         return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
//     }
//
//     for (var i = 0, sum = 0; i < 12; i++) {
//         sum += parseFloat(value.charAt(i)) * (13 - i);
//     }
//     const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
//     if (!result) {
//         return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
//     }
// };

validate.validators.idcard = function (value, options, key, attributes) {
    for (var i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
    if (!result) {
        return "^" + $('#fdNationalID').getAttribute('data-error-idcard')
    }
};


const constraints = {
    fdSex: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#male').getAttribute('data-error-sex')
        }
    },
    fdTitle: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#title_wrapper').getAttribute('data-error-title')
        }
    },
    fdName: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdName').getAttribute('data-error-name')
        },format: formatInputFieldOnlyEnglish()
    },
    fdSurname: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdSurname').getAttribute('data-error-last_name')
        },format: formatInputFieldOnlyEnglish()
    },
    fdNationalID: function (value, attributes, attributeName, options, constraints) {
        if (attributes.ctrl_document_type === 'บัตรประจำตัวประชาชน') {

            return {
                presence: {
                    allowEmpty: false,
                    message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
                },
                length: {
                    is: 13,
                    message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
                },
                format: {
                    pattern: /^[0-9]{13}$/,
                    message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
                },
                idcard: {
                    message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
                }
            }
        } else {
            return {
                presence: {
                    allowEmpty: false,
                    message: "^" + $('#fdNationalID').getAttribute('data-error-passport')
                }
                ,format: formatInputFieldOnlyEnglish()
            }
        }
    },
    fdEmail: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdEmail').getAttribute('data-error-email-require')
        },
        email: {
            allowEmpty: false,
            message: "^" + $('#fdEmail').getAttribute('data-error-email-format')
        },
    },
    fdTelephone: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdTelephone').getAttribute('data-error-tel-require')
        },
        format: {
            pattern: /^[0-9]{9,15}$/,
            message: "^" + $('#fdTelephone').getAttribute('data-error-tel-format')
        }
    },
    fdAddr_Num: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_Num').getAttribute('data-error-address')
        }
    },
    fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_District').getAttribute('data-error-district')
        }
    },
    ctrl_province: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_province').getAttribute('data-error-province')
        }
    },
    fdNationality: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdNationality').getAttribute('data-error-nationality')
        }
    },
    fdAddr_PostCode: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_PostCode').getAttribute('data-error-postal_code')
        }
    },
    fdBenefit: "",
    fdQuestion1: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_question_1_N').getAttribute('data-error-q1')
        }
    },
    fdQuestion1_1: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion1 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion1_1').getAttribute('data-error-q1-1')
            }
        };
    },
    fdQuestion1_2: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion1 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion1_2').getAttribute('data-error-q1-2')
            },
            numericality : {
                message: "^" + $('#fdQuestion1_2').getAttribute('data-error-not-number')
            }
        };
    },
    fdQuestion2: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_question_2_N').getAttribute('data-error-q2')
        }
    },
    fdQuestion2_1: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion2 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#ctrl_question_2_choice').getAttribute('data-error-q2-1')
            }
        };
    },
    ctrl_question_2_specify: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion2_1 === undefined || !attributes.fdQuestion2_1.includes('other')) return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#ctrl_question_2_specify').getAttribute('data-error-q2-2')
            }
        };
    },
    fdBenefit_name: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdBenefit_name').getAttribute('data-error-beneficiary')
            }
        };
    },
    fdRelation: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdRelation').getAttribute('data-error-relation')
            }
        };
    },
    ctrl_accept_insurance_term: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_accept_insurance_term').getAttribute('data-error-insurance_term')
        }
    },
    ctrl_terms: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_terms').getAttribute('data-error-terms')
        }
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    const country_data = await getCountryData();
    let package_data = await getPackageData(current_package);
    const nationality_data = await getNationalityData();

    // let package_data_all = await getPackageData(current_package);
    // let package_data = [];
    // const allPack = Object.keys(package_data_all);
    // allPack.map(k => {
    //     // console.log(allPack);
    //     // console.log(k);
    //     // console.log(package_data[k]);
    //     if(k === $('#agentCode').value)
    //     {
    //         package_data = package_data_all[k];
    //     }
    // });
    // console.log(current_package);
    // console.log(package_data);

    // const allPack = Object.keys(package_data)
    //     .filter(k => _.startsWith(k,"ONCOVIDMW_" +$('#agentCode').value))
    //
    // if(document.body.clientWidth > 767) {
    //     $$('#table-detail td[data-package],#table-detail th[data-package]').forEach($el => {
    //         if (allPack.includes($el.getAttribute("data-package"))) {
    //             $el.style.display = "table-cell";
    //         } else {
    //             $el.style.display = "none";
    //         }
    //     });
    // }else{
    //     $$('#table-detail thead a[data-package]').forEach($el => {
    //         if ($el.getAttribute("data-package").startsWith("ONCOVIDMW_" +$('#agentCode').value )) {
    //             $el.style.display = "inline-flex";
    //         } else {
    //             $el.style.display = "none";
    //         }
    //     });
    // }
    //
    // allPack.map(k => {
    //     // $('#fdPremium').value = parseInt(package_data[k].plan.COV1).toLocaleString();
    //     $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price).toLocaleString();
    //     // $(`th[data-cover-cov1]`).innerHTML = $('#cover_fire_'+packageSelect).value;
    // });
    // LAO,MMR,KHM,VNM
    let sb1 = `<option value="">${$('#fdDestFrom').getAttribute('data-please-select')}</option>`;
    country_data.sort((a, b) => (a['en'] > b['en']) ? 1 : ((b['en'] > a['en']) ? -1 : 0))
        .map(v => {
            if (v.code === 'LAO'|| v.code === 'MMR' || v.code === 'KHM'|| v.code === 'VNM')
            {
                sb1 += `<option value="${v.code}">${v['en']}</option>`;
            }
        });
    $('#fdDestFrom').innerHTML = sb1;
    let fdNationalityText = "";

    $$("select[id=fdNationality]").forEach($el => {
        $el.addEventListener("change", function (e) {
            let select = $('#fdNationality');
            fdNationalityText = select.options[select.selectedIndex].text;
            //console.log(fdNationalityText);
        });
    });
   

    let Keys = "";
    var myEle = document.getElementById("portal_key");
    if(myEle){
        Keys= myEle.value;
        var status_api = document.getElementById("status_api");
        if(!status_api.value)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Error : Portal keys. User not found.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            status = false;
        }
    }

    let member_id = "";
    var myEle = document.getElementById("member_id");
    if(myEle){
        member_id= myEle.value;
        var status_api = document.getElementById("status_api");
        if(!status_api.value)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Error : Member ID. User not found.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            status = false;
        }
    }
    let promocode = "";
    let step = 1;
    let data = {
        rpcNumber : "191",
        fdMember_ID : member_id,
        fdKeys : Keys,
        fdPromoCode : promocode,
        fdTitle: "",
        fdName: "",
        fdSurname: "",
        fdSex: "",
        fdNationalID: "",
        fdAge: "",
        fdHBD: "",
        fdAddr_Num: "",
        fdAddr_District: "",
        fdAddr_Amphur: "",
        fdProvince: "",
        fdAddr_PostCode: "",
        fdEmail: "",
        fdTelephone: "",
        fdPackage: "",
        fdBenefit: "",
        fdBenefit_name: "",
        fdRelation: "",
        fdRevenue: "",
        fdTaxno: "",
        fdPayAMT: "",
        fdQuestion1: "",
        fdQuestion1_1: "",
        fdQuestion1_2: "",
        fdQuestion2: "",
        fdQuestion2_1: [],
        ctrl_question_2_specify: "",
        ctrl_province: "",
        ctrl_terms: "",
        fdApiPackage:"",
        fdNationality:"",
        fdFromDate:""
    };

    const iti = intlTelInput($('#fdTelephone'), {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            fetch("https://ipinfo.io", {
                mode: 'no-cors' // 'cors' by default
            }).then(function (resp) {
                let countryCode = (resp && resp.country) ? resp.country : "th";
                success(countryCode);
            });
        }
    });

     // LAO,MMR,KHM,VNM
     let sb2 = `<option value="">${$('#fdNationality').getAttribute('data-please-select')}</option>`;
     country_data.sort((a, b) => (a['en'] > b['en']) ? 1 : ((b['en'] > a['en']) ? -1 : 0))
         .map(v => {
             if (v.code === 'LAO'|| v.code === 'MMR'||v.code === 'KHM' || v.code === 'VNM')
             {
                 sb2 += `<option value="${v.code}">${v['en']}</option>`;
             }
         });
     $('#fdNationality').innerHTML = sb2;

    /*
    let nationality_option = `<option value="">${$('#fdNationality').getAttribute('data-please-select')}</option>`;
    Object.keys(nationality_data).map(v => {
        nationality_option += `<option value="${v}">${v}</option>`;
    });

    $('#fdNationality').innerHTML = nationality_option;
*/
    $$("input[name=fdQuestion1]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (getRadioSelectedValue('fdQuestion1') === 'Y') {
                $('.product-oncovidmw-stepper-4').attr("style", "cursor: not-allowed; pointer-events: none;");
                fadeIn($('#ctrl_question_1_other'));
            } else {
                fadeOut($('#ctrl_question_1_other'));
            }
        });
    });

    $$("input[name=fdQuestion2]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (getRadioSelectedValue('fdQuestion2') === 'Y') {
                $('.product-oncovidmw-stepper-4').attr("style", "cursor: not-allowed; pointer-events: none;");
                fadeIn($('#ctrl_question_2_choice'));
            } else {
                fadeOut($('#ctrl_question_2_choice'));
            }
        });
    });

    $$("#ctrl_question_2_other").forEach($el => {
        $el.addEventListener("change", function (e) {
            if ($('#ctrl_question_2_other').checked) {
                fadeIn($('#ctrl_question_2_other_wrapper'));
            } else {
                fadeOut($('#ctrl_question_2_other_wrapper'));
            }
        });
    });

    $$("input[name=fdSex]").forEach($el => {
        $el.addEventListener("change", function (e) {
            showTitle($el.value, data.fdAge)
        });
    });

    const $form = $('#step3');
    const allField = $form.querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['fdName', 'fdSurname', 'fdNationalID'].includes(field.id)) {
                validatePolicy(e.target, data.fdPackage);
            }
        });
    });

    const allFieldQ = $form.querySelectorAll('input');
    allFieldQ.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['ctrl_question_1_Y', 'ctrl_question_2_Y','ctrl_question_1_N','ctrl_question_2_N'].includes(field.id)) {
                validateQuestion(e.target);
            }
        });
    });

    const $btnGoto = $$('.btn-goto');
    $btnGoto.forEach($btn => {

        $btn.addEventListener("click", function (e) {

            e.preventDefault();

            const goToStep = parseInt($btn.getAttribute('data-step'));
            let status = false;
            let $cite
            if (step > goToStep) {
                status = true;
            } else {
                switch (parseInt(step)) {
                    case 1:
                        const validateResult = validateAgeInPackage(package_data);
                        status = validateResult.status;
                        if (validateResult.status) {
                            data = {...data, ...validateResult.data};
                        }
                        else
                        {
                            return false;
                        }

                        data = {
                            ...data,
                            fdFromDate: $('#fdFromDate').value,
                            fdDestFrom: $('#fdDestFrom').value
                        }

                        if($('#fdFromDate').value === '')
                        {
                                Swal.fire({
                                    title: 'Warning!',
                                    text: $('label[for=fdFromDateError]').innerText,
                                    icon: 'info',
                                    confirmButtonText: 'OK'
                                })
                                return false;
                        }

                        if($('#fdDestFrom').value === '')
                        {
                            Swal.fire({
                                title: 'Warning!',
                                text: $('label[for=fdDestFromError]').innerText,
                                icon: 'info',
                                confirmButtonText: 'OK'
                            })
                            return false;
                        }

                        var myEle = document.getElementById("portal_key");
                        if(myEle){
                            var status_api = document.getElementById("status_api");
                            if(!status_api.value)
                            {
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Error : Portal keys. User not found.',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                })
                                status = false;
                            }
                        }

                        console.log(data);

                        break;

                    case 2:
                        const fdPackage = "MWASEP22,MWBSEP22";//$btn.getAttribute('data-package');

                        $('#form-head').innerHTML = $btn.getAttribute('data-plan');


                        if (fdPackage) {
                            data = {
                                ...data,
                                fdPackage
                            }
                            showTitle('', data.fdAge)
                            status = true;
                        } else {
                            Swal.fire({
                                title: 'Error!',
                                text: 'Please choose package',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })
                            status = false;
                        }

                        break;
                    case 3:
                        let valCheck = false;
                        valCheck = validatePolicyPayment($('#fdNationalID').value,data.fdPackage,$('#fdFromDate')?.value);
                        if(!valCheck)
                        {
                            status = false;
                            return false;
                        }

                        let address = ($('#ctrl_province').value).split('*');

                        data = {
                            ...data,
                            fdSex: getRadioSelectedValue('fdSex'),
                            fdTitle: getRadioSelectedValue('fdTitle'),
                            fdName: $('#fdName').value,
                            fdSurname: $('#fdSurname').value,
                            fdNationalID: $('#fdNationalID').value,
                            fdNationality: $("#fdNationality").value,
                            fdEmail: $('#fdEmail').value,
                            fdTelephone: formatTelNumber($('#fdTelephone').value, iti.getSelectedCountryData()),
                            fdAddr_Num: $('#fdAddr_Num').value,
                            fdAddr_District: $('#fdAddr_District').value,
                            fdAddr_Amphur: $('#ctrl_province').value,
                            fdProvince: address[0],
                            fdAddr_PostCode: $('#fdAddr_PostCode').value,
                            fdQuestion1: getRadioSelectedValue('fdQuestion1'),
                            fdQuestion1_1: $('#fdQuestion1_1').value,
                            fdQuestion1_2: $('#fdQuestion1_2').value,
                            fdQuestion2: getRadioSelectedValue('fdQuestion2'),
                            fdQuestion2_1: getCheckedCheckboxesFor('fdQuestion2_1'),
                            ctrl_question_2_specify: $('#ctrl_question_2_specify').value,
                            fdSendType: getRadioSelectedValue('fdSendType'),
                            fdBenefit: $('#fdBenefit').value,
                            fdBenefit_name: $('#fdBenefit_name').value,
                            fdRelation: $('#fdRelation').value,
                            fdRevenue: 'N',
                            fdTaxno: '',
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                            ctrl_province: $('#ctrl_province').value,
                            //fdPayAMT: getSelectedPrice(data.fdHBD, data.fdPackage, package_data)
                            fdPayAMT: '990'
                        }
                        data = {
                            ...data,
                            fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                        }
                        const result = validate(data, constraints);
                        $cite = $form.getElementsByTagName('cite');
                        for (let i = 0, len = $cite.length; i !== len; ++i) {
                            $cite[0].parentNode.removeChild($cite[0]);
                        }

                        $form.querySelectorAll('.controls-wrapper').forEach(($el) => {
                            $el.classList.remove('error')
                        });

                        if (result) {
                            Object.keys(result).map(k => {
                                let $elm = $(`[name=${k}]`);
                                showFieldError($elm, result[k])
                            });

                            scrollToTargetAdjusted($('.controls-wrapper.error'));
                            status = false;
                        } else {


                                let fromDate = ($('#fdFromDate').value).split('/');
                                let fdFromDate = `${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`;
                                data = {
                                    ...data,
                                    fdFromDate
                                }


                                console.log(data);


                            let sb = '';
                            Object.keys(data).map(k => {

                                if (Array.isArray(data[k])) {
                                    data[k].map((v, i) => {
                                        sb += `<input type="hidden" name="${k}[${i}]" value="${v}">`;
                                    })
                                } else {
                                    sb += `<input type="hidden" name="${k}" value="${data[k]}">`;
                                }


                            });

                            const $ddlProvince = $('#ctrl_province');
                            const province = $ddlProvince.options[$ddlProvince.selectedIndex].text;
                            const selectedPackage = $('#step3 .form-head').innerHTML;

                            const dob = format(parseISO(data.fdHBD), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdHBD), 'yyyy')) + 543) : format(parseISO(data.fdHBD), 'yyyy'))

                            const disease = data.fdQuestion2_1.map(v => {
                                if (v === 'other') {
                                    return $("#ctrl_question_2_specify").value;
                                } else {
                                    return v;
                                }
                            });

                            const $summary_section = $('#summary_section');

                            $summary_section.innerHTML = `<h3 class="text-primary">${$summary_section.getAttribute('data-insurance_data')}</h3><br/>
                    <div class="two-col">
                        <div><span>${$summary_section.getAttribute('data-plan')} : </span><strong>${selectedPackage}</strong></div>
                        <div><span>${$summary_section.getAttribute('data-price')} : </span><strong>${parseFloat(data.fdPayAMT).toLocaleString()} ${$summary_section.getAttribute('data-baht')}</strong></div>

                    </div>
                    <br/>
                    <h3 class="text-primary">${$summary_section.getAttribute('data-profile_data')}</h3><br/>
                    <div class="two-col">
                        <div><span>${$('label[for=fdName]').innerText} : </span><strong>${$('label[for=title_' + data.fdTitle + ']').innerText} ${data.fdName} ${data.fdSurname}</strong></div>
                        <div><span>${$('label[for=fdSex]').innerText} : </span><strong>${data.fdSex === 'M' ? $('label[for=male]').innerText : $('label[for=female]').innerText}</strong></div>
                        <div><span>${$('label[for=fdNationalID]').innerText} : </span><strong>${data.fdNationalID}</strong></div>
                        <div><span>${$('label[for=fdNationality]').innerText} : </span><strong>${fdNationalityText}</strong></div>
                        <div><span>${$('#ctrl_day').getAttribute('data-birthdate')} : </span><strong>${dob} (${data.fdAge} ${$('#ctrl_day').getAttribute('data-years-old')})</strong></div>
                        <div><span>${$('label[for=fdTelephone]').innerText} : </span><strong>${data.fdTelephone}</strong></div>
                        <div><span>${$('label[for=fdEmail]').innerText} : </span><strong>${data.fdEmail}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('label[for=fdAddr_Num]').innerText} : </span><strong>${data.fdAddr_Num} ${data.fdAddr_District} ${province} ${data.fdAddr_PostCode}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('#beneficiary_header').innerText} : </span><strong>${data.fdBenefit === 'other' ? data.fdBenefit_name + ' (' + data.fdRelation + ')' : data.fdBenefit}</strong></div>
                        <div><span>${$('#receve_channel_title').innerText} : </span><strong>${data.fdSendType === 'P' ? $('label[for=ctrl_channel_post]').innerText : $('label[for=ctrl_channel_email]').innerText}</strong></div>
                        ${data.fdQuestion1 === 'Y' ? `<div><span>${$('#q1').getAttribute('data-summary')} : </span><strong>${data.fdQuestion1_1}</strong></div>` : "" }
                        ${data.fdQuestion1 === 'Y' ? `<div><span>${$('label[for=fdQuestion1_2]').innerText} : </span><strong>${ parseFloat(data.fdQuestion1_2).toLocaleString()  + ' ' + $summary_section.getAttribute('data-baht')}</strong></div>` : "" }
                        <div class="controls-wrapper full no-lable"><span>${$('#q2').getAttribute('data-summary')} : </span><strong>${data.fdQuestion2 === 'Y' ? disease.join(",") : $('#q2').getAttribute('data-none')}</strong></div>
                    </div>` + sb;
                            status = true;
                        }
                        break;
                }
            }
            if (status) {
                changeStep(step, goToStep);
                step = goToStep;
            }
        });

    })
});

