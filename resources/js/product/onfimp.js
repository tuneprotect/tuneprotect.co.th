import {
    changeStep,
    formatTelNumber,
    getPackageData,
    showTitleOnly, 
    validatePolicy,
    validatePolicyLoc, 
    validatePolicyPayment,
    formatInputFieldByLanguage,
    formatInputFieldOnlyNumberic,
    formatInputFieldOnlyCharecter,
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
            }
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
    fdAddr_Home: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#fdAddr_Home').getAttribute('data-error-address_home')
        },
        format: formatInputFieldByLanguage()
    },
    fdAddr_Moo: {
        format: formatInputFieldOnlyNumberic()
    },
    fdAddr_Village: {
        format: formatInputFieldByLanguage()
    },
    fdAddr_Building: {
        format: formatInputFieldByLanguage()
    },
    fdAddr_Floor: {
        format: formatInputFieldOnlyNumberic()
    },
    fdAddr_Alley: {
        format: formatInputFieldByLanguage()
    },
    fdAddr_Street: {
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
    loc_fdAddr_Home: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#loc_fdAddr_Home').getAttribute('data-error-address_home')
        },
        format: formatInputFieldByLanguage()
    },
    loc_fdAddr_Moo: {
        format: formatInputFieldOnlyNumberic()
    },
    loc_fdAddr_Village: {
        format: formatInputFieldByLanguage()
    },
    loc_fdAddr_Building: {
        format: formatInputFieldByLanguage()
    },
    loc_fdAddr_Floor: {
        format: formatInputFieldOnlyNumberic()
    },
    loc_fdAddr_Alley: {
        format: formatInputFieldByLanguage()
    },
    loc_fdAddr_Street: {
        format: formatInputFieldByLanguage()
    },
    loc_fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#loc_fdAddr_District').getAttribute('data-error-district')
        },
        format: formatInputFieldByLanguage()
    },
    loc_ctrl_province: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#loc_ctrl_province').getAttribute('data-error-province')
        }
    },
    loc_fdAddr_PostCode: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#loc_fdAddr_PostCode').getAttribute('data-error-postal_code')
        },
        format: formatInputFieldOnlyNumberic()
    }
};

