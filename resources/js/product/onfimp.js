import {
    changeStep,
    formatTelNumber,
    getPackageData,
    showTitleOnly,
    validatePolicy
} from "../form/productHelper";
import {
    $,
    $$, calculateAge,
    current_package,
    fadeIn,
    fadeOut,
    getRadioSelectedValue, getZipcodeData,
    locale, scrollToTargetAdjusted
} from "../helper";

import {removeError, showError, showFieldError, validateField} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {addDays, addYears, format, isValid, parseISO, subDays} from "date-fns";
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
    fdAddr_PostCode: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_PostCode').getAttribute('data-error-postal_code')
        }
    },
    fdBenefit: "",
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
    },
    fdAddress2_Home: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_Home').getAttribute('data-error-home')
        }
    }
    ,fdAddress2_Village: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_Village').getAttribute('data-error-village')
        }
    },
    fdAddress2_Alley: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_Alley').getAttribute('data-error-alley')
        }
    },
    fdAddress2_Road: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_Road').getAttribute('data-error-road')
        }
    },
    fdAddress2_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_District').getAttribute('data-error-district')
        }
    },
    fdAddress2_PostCode: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_PostCode').getAttribute('data-error-postal_code')
        }
    },
    fdAddress2_ctrl_province: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddress2_ctrl_province').getAttribute('data-error-province')
        }
    }
    // ,
    // fdHBD: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#ctrl_day').getAttribute('data-error-format')
    //     }
    // }
};

const checkTaBirthDate = () => {
    // $$('.date-input .controls-wrapper').forEach(el => {
    //     el.classList.remove('error');
    // });
    //
    // $('.date-input cite').innerHTML = "";

    const dd = $('#ctrl_day').value,
        mm = $('#ctrl_month').value;
    let yy = $('#ctrl_year').value;

    if (dd === '' || mm === '' || yy === '') {
        showDateError($('#ctrl_day').getAttribute('data-error-format'));
        return {status: false};
    }
    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showDateError($('#ctrl_day').getAttribute('data-error-format'));
        return {status: false};
    }

    const age = calculateAge(birthday);

    return {
        status: true, data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}

const showDateError = (message) => {
    const $cite = document.createElement('cite');
    $cite.innerHTML = message;
    $(`.date-input`).appendChild($cite);
    $$(`.date-input .controls-wrapper`).forEach(el => {
        el.classList.add('error');
    });
}

// const showDateError = (message) => {
//     $('.date-input cite').innerHTML = message;
//     $$('.date-input .controls-wrapper').forEach(el => {
//         el.classList.add('error');
//     });
// }

const getSelectedPricePackage = (packageCode, package_data) => {
    return package_data[packageCode].price;
}


