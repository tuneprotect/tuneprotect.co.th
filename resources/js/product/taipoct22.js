import {
    changeStep,
    checkTaBirthDateIPass,
    formatTelNumber,
    getCountryData,
    getNationalityData,
    getPackageData,
    showMultipleTitle, 
    validatePolicy,
    validatePolicyPayment,
    formatInputFieldByLanguage,
    formatInputFieldOnlyNumberic,
    formatInputFieldOnlyCharecter,
    validatePromotionCode,
    preValidatePromotionCode
} from "../form/productHelper";
import {
    $, 
    $$, 
    current_package, 
    getRadioSelectedValue, 
    getZipcodeData, locale, 
    scrollToTargetAdjusted
} from "../helper";

import {
    removeError, 
    showError, 
    showFieldError, 
    validateField,
    showPromotionCodeValid,
    showPromotionCodeCount,
    showValidatePromotionCodeError,
} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {addDays, addYears, differenceInDays, format, parseISO, subDays} from "date-fns";
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
    fdToDate: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdToDate').getAttribute('data-error')
        }
    },
    fdDestFrom: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdDestFrom').getAttribute('data-error')
        }
    },
    ctrl_accept_step1: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#ctrl_accept_step1').getAttribute('data-error-accept-step1')
        }
    },
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
        },
        format: formatInputFieldOnlyCharecter()
    },
    fdSurname: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdSurname').getAttribute('data-error-last_name')
        },
        format: formatInputFieldOnlyCharecter()
    },
    fdHBD: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_ctrl_day').getAttribute('data-error-format')
        },
        format: formatInputFieldOnlyNumberic()
    },
    fdNationalID: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-passport')
        },
        format: {
            pattern: /^[A-Z0-9]*$/,
            flags: "i",
            message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-nationalid-format')
        }
    },
    fdNationality: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdNationality').getAttribute('data-error-nationality')
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
        },
        format: formatInputFieldByLanguage()
        // format: {
        //     pattern: /^[a-zA-Z0-9 !@#$&()\\`.+\-,/\"\n\r"]*$/,
        //     flags: "i",
        //     message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
        // }
    },
    fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdAddr_District').getAttribute('data-error-district')
        },
        format: {
            pattern: /^[a-zA-Z0-9 !@#$&()\\`.+\-,/\"]*$/,
            flags: "i",
            message: "^" + $('[data-error-eng-only]').getAttribute('data-error-eng-only')
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
        },
        format: formatInputFieldOnlyNumberic()
    },
    fdBenefit: "",
    fdBenefit_name: function (value, attributes, attributeName, options, constraints) {
        if (attributes.fdBenefit !== 'other') return null;
        return {
            presence: {
                allowEmpty: false,
                message: "^" + $('#data_1_fdBenefit_name').getAttribute('data-error-beneficiary')
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
                message: "^" + $('#data_1_fdRelation').getAttribute('data-error-relation')
            }
        };
    }
};

const productCode = 'TAIPOCT22';

const genPrice = (package_data, fdFromDate, fdToDate) => {

    let startDate = parseISO(fdFromDate);
    let endDate = parseISO(fdToDate);

    const day = differenceInDays(endDate, startDate) + 1;

    $('#days').value = day;

    Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package))
        .map(k => {
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
            $$('[data-sub-package]').forEach($el => {
                $el.setAttribute('data-sub-package', pack)
            });
            $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price[pack].price).toLocaleString();
            $('#sub_code').value = pack;
        })

}

