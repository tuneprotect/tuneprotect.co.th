import {
    changeStep,
    formatTelNumber,
    getPackageData,
    getSelectedPrice,
    showTitle,
    validateAgeInPackage
} from "../form/productHelper";
import {
    $,
    $$,
    current_package,
    fadeIn,
    fadeOut,
    getCheckedCheckboxesFor,
    getRadioSelectedValue,
    locale, scrollToTargetAdjusted
} from "../helper";

import {showFieldError, validateField} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {format, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');

validate.validators.idcard = function (value, options, key, attributes) {

    if (!value) {
        return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
    }

    if (value.length !== 13) {
        return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
    }

    for (var i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
    if (!result) {
        return "^" + $('#fdNationalID').getAttribute('data-error-idcard');
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
        }
    },
    fdSurname: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdSurname').getAttribute('data-error-last_name')
        }
    },
    fdNationalID: {
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
    }
};

document.addEventListener("DOMContentLoaded", async () => {

    const package_data = await getPackageData(current_package);
    let step = 1;
    let data = {
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
        ctrl_terms: ""
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

    $$("input[name=fdQuestion1]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (getRadioSelectedValue('fdQuestion1') === 'Y') {
                fadeIn($('#ctrl_question_1_other'));
            } else {
                fadeOut($('#ctrl_question_1_other'));
            }
        });
    });

    $$("input[name=fdQuestion2]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (getRadioSelectedValue('fdQuestion2') === 'Y') {
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
                        const validateResult = validateAgeInPackage(package_data);
                        status = validateResult.status;
                        if (validateResult.status) {
                            data = {...data, ...validateResult.data};
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

                        break;
                    case 3:

                        let address = ($('#ctrl_province').value).split('*');

                        data = {
                            ...data,
                            fdSex: getRadioSelectedValue('fdSex'),
                            fdTitle: getRadioSelectedValue('fdTitle'),
                            fdName: $('#fdName').value,
                            fdSurname: $('#fdSurname').value,
                            fdNationalID: $('#fdNationalID').value,
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
                            fdRevenue: $('#fdRevenue').checked ? 'Y' : 'N',
                            fdTaxno: $('#fdTaxno').value,
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                            ctrl_province: $('#ctrl_province').value,
                            fdPayAMT: getSelectedPrice(data.fdHBD, data.fdPackage, package_data)
                        }


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
                        <div><span>${$('#ctrl_day').getAttribute('data-birthdate')} : </span><strong>${dob} (${data.fdAge} ${$('#ctrl_day').getAttribute('data-years-old')})</strong></div>
                        <div><span>${$('label[for=fdTelephone]').innerText} : </span><strong>${data.fdTelephone}</strong></div>
                        <div><span>${$('label[for=fdEmail]').innerText} : </span><strong>${data.fdEmail}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('label[for=fdAddr_Num]').innerText} : </span><strong>${data.fdAddr_Num} ${data.fdAddr_District} ${province} ${data.fdAddr_PostCode}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('#beneficiary_header').innerText} : </span><strong>${data.fdBenefit === 'other' ? data.fdBenefit_name + ' (' + data.fdRelation + ')' : data.fdBenefit}</strong></div>
                            <div><span>${$('#tax_deduction_title').innerText} : </span><strong>${data.fdRevenue === 'Y' ? $('#fdTaxno').getAttribute('data-yes') : $('#fdTaxno').getAttribute('data-no')}</strong></div>
                        ${data.fdRevenue === 'Y' ? '<div><span>' + $('label[for=fdTaxno]').innerText + ' : </span><strong>' + data.fdTaxno + '</strong></div>' : ''}
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

