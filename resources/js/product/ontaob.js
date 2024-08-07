import {
    changeStep,
    iTravelCheckBirthDate,
    formatTelNumber,
    getCountryData,
    getPackageData,
    showMultipleTitle,
    validatePolicy,
    formatInputFieldOnlyEnglish,
    validatePolicyPayment,
    validatePromotionCode,
    preValidatePromotionCode,
    formatInputFieldOnlyNumberic,
    formatInputFieldOnlyCharecterOnlyEnglish,
} from "../form/productHelper";
import {
    showPromotionCodeValid,
    showPromotionCodeCount,
    showValidatePromotionCodeError,
} from "../validate_form";
import {
    $,
    $$,
    current_package,
    getRadioSelectedValue,
    getZipcodeData,
    locale,
    scrollToTargetAdjusted
} from "../helper";

import { removeError, showError, showFieldError, validateField, validateAcceptStep1, showAcceptError } from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import { addYears, differenceInDays, format, parseISO, subDays } from "date-fns";
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
        format: formatInputFieldOnlyCharecterOnlyEnglish()
    },
    fdSurname: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdSurname').getAttribute('data-error-last_name')
        },
        format: formatInputFieldOnlyCharecterOnlyEnglish()
    },
    fdHBD: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_ctrl_day').getAttribute('data-error-format')
        },
        format: formatInputFieldOnlyNumberic()
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
                },
                format: {
                    pattern: /^[A-Z0-9]*$/,
                    flags: "i",
                    message: "^" + $('#data_1_fdNationalID').getAttribute('data-error-nationalid-format')
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
        }
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
        format: formatInputFieldOnlyEnglish()
    },
    fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#data_1_fdAddr_District').getAttribute('data-error-district')
        },
        format: formatInputFieldOnlyEnglish()
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
            format: formatInputFieldOnlyCharecterOnlyEnglish()
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

const productCode = 'ONTAOB';

const zoneCode = {
    "WW": 'WRW',
    "AS": 'WRW',
    "AE": 'ASN'
}

const getSelectedPrice = (packageCode, package_data) => {

    const code = packageCode;
    const sub_code = $('#sub_code').value;

    return package_data[code].price[sub_code].price;
}


const genPrice = (package_data, country_data, subpackage, fdFromDate, fdToDate) => {

    let startDate = parseISO(fdFromDate);
    let endDate = parseISO(fdToDate);


    if ($('#ctrl_travel_type').value === 'annual') {
        // endDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate());
    }
    else {
        let country_zone = '';
        country_data.map(v => {
            if (v.code === $('#fdDestTo').value) {
                country_zone = v.zone;
            }
        });
        subpackage = country_zone;
        $('#ctrl_sub_package').value = subpackage;
    }

    const day = differenceInDays(endDate, startDate) + 1;

    $('#days').value = day;

    const allPack = Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package + subpackage))

    $('#all_pack').value = allPack;

    if (document.body.clientWidth > 767) {
        $$('#table-detail td[data-package],#table-detail th[data-package],.choose-plan-mobile').forEach($el => {
            if (allPack.includes($el.getAttribute("data-package"))) {
                $el.style.display = "table-cell";
            } else {
                $el.style.display = "none";
            }
        });
    } else {
        $$('#table-detail thead a[data-package]').forEach($el => {
            if ($el.getAttribute("data-package").startsWith(productCode + subpackage)) {
                $el.style.display = "inline-flex";
            } else {
                $el.style.display = "none";
            }
        });

        $$('#table-detail thead div.btn-choose-plan').forEach($el => {
            if ($el.getAttribute("data-package").startsWith(productCode + subpackage)) {
                $el.style.display = "inline-flex";
            } else {
                $el.style.display = "none";
            }
        });
    }

    $$('#table-detail td[data-h2go]').forEach($el => {
        if (day >= 5) {
            if ($el.getAttribute("data-h2go").startsWith('73')) {
                $el.innerHTML = "<strong><i class='icofont-check-circled'  style='color:green'></i></strong>";
            }
            if ($el.getAttribute("data-h2go").startsWith('74')) {
                $el.innerHTML = "<strong><i class='icofont-check-circled'  style='color:green'></i></strong>";
            }
        }
        else {
            if ($el.getAttribute("data-h2go").startsWith('73')) {
                $el.innerHTML = "<strong><i class='icofont-close-circled' style='color:red'></i></strong>";
            }
            if ($el.getAttribute("data-h2go").startsWith('74')) {
                $el.innerHTML = "<strong><i class='icofont-close-circled' style='color:red'></i></strong>";
            }
        }

    });

    allPack.map(k => {
        const pack = Object.keys(package_data[k].price).filter(subPackage => {
            const dateRange = (package_data[k].price[subPackage].day).split('-');
            if (dateRange.length === 1) {
                return day >= dateRange[0] && day <= dateRange[0];
            }
            else {
                return day >= dateRange[0] && day <= dateRange[1];
            }
        })

        $$('[data-sub-package]').forEach($el => {
            $el.setAttribute('data-sub-package', pack)
        });
        $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price[pack].price).toLocaleString();
        $('#sub_code').value = pack;
    });
}

