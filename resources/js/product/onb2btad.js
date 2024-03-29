import {
    changeStep,
    B2BTADCheckBirthDate,
    formatTelNumber,
    getPackageData,
    getProvinceDataWithOutPrefix,
    showMultipleTitle, validatePolicy, validatePolicyPayment
} from "../form/productHelper";
import { $, $$, current_package, getRadioSelectedValue, getZipcodeData, locale, scrollToTargetAdjusted } from "../helper";

import { removeError, showError, showFieldError, validateField, validateAcceptStep1, showAcceptError } from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import { addDays, differenceInDays, format, parseISO } from "date-fns";
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
    // fdToDate: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdToDate').getAttribute('data-error')
    //     }
    // },
    fdToDate: function (value, attributes, attributeName, options, constraints) {
        if (attributes.ctrl_travel_type === 'annual') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdToDate').getAttribute('data-error')
            }
        };
    },
    fdDestFrom: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdDestFrom').getAttribute('data-error')
        }
    },
    fdDestTo:{
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
            };
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


const getSelectedPrice = (packageCode, package_data) => {
    const code = packageCode.substring(0, 12);
    const sub_code = packageCode.substring(12);
    return package_data[code].price["01"].price;
}

const genPrice = (package_data, fdFromDate, fdToDate) => {

    let startDate = parseISO(fdFromDate);
    let endDate = parseISO(fdToDate);    

    const day = differenceInDays(endDate, startDate) + 1;

    $('#days').value = day;

    const allPack = Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package))

    $('#all_pack').value = allPack;

    allPack.map(k => {
        const pack = Object.keys(package_data[k].price).filter(subPackage => {
            const dateRange = (package_data[k].price[subPackage].day).split('-');
            if(dateRange.length === 1)
            {
                return day >= dateRange[0] && day <= dateRange[0];
            }
            else
            {
                return day >= dateRange[0] && day <= dateRange[1];
            }
        })
        $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price["01"].price).toLocaleString();
        
    });
    let lang = $('#lang').value
    let pack_code = $('#sub_code').value
    let planname = "";
    if(lang==="th"){
        if(pack_code === "ONB2BTADRT_1"){
            $('#txtHead').innerHTML = "แบบไป-กลับ";
            planname = "ทูน โดเมสติก อีซี่ แบบไป-กลับ";
        }else{
            $('#txtHead').innerHTML = "แบบเที่ยวเดียว";
            planname = "ทูน โดเมสติก อีซี่ แบบเที่ยวเดียว";
        }
    }else{
        if(pack_code === "ONB2BTADRT_1"){
            $('#txtHead').innerHTML = "Round Trip";
            planname = "Tune Domestic Easy Round Trip";
        }else{
            $('#txtHead').innerHTML = "One Way Trip";
            planname = "Tune Domestic Easy One Way Trip";
        }
    }

    $('#hdftitle').value = planname;
    if (document.body.clientWidth > 767) {
        $$('#table-detail td[data-package],#table-detail th[data-package],.choose-plan-mobile').forEach($el => {
            if ($el.getAttribute("data-package")==$('#sub_code').value) {
                $el.style.display = "table-cell";
            } else {
                $el.style.display = "none";
            }
        });
    } else {
        $$('#table-detail th[data-package]').forEach($el => {
            if ($el.getAttribute("data-package").startsWith($('#sub_code').value)) {
                $el.style.display = "";
            } else {
                $el.style.display = "none";
            }
        });
        $$('#table-detail td[data-package]').forEach($el => {
            if ($el.getAttribute("data-package").startsWith($('#sub_code').value)) {
                $el.style.display = "block";
            } else {
                $el.style.display = "none";
            }
        });

        $$('#table-detail thead a.btn-choose-plan').forEach($el => {
            if ($el.getAttribute("data-package").startsWith($('#sub_code').value)) {
                $el.style.display = "block";
            } else {
                $el.style.display = "none";
            }
        });
        // $$('#table-detail tbody td').forEach($el => {
        //     if ($el.getAttribute("data-package").startsWith("ONB2BTADRT")) {
        //         $el.style.display = "block";
        //     } 
        // });


        
        // $$('#table-detail thead a[data-package]').forEach($el => {
        //     if ($el.getAttribute("data-package").startsWith($('#sub_code').value)) {
        //         $el.style.display = "inline-flex";
        //     } else {
        //         $el.style.display = "none";
        //     }
        // });

        // $$('#table-detail thead a.btn-choose-plan').forEach($el => {
        //     if ($el.getAttribute("data-package").startsWith($('#sub_code').value)) {
        //         $el.style.display = "inline-flex";
        //     } else {
        //         $el.style.display = "none";
        //     }
        // });
        
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    const package_data = await getPackageData(current_package);
    const provinceData = await getProvinceDataWithOutPrefix();
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
        ctrl_terms: "",
        fdSendType: "",
        ctrl_accept_insurance_term: "",
        ctrl_travel_type: "",
        profile: []
    };
    let iti = {};
    let $dataSubPackage;
    let provinceOption = `<option value="">${$('#fdDestFrom').getAttribute('data-please-select')}</option>`;

    provinceData.forEach(v => {
        if(v.code.toString() === "24" || v.code.toString() === "43" || v.code.toString() === "30"){ //นราธิวาส ยะลา ปัตตานี
           
        }else{
            provinceOption += `<option value="${v.code}">${v[locale]}</option>`;
        }
    })

    $$('#fdDestFrom,#fdDestTo').forEach($el => {
        $el.innerHTML = provinceOption;
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

    $('#ctrl_travel_type').addEventListener('change', (e) => {

        let display_sub_package = 'block'
        let display_fdDestTo = 'block'
        let display_fdToDate = 'block'

        $('#sub_code').value = "ONB2BTADRT_1";

        if (e.target.value === 'annual') {
            display_sub_package ='block';
            //display_fdDestTo  = "none";
            display_fdToDate  = "none";
            $('#sub_code').value = "ONB2BTADOT_1";
        }
        else
        {            
            $('#sub_code').value = "ONB2BTADRT_1";
            display_sub_package = "none";
            //display_fdDestTo  = 'block';
            display_fdToDate  = 'block';
        }
        $$("#fdDestTo").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display_sub_package;
        });
        $$("#fdDestTo").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display_fdDestTo;
        });
        $$("#fdToDate").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display_fdToDate;
        });
    });

    //Set start selection
    let el = document.getElementById('ctrl_travel_type');
    el.dispatchEvent(new Event('change'));


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

                    //Fix to eng
                    location_data.map(v => {
                        items.push(`<option value="${v.district.code}">${v.district.locales['en']}, ${v.province.locales['en']}</option>`);
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
                        const chkAccept = validateAcceptStep1();
                        if(!chkAccept){
                            showAcceptError($('#ctrl_accept_step1').getAttribute('data-error-accept-step1'));
                            status = false;
                            break;
                        }
                        status = true;
                        data = {
                            ...data,
                            fdDestFrom: $('#fdDestFrom').value,
                            ctrl_travel_type: $('#ctrl_travel_type').value,
                            fdDestTo: $('#fdDestTo').value,
                            fdFromDate: $('#fdFromDate').value,
                            fdToDate: $('#fdToDate').value,
                        }
                        result = validate(data, step1Constraints);
                        removeError($('#step1'));
                        if (result) {
                            showError($('#step1'), result);
                            return false;
                        }

                        let fromDate = ($('#fdFromDate').value).split('/');
                        //let toDate = ($('#fdToDate').value).split('/');
                        let toDate;

                        if ($('#ctrl_travel_type').value === 'annual') {
                            //const lastDate = subDays(addDays(parseISO(`${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`), 1), 1);
                            const lastDate = addDays(parseISO(`${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`), 2);
                            toDate = (format(lastDate, 'dd/MM/yyyy')).split('/');
                        } else {
                            toDate = ($('#fdToDate').value).split('/');
                        }
                        data = {
                            ...data,
                            fdFromDate: `${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`,
                            fdToDate: `${toDate[2]}-${toDate[1]}-${toDate[0]}`,
                        }

                        genPrice(package_data, data.fdFromDate, data.fdToDate);

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
                            let dateResult = B2BTADCheckBirthDate(i);

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
                                ctrl_document_type: $(`#data_${i}_ctrl_document_type`).value,
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
                            fdPayAMT: getSelectedPrice(data.fdPackage, package_data),
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
                        const $summary_section = $('#summary_section');

                        let sb = `<h3 class="text-primary">${$summary_section.getAttribute('data-insurance_data')}</h3><br/>
                            <div class="two-col">
                            <div><span>${$summary_section.getAttribute('data-plan')} : </span><strong>${selectedPackage}</strong></div>
                            <div><span>${$('#receve_channel_title').innerText} : </span><strong>${data.fdSendType === 'P' ? $('label[for=ctrl_channel_post]').innerText : $('label[for=ctrl_channel_email]').innerText}</strong></div>
                            <div><span>${$('label[for=fdDestFrom]').innerText} : </span><strong>${$destFrom.options[$destFrom.selectedIndex].text}</strong></div><div><span>${$('label[for=fdDestTo]').innerText} : </span><strong>${$destTo.options[$destTo.selectedIndex].text}</strong></div>
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
