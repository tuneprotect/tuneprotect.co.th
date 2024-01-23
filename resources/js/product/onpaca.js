import {showFieldError, 
    showAcceptError, validateField} from "../validate_form";
import validate from "validate.js";
import {$, $$, current_package, fadeIn, fadeOut, getRadioSelectedValue, locale, scrollToTargetAdjusted} from "../helper"
import Swal from 'sweetalert2'
import {
    changeStep,
    checkAge,
    formatTelNumber,
    getPackageData,
    getSelectedPrice,
    showTitle,
    validateAgeInPackage, 
    validatePolicy, 
    validatePolicyPayment,
    formatInputFieldByLanguage,
    formatInputFieldOnlyNumberic,
    formatInputFieldOnlyCharecter,
} from "../form/productHelper";
import {format, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');

validate.validators.idcard = function (value, options, key, attributes) {
    for (var i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
    if (!result) {
        return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
    }
};
const constraints = {
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
        },
        format: formatInputFieldOnlyCharecter()
    },
    fdSurname: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdSurname').getAttribute('data-error-last_name')
        },
        format: formatInputFieldOnlyCharecter()
    },
    fdSex: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#male').getAttribute('data-error-sex')
        }
    },
    ctrl_document_type: "",
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
                },
                format: {
                    pattern: /^[A-Z0-9]*$/,
                    flags: "i",
                    message: "^" + $('#fdNationalID').getAttribute('data-error-nationalid-format')
                }
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
        },
        format: formatInputFieldByLanguage()
    },
    fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_District').getAttribute('data-error-district')
        },
        format: formatInputFieldByLanguage()
    },
    ctrl_province: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_province').getAttribute('data-error-province')
        }
    },
    fdAddr_PostCode: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_PostCode').getAttribute('data-error-postal_code')
        },
        format: formatInputFieldOnlyNumberic()
    },
    fdBenefit: "",
    fdBenefit_name: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdBenefit_name').getAttribute('data-error-beneficiary')
            },
            format: formatInputFieldByLanguage()
        };
    },
    fdRelation: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdRelation').getAttribute('data-error-relation')
            },
            format: formatInputFieldByLanguage()
        };
    },
    fdRevenue: "",
    fdTaxno: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdRevenue === 'N') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-require')
            },
            length: {
                is: 13,
                message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-format')
            },
            format: {
                pattern: /^[0-9]{13}$/,
                message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-format')
            },
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
    },
};

