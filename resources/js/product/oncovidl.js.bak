import {
    changeStep,
    formatTelNumber,
    getNationalityData,
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
            message: "^" + $('#fdNationalID').getAttribute('data-error-passport')
        }
    },
    fdNationality: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdNationality').getAttribute('data-error-nationality')
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
        format: {
            pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
            flags: "i",
            message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
        }

    },
    fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_District').getAttribute('data-error-district')
        },
        format: {
            pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
            flags: "i",
            message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
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
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
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
            numericality: {
                message: "^" + $('#fdQuestion1_2').getAttribute('data-error-not-number')
            }
        };
    },
    fdQuestion2: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_question_1_N').getAttribute('data-error-q1')
        }
    },
    fdQuestion2_1: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion2 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion2_1').getAttribute('data-error-q2-1')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
            }
        };
    },
    fdQuestion2_2: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion2 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion2_2').getAttribute('data-error-q2-2')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
            }
        };
    },
    fdQuestion2_3: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion2 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion2_3').getAttribute('data-error-q2-3')
            }
        };
    },
    fdQuestion2_4: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion2 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion2_4').getAttribute('data-error-q2-4')
            }
        };
    },
    fdQuestion3: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_question_1_N').getAttribute('data-error-q1')
        }
    },
    fdQuestion3_1: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion3 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion3_1').getAttribute('data-error-q3-1')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
            }
        };
    },
    fdQuestion3_2: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion3 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion3_2').getAttribute('data-error-q3-2')
            },
            numericality: {
                message: "^" + $('#fdQuestion1_2').getAttribute('data-error-not-number')
            }
        };
    },
    fdQuestion4: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_question_1_N').getAttribute('data-error-q1')
        }
    },
    fdQuestion4_1: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion4 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion4_1').getAttribute('data-error-q4-1')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
            }
        };
    },
    fdQuestion4_2: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion4 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion4_2').getAttribute('data-error-q4-2')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
            }
        };
    },
    fdQuestion4_3: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdQuestion4 !== 'Y') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdQuestion4_3').getAttribute('data-error-q4-3')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
            }
        };
    },
    fdBenefit_name: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdBenefit_name').getAttribute('data-error-beneficiary')
            },
            format: {
                pattern: /^[a-zA-Z0-9 !@#$&()\\-`.+,/\"]*$/,
                flags: "i",
                message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
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
    const nationality_data = await getNationalityData();
    let step = 1;
    let data = {
        fdTitle: "",
        fdName: "",
        fdSurname: "",
        fdSex: "",
        fdNationalID: "",
        fdNationality: "",
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
        fdQuestion2_1: "",
        fdQuestion2_2: "",
        fdQuestion2_3: "",
        fdQuestion2_4: "",
        fdQuestion3: "",
        fdQuestion3_1: "",
        fdQuestion3_2: "",
        fdQuestion4: "",
        fdQuestion4_1: "",
        fdQuestion4_2: "",
        fdQuestion4_3: "",
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

    let nationality_option = `<option value="">${$('#fdNationality').getAttribute('data-please-select')}</option>`;

    Object.keys(nationality_data).map(v => {
        nationality_option += `<option value="${v}">${v}</option>`;
    });

    $('#fdNationality').innerHTML = nationality_option;

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
                fadeIn($('#ctrl_question_2_other'));
            } else {
                fadeOut($('#ctrl_question_2_other'));
            }
        });
    });

    $$("input[name=fdQuestion3]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (getRadioSelectedValue('fdQuestion3') === 'Y') {
                fadeIn($('#ctrl_question_3_other'));
            } else {
                fadeOut($('#ctrl_question_3_other'));
            }
        });
    });


    $$("input[name=fdQuestion4]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (getRadioSelectedValue('fdQuestion4') === 'Y') {
                fadeIn($('#ctrl_question_4_other'));
            } else {
                fadeOut($('#ctrl_question_4_other'));
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
                            fdQuestion2_1: $('#fdQuestion2_1').value,
                            fdQuestion2_2: $('#fdQuestion2_2').value,
                            fdQuestion2_3: $('#fdQuestion2_3').value,
                            fdQuestion2_4: $('#fdQuestion2_4').value,
                            fdQuestion3: getRadioSelectedValue('fdQuestion3'),
                            fdQuestion3_1: $('#fdQuestion3_1').value,
                            fdQuestion3_2: $('#fdQuestion3_2').value,
                            fdQuestion4: getRadioSelectedValue('fdQuestion4'),
                            fdQuestion4_1: $('#fdQuestion4_1').value,
                            fdQuestion4_2: $('#fdQuestion4_2').value,
                            fdQuestion4_3: $('#fdQuestion4_3').value,
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
                        <div><span>${$('label[for=fdNationality]').innerText} : </span><strong>${data.fdNationality}</strong></div>
                        <div><span>${$('#ctrl_day').getAttribute('data-birthdate')} : </span><strong>${dob} (${data.fdAge} ${$('#ctrl_day').getAttribute('data-years-old')})</strong></div>
                        <div><span>${$('label[for=fdTelephone]').innerText} : </span><strong>${data.fdTelephone}</strong></div>
                        <div><span>${$('label[for=fdEmail]').innerText} : </span><strong>${data.fdEmail}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('label[for=fdAddr_Num]').innerText} : </span><strong>${data.fdAddr_Num} ${data.fdAddr_District} ${province} ${data.fdAddr_PostCode}</strong></div>
                        <div class="controls-wrapper full no-lable"><span>${$('#beneficiary_header').innerText} : </span><strong>${data.fdBenefit === 'other' ? data.fdBenefit_name + ' (' + data.fdRelation + ')' : data.fdBenefit}</strong></div>
                            <div><span>${$('#tax_deduction_title').innerText} : </span><strong>${data.fdRevenue === 'Y' ? $('#fdTaxno').getAttribute('data-yes') : $('#fdTaxno').getAttribute('data-no')}</strong></div>
                        ${data.fdRevenue === 'Y' ? '<div><span>' + $('label[for=fdTaxno]').innerText + ' : </span><strong>' + data.fdTaxno + '</strong></div>' : ''}
                        <div><span>${$('#receve_channel_title').innerText} : </span><strong>${data.fdSendType === 'P' ? $('label[for=ctrl_channel_post]').innerText : $('label[for=ctrl_channel_email]').innerText}</strong></div>
                        ${data.fdQuestion1 === 'Y' ? `<div><span>${$('#q1').getAttribute('data-summary')} : </span><strong>${data.fdQuestion1_1}</strong></div>` : ""}
                        ${data.fdQuestion1 === 'Y' ? `<div><span>${$('label[for=fdQuestion1_2]').innerText} : </span><strong>${parseFloat(data.fdQuestion1_2).toLocaleString() + ' ' + $summary_section.getAttribute('data-baht')}</strong></div>` : ""}
                        <div class="controls-wrapper full no-lable"><span>${$('#q2').getAttribute('data-summary')} : </span><strong>${data.fdQuestion2 === 'Y' ? data.fdQuestion2_1 + '  ' + data.fdQuestion2_2 : $('#q1').getAttribute('data-none')}</strong></div>
                        ${data.fdQuestion2 === 'Y' ? '<div><span>' + $('label[for=fdQuestion2_3]').innerText + ' : </span><strong>' + format(parseISO(data.fdQuestion2_3), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdQuestion2_3), 'yyyy')) + 543) : format(parseISO(data.fdQuestion2_3), 'yyyy')) + '</strong></div><div><span>' + $('label[for=fdQuestion2_4]').innerText + ' : </span><strong>' + format(parseISO(data.fdQuestion2_4), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdQuestion2_4), 'yyyy')) + 543) : format(parseISO(data.fdQuestion2_4), 'yyyy')) + '</strong></div>' : ''}
                        ${data.fdQuestion3 === 'Y' ? `<div><span>${$('#q3').getAttribute('data-summary')} : </span><strong>${data.fdQuestion3_1}</strong></div>` : ""}
                        ${data.fdQuestion3 === 'Y' ? `<div><span>${$('label[for=fdQuestion3_2]').innerText} : </span><strong>${parseFloat(data.fdQuestion3_2).toLocaleString() + ' ' + $summary_section.getAttribute('data-baht')}</strong></div>` : ""}
                        <div class="controls-wrapper full no-lable"><span>${$('#q4').getAttribute('data-summary')} : </span><strong>${data.fdQuestion4 === 'Y' ? data.fdQuestion4_1 : $('#q1').getAttribute('data-none')}</strong></div>
                        ${data.fdQuestion4 === 'Y' ? '<div><span>' + $('label[for=fdQuestion4_2]').innerText + ' : </span><strong>' + data.fdQuestion4_2 + '</strong></div><div><span>' + $('label[for=fdQuestion4_3]').innerText + ' : </span><strong>' + data.fdQuestion4_3 + '</strong></div>' : ''}
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

