import {
    changeStep, checkAge,
    checkTaBirthDateIPass,
    formatTelNumber,
    getCountryData,
    getNationalityData,
    getPackageData,
    showMultipleTitle, showTitle, validateAgeInPackage
} from "../form/productHelper";
import {
    $,
    $$,
    current_package,
    getCheckedCheckboxesFor,
    getRadioSelectedValue,
    getZipcodeData,
    locale,
    scrollToTargetAdjusted
} from "../helper";

import {removeError, showError, showFieldError, validateField} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {addDays, addYears, format, parseISO, subDays} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');
require('../lib/rSlider.min');


// validate.validators.idcard = function (value, options, key, attributes) {
//     for (var i = 0, sum = 0; i < 12; i++) {
//         sum += parseFloat(value.charAt(i)) * (13 - i);
//     }
//     const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
//     if (!result) {
//         return "^" + $('#data_1_fdNationalID').getAttribute('data-error-idcard')
//     }
// };

const constraints = {
    // fdTitle: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#title_wrapper').getAttribute('data-error-title')
    //     }
    // },
    // fdName: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdName').getAttribute('data-error-name')
    //     }
    // },
    // fdSurname: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdSurname').getAttribute('data-error-last_name')
    //     }
    // },
    // fdSex: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#male').getAttribute('data-error-sex')
    //     }
    // },
    // ctrl_document_type: "",
    // fdNationalID: function (value, attributes, attributeName, options, constraints) {
    //     if (attributes.ctrl_document_type === 'บัตรประจำตัวประชาชน') {
    //
    //         return {
    //             presence: {
    //                 allowEmpty: false,
    //                 message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
    //             },
    //             length: {
    //                 is: 13,
    //                 message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
    //             },
    //             format: {
    //                 pattern: /^[0-9]{13}$/,
    //                 message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
    //             },
    //             idcard: {
    //                 message: "^" + $('#fdNationalID').getAttribute('data-error-idcard')
    //             }
    //         }
    //
    //
    //     } else {
    //         return {
    //             presence: {
    //                 allowEmpty: false,
    //                 message: "^" + $('#fdNationalID').getAttribute('data-error-passport')
    //             }
    //         }
    //     }
    // },
    // fdEmail: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdEmail').getAttribute('data-error-email-require')
    //     },
    //     email: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdEmail').getAttribute('data-error-email-format')
    //     },
    // },
    // fdTelephone: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdTelephone').getAttribute('data-error-tel-require')
    //     },
    //     format: {
    //         pattern: /^[0-9]{9,15}$/,
    //         message: "^" + $('#fdTelephone').getAttribute('data-error-tel-format')
    //     }
    // },
    // fdAddr_Num: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddr_Num').getAttribute('data-error-address')
    //     }
    // },
    // fdAddr_District: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddr_District').getAttribute('data-error-district')
    //     }
    // },
    // ctrl_province: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#ctrl_province').getAttribute('data-error-province')
    //     }
    // },
    // fdAddr_PostCode: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddr_PostCode').getAttribute('data-error-postal_code')
    //     }
    // },
    //
    //
    // fdBenefit: "",
    // fdBenefit_name: function (value, attributes, attributeName, options, constraints) {
    //     if (attributes.fdBenefit !== 'other') return null;
    //     return {
    //         presence: {
    //             allowEmpty: false,
    //             message: "^" + $('#fdBenefit_name').getAttribute('data-error-beneficiary')
    //         }
    //     };
    // },
    // fdRelation: function (value, attributes, attributeName, options, constraints) {
    //     if (attributes.fdBenefit !== 'other') return null;
    //     return {
    //         presence: {
    //             allowEmpty: false,
    //             message: "^" + $('#fdRelation').getAttribute('data-error-relation')
    //         }
    //     };
    // },
    // fdRevenue: "",
    // fdTaxno: function (value, attributes, attributeName, options, constraints) {
    //     if (attributes.fdRevenue === 'N') return null;
    //     return {
    //         presence: {
    //             allowEmpty: false,
    //             message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-require')
    //         },
    //         length: {
    //             is: 13,
    //             message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-format')
    //         },
    //         format: {
    //             pattern: /^[0-9]{13}$/,
    //             message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-format')
    //         },
    //     };
    // },
    // ctrl_accept_insurance_term: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#ctrl_accept_insurance_term').getAttribute('data-error-insurance_term')
    //     }
    // },
    // ctrl_terms: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#ctrl_terms').getAttribute('data-error-terms')
    //     }
    // },
};


