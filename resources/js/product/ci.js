import {
    changeStep,
    checkAge,
    formatTelNumber,
    getPackageData,
    showTitle,
    validateAgeInPackage
} from "../form/productHelper";
import {
    $,
    $$, calculateAge,
    current_package,
    getCheckedCheckboxesFor,
    getRadioSelectedValue,
    locale,
    scrollToTargetAdjusted
} from "../helper";

import {showFieldError, validateField} from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import {format, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');
require('../lib/rSlider.min');
if ($('#title_wrapper')) {
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
            }
        },
        fdSurname: {
            presence: {
                allowEmpty: false,
                message: "^" + $('#fdSurname').getAttribute('data-error-last_name')
            }
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
    };


    document.addEventListener("DOMContentLoaded", async () => {

        const package_data = await getPackageData(current_package);
        const genMinMax = (age) => {
            return Object.keys(package_data).reduce((returnValue, k) => {
                Object.keys(package_data[k].price).map((k1) => {

                    Object.values(package_data[k].price[k1]).map((v) => {
                        const digit = Math.pow(10, v.toString().length) / 10;
                        const [startAge, endAge] = k1.split('-');

                        if (age === undefined || (age >= startAge && age <= endAge)) {
                            if (returnValue.min === undefined || v < returnValue.min) {
                                returnValue.min = Math.floor(v / (digit)) * (digit);
                            }
                            if (returnValue.max === undefined || v > returnValue.max) {
                                returnValue.max = Math.ceil(v / (digit / 10)) * (digit / 10);
                            }
                        }

                    });

                });
                return returnValue;
            }, {min: undefined, max: undefined})
        }

        $$(".action-expand-col").forEach($el => {
            $el.addEventListener("click", function (e) {
                let result = e.target.closest('.expand').getElementsByClassName("package-number-ci");
                if (result[0].style.display === "none") {
                    result[0].style.display = 'block';
                    e.target.classList.add("on");
                } else {
                    result[0].style.display = 'none';
                    e.target.classList.remove("on");
                }
            });
        });


        let defaultValue = genMinMax();

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
            fdOccup: "",
            ctrl_province: "",
            ctrl_terms: "",
            ctrl_accept_insurance_term: "",
            ctrl_document_type: "",

            ctrl_buy_for: "",
            ctrl_budget: "",
            ctrl_disease: [],
            ctrl_protection_start_date: ""
        };
        let slideOption = {
            target: '#ctrl_budget',
            range: true,
            tooltip: true,
            scale: true,
            labels: false,
            step: 2000,
            tooltipFormat: (value) => value.toLocaleString(),
            values: {min: defaultValue.min, max: defaultValue.max},
            disabled: true,
            set: [defaultValue.min, defaultValue.max],
        };


        const $$checkDup = $$('#fdName,#fdSurname,#fdNationalID');

        if ($$checkDup) {
            let CheckType = '';
            const $fdName = $('#fdName')
            const $fdSurname = $('#fdSurname');
            const $fdNationalID = $('#fdNationalID');
            let display = 'none';

            $$checkDup.forEach($el => {
                $el.addEventListener("change", function (e) {
                    if ($fdNationalID.value && $fdName.value && $fdSurname.value && data.fdPackage) {
                        CheckType = 'DUP';
                        let str_disease = data.ctrl_disease.join('').replace("F", "")
                        let data_post = {
                            fdNationalID: $fdNationalID.value,
                            fdName: $fdName.value,
                            fdSurname: $fdSurname.value,
                            fdPackage: data.fdPackage + str_disease,
                            CheckType: CheckType
                        };

                        fetch('/th/Product/checkDup', {
                            method: 'post',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                            },
                            body: JSON.stringify(data_post)
                        }).then(response => response.json())
                            .then(data => {
                                const listFd = ["fdNationalID", "fdName", "fdSurname"];


                                listFd.some(ell => {
                                    let c = data.status.includes(ell)
                                    console.log(ell)
                                    if (c) {
                                        $(`#${ell}`).closest('.controls-wrapper').classList.add('error')

                                        $(`#${ell}`).closest('.controls-wrapper').innerHTML += `<cite>${data.status}</cite>`
                                    }
                                });

                            });


                    }
                });
            });

        }


        let budget_slider = new rSlider(slideOption);

        const genRangeSlidByHbd = () => {
            const validateResult = validateAgeInPackage(package_data, false);

            if (validateResult.status) {

                let callMinMax = genMinMax(validateResult.data.fdAge);
                budget_slider.destroy();

                budget_slider = new rSlider({
                    ...slideOption,
                    values: callMinMax,
                    set: [callMinMax.min, callMinMax.max],
                    disabled: false
                });
            }


        }

        $$('#ctrl_day,#ctrl_year,#ctrl_month').forEach($el => {
            $el.addEventListener($el.tagName.toLowerCase() === 'input' ? "keyup" : "change", event => {
                genRangeSlidByHbd();
            });
        })


        const hideRow = () => {
            $$("span[data-disease]").forEach($el => {
                switch ($el.getAttribute('data-disease')) {
                    case 'd':
                        $el.closest("tr").style.display = "none";
                        break;
                    default:
                        $el.style.display = "none";
                        break;
                }

            });
        }

        const showRow = () => {
            data.ctrl_disease.map(k => {
                switch (k) {
                    case 'd':
                        $$("span[data-disease='d']").forEach($el => {
                            $el.closest("tr").style.display = "table-row";
                        });
                        break;
                    default:
                        $$("span[data-disease='" + k + "']").forEach($el => {
                            $el.style.display = "block";
                        });
                        break;
                }
            })
        }

        const genPrice = () => {
            let pricelist;
            if (data.fdHBD) {

                pricelist = Object.keys(package_data)
                    .filter(k => _.startsWith(k, current_package))
                    .map(k => {
                        const pack = Object.keys(package_data[k].price).filter(ageRange => checkAge(data.fdHBD, ageRange))
                        const price = package_data[k].price[pack][data.ctrl_disease.join("")];
                        const installment = Math.ceil(parseInt(price) / 12);
                        $(`strong[data-price-${k}]`).innerHTML = parseInt(price).toLocaleString();
                        $(`span[data-price-${k}]`).innerHTML = parseInt(price).toLocaleString();
                        $(`strong[data-installment-${k}]`).innerHTML = installment.toLocaleString();
                        return {package: k, price}
                    });

                recommendProduct(pricelist)

                basePrice(package_data);
            }

            hideRow();
            showRow();

            return pricelist;
        }

        const basePrice = (package_data) => {
            let last = Object.keys(package_data).pop();

            $$("th[data-package='" + last + "']").forEach($el => {
                $el.classList.add("basePrice");
            });

            $$(".choose-plan-mobile a[data-package='" + last + "'] ").forEach($el => {
                $el.classList.add("basePrice");
            });
        }
        const recommendProduct = (dataRecommend) => {

            const [min, max] = data.ctrl_budget.split(",")
            const dataRecommendMax = dataRecommend.reduce((recPackage, v) => {
                if ((v.price <= max && v.price >= min)
                    || v.price < min) {
                    return v;
                }
                return recPackage;
            }, dataRecommend[0])


            $$("th.recommendPackage,td.recommendPackage,a.btn-choose-plan,td[data-package").forEach($el => {
                $el.classList.remove("recommendPackage", "on");
                $el.classList.add("hide");
            });

            $$("th[data-package='" + dataRecommendMax.package + "']," +
                "td[data-package='" + dataRecommendMax.package + "']," +
                "a[data-package='" + dataRecommendMax.package + "']").forEach($el => {
                $el.classList.add("recommendPackage", "on");
                $el.classList.remove("hide");
            });
        }


        const getSelectedPrice = () => {
            const pack = Object.keys(package_data[data.fdPackage].price)
                .filter(ageRange => checkAge(data.fdHBD, ageRange))
            return package_data[data.fdPackage].price[pack][data.ctrl_disease.join("")];
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


        const $form = $('#step3');
        const allField = $form.querySelectorAll('input,select,textarea');
        allField.forEach(field => {
            field.addEventListener("change", function (e) {
                validateField(this, constraints);
            });
        });

        $$(".checkbox_disease").forEach($el => {
            $el.addEventListener("change", function (e) {

                data = {
                    ...data,
                    ctrl_disease: getCheckedCheckboxesFor("ctrl_disease")
                }


                genPrice();
            });
        });


        const hideShowDiseaseBox = (goToStep) => {
            switch (parseInt(goToStep)) {
                case 1:
                    $('#disease_box').style.display = "block";
                    $('.goto-step1').style.display = "block";
                    break;

                case 2:
                    $('#disease_box').style.display = "block";
                    $('.goto-step1').style.display = "none";
                    break;
                default:
                    $('#disease_box').style.display = "none";
                    break;
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
                        hideShowDiseaseBox(goToStep);
                    } else {
                        switch (parseInt(step)) {
                            case 1:
                                const validateResult = validateAgeInPackage(package_data, false);
                                status = validateResult.status;
                                if (validateResult.status) {
                                    data = {
                                        ...data,
                                        ...validateResult.data,
                                        ctrl_buy_for: $("#ctrl_buy_for").value,
                                        fdOccup: $("#fdOccup").value,
                                        ctrl_budget: budget_slider.getValue(),
                                        ctrl_disease: getCheckedCheckboxesFor("ctrl_disease")
                                    }

                                    genPrice();
                                    hideShowDiseaseBox(goToStep);
                                } else {
                                    scrollToTargetAdjusted($('.controls-wrapper.error'));
                                }

                                let el = $('h3[data-type]');

                                el.innerHTML = "";

                                if ($("#ctrl_buy_for").value == 'own_insurance') {
                                    el.innerHTML = el.dataset.own_insurance;

                                } else {
                                    el.innerHTML = el.dataset.other_insurance;
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
                                    hideShowDiseaseBox(goToStep);
                                    $('.goto-step1').style.display = "none";
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
                                    fdRevenue: $('#fdRevenue').checked ? 'Y' : 'N',
                                    fdTaxno: $('#fdTaxno').value,
                                    fdPayAMT: getSelectedPrice(),
                                    ctrl_terms: $('#ctrl_terms').checked ? true : undefined,
                                    ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                                    ctrl_document_type: $('#ctrl_document_type').value,
                                    ctrl_province: $('#ctrl_province').value,
                                    ctrl_protection_start_date: today
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
                        <div class="controls-wrapper full no-lable"><span>${$('[data-disease_title]').getAttribute('data-disease_title')} : </span><strong>${data.ctrl_disease.map(text => {
                                        return $(`input[data-disease-${text}]`).getAttribute(`data-disease-${text}`);
                                    }).join(", ")}</strong></div>
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
                                    hideShowDiseaseBox(goToStep);
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


}