document.addEventListener("DOMContentLoaded", async () => {
    const package_data = await getPackageData(current_package);

    $$("select[name=ctrl_fire_building]").forEach($el => {
        $el.addEventListener("change", function (e) {
            changeTextPremium(e.target.value);
        });
    });

    const changeTextPremium = (packageSelect) => {
        let select = $('#ctrl_fire_building');
        let text = select.options[select.selectedIndex].text;
        $('#ctrl_fire_building_text').value = text;


        const allPack = Object.keys(package_data)
            .filter(k => _.startsWith(k,packageSelect))

        if(document.body.clientWidth > 767) {
            $$('#table-detail td[data-package],#table-detail th[data-package]').forEach($el => {
                if (allPack.includes($el.getAttribute("data-package"))) {
                    $el.style.display = "table-cell";
                } else {
                    $el.style.display = "none";
                }
            });
        }else{
            $$('#table-detail thead a[data-package]').forEach($el => {
                if ($el.getAttribute("data-package").startsWith(packageSelect )) {
                    $el.style.display = "inline-flex";
                } else {
                    $el.style.display = "none";
                }
            });
        }

        allPack.map(k => {
            $('#fdPremium').value = parseInt(package_data[k].plan.COV1).toLocaleString();
            $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price).toLocaleString();
            $(`th[data-cover-cov1]`).innerHTML = $('#cover_fire_'+packageSelect).value;
        });

    }

    changeTextPremium("ONFIMP1");

    const zipcode_data = await getZipcodeData();
    $(`input[name=fdAddress2_PostCode]`).addEventListener("change", function (e) {
        const value = e.target.value;
        if (value.length === 5) {
            const location_data = zipcode_data[value];
            if (location_data !== undefined) {
                let items = ['<option value="">' + $(`#fdAddress2_ctrl_province`).getAttribute('data-please-select') + '</option>'];

                location_data.map(v => {
                    items.push(`<option value="${v.district.code}">${v.district.locales[locale]}, ${v.province.locales[locale]}</option>`);
                });
                $(`#fdAddress2_ctrl_province`).innerHTML = items.join('');
            }
        }
    });

    const $address_dup = $('#fdAddressDup');
    if ($address_dup) {
        $address_dup.addEventListener("click", function (e) {
            if ($address_dup.checked) {
                $('#fdAddress2_Village').value = $('#fdAddr_Num').value;
                $('#fdAddress2_District').value = $('#fdAddr_District').value;
                $('#fdAddress2_PostCode').value = $('#fdAddr_PostCode').value;

                const value = $('#fdAddress2_PostCode').value;
                if (value.length === 5) {
                    const location_data = zipcode_data[value];
                    if (location_data !== undefined) {
                        let items = ['<option value="">' + $(`#ctrl_province`).getAttribute('data-please-select') + '</option>'];

                        location_data.map(v => {
                            items.push(`<option value="${v.district.code}">${v.district.locales[locale]}, ${v.province.locales[locale]}</option>`);
                        });
                        $(`#fdAddress2_ctrl_province`).innerHTML = items.join('');
                    }
                }
                $('#fdAddress2_ctrl_province').value = $('#ctrl_province').value;

            }
        });
    }

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

    $$("input[name=fdSex]").forEach($el => {
        $el.addEventListener("change", function (e) {
            showTitleOnly($el.value)
            // showTitle($el.value, data.fdAge)
        });
    });

    $(`#ctrl_day`).addEventListener("change", function (e) {
        if (e.target.value.length === 1) {
            $(`#ctrl_day`).value = '0' + e.target.value;
        }
    });


    // const $form = $('#step3');
    // const allField = $form.querySelectorAll('input,select,textarea');
    // allField.forEach(field => {
    //     field.addEventListener("change", function (e) {
    //         validateField(this, constraints);
    //         if (['fdName', 'fdSurname', 'fdNationalID'].includes(field.id)) {
    //             validatePolicy(e.target, data.fdPackage,$('#fdFromDate')?.value);
    //         }
    //     });
    // });

    const step1Constraints = {
        fdFromDate: {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdFromDate').getAttribute('data-error')
            }
        }
    };

    //บัตรประชาชน = ID01 ,
    //บัตรประจำตัวผู้เสียภาษี = ID07 ,
    //หนังสือเดินทาง/อื่นๆ = ID04
    //ถ้าส่งค่า "ID07" ต้องส่งค่า TagName  ดังนี้
    let fdIDTYPE = "ID04";
    if ($('#ctrl_document_type') && $('#ctrl_document_type').value === 'บัตรประจำตัวประชาชน') {
        fdIDTYPE = "ID07";
    }

    let step = 1;
    let data = {
        fdKeys : Keys,
        fdIDYPE: fdIDTYPE,
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
        fdFromDate: "",
        fdETime: "16:30",
        fdXTime: "16:30",
        ctrl_province: "",
        ctrl_accept_insurance_term: "",
        ctrl_terms: "",
        fdBuilding: "",
        fdOwner: "",
        fdAddress2_Home: "",
        fdAddress2_Village: "",
        fdAddress2_Alley: "",
        fdAddress2_Road: "",
        fdAddress2_District: "",
        fdAddress2_PostCode: "",
        fdAddress2_ctrl_province: "",
        fdAddress2_Province: "",
        fdAccept_insurance_term: "",
        fdTerms: "",
        fdAddress2_Amphoe:""
    };

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
                        status = true;
                        data = {
                            ...data,
                            fdFromDate: $('#fdFromDate')?.value
                        }
                        let result1 = validate(data, step1Constraints);
                        // removeError($('#step1'));
                        if (result1) {
                            showError($('#step1'), result1);
                            status = false;
                            break;
                        }
                        else
                        {
                            let fromDate = ($('#fdFromDate').value).split('/');
                            let fdFromDate = `${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`;
                            data = {
                                ...data,
                                fdFromDate
                            }
                        }

                        //Case web portal
                        var myEle = document.getElementById("portal_key");
                        if (myEle) {
                            var status_api = document.getElementById("status_api");
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

                        break;
                    case 2:
                        const fdPackage = $btn.getAttribute('data-package');

                        $('#form-head').innerHTML = $btn.getAttribute('data-plan');


                        if (fdPackage) {
                            data = {
                                ...data,
                                fdPackage
                            }
                            showTitleOnly('')
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

                        status = true;
                        removeError($('#step3'));

                        let address = ($('#ctrl_province').value).split('*');
                        let address2 = ($('#fdAddress2_ctrl_province').value).split('*');
                        let dateResult = checkTaBirthDate();
                        data = {
                            ...data,
                            fdSex: getRadioSelectedValue('fdSex'),
                            fdTitle: getRadioSelectedValue('fdTitle'),
                            fdName: $('#fdName').value,
                            fdSurname: $('#fdSurname').value,
                            fdNationalID: $('#fdNationalID').value,
                            fdHBD: dateResult?.data?.fdHBD || "",
                            fdAge: dateResult?.data?.fdAge || "",
                            fdEmail: $('#fdEmail').value,
                            fdTelephone: formatTelNumber($('#fdTelephone').value, iti.getSelectedCountryData()),
                            fdAddr_Num: $('#fdAddr_Num').value,
                            fdAddr_District: $('#fdAddr_District').value,
                            fdAddr_Amphur: $('#ctrl_province').value,
                            fdProvince: address[0],
                            fdAddr_PostCode: $('#fdAddr_PostCode').value,
                            fdSendType: getRadioSelectedValue('fdSendType'),
                            fdBenefit: $('#fdBenefit').value,
                            fdBenefit_name: $('#fdBenefit_name').value,
                            fdRelation: $('#fdRelation').value,
                            fdRevenue: $('#fdRevenue').checked ? 'Y' : 'N',
                            fdTaxno: $('#fdTaxno').value,
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                            ctrl_province: $('#ctrl_province').value,
                            fdPayAMT: getSelectedPricePackage(data.fdPackage, package_data),
                            fdBuilding: $('#ctrl_fire_building').value,
                            fdOwner: $('#ctrl_fire_owner').value,
                            fdAddress2_Home: $('#fdAddress2_Home').value,
                            fdAddress2_Village: $('#fdAddress2_Village').value,
                            fdAddress2_Alley: $('#fdAddress2_Alley').value,
                            fdAddress2_Road: $('#fdAddress2_Road').value,
                            fdAddress2_District: $('#fdAddress2_District').value,
                            fdAddress2_PostCode: $('#fdAddr_PostCode').value,
                            fdAddress2_ctrl_province: $('#fdAddress2_ctrl_province').value,
                            fdAddress2_Province: address2[0],
                            fdAccept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            fdTerms: $('#ctrl_terms').checked ? true : undefined,
                            fdAddress2_Amphoe: $('#fdAddress2_ctrl_province').value
                        }

                        const result = validate(data, constraints);
                        if (result) {
                            Object.keys(result).map(k => {
                                let $elm = $(`[name=${k}]`);
                                // console.log(k);
                                showFieldError($elm, result[k])
                            });
                        }
                        if (result) {
                            showError($('#step3'), result);
                        }

                        console.log(data);

                        if ($('.controls-wrapper.error')) {
                            scrollToTargetAdjusted($('.controls-wrapper.error'));
                            status = false;
                            return false;
                        }

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
                        <div class="controls-wrapper full no-lable"><span>${$('#ctrl_fire_building_sum').value} : </span>
                        <strong>${$('#ctrl_fire_building_text').value}</strong>
                        </div>
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
                        </div>` + sb;

                        status = true;
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