document.addEventListener("DOMContentLoaded", async () => {

    const package_data = await getPackageData(current_package);

    let Keys = "";
    let myEle = document.getElementById("portal_key");
    if(myEle){
        Keys= myEle.value;
        let status_api = document.getElementById("status_api");
        if(!status_api.value)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Error : Portal keys. User not found.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    let step = 1;
    let data = {
        fdKeys : Keys,
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
        fdSendType: "",
        fdPayAMT: "",
        ctrl_province: "",
        ctrl_terms: "",
        ctrl_accept_insurance_term: "",
        ctrl_document_type: "",

        fdIsAnotherCompany: "",
        fdAnotherPolicyAll: "",
        fdAnotherPolicyPriceAll: "",
        fdAnotherCompanyName1: "",
        fdAnotherCompanyName2: "",
        fdAnotherCompanyName3: "",
        fdAnotherPolicyPrice1: "",
        fdAnotherPolicyPrice2: "",
        fdAnotherPolicyPrice3: ""
    };
    const validateAcceptStep1 = () => {
       
        //$('cite.step1_error').innerHTML = "";
        let chkAccept = $('#ctrl_accept_step1').checked ? true : false;
         return chkAccept;
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

    const $form1 = $('#step1');
    const allField1 = $form1.querySelectorAll('input');
    allField1.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['ctrl_day', 'ctrl_month', 'ctrl_year'].includes(field.id)) {
                validateAgeInPackage(package_data);
            }
        });
    });


    const $form3 = $('#step3');
    const allField3 = $form3.querySelectorAll('input,select,textarea');
    allField3.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['fdName', 'fdSurname', 'fdNationalID'].includes(field.id)) {
                validatePolicy(e.target, data.fdPackage);
            }
        });
    });

    const genItemList = () => {

        let index = 0;
        const itemList = [];

        if (data.fdHBD) {

            Object.keys(package_data)
                .filter(k => _.startsWith(k, current_package))
                .map(k => {
                    const pack = Object.keys(package_data[k].price).filter(ageRange => checkAge(data.fdHBD, ageRange))
                    const price = parseInt(package_data[k].price[pack]).toLocaleString();
                    const planCode = Object.keys(package_data)[index];

                    const item = {
                        item_id: "",
                        item_name: "",
                        price: "",
                    };

                    item.item_id = "PAChoiceCare_" + planCode;
                    item.item_name = "PAChoiceCare_" + planCode;
                    item.price = price;

                    itemList.push(item);
                    index++;
                });
        }

        if ($('#controller').value === 'product') 
        {
            gtag("event",  "view_item",  {
                "currency": "THB",
                "items": itemList
            });
        }
    }

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
                            const validateResult = validateAgeInPackage(package_data);
                            const chkAccept = validateAcceptStep1();
                            if(!chkAccept){
                                showAcceptError($('#ctrl_accept_step1').getAttribute('data-error-accept-step1'));
                                status = false;
                                break;
                            }
                            status = validateResult.status;
                            genItemList();
                            if (validateResult.status) {
                                data = {...data, ...validateResult.data}
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

                                const selectPrice = getSelectedPrice(data.fdHBD, fdPackage, package_data);

                                if ($('#controller').value === 'product') 
                                {
                                    gtag("event",  "add_to_cart",  {
                                        "currency": "THB",
                                        "value": selectPrice,
                                        "items": [{
                                          "item_id": "PAChoiceCare_" + fdPackage,
                                          "item_name": "PAChoiceCare_" + fdPackage,
                                          "price": selectPrice,
                                        }]
                                    });
                                }

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
                            if(myEle){
                                let status_api = document.getElementById("status_api");
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
                                ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                                ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                                ctrl_document_type: $('#ctrl_document_type').value,
                                ctrl_province: $('#ctrl_province').value,

                                fdIsAnotherCompany: getRadioSelectedValue('fdIsAnotherCompany'),
                                fdAnotherPolicyAll: $('#fdAnotherPolicyAll').value,
                                fdAnotherPolicyPriceAll: $('#fdAnotherPolicyPriceAll').value,
                                fdAnotherCompanyName1: $('#fdAnotherCompanyName1').value,
                                fdAnotherCompanyName2: $('#fdAnotherCompanyName2').value,
                                fdAnotherCompanyName3: $('#fdAnotherCompanyName3').value,
                                fdAnotherPolicyPrice1: $('#fdAnotherPolicyPrice1').value,
                                fdAnotherPolicyPrice2: $('#fdAnotherPolicyPrice2').value,
                                fdAnotherPolicyPrice3: $('#fdAnotherPolicyPrice3').value,

                                fdPayAMT: getSelectedPrice(data.fdHBD, data.fdPackage, package_data)
                            }
                            data = {
                                ...data,
                                fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                            }

                            if ($('#controller').value === 'product') 
                            {
                                gtag("event",  "begin_checkout",  {
                                    "currency": "THB",
                                    "value": data.fdPayAMT,
                                    "items": [{
                                      "item_id": "PAChoiceCare_" + data.fdPackage,
                                      "item_name": "PAChoiceCare_" + data.fdPackage,
                                      "price": data.fdPayAMT,
                                    }]
                                });
                            }

                            const result = validate(data, constraints);
                            const $cite = $form3.getElementsByTagName('cite');
                            for (let i = 0, len = $cite.length; i !== len; ++i) {
                                $cite[0].parentNode.removeChild($cite[0]);
                            }

                            $form3.querySelectorAll('.controls-wrapper').forEach(($el) => {
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