const checkTaBirthDate = () => {

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

const getSelectedPricePackage = (packageCode, package_data) => {
    return package_data[packageCode].price;
}

const genItemList = (package_data, packageSelect) => {

    let index = 0;
    const itemList = [];

    if (package_data) {
        Object.keys(package_data)
            .filter(k => _.startsWith(k, packageSelect))
            .map(k => {
                
                const price = parseInt(package_data[k].price).toLocaleString();
                const planCode = Object.keys(package_data)[index];

                const item = {
                    item_id: "",
                    item_name: "",
                    item_brand: "",
                    item_category: "",
                    price: "",
                };

                item.item_id = "myHomePlus_" + planCode;
                item.item_name = "myHome Plus Plan Code " + planCode;
                item.item_brand = "myHome Plus";
                item.item_category = "Fire Insurance";
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

document.addEventListener("DOMContentLoaded", async () => {
    const package_data = await getPackageData(current_package);

    let Redeem_Code = "";
    if(document.getElementById("redeem_code")){
        Redeem_Code= document.getElementById("redeem_code").value;
        if(document.getElementById("massage_error")){
            let msg_error= document.getElementById("massage_error").value;
            if(msg_error != '')
            {
                Swal.fire({
                    title: 'Error!',
                    text: msg_error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                status = false;
            }
        }
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


    const $form = $('#step3');
    const allField = $form.querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['fdNationalID', 'loc_fdAddr_Home'].includes(field.id)) {
                validatePolicyLoc(e.target, data.fdPackage,$('#fdFromDate')?.value);
            }

            if (['fdName', 'fdSurname', 'fdNationalID'].includes(field.id)) {
                validatePolicy(e.target, data.fdPackage);
            }

            if ([`ctrl_day`, `ctrl_month`, `ctrl_year`].includes(field.id)) {
                removeError($(`.insurance-form .controls-wrapper .date-input`));
                checkTaBirthDate();
            }

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
    $(`input[name=loc_fdAddr_PostCode]`).addEventListener("change", function (e) {
        const value = e.target.value;
        if (value.length === 5) {
            const location_data = zipcode_data[value];
            if (location_data !== undefined) {
                let items = ['<option value="">' + $(`#loc_ctrl_province`).getAttribute('data-please-select') + '</option>'];

                location_data.map(v => {
                    items.push(`<option value="${v.district.code}">${v.district.locales[locale]}, ${v.province.locales[locale]}</option>`);
                });
                $(`#loc_ctrl_province`).innerHTML = items.join('');
            }
        }
    });

    const $address_dup = $('#fdAddressDup');
    if ($address_dup) {
        $address_dup.addEventListener("click", function (e) {
            if ($address_dup.checked) {

                let el = document.getElementById('loc_fdAddr_Home');
                el.value= $('#fdAddr_Home').value;
                el.dispatchEvent(new Event('change'));

                $('#loc_fdAddr_Moo').value = $('#fdAddr_Moo').value;
                $('#loc_fdAddr_Village').value = $('#fdAddr_Village').value;
                $('#loc_fdAddr_Building').value = $('#fdAddr_Building').value;
                $('#loc_fdAddr_Floor').value = $('#fdAddr_Floor').value;
                $('#loc_fdAddr_Alley').value = $('#fdAddr_Alley').value;
                $('#loc_fdAddr_Street').value = $('#fdAddr_Street').value;
                $('#loc_fdAddr_District').value = $('#fdAddr_District').value;
                $('#loc_fdAddr_PostCode').value = $('#fdAddr_PostCode').value;

                const value = $('#loc_fdAddr_PostCode').value;
                if (value.length === 5) {
                    const location_data = zipcode_data[value];
                    if (location_data !== undefined) {
                        let items = ['<option value="">' + $(`#ctrl_province`).getAttribute('data-please-select') + '</option>'];

                        location_data.map(v => {
                            items.push(`<option value="${v.district.code}">${v.district.locales[locale]}, ${v.province.locales[locale]}</option>`);
                        });
                        $(`#loc_ctrl_province`).innerHTML = items.join('');
                    }
                }
                $('#loc_ctrl_province').value = $('#ctrl_province').value;

            }
        });
    }

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
        fdTerms: "",

        fdAddr_Home: "",
        loc_fdAddr_Moo: "",
        fdAddr_Village: "",
        fdAddr_Building: "",
        fdAddr_Floor: "",
        fdAddr_Alley: "",
        fdAddr_Street: "",
        fdAddr_District: "",
        fdAddr_PostCode: "",
        fdAddr_Amphur: "",
        fdProvince: "",
        fdAddr_Num: "",

        loc_fdAddr_Home: "",
        loc_fdAddr_Moo: "",
        loc_fdAddr_Village: "",
        loc_fdAddr_Building: "",
        loc_fdAddr_Floor: "",
        loc_fdAddr_Alley: "",
        loc_fdAddr_Street: "",
        loc_fdAddr_District: "",
        loc_fdAddr_PostCode: "",
        loc_fdAddr_Amphur: "",
        loc_fdAddr_Province: "",
        loc_fdAddr_Num: "",

        loc_fdBuilding: "",
        loc_fdOwner: "",
        fdUniqKey:Redeem_Code

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

                        genItemList(package_data, $('#ctrl_fire_building').value);
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

                        let Redeem_Code = "";
                        if(document.getElementById("redeem_code")){
                            Redeem_Code= document.getElementById("redeem_code").value;
                            if(document.getElementById("massage_error")){
                                let msg_error= document.getElementById("massage_error").value;
                                if(msg_error != '')
                                {
                                    Swal.fire({
                                        title: 'Error!',
                                        text: msg_error,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                    })
                                    status = false;
                                }
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

                            const selectPrice = getSelectedPricePackage(data.fdPackage, package_data);

                            if ($('#controller').value === 'product') 
                            {
                                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                                dataLayer.push({
                                    event: "add_to_cart",
                                    ecommerce: {
                                        currency: "THB",
                                        value: selectPrice,
                                        items: [{
                                            item_id: "myHomePlus_" + fdPackage,
                                            item_name: "myHome Plus Plan Code " + fdPackage,
                                            item_brand: "myHome Plus",
                                            item_category: "Fire Insurance",
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
                        let valCheck = false;
                        valCheck = validatePolicyPayment($('#fdNationalID').value,data.fdPackage,$('#fdFromDate')?.value);
                        if(!valCheck)
                        {
                            status = false;
                            return false;
                        }

                        status = true;
                        removeError($('#step3'));

                        let address = ($('#ctrl_province').value).split('*');
                        let address2 = ($('#loc_ctrl_province').value).split('*');
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
                            fdSendType: getRadioSelectedValue('fdSendType'),
                            fdBenefit: $('#fdBenefit').value,
                            fdBenefit_name: $('#fdBenefit_name').value,
                            fdRelation: $('#fdRelation').value,
                            // fdRevenue: $('#fdRevenue').checked ? 'Y' : 'N',
                            // fdTaxno: $('#fdTaxno').value,
                            fdPayAMT: getSelectedPricePackage(data.fdPackage, package_data),
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,

                            fdAddr_Home: $('#fdAddr_Home').value,
                            fdAddr_Moo: $('#fdAddr_Moo').value,
                            fdAddr_Village: $('#fdAddr_Village').value,
                            fdAddr_Building: $('#fdAddr_Building').value,
                            fdAddr_Floor: $('#fdAddr_Floor').value,
                            fdAddr_Alley: $('#fdAddr_Alley').value,
                            fdAddr_Street: $('#fdAddr_Street').value,
                            fdAddr_District: $('#fdAddr_District').value,
                            fdAddr_PostCode: $('#fdAddr_PostCode').value,
                            fdAddr_Amphur: $('#ctrl_province').value,
                            ctrl_province: $('#ctrl_province').value,
                            fdProvince: address[0],

                            loc_fdAddr_Home: $('#loc_fdAddr_Home').value,
                            loc_fdAddr_Moo: $('#loc_fdAddr_Moo').value,
                            loc_fdAddr_Village: $('#loc_fdAddr_Village').value,
                            loc_fdAddr_Building: $('#loc_fdAddr_Building').value,
                            loc_fdAddr_Alley: $('#loc_fdAddr_Alley').value,
                            loc_fdAddr_Floor: $('#loc_fdAddr_Floor').value,
                            loc_fdAddr_Street: $('#loc_fdAddr_Street').value,
                            loc_fdAddr_District: $('#loc_fdAddr_District').value,
                            loc_fdAddr_PostCode: $('#loc_fdAddr_PostCode').value,
                            loc_fdAddr_Amphur: $('#loc_ctrl_province').value,
                            loc_ctrl_province: $('#loc_ctrl_province').value,
                            loc_fdAddr_Province: address2[0],

                            fdAccept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            fdTerms: $('#ctrl_terms').checked ? true : undefined,
                            loc_fdBuilding: $('#ctrl_fire_building').value,
                            loc_fdOwner: $('#ctrl_fire_owner').value,
                        }
                        data = {
                            ...data,
                            fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                        }



                        //=========================================================================================================
                        //address insure
                        let address_insure = "";
                        let fdAddr_Num = "";
                        let label_home = $('label[for=fdAddr_Home]').innerText;
                        label_home = label_home.replace("*", "");
                        address_insure = label_home + data.fdAddr_Home;
                        if(data.fdAddr_Moo != "")
                        {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Moo]').innerText + data.fdAddr_Moo;
                        }
                        if(data.fdAddr_Village != "")
                        {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Village]').innerText + data.fdAddr_Village;
                        }
                        if(data.fdAddr_Building  != "")
                        {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Building]').innerText + data.fdAddr_Building;
                        }
                        if(data.fdAddr_Floor  != "")
                        {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Floor]').innerText + data.fdAddr_Floor;
                        }
                        if(data.fdAddr_Alley  != "")
                        {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Alley]').innerText + data.fdAddr_Alley;
                        }
                        if(data.fdAddr_Street  != "")
                        {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Street]').innerText + data.fdAddr_Street;
                        }

                        let label_district = $('label[for=fdAddr_District]').innerText;
                        label_district = label_district.replace("*", "");

                        if(data.fdProvince == "00")
                        {
                            label_district = label_district.replace("แขวง / ตำบล", "แขวง");
                        }
                        else
                        {
                            label_district = label_district.replace("แขวง / ตำบล", "ตำบล");
                        }

                        address_insure = " " + address_insure + ", " + label_district + data.fdAddr_District;
                        fdAddr_Num = address_insure;

                        const $ddlProvince = $('#ctrl_province');
                        if ($ddlProvince.options.length) {
                            const province = $ddlProvince.options[$ddlProvince.selectedIndex].text;
                            address_insure = " " + address_insure + ", " + province.replace(",", "") + " " + data.fdAddr_PostCode;
                        }
                        // fdAddr_Num = address_insure;
                        //=========================================================================================================
                        //location insure
                        let loc_address_insure = "";
                        let loc_fdAddr_Num="";
                        let loc_label_home = $('label[for=loc_fdAddr_Home]').innerText;
                        loc_label_home = loc_label_home.replace("*", "");
                        loc_address_insure = loc_label_home + data.loc_fdAddr_Home;
                        if(data.loc_fdAddr_Moo  != "")
                        {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Moo]').innerText + data.loc_fdAddr_Moo;
                        }
                        if(data.loc_fdAddr_Village  != "")
                        {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Village]').innerText + data.loc_fdAddr_Village;
                        }
                        if(data.loc_fdAddr_Building  != "")
                        {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Building]').innerText + data.loc_fdAddr_Building;
                        }
                        if(data.loc_fdAddr_Floor  != "")
                        {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Floor]').innerText + data.loc_fdAddr_Floor;
                        }
                        if(data.loc_fdAddr_Alley  != "")
                        {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Alley]').innerText + data.loc_fdAddr_Alley;
                        }
                        if(data.loc_fdAddr_Street  != "")
                        {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Street]').innerText + data.loc_fdAddr_Street;
                        }

                        let loc_label_district = $('label[for=loc_fdAddr_District]').innerText;
                        loc_label_district = loc_label_district.replace("*", "");
                        if(data.loc_fdAddr_Province == "00")
                        {
                            loc_label_district = loc_label_district.replace("แขวง / ตำบล", "แขวง");
                        }
                        else
                        {
                            loc_label_district = loc_label_district.replace("แขวง / ตำบล", "ตำบล");
                        }

                        loc_address_insure = " " + loc_address_insure + ", " + loc_label_district + data.loc_fdAddr_District;
                        // loc_fdAddr_Num = loc_address_insure;

                        const $loc_ddlProvince = $('#loc_ctrl_province');
                        if ($loc_ddlProvince.options.length) { 
                            const loc_province = $loc_ddlProvince.options[$loc_ddlProvince.selectedIndex].text;
                            loc_address_insure = " " + loc_address_insure + ", " + loc_province.replace(",", "")  + " " + data.loc_fdAddr_PostCode;
                        }
                        
                        loc_fdAddr_Num = loc_address_insure;
                        //=========================================================================================================

                        data = {
                            ...data,
                            fdAddr_Num: fdAddr_Num,
                            loc_fdAddr_Num: loc_fdAddr_Num
                        }

                        //=========================================================================================================

                        const result = validate(data, constraints);
                        if (result) {
                            Object.keys(result).map(k => {
                                let $elm = $(`[name=${k}]`);
                                showFieldError($elm, result[k])
                            });
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
                                            item_id: "myHomePlus_" + data.fdPackage,
                                            item_name: "myHome Plus Plan Code " + data.fdPackage,
                                            item_brand: "myHome Plus",
                                            item_category: "Fire Insurance",
                                            price: data.fdPayAMT
                                        }]
                                    }
                                });
                            }
                        }
                        // if (result) {
                        //     showError($('#step3'), result);
                        // }

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

                        const dob = format(parseISO(data.fdHBD), 'dd/MM/') + (locale === 'th' ? (parseInt(format(parseISO(data.fdHBD), 'yyyy')) + 543) : format(parseISO(data.fdHBD), 'yyyy'))

                        const selectedPackage = $('#step3 .form-head').innerHTML;
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
                        <div class="controls-wrapper full no-lable">
                        <span>${$('label[for=fdAddr_Address_Data]').innerText} : </span>
                            <strong>${address_insure}</strong>
                        </div>
                        <div class="controls-wrapper full no-lable">
                        <span>${$('label[for=loc_fdAddr_Address_Data]').innerText} : </span>
                            <strong>${loc_address_insure}</strong>
                        </div>
                        <div class="controls-wrapper full no-lable"><span>${$('#beneficiary_header').innerText} : </span><strong>${data.fdBenefit === 'other' ? data.fdBenefit_name + ' (' + data.fdRelation + ')' : data.fdBenefit}</strong></div>
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