const genItemList = (package_data, country_data, subpackage, fdFromDate, fdToDate) => {
    let index = 0;
    const itemList = [];

    if (fdFromDate && fdToDate) {

        let startDate = parseISO(fdFromDate);
        let endDate = parseISO(fdToDate);

        const day = differenceInDays(endDate, startDate) + 1;

        let country_zone = '';
        country_data.map(v => {
            if (v.code === $('#fdDestTo').value) {
                country_zone = v.zone;
            }
        });
        subpackage = country_zone;

        let current_packages = "";
        if ($('#ctrl_travel_type').value === 'annual') { current_packages = current_package + $('#ctrl_sub_package').value } else { current_packages = current_package + subpackage }

        Object.keys(package_data)
            .filter(k => _.startsWith(k, current_packages))
            .map(k => {
                const pack = Object.keys(package_data[k].price).filter(subPackage => {
                    const dateRange = (package_data[k].price[subPackage].day).split('-');
                    if (dateRange.length === 1) {
                        return day >= dateRange[0] && day <= dateRange[0];
                    }
                    else {
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

                item.item_id = "iTravel_" + planCode;
                item.item_name = "iTravel Plan Code " + planCode;
                item.item_brand = "iTravel";
                item.item_category = "Travel Insurance";
                item.price = price;

                itemList.push(item);
                index++;
            });
    }

    if ($('#controller').value === 'product') {
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
        fdAgent: "00DM004D00",//"00DM004D00",
        fdKeys: Keys,
        fdPayAMT: "",
        fdFromDate: "",
        fdToDate: "",
        fdDestTo: "",
        ctrl_terms: "",
        fdSendType: "",
        ctrl_accept_step1: "",
        ctrl_accept_insurance_term: "",
        ctrl_travel_type: "",
        profile: []
    };
    let iti = {};
    // let $dataSubPackage;
    let promotionCodeStatus = "";
    let sb = "";
    let sb1 = `<option value="">${$('#fdDestTo').getAttribute('data-please-select')}</option>`;
    let sbWorldwide = '';
    let sbSCHENGEN = '';
    countryData.sort((a, b) => (a[locale] > b[locale]) ? 1 : ((b[locale] > a[locale]) ? -1 : 0))
        .map(v => {
            //if (v.code === 'THA' || v.code === 'WRW' || v.code === 'ASN'
            if (v.code === 'THA' || v.code === 'ASN'
                || v.code === 'AFG' || v.code === 'AZE' || v.code === 'CUB' || v.code === 'IRN' || v.code === 'IRQ'
                || v.code === 'ISR' || v.code === 'KGZ' || v.code === 'LBN' || v.code === 'LBY' || v.code === 'NPL'
                || v.code === 'NIC' || v.code === 'PRK' || v.code === 'PAK' || v.code === 'PSE' || v.code === 'SYR'
                || v.code === 'TJK' || v.code === 'TKM' || v.code === 'UZB') {
            }
            else if (v.code === 'WRW') {
                sbWorldwide = `<option value="${v.code}">${v[locale]}</option>`;
            }
            else if (v.code === 'SCG') {
                sbSCHENGEN = `<option value="${v.code}">${v[locale]}</option>`;
            }
            else {
                sb += `<option value="${v.code}">${v[locale]}</option>`;
            }
        });

    $('#fdDestTo').innerHTML = sb1 + sbWorldwide + sbSCHENGEN + sb;

    $('#ctrl_travel_type').addEventListener('change', (e) => {

        let display_sub_package = 'block'
        let display_fdDestTo = 'block'
        let display_fdToDate = 'block'

        if (e.target.value === 'annual') {
            display_sub_package = 'block';
            display_fdDestTo = "none";
            display_fdToDate = "none";
        }
        else {
            display_sub_package = "none";
            display_fdDestTo = 'block';
            display_fdToDate = 'block';
        }
        $$("#ctrl_sub_package,#fdDestTo").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display_sub_package;
        });
        $$("#fdDestTo").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display_fdDestTo;
        });
        $$("#fdToDate").forEach(($el) => {
            $el.closest('.controls-wrapper').style.display = display_fdToDate;
        });
    })

    if ($('#controller').value === 'product') {
        $('#fdPromotionCode').addEventListener('change', async (e) => {

            if ($('#fdPromotionCode').value) {
                const promotion_data_befor = await preValidatePromotionCode($('#fdPromotionCode').value, productCode);
                if (promotion_data_befor.result.status && promotion_data_befor.result.codeAvailable <= parseInt($("#promotion_code_condition").value)) {
                    promotionCodeStatus = true;
                    showPromotionCodeCount($('#fdPromotionCode').getAttribute('data-error-promotion-code-count').replace("{count}", promotion_data_befor.result.codeAvailable), 'span_error');
                } else if (promotion_data_befor.result.status) {
                    promotionCodeStatus = true;
                    showPromotionCodeValid($('#fdPromotionCode').getAttribute('data-error-promotion-code-valid'), 'span_error');
                } else {
                    showValidatePromotionCodeError(locale === 'th' ? promotion_data_befor.result.message_th : promotion_data_befor.result.message, 'span_error');
                }
            }
            else {
                showPromotionCodeValid('', 'span_error');
                promotionCodeStatus = false;
            }
        });
    }

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
            $(`#data_${i}_ctrl_province`).innerHTML = '';
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

    let nationalID = [];


    const allField = $('#step3').querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, profileConstraints);
            for (let i = 1; i <= $('#ctrl_no_of_insured').value; i++) {
                if ([`data_${i}_fdName`, `data_${i}_fdSurname`, `data_${i}_fdNationalID`].includes(field.id)) {
                    validatePolicy(e.target, data.fdPackage, $('#fdFromDate')?.value);
                }
                if ([`data_${i}_ctrl_day`, `data_${i}_ctrl_month`, `data_${i}_ctrl_year`].includes(field.id)) {
                    removeError($(`#form_profile_${i} .controls-wrapper .date-input`));
                    let dateResult = iTravelCheckBirthDate(i);
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

    const office = $$(".officer");
    office.forEach($el => {
        $el.addEventListener('click', (e) => {
            e.preventDefault();
            $('.page-overlay').style.display = 'flex';
            $('#table-scroll').innerHTML = $('#table-detail').innerHTML;

            $$('#table-scroll td[data-package],#table-detail th[data-package]').forEach($el => {
                if ($el.getAttribute("data-package").startsWith(data.fdPackage)) {
                    $el.style.display = "inline-flex";
                } else {
                    $el.style.display = "none";
                }
            });

            let tb = document.getElementById("table-scroll");
            tb.getElementsByTagName("thead")[0].style.display = "none";
            tb.getElementsByTagName("tfoot")[0].style.display = "none";

        }, true);
    });
    const close = $(".page-overlay .close");
    close.addEventListener('click', (e) => {
        e.preventDefault();
        $('.page-overlay').style.display = 'none';
    }, true);


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
                            ctrl_travel_type: $('#ctrl_travel_type').value,
                            fdDestTo: $('#ctrl_travel_type').value === 'annual' ? zoneCode[$('#ctrl_sub_package').value] : $('#fdDestTo').value,
                            fdFromDate: $('#fdFromDate').value,
                            fdToDate: $('#fdToDate').value,
                            ctrl_accept_step1: $('#ctrl_accept_step1').checked ? true : undefined,
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

                        genPrice(package_data, countryData, $('#ctrl_sub_package').value, data.fdFromDate, data.fdToDate, $('#ctrl_travel_type').value);
                        genItemList(package_data, countryData, $('#ctrl_sub_package').value, data.fdFromDate, data.fdToDate);

                        break;
                    case 2:

                        const fdPackage = $btn.getAttribute('data-package');
                        $('#form-head').innerHTML = $btn.getAttribute('data-plan');
                        if (fdPackage) {
                            data = {
                                ...data,
                                fdPackage
                            }

                            const selectPrice = getSelectedPrice(data.fdPackage, package_data, data.fdFromDate, data.fdToDate);

                            if ($('#controller').value === 'product') {
                                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                                dataLayer.push({
                                    event: "add_to_cart",
                                    ecommerce: {
                                        currency: "THB",
                                        value: selectPrice,
                                        items: [{
                                            item_id: "iTravel_" + fdPackage,
                                            item_name: "iTravel Plan Code " + fdPackage,
                                            item_brand: "iTravel",
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
                        let profileData = [];
                        let promotion_data;
                        let priceTotal;
                        let promoCode;
                        status = true;

                        const selectPrice = getSelectedPrice(data.fdPackage, package_data, data.fdFromDate, data.fdToDate);
                        priceTotal = $('#ctrl_travel_type').value === 'annual' ? selectPrice : selectPrice * $('#ctrl_no_of_insured').value;

                        if ($('#controller').value === 'product' && promotionCodeStatus) {
                            promoCode = $('#ctrl_travel_type').value === 'annual' ? 'annual' + $('#fdPromotionCode').value : $('#fdPromotionCode').value;
                            promotion_data = await validatePromotionCode(promoCode, priceTotal, productCode);
                        }

                        removeError($('#step3'));

                        for (let i = 1; i <= $('#ctrl_no_of_insured').value; i++) {
                            let address = ($(`#data_${i}_ctrl_province`).value).split('*');
                            let dateResult = iTravelCheckBirthDate(i);

                            let valCheck = false;
                            valCheck = validatePolicyPayment($(`#data_${i}_fdNationalID`).value, data.fdPackage, $('#fdFromDate')?.value);
                            if (!valCheck) {
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

                            if ($('#controller').value === 'product' && promotionCodeStatus && $('#ctrl_travel_type').value === 'annual') {
                                if ($('#controller').value === 'product' && promotionCodeStatus) {
                                    if (promotion_data.result.codeAvailable >= i) {
                                        currentProfile.PromotionCode = $('#ctrl_travel_type').value + $('#fdPromotionCode').value;
                                        currentProfile.CampaignId = promotion_data.result.campaignId;
                                        currentProfile.CostAmount = selectPrice;
                                        currentProfile.StatusId = 2;
                                        currentProfile.TypeId = 1
                                    }
                                }
                            } else {
                                if ($('#controller').value === 'product' && promotionCodeStatus && i == 1) {
                                    if (promotion_data.result.codeAvailable >= i) {
                                        currentProfile.PromotionCode = $('#fdPromotionCode').value;
                                        currentProfile.CampaignId = promotion_data.result.campaignId;
                                        currentProfile.CostAmount = priceTotal;
                                        currentProfile.StatusId = 2;
                                        currentProfile.TypeId = 1
                                    }
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
                            fdPayAMT: selectPrice,
                            fdSendType: getRadioSelectedValue('fdSendType'),
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            profile: profileData,
                            fdDay: $('#days').value,
                            rpcNumber: 190
                        }
                        data = {
                            ...data,
                            fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                        }
                        result = validate(data, step3Constraints);

                        if (result) {
                            showError($('#step3'), result);
                        } else {
                            if ($('#controller').value === 'product') {
                                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                                dataLayer.push({
                                    event: "begin_checkout",
                                    ecommerce: {
                                        currency: "THB",
                                        value: priceTotal,
                                        items: [{
                                            item_id: "iTravel_" + data.fdPackage,
                                            item_name: "iTravel Plan Code " + data.fdPackage,
                                            item_brand: "iTravel",
                                            item_category: "Travel Insurance",
                                            price: priceTotal
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
                            <div></div>
                            <div><span>${$summary_section.getAttribute('data-total-price')} : </span><strong>${parseFloat(data.fdPayAMT * data.profile.length).toLocaleString()} ${$summary_section.getAttribute('data-baht')}</strong></div>
                            <div><span>${$summary_section.getAttribute('data-price-perperson')} : </span><strong>${parseFloat(data.fdPayAMT).toLocaleString()} ${$summary_section.getAttribute('data-baht')}</strong></div>

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
                            
                            ${$('#controller').value === 'product' && promotionCodeStatus && i == 0
                                    ? `<div class="controls-wrapper full no-lable"><span>${$('#lblfdPromotionCode').innerText} : </span><strong>${$('#fdPromotionCode').value} ${promotion_data.result.status ? `
                                ${promotion_data.result.codeAvailable < i + 1
                                            ? `<span id="promotion_code_alert" style="color: #e71618;">${locale === 'th' ? '(* โค้ดนี้ได้ถูกใช้ครบแล้ว)' : '(* The code has already been used.)'}</span>`
                                            : `<span id="promotion_code_alert" style="color: #008b06;">${locale === 'th' ? '(' + promotion_data.result.message_th + ')' : '(' + promotion_data.result.message + ')'}`}</span>`
                                        : `<span id="promotion_code_alert" style="color: #e71618;">${locale === 'th' ? '(* ' + promotion_data.result.message_th + ')' : '(* ' + promotion_data.result.message + ')'}</span>`} </strong>
                                </div>`
                                    : ''
                                }

                        </div><br/>`
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
