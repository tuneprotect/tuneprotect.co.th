import {
    changeStep,
    checkTaBirthDate,
    formatTelNumber,
    getCountryData,
    getPackageData,
    showMultipleTitle, validatePolicy, validatePolicyPayment
} from "../form/productHelper";
import {$, $$, current_package, getRadioSelectedValue, getZipcodeData, locale, scrollToTargetAdjusted} from "../helper";

import {removeError, showError, showFieldError, validateField} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {addYears, differenceInDays, format, parseISO, subDays} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');

validate.validators.idcard = function (value, options, key, attributes) {
    for (var i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
    if (!result) {
        return "^" + $('#data_1_fdNationalID').getAttribute('data-error-idcard')
    }
};

const step1Constraints = {
    fdFromDate: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdFromDate').getAttribute('data-error')
        }
    },
    fdToDate: function (value, attributes, attributeName, options, constraints) {
        if (attributes.ctrl_travel_type === 'annual') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdToDate').getAttribute('data-error')
            }
        };
    },
    fdDestTo: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdDestTo').getAttribute('data-error')
        }
    }

};

const step3Constraints = {
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

const profileConstraints = {
    fdSex: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_male').getAttribute('data-error-sex')
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
            message: "^" + $('#data_1_fdName').getAttribute('data-error-name')
        }
    },
    fdSurname: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdSurname').getAttribute('data-error-last_name')
        }
    },
    fdHBD: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_ctrl_day').getAttribute('data-error-format')
        }
    },
    fdNationalID: function (value, attributes, attributeName, options, constraints) {
        if (attributes.ctrl_document_type === 'บัตรประจำตัวประชาชน') {

            return {
                presence: {
                    allowEmpty: false,
                    message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-idcard')
                },
                length: {
                    is: 13,
                    message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-idcard')
                },
                format: {
                    pattern: /^[0-9]{13}$/,
                    message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-idcard')
                },
                idcard: {
                    message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-idcard')
                }
            }
        } else {
            return {
                presence: {
                    allowEmpty: false,
                    message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-passport')
                }
            }
        }
    },
    fdEmail: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdEmail').getAttribute('data-error-email-require')
        },
        email: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdEmail').getAttribute('data-error-email-format')
        },
    },
    fdTelephone: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdTelephone').getAttribute('data-error-tel-require')
        },
        format: {
            pattern: /^[0-9]{9,15}$/,
            message: "^" + $('#data_1_fdTelephone').getAttribute('data-error-tel-format')
        }
    },
    fdAddr_Num: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdAddr_Num').getAttribute('data-error-address')
        }
    },
    fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdAddr_District').getAttribute('data-error-district')
        }
    },
    ctrl_province: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_ctrl_province').getAttribute('data-error-province')
        }
    },
    fdAddr_PostCode: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdAddr_PostCode').getAttribute('data-error-postal_code')
        }
    },
    fdBenefit: "",
    fdBenefit_name: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#data_1_fdBenefit_name').getAttribute('data-error-beneficiary')
            }
        };
    },
    fdRelation: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#data_1_fdRelation').getAttribute('data-error-relation')
            }
        };
    }
};

const zoneCode = {
    "WW": 'WRW',
    "AS": 'WRW',
    "AE": 'ASN'
}

const getSelectedPrice = (packageCode, package_data) => {
    const code = packageCode.substring(0, 7);
    const sub_code = packageCode.substring(7);
    return package_data[code].price[sub_code].price;
}


const genPrice = (package_data, subpackage, fdFromDate, fdToDate) => {

    const allPack = Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package + subpackage))

    if (document.body.clientWidth > 767) {
        $$('#table-detail td[data-package],#table-detail th[data-package]').forEach($el => {
            if (allPack.includes($el.getAttribute("data-package"))) {
                $el.style.display = "table-cell";
            } else {
                $el.style.display = "none";
            }
        });
    } else {
        $$('#table-detail thead a[data-package]').forEach($el => {
            if ($el.getAttribute("data-package").startsWith('ONTA' + subpackage)) {
                $el.style.display = "inline-flex";
            } else {
                $el.style.display = "none";
            }
        });
    }

    let startDate = parseISO(fdFromDate);
    let endDate = parseISO(fdToDate);
    const day = differenceInDays(endDate, startDate) + 1;

    allPack.map(k => {
        const pack = Object.keys(package_data[k].price).filter(subPackage => {
            const dateRange = (package_data[k].price[subPackage].day).split('-');
            return day >= dateRange[0] && day <= dateRange[1];
        })

        $$('[data-sub-package]').forEach($el => {
            $el.setAttribute('data-sub-package', pack)
        });

        $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price[pack].price).toLocaleString();
    });
}

