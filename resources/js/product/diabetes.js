import {
    showBMIError,
    showBMIValidateError,
    showFieldError,
    validateField
} from "../validate_form";
import validate from "validate.js";
import {
    $,
    $$,
    current_package,
    getRadioSelectedValue,
    locale,
    scrollToTargetAdjusted
} from "../helper";
import {
    changeStep, checkAge,
    formatInputFieldByLanguage,
    formatTelNumber,
    getPackageData,
    getSelectedPrice,
    showTitle,
    validateDiabetesMinMaxAgeInPackage,
    validatePolicyPayment, 
    validatePolicyStep5,
    formatInputFieldOnlyNumberic,
    formatInputFieldOnlyCharecter,
} from "../form/productHelper";

import Swal from "sweetalert2";
import {format, isValid, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');

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
    fdQuestion1: {
        presence: {
            allowEmpty: false
        }
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
    fdTaxno: "",
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

    //=====================================================================
    // AddOn Portal
    let Keys = "";
    var myEle = $("#portal_key");
    if (myEle) {
        Keys = myEle.value;
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
    //=====================================================================

    let channel = $("#channel")?.value;
    channel = (channel ? channel : 'TPT Website');

    let minAge = 1;
    let maxAge = 64;

    const package_data = await getPackageData(current_package, $("#channel")?.value);

    let defaultBmi = "";
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
        fdSendType: "",
        fdPayAMT: "",
        fdQuestion1: "",
        ctrl_province: "",
        ctrl_terms: "",
        ctrl_accept_insurance_term: "",
        ctrl_document_type: "",
        ctrl_weight: "",
        ctrl_height: "",
        ctrl_bmi_calculator: "",
        fdKeys: Keys,
        channel: channel
    };

    const validateBMI = () => {
        $$('.bmi-input .controls-wrapper').forEach(el => {
            el.classList.remove('error');
        });
        $('.bmi-input cite.error_weight').innerHTML = "";
        $('.bmi-input cite.error_height').innerHTML = "";
        $('.bmi-input cite.bmi_error').innerHTML = "";

        const weight = parseInt($('#ctrl_weight').value),
            height = parseInt($('#ctrl_height').value);
        let bmi_calculated = '';
        let bmi_valid = true;

        if (weight === '' || height === '') {
            showBMIError($('#ctrl_weight').getAttribute('data-error-fill-in-number-only'));
            bmi_valid = false;
            return {status: bmi_valid, data: { bmi: bmi_calculated }};
        }

        if (isNaN(weight)) {
            showBMIError($('#ctrl_weight').getAttribute('data-error-fill-in-number-only'));
            bmi_valid = false;
            return {status: bmi_valid, data: { bmi: bmi_calculated }};
        }

        if (isNaN(height)) {
            showBMIError($('#ctrl_weight').getAttribute('data-error-fill-in-number-only'));
            bmi_valid = false;
            return {status: bmi_valid, data: { bmi: bmi_calculated }};
        }

        if (bmi_valid) {
            let floatHeight = parseFloat(parseFloat(height).toFixed(2));
            let round_height = (floatHeight / 100);

            if( weight > 200 || weight <= 0){
                showBMIValidateError($('#ctrl_weight').getAttribute('data-error-weight-not-qualify'),'error_weight');
                showBMIError($('#ctrl_weight').getAttribute('data-error-not-qualify'));
                bmi_valid = false;
                return {status: bmi_valid, data: { bmi: bmi_calculated }};
            }

            if (height > 220 || height <= 0  ) {
                showBMIValidateError($('#ctrl_weight').getAttribute('data-error-height-not-qualify'),'error_height');
                showBMIError($('#ctrl_weight').getAttribute('data-error-not-qualify'));
                bmi_valid = false;
                return {status: bmi_valid, data: { bmi: bmi_calculated }};
            }

            bmi_calculated = (weight / (round_height * round_height)).toFixed(1);
            if (parseFloat(bmi_calculated) >= 35.1 ) {
                showBMIError($('#ctrl_weight').getAttribute('data-error-not-qualify'));
                bmi_valid = false;
            } else {
                $('.bmi-input cite.error_weight').innerHTML = "";
                $('.bmi-input cite.error_height').innerHTML = "";
                $('.bmi-input cite.bmi_error').innerHTML = "";
            }
        }

        return {
            status: bmi_valid, data: {
                bmi: bmi_calculated
            }
        };
    }

    const genBMI = () => {
        const bmiResult = validateBMI();
        if (!bmiResult) {
            document.getElementById("ctrl_bmi_calculator").value = '';
            document.getElementById("bmi_result").innerHTML = '';
            return {status: false};
        }else{
            defaultBmi = bmiResult.data.bmi;
            document.getElementById("ctrl_bmi_calculator").value = bmiResult.data.bmi;
            document.getElementById("bmi_result").innerHTML = bmiResult.data.bmi;
        }
        return {status: true};
    }

    const genPrice = () => {
        let pricelist;
        if (data.fdHBD) {
            pricelist = Object.keys(package_data)
                .filter(k => _.startsWith(k, current_package))
                .map(k => {
                    const pack = Object.keys(package_data[k].price).filter(ageRange => checkAge(data.fdHBD, ageRange))
                    const price = parseInt(package_data[k].price[pack]).toLocaleString();

                    $(`strong[data-price-${k}]`).innerHTML = price;
                    $(`span[data-price-${k}]`).innerHTML = price;
                });
        }
        // hideRow();
        // showRow();
        return pricelist;
    }

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
                        item_brand: "",
                        item_category: "",
                        price: "",
                    };

                    item.item_id = "Diabetes_" + planCode;
                    item.item_name = "Diabetes_" + planCode;
                    item.item_brand = "Diabetes";
                    item.item_category = "Health Insurance";
                    item.price = price;

                    itemList.push(item);
                    index++;
                });
        }

        if ($('#controller').value === 'product') 
        {
            dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
            dataLayer.push({
                event: "view_item",
                ecommerce: {
                    currency: "THB",
                    items: itemList
                }
            });
        }
    }

    $$('#ctrl_weight,#ctrl_height').forEach($el => {
        $el.addEventListener($el.tagName.toLowerCase() === 'input' ? "keyup" : "change", event => {
            genBMI();
        });
        $el.addEventListener($el.tagName.toLowerCase() === 'input' ? "keydown" : "focus", event => {
            if (event.keyCode == 8 || event.keyCode == 46) {
                genBMI();
            }
        });
    })

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
    const allField1 = $form1.querySelectorAll('input, select');
    allField1.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['ctrl_day', 'ctrl_month', 'ctrl_year'].includes(field.id)) {
                validateDiabetesMinMaxAgeInPackage(package_data, false, minAge, maxAge);
            }
        });
    }); 

    const $form4 = $('#step4');
    const allField = $form4.querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['fdName', 'fdSurname', 'fdNationalID'].includes(field.id)) {
                validatePolicyStep5(e.target, data.fdPackage);
            }
        });
    });

    const hideShowConditionBox = (goToStep) => {
        if (goToStep === 1) {
            $('#h-cont').style.display = "none";
        }
    }

    $('#btn-q-n').addEventListener("click", function (e) {
        e.defaultPrevented;
        $('.page-overlay').style.display = 'flex';

    })

    $(".page-overlay .close").addEventListener('click', (e) => {
        e.preventDefault();
        $('.page-overlay').style.display = 'none';
    }, true);

    // $("#btn_next_close").addEventListener('click', (e) => {
    //     e.preventDefault();
    //     $('.page-overlay').style.display = 'none';
    // }, true);

    let expandDetailDiabetes = false;

    /* more detail Baowan */
    const $btnMoreDiabetes = $('#btn-more-diabetes');
    if ($btnMoreDiabetes) {
        $btnMoreDiabetes.addEventListener("click", function (e) {
            e.preventDefault();
            expandDetailDiabetes = !expandDetailDiabetes;
            if (expandDetailDiabetes) {
                $$('#table-detail tbody tr').forEach(row => {
                    row.style.display = 'table-row';
                    $btnMoreDiabetes.innerText = $btnMoreDiabetes.getAttribute('data-collapse');
                    $btnMoreDiabetes.classList.add("expand");
                });
            } else {
                $$('#table-detail tbody tr:nth-child(n+7)').forEach(row => {
                    row.style.display = 'none';
                    $btnMoreDiabetes.innerText = $btnMoreDiabetes.getAttribute('data-expand');
                    $btnMoreDiabetes.classList.remove("expand");
                    scrollToTargetAdjusted($("ol.step"));
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

                if (step > goToStep) {
                    status = true;
                    hideShowConditionBox(goToStep);
                } else {
                    switch (parseInt(step)) {
                        case 1:
                            const validateResult = validateDiabetesMinMaxAgeInPackage(package_data, false, minAge, maxAge);
                            const validateBMIResult = validateBMI();

                            if (validateResult.status && validateBMIResult.status) {
                                status = true;
                                data = {
                                    ...data,
                                    ...validateResult.data,
                                    fdBMI_Weight: $('#ctrl_weight').value,
                                    fdBMI_Height: $("#ctrl_height").value,
                                    fdBMI_Value: $("#ctrl_bmi_calculator").value
                                }

                                genPrice();
                                genItemList();
                                let $btnMore_Diabetes = $('#btn-more-diabetes');
                                $$('#table-detail tbody tr:nth-child(n+7)').forEach(row => {
                                    row.style.display = 'none';
                                    $btnMore_Diabetes.innerText = $btnMore_Diabetes.getAttribute('data-expand');
                                    $btnMore_Diabetes.classList.remove("expand");

                                    scrollToTargetAdjusted($("ol.step"));
                                });

                                hideShowConditionBox(step);

                            } else {
                                scrollToTargetAdjusted($('.controls-wrapper.error'));
                            }

                            //=====================================================================
                            // AddOn Portal
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
                            //=====================================================================

                            break;
                        case 2:

                            const fdPackage = $btn.getAttribute('data-package');

                            $("#table-detail").setAttribute('data-package_plan', $btn.getAttribute('data-plan'));

                            if (fdPackage) {
                                data = {
                                    ...data,
                                    fdPackage
                                }
                                showTitle('', data.fdAge)
                                status = true;

                                const selectPrice = getSelectedPrice(data.fdHBD, fdPackage, package_data);

                                if ($('#controller').value === 'product') 
                                {
                                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                                    dataLayer.push({
                                        event: "add_to_cart",
                                        ecommerce: {
                                            currency: "THB",
                                            value: selectPrice,
                                            items: [{
                                                item_id: "Diabetes_" + fdPackage,
                                                item_name: "Diabetes Plan Code " + fdPackage,
                                                item_brand: "Diabetes",
                                                item_category: "Health Insurance",
                                                price: selectPrice
                                            }]
                                        }
                                    });
                                }

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
                            //=====================================================================
                            //For sale view only.
                            // var myEle = document.getElementById("portal_key");
                            // if (myEle) {
                            //     if (myEle.value == 'QGRL28KWKA5L6GDRD8QU6TKWBJ5Q3GSRQ4MW2MUX9JDZ6TT3UGFZZ') {
                            //         $('button[data-step="5"]').style.display = 'none';
                            //     }
                            // }
                            //=====================================================================
                            status = false;
                            if (e.target.id === 'btn-fdQuestion1') {
                                status = true;

                                data = {
                                    ...data,
                                    fdQuestion1: 'N',
                                }
                            }
                            break;
                        case 4:
                            let valCheck = false;
                            valCheck = validatePolicyPayment($('#fdNationalID').value,data.fdPackage,$('#fdFromDate')?.value);
                            if(!valCheck)
                            {
                                status = false;
                                return false;
                            }

                            let address = ($('#ctrl_province').value).split('*');
                            let today = new Date();
                            let dd = String(today.getDate()).padStart(2, '0');
                            let mm = String(today.getMonth() + 1).padStart(2, '0');
                            let yyyy = today.getFullYear();

                            today = dd + '/' + mm + '/' + yyyy;
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
                                fdRevenue: 'N',
                                fdTaxno: '',
                                fdPayAMT: getSelectedPrice(data.fdHBD, data.fdPackage, package_data),
                                ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                                ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                                ctrl_document_type: $('#ctrl_document_type').value,
                                ctrl_province: $('#ctrl_province').value
                            }

                            data = {
                                ...data,
                                fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                            }

                            const result = validate(data, constraints);
                            const $cite = $form4.getElementsByTagName('cite');
                            for (let i = 0, len = $cite.length; i !== len; ++i) {
                                $cite[0].parentNode.removeChild($cite[0]);
                            }

                            $form4.querySelectorAll('.controls-wrapper').forEach(($el) => {
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

                                if ($('#controller').value === 'product') 
                                {
                                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                                    dataLayer.push({
                                        event: "begin_checkout",
                                        ecommerce: {
                                            currency: "THB",
                                            value: data.fdPayAMT,
                                            items: [{
                                                item_id: "Diabetes_" + data.fdPackage,
                                                item_name: "Diabetes Plan Code " + data.fdPackage,
                                                item_brand: "Diabetes",
                                                item_category: "Health Insurance",
                                                price: data.fdPayAMT
                                            }]
                                        }
                                    });
                                }

                                let sb = ''

                                Object.keys(data).map(k => {
                                    sb += `<input type="hidden" name="${k}" value="${data[k]}">`;
                                });

                                const $ddlProvince = $('#ctrl_province');
                                const province = $ddlProvince.options[$ddlProvince.selectedIndex].text;
                                const selectedPackage = $("#table-detail").getAttribute('data-package_name') + ' ' + $("#table-detail").getAttribute('data-package_plan');

                                const $documentType = $('#ctrl_document_type');


                                const dob = format(parseISO(data.fdHBD), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdHBD), 'yyyy')) + 543) : format(parseISO(data.fdHBD), 'yyyy'))
                                const $summary_section = $('#summary_section');

                                $summary_section.innerHTML = `<h3 class="text-primary">${$summary_section.getAttribute('data-insurance_data')}</h3><br/>
                <div class="two-col">
                    <div><span>${$summary_section.getAttribute('data-plan')} : </span><strong>${selectedPackage}</strong></div>
                    <div><span>${$summary_section.getAttribute('data-price')} : </span><strong>${parseFloat(data.fdPayAMT).toLocaleString()} ${$summary_section.getAttribute('data-baht')}</strong>
                    </div>
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
    $('#step_1').addEventListener("click", function (e) {
        e.defaultPrevented;
        $('#h-cont').style.display = 'block';
    });
});