document.addEventListener("DOMContentLoaded", async () => {


    const package_data = await getPackageData(current_package);
    const country_data = await getCountryData();
    const nationality_data = await getNationalityData();
    const zipcode_data = await getZipcodeData();
    console.log(package_data);

    const defaultValue = Object.keys(package_data).reduce((returnValue, k) => {
        Object.keys(package_data[k].price).map((k1) => {

            Object.values(package_data[k].price[k1]).map((v) => {
                const digit = Math.pow(10, v.toString().length) / 10;

                if (v < returnValue.min) {
                    returnValue.min = Math.floor(v / (digit)) * (digit);
                }
                if (v > returnValue.max) {
                    returnValue.max = Math.ceil(v / (digit / 10)) * (digit / 10);
                }
            });
        });
        return returnValue;
    }, {min: 400, max: 110000})

    const budget_slider = new rSlider({
        target: '#ctrl_budget',
        values: {min: defaultValue.min, max: defaultValue.max},
        range: true,
        tooltip: true,
        scale: true,
        labels: false,
        step: 5000,
        set: [defaultValue.min, defaultValue.max]
    });


    let step = 1;
    let data = {
        fdTitle: "",
        fdName: "",
        fdSurname: "",
        fdSex: "",
        fdNationalID: "",
        fdAge: "",
        fdHBD: "1989-01-01",
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
        fdSendType: "",
        fdPayAMT: "",
        ctrl_province: "",
        ctrl_terms: "",
        ctrl_accept_insurance_term: "",
        ctrl_document_type: "",

        ctrl_buy_for: "",
        ctrl_carrier: "",
        ctrl_budget: "400,3500",
        ctrl_disease: [],
        ctrl_protection_start_date: ""
    };

    const hideRow = () => {
        $$("span[data-disease]").forEach($el => {
            switch ($el.getAttribute('data-disease')) {
                case 'd':
                    $el.closest("tr").style.display = "none";
                    break;
                default:
                    $el.style.display = "none";
                    break;
            }

        });
    }

    const showRow = () => {
        data.ctrl_disease.map(k => {
            switch (k) {
                case 'd':
                    $$("span[data-disease='d']").forEach($el => {
                        $el.closest("tr").style.display = "table-row";
                    });
                    break;
                default:
                    $$("span[data-disease='" + k + "']").forEach($el => {
                        $el.style.display = "block";
                    });
                    break;
            }
        })
    }

    const genPrice = () => {

        if (data.fdHBD) {
            recommendProduct(Object.keys(package_data)
                .filter(k => _.startsWith(k, current_package))
                .map(k => {
                    const pack = Object.keys(package_data[k].price).filter(ageRange => checkAge(data.fdHBD, ageRange))
                    const price = package_data[k].price[pack][data.ctrl_disease.join("")];
                    $(`strong[data-price-${k}]`).innerHTML = parseInt(price).toLocaleString();
                    return {package: k, price}
                }))

        }

        hideRow();
        showRow();
    }

    const recommendProduct = (dataRecommend) => {
        const [min,max] = data.ctrl_budget.split(",")
        const dataRecommendMax = dataRecommend.reduce((recPackage, v) => {
            if ((v.price <= max && v.price >= min)
                || v.price < min) {
                return v;
            }
            return recPackage;
        }, dataRecommend[0])

        console.log({dataRecommendMax})

        $$("th.recommendPackage,td.recommendPackage").forEach($el => {
            $el.classList.remove("recommendPackage");
        });

        $$("th[data-package='"+dataRecommendMax.package+"'],td[data-package='"+dataRecommendMax.package+"']").forEach($el => {
            $el.classList.add("recommendPackage");
        });


        // // console.log({data,dataRecommend})
        // let dataPriceMax;
        // const arrBudget = data.ctrl_budget.split(",")
        // const recommendMax = dataRecommend.filter(function (e) {
        //     if(e.price <= arrBudget[1] && e.price >= arrBudget[0]){
        //         return e;
        //     }
        // });
        //
        // console.log({recommendMax})
        // if(recommendMax.length > 0){
        //     let max = recommendMax[0].price;
        //
        //     for (let i = 1; i < recommendMax.length; ++i) {
        //
        //         if (recommendMax[i].price > max) {
        //             max = recommendMax[i].price;
        //             dataPriceMax = recommendMax[i]
        //         }
        //     }
        //
        // }else{
        //
        //     dataPriceMax = dataRecommend[0]
        //
        // }
        //
        //
        // console.log({dataPriceMax})

    }


    const getSelectedPrice = () => {

        const pack = Object.keys(package_data[data.fdPackage].price).filter(ageRange => checkAge(data.fdHBD, ageRange))
        return package_data[data.fdPackage].price[pack][data.ctrl_disease.join("")];
    }


    $$("input[name=fdSex]").forEach($el => {
        $el.addEventListener("change", function (e) {
            showTitle($el.value, data.fdAge)
        });
    });

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


    const $form = $('#step3');
    const allField = $form.querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
        });
    });

    $$(".checkbox_disease").forEach($el => {
        $el.addEventListener("change", function (e) {
            data = {
                ...data,
                ctrl_disease: getCheckedCheckboxesFor("ctrl_disease")
            }
            genPrice();
        });
    });

    const $btnGoto = $$('.btn-goto');
    $btnGoto.forEach($btn => {
        $btn.addEventListener("click", function (e) {
                e.preventDefault();
                const goToStep = parseInt($btn.getAttribute('data-step'));
                let status = false;

                if (step > goToStep) {
                    status = true;
                } else {
                    switch (parseInt(step)) {
                        case 1:
                            const validateResult = validateAgeInPackage(package_data, false);
                            status = validateResult.status;
                            if (validateResult.status) {
                                data = {
                                    ...data,
                                    ...validateResult.data,
                                    ctrl_buy_for: $("#ctrl_buy_for").value,
                                    ctrl_carrier: $("#ctrl_career").value,
                                    ctrl_budget: budget_slider.getValue(),
                                    ctrl_disease: getCheckedCheckboxesFor("ctrl_disease")
                                }

                                genPrice();
                                $('.btn-goto-step1').style.display = "none";
                            }
                            break;
                        case 2:
                            const fdPackage = $btn.getAttribute('data-package');
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

                            //Case web portal
                            let myEle = document.getElementById("portal_key");
                            if (myEle) {
                                let status_api = document.getElementById("status_api");
                                if (!status_api.value) {
                                    Swal.fire({
                                        title: 'Error!',
                                        text: 'Error : Portal keys. User not found.',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                    })
                                    status = false;
                                }
                            }

                            $('#disease_box').style.display = "none";
                            break;
                        case 3:

                            let address = ($('#ctrl_province').value).split('*');
                            data = {
                                ...data,
                                fdTitle: getRadioSelectedValue('fdTitle'),
                                fdName: $('#fdName').value,
                                fdSurname: $('#fdSurname').value,
                                fdSex: getRadioSelectedValue('fdSex'),
                                fdNationalID: $('#fdNationalID').value,
                                fdAddr_Num: $('#fdAddr_Num').value,
                                fdAddr_District: $('#fdAddr_District').value,
                                fdAddr_Amphur: $('#ctrl_province').value,
                                fdProvince: address[0],
                                fdAddr_PostCode: $('#fdAddr_PostCode').value,
                                fdEmail: $('#fdEmail').value,
                                fdTelephone: formatTelNumber($('#fdTelephone').value, iti.getSelectedCountryData()),
                                fdSendType: getRadioSelectedValue('fdSendType'),
                                fdBenefit: $('#fdBenefit').value,
                                fdBenefit_name: $('#fdBenefit_name').value,
                                fdRelation: $('#fdRelation').value,
                                fdRevenue: $('#fdRevenue').checked ? 'Y' : 'N',
                                fdTaxno: $('#fdTaxno').value,
                                fdPayAMT: getSelectedPrice(),
                                ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                                ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                                ctrl_document_type: $('#ctrl_document_type').value,
                                ctrl_province: $('#ctrl_province').value,
                                ctrl_protection_start_date: $('#ctrl_protection_start_date').value,
                            }

                            console.log(data)
                            const result = validate(data, constraints);
                            const $cite = $form.getElementsByTagName('cite');
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
                                let sb = ''

                                Object.keys(data).map(k => {
                                    sb += `<input type="hidden" name="${k}" value="${data[k]}">`;
                                });

                                const $ddlProvince = $('#ctrl_province');
                                const province = $ddlProvince.options[$ddlProvince.selectedIndex].text;
                                const selectedPackage = $('#step3 .form-head').innerHTML;

                                const $documentType = $('#ctrl_document_type');


                                const dob = format(parseISO(data.fdHBD), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdHBD), 'yyyy')) + 543) : format(parseISO(data.fdHBD), 'yyyy'))
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
                        <div><span>${$documentType.options[$documentType.selectedIndex].text} : </span><strong>${data.fdNationalID}</strong></div>
                        <div><span>${$('#ctrl_day').getAttribute('data-birthdate')} : </span><strong>${dob} (${data.fdAge} ${$('#ctrl_day').getAttribute('data-years-old')})</strong></div>
                        <div><span>${$('label[for=fdTelephone]').innerText} : </span><strong>${data.fdTelephone}</strong></div>
                        <div><span>${$('label[for=fdEmail]').innerText} : </span><strong>${data.fdEmail}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('label[for=fdAddr_Num]').innerText} : </span><strong>${data.fdAddr_Num} ${data.fdAddr_District} ${province} ${data.fdAddr_PostCode}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('#beneficiary_header').innerText} : </span><strong>${data.fdBenefit === 'other' ? data.fdBenefit_name + ' (' + data.fdRelation + ')' : data.fdBenefit}</strong></div>
                            <div><span>${$('#tax_deduction_title').innerText} : </span><strong>${data.fdRevenue === 'Y' ? $('#fdTaxno').getAttribute('data-yes') : $('#fdTaxno').getAttribute('data-no')}</strong></div>
                        ${data.fdRevenue === 'Y' ? '<div><span>' + $('label[for=fdTaxno]').innerText + ' : </span><strong>' + data.fdTaxno + '</strong></div>' : ''}
                        <div><span>${$('#receve_channel_title').innerText} : </span><strong>${data.fdSendType === 'P' ? $('label[for=ctrl_channel_post]').innerText : $('label[for=ctrl_channel_email]').innerText}</strong></div>
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
            }
        );
    })
});