const changeDestinationOption = (countryData, zone) => {

    let sb = `<option value="">${$('#fdDestTo').getAttribute('data-please-select')}</option>`;

    countryData.sort((a, b) => (a[locale] > b[locale]) ? 1 : ((b[locale] > a[locale]) ? -1 : 0))
        .map(v => {
            if (v.zone === zone) {
                sb += `<option value="${v.code}">${v[locale]}</option>`;
            }
        });

    $('#fdDestTo').innerHTML = sb;

}

document.addEventListener("DOMContentLoaded", async () => {

    const package_data = await getPackageData(current_package);
    const countryData = await getCountryData();
    const zipcode_data = await getZipcodeData();

    let Keys = "";
    let myEle = document.getElementById("portal_key");
    if (myEle) {
        Keys = myEle.value;
        let status_api = document.getElementById("status_api");
        if (!status_api.value) {
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
        fdKeys: Keys,
        fdPayAMT: "",
        fdFromDate: "",
        fdToDate: "",
        fdDestTo: "",
        ctrl_terms: "",
        fdSendType: "",
        ctrl_accept_insurance_term: "",
        ctrl_travel_type: "",
        profile: []
    };
    let iti = {};
    let $dataSubPackage;

    changeDestinationOption(countryData, 'WW');

    $('#ctrl_travel_type').addEventListener('change', (e) => {

        let display = 'block'

        if (e.target.value === 'annual') {
            display = "none";
        }

        $$("#fdToDate,#fdDestTo").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display;
        });

    })

    $('#ctrl_sub_package').addEventListener('change', (e) => {
        changeDestinationOption(countryData, e.target.value);
    })

    $('#ctrl_no_of_insured').addEventListener('change', (e) => {

        for (let i = 1; i <= e.target.value; i++) {
            $(`#form_profile_${i}`).style.display = "block";
        }
        for (let i = (parseInt(e.target.value) + 1); i < 10; i++) {
            $(`#form_profile_${i}`).style.display = "none";
        }
    });

    for (let i = 1; i < 10; i++) {
        $$(`input[name=data_${i}_fdSex]`).forEach($el => {
            $el.addEventListener("change", function (e) {
                showMultipleTitle($el.value, i)
            });
        });

        $(`input[name=data_${i}_fdAddr_PostCode]`).addEventListener("change", function (e) {
            const value = e.target.value;
            if (value.length === 5) {
                const location_data = zipcode_data[value];
                if (location_data !== undefined) {
                    let items = ['<option value="">' + $(`#data_1_ctrl_province`).getAttribute('data-please-select') + '</option>'];

                    location_data.map(v => {
                        items.push(`<option value="${v.district.code}">${v.district.locales[locale]}, ${v.province.locales[locale]}</option>`);
                    });
                    $(`#data_${i}_ctrl_province`).innerHTML = items.join('');
                }
            }
        });

        $(`#data_${i}_ctrl_day`).addEventListener("change", function (e) {
            if (e.target.value.length === 1) {
                $(`#data_${i}_ctrl_day`).value = '0' + e.target.value;
            }
        });

        iti[i] = intlTelInput($(`#data_${i}_fdTelephone`), {
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

    }


    const allField = $('#step3').querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, profileConstraints);
            for (let i = 1; i <=  $('#ctrl_no_of_insured').value; i++) {
                if ([`data_${i}_fdName`, `data_${i}_fdSurname`, `data_${i}_fdNationalID`].includes(field.id)) {
                    validatePolicy(e.target, $dataSubPackage,$('#fdFromDate')?.value);
                }
            }

        });
    });


    const $btnGoto = $$('.btn-goto');
    $btnGoto.forEach($btn => {
        $btn.addEventListener("click", function (e) {

            e.preventDefault();

            const goToStep = parseInt($btn.getAttribute('data-step'));
            let status = false;
            let result
            if (step > goToStep) {
                status = true;
            } else {
                switch (parseInt(step)) {
                    case 1:
                        status = true;
                        data = {
                            ...data,
                            ctrl_travel_type: $('#ctrl_travel_type').value,
                            fdDestTo: $('#ctrl_travel_type').value === 'annual' ? zoneCode[$('#ctrl_sub_package').value] : $('#fdDestTo').value,
                            fdFromDate: $('#fdFromDate').value,
                            fdToDate: $('#fdToDate').value,
                        }
                        result = validate(data, step1Constraints);
                        removeError($('#step1'));
                        if (result) {
                            showError($('#step1'), result);
                            return false
                        }

                        let fromDate = ($('#fdFromDate').value).split('/');
                        let toDate;

                        if ($('#ctrl_travel_type').value === 'annual') {
                            const lastDate = subDays(addYears(parseISO(`${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`), 1), 1);
                            toDate = (format(lastDate, 'dd/MM/yyyy')).split('/');
                        } else {
                            toDate = ($('#fdToDate').value).split('/');
                        }

                        data = {
                            ...data,
                            fdFromDate: `${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`,
                            fdToDate: `${toDate[2]}-${toDate[1]}-${toDate[0]}`,
                        }

                        genPrice(package_data, $('#ctrl_sub_package').value, data.fdFromDate, data.fdToDate, $('#ctrl_travel_type').value);

                        break;
                    case 2:
                        const fdPackage = $btn.getAttribute('data-package') + $btn.getAttribute('data-sub-package');
                        $dataSubPackage = fdPackage;
                        $('#form-head').innerHTML = $btn.getAttribute('data-plan');
                        if (fdPackage) {
                            data = {
                                ...data,
                                fdPackage
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

                        break;
                    case 3:
                        let profileData = []

                        status = true;

                        removeError($('#step3'));

                        for (let i = 1; i <= $('#ctrl_no_of_insured').value; i++) {
                            let address = ($(`#data_${i}_ctrl_province`).value).split('*');
                            let dateResult = checkTaBirthDate(i);

                            let valCheck = false;
                            valCheck = validatePolicyPayment($(`#data_${i}_fdNationalID`).value,data.fdPackage,$('#fdFromDate')?.value);
                            if(!valCheck)
                            {
                                status = false;
                                return false;
                            }


                            const currentProfile = {
                                fdSex: getRadioSelectedValue(`data_${i}_fdSex`),
                                fdTitle: getRadioSelectedValue(`data_${i}_fdTitle`),
                                fdName: $(`#data_${i}_fdName`).value,
                                fdSurname: $(`#data_${i}_fdSurname`).value,
                                fdNationalID: $(`#data_${i}_fdNationalID`).value,
                                fdHBD: dateResult?.data?.fdHBD || "",
                                fdAge: dateResult?.data?.fdAge || "",
                                fdEmail: $(`#data_${i}_fdEmail`).value,
                                fdTelephone: formatTelNumber($(`#data_${i}_fdTelephone`).value, iti[i].getSelectedCountryData()),
                                fdAddr_Num: $(`#data_${i}_fdAddr_Num`).value,
                                fdAddr_District: $(`#data_${i}_fdAddr_District`).value,
                                fdAddr_Amphur: $(`#data_${i}_ctrl_province`).value,
                                fdAddr_PostCode: $(`#data_${i}_fdAddr_PostCode`).value,
                                ctrl_province: $(`#data_${i}_ctrl_province`).value,
                                fdProvince: address[0],
                                fdBenefit: $(`#data_${i}_fdBenefit`).value,
                                fdBenefit_name: $(`#data_${i}_fdBenefit_name`).value,
                                fdRelation: $(`#data_${i}_fdRelation`).value,
                            };

                            profileData.push(currentProfile);

                            result = validate(currentProfile, profileConstraints);

                            if (result) {
                                Object.keys(result).map(k => {
                                    let $elm = $(`[name=data_${i}_${k}]`);

                                    if ($elm) {
                                        showFieldError($elm, result[k])
                                    }
                                });
                            }
                        }

                        data = {
                            ...data,
                            fdPayAMT: getSelectedPrice(data.fdPackage, package_data, data.fdFromDate, data.fdToDate),
                            fdSendType: getRadioSelectedValue('fdSendType'),
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            profile: profileData
                        }
                        data = {
                            ...data,
                            fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                        }
                        result = validate(data, step3Constraints);

                        if (result) {
                            showError($('#step3'), result);
                        }

                        if ($('.controls-wrapper.error')) {
                            scrollToTargetAdjusted($('.controls-wrapper.error'));
                            return false;
                        }


                        const selectedPackage = $('#step3 .form-head').innerHTML;

                        fromDate = format(parseISO(data.fdFromDate), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdFromDate), 'yyyy')) + 543) : format(parseISO(data.fdFromDate), 'yyyy'))
                        toDate = format(parseISO(data.fdToDate), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdToDate), 'yyyy')) + 543) : format(parseISO(data.fdToDate), 'yyyy'))

                        const $destFrom = $('#fdDestFrom');
                        const $destTo = $('#fdDestTo');
                        const $subPackage = $('#ctrl_sub_package');
                        const $summary_section = $('#summary_section');

                        let sb = `<h3 class="text-primary">${$summary_section.getAttribute('data-insurance_data')}</h3><br/>
                        <div class="two-col">
                            <div><span>${$summary_section.getAttribute('data-plan')} : </span><strong>${selectedPackage}</strong></div>
                            <div><span>${$('#receve_channel_title').innerText} : </span><strong>${data.fdSendType === 'P' ? $('label[for=ctrl_channel_post]').innerText : $('label[for=ctrl_channel_email]').innerText}</strong></div>
                            ${$('#ctrl_travel_type').value === 'annual'
                            ? `<div><span>${$('label[for=ctrl_sub_package]').innerText} : </span><strong>${$subPackage.options[$subPackage.selectedIndex].text}</strong></div>`
                            : `<div><span>${$('label[for=fdDestTo]').innerText} : </span><strong>${$destTo.options[$destTo.selectedIndex].text}</strong></div>`}
                            <div><span>${$('label[for=fdFromDate]').innerText} : </span><strong>${fromDate}</strong></div>
                            <div><span>${$('label[for=fdToDate]').innerText} : </span><strong>${toDate}</strong></div>
                            <div><span>${$summary_section.getAttribute('data-price-perperson')} : </span><strong>${parseFloat(data.fdPayAMT).toLocaleString()} ${$summary_section.getAttribute('data-baht')}</strong></div>
                            <div><span>${$summary_section.getAttribute('data-total-price')} : </span><strong>${parseFloat(data.fdPayAMT * data.profile.length).toLocaleString()} ${$summary_section.getAttribute('data-baht')}</strong></div>

                        </div>
                        <br/>`;

                        data.profile.map((v, i) => {
                            let dob = format(parseISO(v.fdHBD), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(v.fdHBD), 'yyyy')) + 543) : format(parseISO(v.fdHBD), 'yyyy'))
                            const $ddlProvince = $(`#data_${i + 1}_ctrl_province`);
                            const province = $ddlProvince.options[$ddlProvince.selectedIndex].text;
                            sb += `<h3 class="text-primary">${$summary_section.getAttribute('data-profile_data')} ${i + 1}</h3><br/>
                        <div class="two-col">
                            <div><span>${$('label[for=data_1_fdName]').innerText} : </span><strong>${$('label[for=title_' + v.fdTitle + '_1_]').innerText} ${v.fdName} ${v.fdSurname}</strong></div>
                            <div><span>${$('label[for=data_1_fdSex]').innerText} : </span><strong>${v.fdSex === 'M' ? $('label[for=data_1_male]').innerText : $('label[for=data_1_female]').innerText}</strong></div>
                            <div><span>${$('label[for=data_1_fdNationalID]').innerText} : </span><strong>${v.fdNationalID}</strong></div>
                            <div><span>${$('#data_1_ctrl_day').getAttribute('data-birthdate')} : </span><strong>${dob} (${v.fdAge} ${$('#data_1_ctrl_day').getAttribute('data-years-old')})</strong></div>
                            <div><span>${$('label[for=data_1_fdTelephone]').innerText} : </span><strong>${v.fdTelephone}</strong></div>
                            <div><span>${$('label[for=data_1_fdEmail]').innerText} : </span><strong>${v.fdEmail}</strong></div>
                            <div class="controls-wrapper full no-lable"><span>${$('label[for=data_1_fdAddr_Num]').innerText} : </span><strong>${v.fdAddr_Num} ${v.fdAddr_District} ${province} ${v.fdAddr_PostCode}</strong></div>
                            <div class="controls-wrapper full no-lable"><span>${$('#beneficiary_header').innerText} : </span><strong>${v.fdBenefit === 'other' ? v.fdBenefit_name + ' (' + v.fdRelation + ')' : v.fdBenefit} </strong></div>
                        </div><br/>`;
                        });

                        sb += `<input type="hidden" name="send_data" value='${JSON.stringify(data)}'>`;

                        $summary_section.innerHTML = sb;
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