const genItemList = (package_data, fdFromDate, fdToDate) => {

    let index = 0;
    const itemList = [];

    if (fdFromDate && fdToDate) {

        let startDate = parseISO(fdFromDate);
        let endDate = parseISO(fdToDate);

        const day = differenceInDays(endDate, startDate) + 1;
        
        Object.keys(package_data)
            .filter(k => _.startsWith(k, current_package))
            .map(k => {
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
                const price = parseInt(package_data[k].price[pack].price).toLocaleString();
                const planCode = Object.keys(package_data)[index];

                const item = {
                    item_id: "",
                    item_name: "",
                    item_brand: "",
                    item_category: "",
                    price: "",
                };

                item.item_id = "TuneiPass_" + planCode;
                item.item_name = "TuneiPass Plan Code " + planCode;
                item.item_brand = "Tune iPass";
                item.item_category = "Travel Insurance";
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

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

document.addEventListener("DOMContentLoaded", async () => {

    let package_data = await getPackageData(current_package);
    const country_data = await getCountryData();
    const nationality_data = await getNationalityData();
    const zipcode_data = await getZipcodeData();

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
        if($('#partner').value == 'LUMA')
        {
            let element = document.getElementById("btnBrochure");
            element.parentNode.removeChild(element);
        }
        if($('#partner').value == 'partnership')
        {
            $('#btnBrochure').addEventListener('click', (e) => {
                // alert( "Handler for .click() called." );

            });
        }
    }

    
    if(Keys == 'BQQWAMUX9JDXNTFFD4WZZLQ3NDEXNTFFT6UCXGSF68UXNEKZ24UYN5TRZ2')
    {
        //package_data = await getPackageData('ontalnlite');
        package_data = await getPackageData('ontalnlite');
    }

    let step = 1;
    let data = {
        fdKeys : Keys,
        fdPayAMT: "",
        fdFromDate: "",
        fdToDate: "",
        ctrl_terms: "",
        fdSendType: "",
        ctrl_accept_step1: "",
        ctrl_accept_insurance_term: "",
        profile: []
    };
    let iti = {};
    let desination = '';
    // let $dataSubPackage;
    let promotionCodeStatus = "";
    let provinceOption = `<option value="">${$('#fdDestFrom').getAttribute('data-please-select')}</option>`;

    country_data
        .filter(v => v.zone !== "" || v.code === 'THA')
        .sort((a, b) => (a[locale] > b[locale]) ? 1 : ((b[locale] > a[locale]) ? -1 : 0))
        .map(v => {
            if (v.code === 'THA') {
                desination = v[locale];
            }
            else
            {
                provinceOption += `<option value="${v.code}">${v[locale]}</option>`;
            }
        })

    $('#fdDestFrom').innerHTML = provinceOption;
    $('#fdDestTo').innerHTML = `<option value="THA">${desination}</option>`;

    let nationality_option = `<option value="">${$('#data_1_fdNationality').getAttribute('data-please-select')}</option>`;
    Object.keys(nationality_data).map(v => {
            nationality_option += `<option value="${v}">${v}</option>`;
    });

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
            $(`#data_${i}_ctrl_province`).innerHTML = '';
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

        $(`#data_${i}_fdNationality`).innerHTML = nationality_option;

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

    if ($('#controller').value === 'product') 
    {
        $('#fdPromotionCode').addEventListener('change', async (e) => {

            if($('#fdPromotionCode').value) 
            {
                const promotion_data_befor = await preValidatePromotionCode($('#fdPromotionCode').value, productCode);
                if(promotion_data_befor.result.status && promotion_data_befor.result.codeAvailable <= parseInt($("#promotion_code_condition").value)) {
                    promotionCodeStatus = true;
                    showPromotionCodeCount($('#fdPromotionCode').getAttribute('data-error-promotion-code-count').replace("{count}", promotion_data_befor.result.codeAvailable), 'span_error');
                } else if(promotion_data_befor.result.status) {
                    promotionCodeStatus = true;
                    showPromotionCodeValid($('#fdPromotionCode').getAttribute('data-error-promotion-code-valid'), 'span_error');
                } else {
                    showValidatePromotionCodeError(locale === 'th' ? promotion_data_befor.result.message_th : promotion_data_befor.result.message, 'span_error');
                }
            }
            else
            {
                showPromotionCodeValid('', 'span_error');
                promotionCodeStatus = false;
            }
        });
    }

    const allField = $('#step3').querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, profileConstraints);
            for (let i = 1; i <=  $('#ctrl_no_of_insured').value; i++) {
                if ([`data_${i}_fdName`, `data_${i}_fdSurname`, `data_${i}_fdNationalID`].includes(field.id)) {
                    validatePolicy(e.target, data.fdPackage,$('#fdFromDate')?.value);
                }
                if ([`data_${i}_ctrl_day`, `data_${i}_ctrl_month`, `data_${i}_ctrl_year`].includes(field.id)) {
                    removeError($(`#form_profile_${i} .controls-wrapper .date-input`));
                    let dateResult = checkTaBirthDateIPass(i);
                    const currentProfile = {
                        fdHBD: dateResult?.data?.fdHBD || "",
                    };
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
            }
        });
    });


    const $btnGoto = $$('.btn-goto');
    $btnGoto.forEach($btn => {
        $btn.addEventListener("click", async (e) => {

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
                            fdDestFrom: $('#fdDestFrom').value,
                            fdDestTo: $('#fdDestTo').value,
                            fdFromDate: $('#fdFromDate').value,
                            fdToDate: $('#fdToDate').value,
                            ctrl_accept_step1: $('#ctrl_accept_step1').checked ? true : undefined,
                        }
                        result = validate(data, step1Constraints);
                        removeError($('#step1'));
                        if (result) {
                            showError($('#step1'), result);
                            status = false;
                        } else {

                            let fromDate = ($('#fdFromDate').value).split('/');
                            let toDate = ($('#fdToDate').value).split('/');
                            data = {
                                ...data,
                                fdFromDate: `${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`,
                                fdToDate: `${toDate[2]}-${toDate[1]}-${toDate[0]}`,
                            }

                            // genPrice(package_data, $('#ctrl_sub_package').value);
                            genPrice(package_data, data.fdFromDate, data.fdToDate);
                            genItemList(package_data, data.fdFromDate, data.fdToDate);

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
                    case 2:
                        for (let i = 1; i <= $('#ctrl_no_of_insured').value; i++) {
                            $(`#data_${i}_fdNationalID`).value = "";
                        }

                        const fdPackage = $btn.getAttribute('data-package');
                        // $dataSubPackage =fdPackage;

                        $('#form-head').innerHTML = $btn.getAttribute('data-plan');
                        if (fdPackage) {
                            data = {
                                ...data,
                                fdPackage
                            }

                            const selectPrice = package_data[data.fdPackage].price[$('#sub_code').value].price;

                            if ($('#controller').value === 'product') 
                            {
                                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                                dataLayer.push({
                                    event: "add_to_cart",
                                    ecommerce: {
                                        currency: "THB",
                                        value: selectPrice,
                                        items: [{
                                            item_id: "TuneiPass_" + fdPackage,
                                            item_name: "TuneiPass Plan Code " + fdPackage,
                                            item_brand: "Tune iPass",
                                            item_category: "Travel Insurance",
                                            price: selectPrice
                                        }]
                                    }
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
                        break;
                    case 3:
                        let profileData = []
                        let promotion_data;
                        let promotion_extra;
                        status = true;
                        removeError($('#step3'));

                        const selectPrice = package_data[data.fdPackage].price[$('#sub_code').value].price;

                        if ($('#controller').value === 'product' && promotionCodeStatus) {
                            promotion_data = await validatePromotionCode($('#fdPromotionCode').value, selectPrice, productCode);
                            
                            let current_date = (new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})).split('/');
                            let effectiveDate = parseISO(data.fdFromDate);
                            let currentDate = parseISO(`${current_date[2]}-${current_date[0]}-${current_date[1]}`);

                            promotion_extra = differenceInDays(effectiveDate, currentDate);
                        }

                        for (let i = 1; i <= $('#ctrl_no_of_insured').value; i++) {
                            let address = ($(`#data_${i}_ctrl_province`).value).split('*');
                            let dateResult = checkTaBirthDateIPass(i);

                            let valCheck = false;
                            valCheck = validatePolicyPayment($(`#data_${i}_fdNationalID`).value,data.fdPackage,$('#fdFromDate')?.value);
                            if(!valCheck)
                            {
                                status = false;
                                return false;
                            }

                            var nationalIDArray = profileData.map(e => e.fdNationalID);
                            if (nationalIDArray.length) {
                                if (nationalIDArray.includes($(`#data_${i}_fdNationalID`).value)) {
                                    showFieldError($(`#data_${i}_fdNationalID`), [$(`#data_${i}_fdNationalID`).getAttribute('data-error-nationalid-invalid')]);
                                }
                            }

                            const currentProfile = {
                                fdSex: getRadioSelectedValue(`data_${i}_fdSex`),
                                fdTitle: getRadioSelectedValue(`data_${i}_fdTitle`),
                                fdName: $(`#data_${i}_fdName`).value,
                                fdSurname: $(`#data_${i}_fdSurname`).value,
                                fdNationalID: $(`#data_${i}_fdNationalID`).value,
                                fdNationality: $(`#data_${i}_fdNationality`).value,
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
                                PromotionCode: "",
                                CampaignId: "",
                                CostAmount: "",
                                StatusId: "",
                                TypeId: ""
                            };

                            if ($('#controller').value === 'product' && promotionCodeStatus) {
                                if (promotion_data.result.codeAvailable >= i) {
                                    currentProfile.PromotionCode = $('#fdPromotionCode').value;
                                    currentProfile.CampaignId = promotion_data.result.campaignId;
                                    currentProfile.CostAmount = selectPrice;    
                                    currentProfile.StatusId = 2;
                                    currentProfile.TypeId = 1
                                }
                            }

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
                            fdPayAMT: package_data[data.fdPackage].price[$('#sub_code').value].price,
                            fdSendType: getRadioSelectedValue('fdSendType'),
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            fdDay: $('#days').value,
                            profile: profileData
                        }
                        data = {
                            ...data,
                            fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                        }

                        result = validate(data, step3Constraints);

                        if (result) {
                            showError($('#step3'), result);
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
                                            item_id: "TuneiPass_" + data.fdPackage,
                                            item_name: "TuneiPass Plan Code " + data.fdPackage,
                                            item_brand: "Tune iPass",
                                            item_category: "Travel Insurance",
                                            price: data.fdPayAMT
                                        }]
                                    }
                                });
                            }
                        }

                        if ($('.controls-wrapper.error')) {
                            scrollToTargetAdjusted($('.controls-wrapper.error'));
                            return false;
                        }


                        const selectedPackage = $('#step3 .form-head').innerHTML;

                        let fromDate = format(parseISO(data.fdFromDate), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdFromDate), 'yyyy')) + 543) : format(parseISO(data.fdFromDate), 'yyyy'))
                        let toDate = format(parseISO(data.fdToDate), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdToDate), 'yyyy')) + 543) : format(parseISO(data.fdToDate), 'yyyy'))

                        const $destFrom = $('#fdDestFrom');
                        const $destTo = $('#fdDestTo');
                        // const $ctrl_sub_package = $('#ctrl_sub_package');

                        const $summary_section = $('#summary_section');


                        let sb = `<h3 class="text-primary">${$summary_section.getAttribute('data-insurance_data')}</h3><br/>
                        <div class="two-col">
                            <div><span>${$summary_section.getAttribute('data-plan')} : </span><strong>${selectedPackage}</strong></div>
                            <div><span>${$('#receve_channel_title').innerText} : </span><strong>${data.fdSendType === 'P' ? $('label[for=ctrl_channel_post]').innerText : $('label[for=ctrl_channel_email]').innerText}</strong></div>
                            <div><span>${$('label[for=fdDestFrom]').innerText} : </span><strong>${$destFrom.options[$destFrom.selectedIndex].text}</strong></div>
                            <div><span>${$('label[for=fdDestTo]').innerText} : </span><strong>${$destTo.options[$destTo.selectedIndex].text}</strong></div>
                            <div><span>${$('label[for=fdFromDate]').innerText} : </span><strong>${fromDate}</strong></div>
                            <div><span>${$('label[for=fdToDate]').innerText} : </span><strong>${toDate}</strong></div>
                            <div><span>${$summary_section.getAttribute('data-day-wording')} : </span><strong>${data.fdDay} ${$summary_section.getAttribute('data-day')} </strong></div>
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
                        
                            ${$('#controller').value === 'product' && promotionCodeStatus
                                ? `<div class="controls-wrapper full no-lable"><span>${$('#lblfdPromotionCode').innerText} : </span><strong>${$('#fdPromotionCode').value} ${ promotion_data.result.status ? `
                                ${ promotion_data.result.codeAvailable < i+1 
                                    ? `<span id="promotion_code_alert" style="color: #e71618;">${locale === 'th' ? '(* โค้ดนี้ได้ถูกใช้ครบแล้ว)' : '(* The code has already been used.)'}</span>` 
                                    : `<span id="promotion_code_alert" style="color: #008b06;">${locale === 'th' ? '('+ promotion_data.result.message_th +')' : '('+ promotion_data.result.message +')' }`} 
                                        ${locale === 'th' ? promotion_extra >= 30 ? ' + (รับเพิ่ม 200 บาท)' : '' : promotion_extra >= 30 ? ' + (Get extra 200 THB)' : '' } </span>` 
                                    : `<span id="promotion_code_alert" style="color: #e71618;">${locale === 'th' ? '(* '+ promotion_data.result.message_th +')' : '(* '+ promotion_data.result.message +')'}</span>` } </strong>
                                </div>`
                                : ''
                            }
                        
                        </div><br/>`;
                        });

                        sb += `<input type="hidden" name="send_data" value='${JSON.stringify(data)}'>`;

                        $('#summary_section').innerHTML = sb;
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

