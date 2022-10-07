import {
    changeStep,
    formatTelNumber,
    getPackageData,
    showTitleOnly, validatePolicy,
    validatePolicyLoc, validatePolicyPayment
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

import { removeError, showError, showFieldError, validateField } from "../validate_form";
import Swal from "sweetalert2";
import validate from "validate.js";
import { addDays, addYears, format, isValid, parseISO, subDays } from "date-fns";
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
    // fdRevenue: "",
    // fdTaxno: function (value, attributes, attributeName, options, constraints) {
    //     if (attributes.fdRevenue === 'N') return null;
    //     return {
    //         presence: {
    //             allowEmpty: false,
    //             message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-require')
    //         },
    //         length: {
    //             is: 13,
    //             message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-format')
    //         },
    //         format: {
    //             pattern: /^[0-9]{13}$/,
    //             message: "^" + $('#fdTaxno').getAttribute('data-error-tax_no-format')
    //         },
    //     };
    // },
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
    loc_fdAddr_Home: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#loc_fdAddr_Home').getAttribute('data-error-address_home')
        }
    },
    loc_fdAddr_District: {
        presence: {
            allowEmpty: false,
            message: "^" + $('#loc_fdAddr_District').getAttribute('data-error-district')
        }
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
        }
    },
    // ,
    // fdAddress2_Home: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_Home').getAttribute('data-error-home')
    //     }
    // }
    // ,fdAddress2_Village: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_Village').getAttribute('data-error-village')
    //     }
    // },
    // fdAddress2_Alley: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_Alley').getAttribute('data-error-alley')
    //     }
    // },
    // fdAddress2_Road: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_Road').getAttribute('data-error-road')
    //     }
    // },
    // fdAddress2_District: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_District').getAttribute('data-error-district')
    //     }
    // },
    // fdAddress2_PostCode: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_PostCode').getAttribute('data-error-postal_code')
    //     }
    // },
    // fdAddress2_ctrl_province: {
    //     presence: {
    //         allowEmpty: false,
    //         message: "^" + $('#fdAddress2_ctrl_province').getAttribute('data-error-province')
    //     }
    // }
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
        return { status: false };
    }
    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showDateError($('#ctrl_day').getAttribute('data-error-format'));
        return { status: false };
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



    let Redeem_Code = "";
    if (document.getElementById("redeem_code")) {
        Redeem_Code = document.getElementById("redeem_code").value;
        if (document.getElementById("massage_error")) {
            let msg_error = document.getElementById("massage_error").value;
            if (msg_error != '') {
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


    const $form = $('#step3');
    const allField = $form.querySelectorAll('input,select,textarea');
    allField.forEach(field => {
        field.addEventListener("change", function (e) {
            validateField(this, constraints);
            if (['fdNationalID', 'loc_fdAddr_Home'].includes(field.id)) {
                console.log(e.target, data.fdPackage, $('#fdFromDate')?.value);
                validatePolicyLoc(e.target, data.fdPackage, $('#fdFromDate')?.value);
            }

            if (['fdName', 'fdSurname', 'fdNationalID'].includes(field.id)) {
                validatePolicy(e.target, data.fdPackage);
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



    let MyHomeSmart = [];
    let oneYear = [];
    let treeYear = [];
    let drpCompensation = [];
    let drpCompensationText = [];
    let dep1 = "1";
    let dep3 = "1";

    let p_packget="";
    let p_price="";
    let p_price1="";
    let p_price3="";
    let P = "P", G = "G", C = "C", T = "T", D = "D", L = "L", R = "R";
    let code = `FN${P}${G}${C}${T}${D}A${L}${R}1`;
    let amount = sessionStorage.getItem("amount");


    /*
    $$("select[name=ctrl_fire_building]").forEach($el => {
        $el.addEventListener("change", function (e) { 
            if(e.target.value !="ONMHS3"){
                code= `FN${P}${G}${C}${T}${D}A${L}${R}1`;
            }else{
                code= `FN${P}${G}${C}${T}${D}AXX`;
            }  
            changeTextPremium(e.target.value);
            //alert(e.target.value);
            sumTotal(code);
        });
    });
    /*
    $$("select[name=ctrl_insurer_capital]").forEach($el => {
        $el.addEventListener("change", function (e) {            
            changeTextAmount(e.target.value);
            apiMyHomeSmart(e.target.value);
            //alert(e.target.value);
        });
    });
*/
    
    
    
    
    

    
    const sumTotal = async (packageSelect) => {
        //alert(packageSelect)
        try {

            console.log("packageSelect",packageSelect);
            let js = MyHomeSmart;
            const result = JSON.parse(js);
            for (let i = 0; i < result.length; i++) {

                if (result[i].TAGNAME.trim() == packageSelect && result[i].FIRE == amount) {
                    apiMyHomeSmart1y(result[i].id);
                    apiMyHomeSmart3y(result[i].id);
                    
                }
               
            }
        } catch (err) {
            console.log("sumTotal", err);
            Swal.fire(
                {
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                }
            )
        }

        $form.classList.remove('ajax_loader');
    }
    //sessionStorage.setItem("itemCode",code);

    /* dum-soken 20220914
    const changeTextAmount = (packageSelect) => {
        let select = $('#ctrl_insurer_capital');
        let cover_amount = select.options[select.selectedIndex].value;
        $("#fdAccording").value = parseInt(cover_amount*0.8);;
        $("#fdContent").value = parseInt(cover_amount*0.2);;
        
    }
    */

   




    let package_1year="1";
    let package_3year="1";
    //let P = "P", G = "G", C = "C", T = "T", D = "D", L = "L", R = "R";
    let package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}1`;
    let package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}1`;
    let package_amount="500000";
    let amount1y =[];
    let amount3y =[];

    let net1='';
    let net3='';
    let stamp1='';
    let stamp3='';

    let vat1='';
    let vat3='';

    let total1 = '';
    let total3 = '';
    let c_sum='';

    let data_result_1y = [];
    let data_result_3y = [];

    let data_result_amount_1y = [];
    let data_result_amount_3y = [];
    /* Step 1 */
    $$("select[name=ctrl_fire_building]").forEach($el => {
        $el.addEventListener("change", function (e) { 
            if(e.target.value !="ONMHS3"){
                package_code_1y= 'FNPGCTDALR1';
                package_code_3y= 'FNPGCTDALR1';
            }else{
                package_code_1y= 'FNPGCTDAXX';
                package_code_3y= 'FNPGCTDAXX';
            }  
            setDataStep1(e.target.value);
        });
    });
    $$("select[name=ctrl_insurer_capital]").forEach($el => {
        $el.addEventListener("change", function (e) {  
            package_amount=e.target.value;          
            changeTextAmount();
            setData();
        });
    });
    $$("button[id=btnStep1]").forEach($el => {
        $el.addEventListener("click", function (e) {   
            let arr = document.getElementsByClassName("error");
            if(arr.length==0){
                setData();
                //console.log("package_code",package_code_1y);
            }
        });
    });
    /* End Step 1 */

    /* Step 2 */
    $$("select[id=drpCompensation1]").forEach($el => {
        $el.addEventListener("change", function (e) {            
            var checkBox = document.getElementById("check_rate_9");
            if (checkBox.checked == true){
                package_1year = e.target.value == 10000 ? '1' : e.target.value == 15000 ? '2' : '3';
            }            
            getDataAmount1y(package_1year);
        });
    });
    $$("select[id=drpCompensation3]").forEach($el => {
        $el.addEventListener("change", function (e) {            
            var checkBox = document.getElementById("check_rate_9");
            if (checkBox.checked == true){
                package_3year = e.target.value == 10000 ? '1' : e.target.value == 15000 ? '2' : '3';
            }
            getDataAmount3y(package_3year);
        });
    });
    

    const getDataAmount1y = (package_1year) => { 
        const result = MyHomeSmart;
        if(package_1year!=""){
            package_code_1y = package_code_1y.slice(0, -1)+package_1year;
        }
        console.log("package_code1",package_code_1y);
        //console.log("package_code1",package_code,package_1year);
        const results = result.filter(element => {
            return element.TAGNAME === package_code_1y && element.FIRE == package_amount;
        });
        
        data_result_1y = results;
        console.log("results1",data_result_1y);
        const result_1y = amount1y.filter(element => {
            return element.myhome_id === results[0].id;
        });
        //data_result_1y = result_1y;
        data_result_amount_1y = result_1y;
        net1=numberWithCommas(result_1y[0].Net);
        document.getElementById("txtAmount1").value = numberWithCommas(result_1y[0].Total);

        
    }
    const getDataAmount3y = (package_3year) => { 
        const result = MyHomeSmart;        
        if(package_3year!=""){
            package_code_3y = package_code_3y.slice(0, -1)+package_3year;
        }
        const results = result.filter(element => {
            return element.TAGNAME === package_code_3y && element.FIRE == package_amount;
          });      
        //console.log("package_code",package_code);
        data_result_3y = results;
        console.log("results3",data_result_3y);
        const result_3y = amount3y.filter(element => {
            return element.myhome_id === results[0].id;
        });
        data_result_amount_3y = result_3y;
        //console.log("result_3y",result_3y);
        //data_result_3y = result_3y;
        net3=numberWithCommas(result_3y[0].Net);
        document.getElementById("txtAmount3").value = numberWithCommas(result_3y[0].Total);
        
    }


    $$("input[id=check_rate_3]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (e.target.checked) {
                //code.format("{0}", e.target.value)
                P = e.target.value;
            } else {
                P = "X";
            }
            package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
            package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });
    $$("input[id=check_rate_4]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (e.target.checked) {
                //code.format("{0}", e.target.value)
                G = e.target.value;
            } else {
                G = "X";
            }
            package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
            package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });
    $$("input[id=check_rate_5]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (e.target.checked) {
                //code.format("{0}", e.target.value)
                C = e.target.value;
            } else {
                C = "X";
            }
            package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
            package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });

    $$("input[id=check_rate_6]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (e.target.checked) {
                //code.format("{0}", e.target.value)
                T = e.target.value;
            } else {
                T = "X";
            }
            package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
            package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });

    $$("input[id=check_rate_7]").forEach($el => {
        $el.addEventListener("change", function (e) {
            
            if (e.target.checked) {
                D = e.target.value;
            } else {
                D = "X";
            }
            package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
            package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });
    
    $$("input[id=check_rate_9]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (e.target.checked) {
                
                var compen_1 = document.getElementById("drpCompensation1");
                package_1year = compen_1.value == 10000 ? '1' : compen_1.value == 15000 ? '2' : '3';

                var compen_3 = document.getElementById("drpCompensation3");
                package_3year = compen_3.value == 10000 ? '1' : compen_3.value == 15000 ? '2' : '3';
                R='R';
                package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
                package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            } else {
                R='X';
                package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`;
                package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`;
                package_1year="";
                package_3year="";
            }
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });
    $$("input[id=check_rate_10]").forEach($el => {
        $el.addEventListener("change", function (e) {
            if (e.target.checked) {
                L = e.target.value;
            } else {
                L = "X";
            }
            package_code_1y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_1year;
            package_code_3y = `FN${P}${G}${C}${T}${D}A${L}${R}`+package_3year;
            
            getDataAmount1y(package_1year);
            getDataAmount3y(package_3year);
        });
    });
    /* End Step 2 */
    /* Step 3 */
    let chkBtn1=0; 
    let chkBtn2=0; 
    var btn = document.getElementById("step_4");
                

    var btnStep3 = document.getElementById("btnStep3");
    $$("select[id=ctrl_province]").forEach($el => {
        $el.addEventListener("change", function (e) {
            
            const result = block_list.filter(element => {
                return element.AmphurCode === e.target.value;
            });
            var element = document.getElementById("msgErrBlock");
            
            if(result!=""){               
                element.classList.remove("d-none");
                btnStep3.classList.add("d-none");
                chkBtn1=1;
            }else{
                element.classList.add("d-none");
                btnStep3.classList.remove("d-none");
                chkBtn1=0;
            }
            if(chkBtn1==1 || chkBtn2==1){
                btnStep3.classList.add("d-none");
                btn.classList.add("step-disable");
            }
        });
    });
    $$("select[name=loc_ctrl_province]").forEach($el => {
        $el.addEventListener("change", function (e) {
            const result = block_list.filter(element => {
                return element.AmphurCode === e.target.value;
            });
            var element = document.getElementById("loc_msgErrBlock");
            if(result!=""){               
                element.classList.remove("d-none");
                btnStep3.classList.add("d-none");
                chkBtn2=1;
            }else{
                element.classList.add("d-none");
                btnStep3.classList.remove("d-none");
                chkBtn2=0;
            }
            if(chkBtn1==1 || chkBtn2==1){
                btnStep3.classList.add("d-none");
                btn.classList.add("step-disable");
            }
        });
    });
    /* End Step 3 */

    



    const apiMyHomeSmartData = async () => {
        let select = $('#ctrl_insurer_capital');
        let cover_amount = select.options[select.selectedIndex].value;

        let res = await fetch(`/appApi/ApiConnect/myHomeSmartPackage`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
            },
        });
        const response = await res.json();
        const js = JSON.parse(response);
        let result = js.data;

        sessionStorage.setItem("amount", cover_amount);
        MyHomeSmart = result;
    }
    const apiBlock = async()=>{

        let res = await fetch(`/appApi/ApiConnect/blockHomePolicy`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
            },
        });
        const response = await res.json();
        //console.log("response",response);
        
        const js = JSON.parse(response);
        let result = js.data;
        const results = result.filter(element => {
            return element.Reasons != '';
        });
        console.log("response",results);
        block_list = results;
        
    }
    const apiAmount1y = async () => {
        try {
            let res = await fetch(`/appApi/ApiConnect/myHomeSmartPackage1y`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                },

                //body: JSON.stringify(data)
            });
            const response = await res.json();
            const js = JSON.parse(response);
            amount1y = js.data;


        } catch (err) {
            console.log("apiMyHomeSmart1y", err);
            Swal.fire(
                {
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                }
            )
        }

        $form.classList.remove('ajax_loader');
    }
    const apiAmount3y = async () => {
        try {
            let res = await fetch(`/appApi/ApiConnect/myHomeSmartPackage3y`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                },

                //body: JSON.stringify(data)
            });
            const response = await res.json();
            const js = JSON.parse(response);
            amount3y = js.data;


        } catch (err) {
            console.log("apiAmount3y", err);
            Swal.fire(
                {
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                }
            )
        }

        $form.classList.remove('ajax_loader');
    }
    const changeTextAmount = () => {
        let building = $('#ctrl_fire_building');
        let text_value = building.options[building.selectedIndex].value;

        $("#rate_1").innerHTML = numberWithCommas(package_amount);
        c_sum = numberWithCommas(package_amount);
        $("#rate_1_3").innerHTML = numberWithCommas(package_amount);

        if (text_value != "ONMHS3") {
            $("#fdAccording").value = numberWithCommas(package_amount * 0.8);
            $("#fdContent").value = numberWithCommas(package_amount * 0.2);
        }
        document.getElementById("ONMHS2").style.display = "table-cell";
        document.getElementById("head-ONMHS2").style.display = "table-cell";
        document.getElementById("foot-ONMHS2").style.display = "table-cell";

    }
    


    const setData = () => {      
        const result = MyHomeSmart;
        //console.log('result',result);
        const results = result.filter(element => {
            return element.TAGNAME === package_code_1y && element.FIRE == package_amount;
        }); 
       
        data_result_1y = results[0];
        data_result_3y = results[0];
        if(results!=""){

            const result_1y = amount1y.filter(element => {
                return element.myhome_id === data_result_1y.id;
            });
            data_result_amount_1y = result_1y[0];
            const result_3y = amount3y.filter(element => {
                return element.myhome_id === data_result_3y.id;
            });
            data_result_amount_3y = result_3y[0];

            console.log('data_result_amount_1y',data_result_amount_1y);
            console.log('data_result_amount_3y',data_result_amount_3y);

            apiMyHomeSmart1y(data_result_1y.id);
            apiMyHomeSmart3y(data_result_1y.id);
            drpCompensation.push(data_result_1y.RENT_PERIL_PREM);
            drpCompensationText.push(data_result_1y.RENT_PERIL_SUMINS);

            document.getElementById("rate_2").innerHTML = numberWithCommas(data_result_1y.ITEM1_1_PERIL_SUMINS);
            document.getElementById("rate_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_2_PERIL_SUMINS);
            document.getElementById("rate_4").innerHTML = numberWithCommas(data_result_1y.ITEM1_3_PERIL_SUMINS);
            document.getElementById("rate_5").innerHTML = numberWithCommas(data_result_1y.ITEM1_3_PERIL_SUMINS);
            document.getElementById("rate_6").innerHTML = numberWithCommas(data_result_1y.ITEM1_5_PERIL_SPE_AMOUNT);
            document.getElementById("rate_7").innerHTML = numberWithCommas(data_result_1y.ITEM1_5_PERIL_SUMINS);
            document.getElementById("rate_8").innerHTML = numberWithCommas(data_result_1y.ITEM1_6_PERIL_SUMINS);
            document.getElementById("rate_10").innerHTML = numberWithCommas(data_result_1y.ITEM1_7_PERIL_SUMINS);
            document.getElementById("rate_11").innerHTML = numberWithCommas(data_result_1y.ITEM1_8_PERIL_SUMINS);

            document.getElementById("rate_2_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_1_PERIL_SUMINS);
            document.getElementById("rate_3_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_2_PERIL_SUMINS);
            document.getElementById("rate_4_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_3_PERIL_SUMINS);
            document.getElementById("rate_5_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_3_PERIL_SUMINS);
            document.getElementById("rate_6_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_5_PERIL_SPE_AMOUNT);
            document.getElementById("rate_7_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_5_PERIL_SUMINS);
            document.getElementById("rate_8_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_6_PERIL_SUMINS);
            document.getElementById("rate_10_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_7_PERIL_SUMINS);
            document.getElementById("rate_11_3").innerHTML = numberWithCommas(data_result_1y.ITEM1_8_PERIL_SUMINS);

            //ข้อ 2.
            document.getElementById("rate_13").innerHTML = numberWithCommas(data_result_1y.NATURAL);
            document.getElementById("rate_13_3").innerHTML = numberWithCommas(data_result_1y.NATURAL);

            //ข้อ 3.
            document.getElementById("rate_15").innerHTML = numberWithCommas(data_result_1y.PA_PERIL_SUMINS);
            document.getElementById("rate_15_3").innerHTML = numberWithCommas(data_result_1y.PA_PERIL_SUMINS);

            //ข้อ 4.
            document.getElementById("rate_17").innerHTML = numberWithCommas(data_result_1y.GLASS_PERIL_SUMINS);
            document.getElementById("rate_17_3").innerHTML = numberWithCommas(data_result_1y.GLASS_PERIL_SUMINS);

            //ข้อ 5.
            document.getElementById("rate_19").innerHTML = numberWithCommas(data_result_1y.CASH_PERIL_SUMINS);
            document.getElementById("rate_19_3").innerHTML = numberWithCommas(data_result_1y.CASH_PERIL_SUMINS);

            //ข้อ 6.
            document.getElementById("rate_21").innerHTML = numberWithCommas(data_result_1y.THEFT_PERIL_SUMINS);
            document.getElementById("rate_21_3").innerHTML = numberWithCommas(data_result_1y.THEFT_PERIL_SUMINS);

            //ข้อ 7.
            document.getElementById("rate_22").innerHTML = numberWithCommas(data_result_1y.DANGER_PERIL_SPE_AMOUNT);
            document.getElementById("rate_23").innerHTML = numberWithCommas(data_result_1y.DANGER_PERIL_SUMINS);
            document.getElementById("rate_22_3").innerHTML = numberWithCommas(data_result_1y.DANGER_PERIL_SPE_AMOUNT);
            document.getElementById("rate_23_3").innerHTML = numberWithCommas(data_result_1y.DANGER_PERIL_SUMINS);

            //ข้อ 9.
            document.getElementById("drpCompensation3").value = data_result_1y.RENT_PERIL_SUMINS;
            document.getElementById("drpCompensation1").value = data_result_1y.RENT_PERIL_SUMINS;

            //ข้อ 10.    

            document.getElementById("sp_amount1").innerHTML = numberWithCommas(data_result_1y.LIABILITY_PERIL_SUMINS);
            document.getElementById("sp_amount3").innerHTML = numberWithCommas(data_result_1y.LIABILITY_PERIL_SUMINS);

            document.getElementById("txtDeposit1").innerHTML = numberWithCommas(data_result_1y.LIABILITY_PERIL_PREM);
            document.getElementById("txtDeposit3").innerHTML = numberWithCommas(data_result_1y.LIABILITY_PERIL_PREM);
        }


/*
        for (let i = 0; i < result.length; i++) 
        {
            
            
           
              

            if (result[i].TAGNAME.trim() == package_code_1y && result[i].FIRE == package_amount) {
                
            }
            
        }
        */
    }
    const setDataAmount1y = (id) => {      
        let data_amount1y = amount1y;
        let data_amount3y = amount3y;
        const result_1y = data_amount1y.filter(element => {
            return element.TAGNAME === package_code && element.FIRE == package_amount;
          });
    }
    const setDataAmount3y = (id) => {      
        let data_amount1y = amount1y;
        let data_amount3y = amount3y;
        const result_1y = data_amount1y.filter(element => {
            return element.TAGNAME === package_code && element.FIRE == package_amount;
          });
    }
    const setDataStep1 = async (packageSelect) => {    
        let building = $('#ctrl_fire_building');
        let text = building.options[building.selectedIndex].text;
        let text_value = building.options[building.selectedIndex].value;

        let select = $('#ctrl_insurer_capital');
        let cover_amount = select.options[select.selectedIndex].value;

        $('#ctrl_fire_building_text').value = text;
        
        if (text_value == "ONMHS3") {
            document.getElementById("tr-condo-9").classList.add("d-none");
            document.getElementById("tr-condo-9-detail").classList.add("d-none");
            document.getElementById("tr-condo-10").classList.add("d-none");
            document.getElementById("tr-condo-10-detail").classList.add("d-none");
            document.getElementById("divamount").classList.add("d-none");
            document.getElementById("lbSelectHome").classList.add("d-none");
            document.getElementById("lbSelectCondo").classList.remove("d-none");
            
        } else {
            document.getElementById("tr-condo-9").classList.remove("d-none");
            document.getElementById("tr-condo-9-detail").classList.remove("d-none");
            document.getElementById("tr-condo-10").classList.remove("d-none");
            document.getElementById("tr-condo-10-detail").classList.remove("d-none");
            document.getElementById("divamount").classList.remove("d-none");
            document.getElementById("lbSelectHome").classList.remove("d-none");
            document.getElementById("lbSelectCondo").classList.add("d-none");
            $("#fdAccording").value = numberWithCommas(cover_amount * 0.8);
            $("#fdContent").value = numberWithCommas(cover_amount * 0.2);
           
        }
        document.getElementById("check_rate_3").checked = true;
        document.getElementById("check_rate_4").checked = true;
        document.getElementById("check_rate_5").checked = true;
        document.getElementById("check_rate_6").checked = true;
        document.getElementById("check_rate_7").checked = true;
        //document.getElementById("check_rate_8").checked = true;
        document.getElementById("check_rate_9").checked = true;
        document.getElementById("check_rate_10").checked = true;

        const allPack = Object.keys(package_data)
            .filter(k => _.startsWith(k, packageSelect))



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
                if ($el.getAttribute("data-package").startsWith(packageSelect)) {
                    $el.style.display = "inline-flex";
                } else {
                    $el.style.display = "none";
                }
            });
        }

        allPack.map(k => {
            $('#fdPremium').value = parseInt(package_data[k].plan.COV1).toLocaleString();
            $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price).toLocaleString();
            $(`th[data-cover-cov1]`).innerHTML = $('#cover_fire_' + packageSelect).value;
        });


    }

    apiAmount1y();
    apiAmount3y();
    apiMyHomeSmartData();
    apiBlock();
    setDataStep1(500000);





    const apiMyHomeSmart = async (packageSelect) => {
        try {
            let select = $('#ctrl_insurer_capital');
            let cover_amount = select.options[select.selectedIndex].value;

            let res = await fetch(`/appApi/ApiConnect/myHomeSmartPackage`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                },
            });
            const response = await res.json();
            const js = JSON.parse(response);
            let result = js.data;

            sessionStorage.setItem("amount", cover_amount);
            MyHomeSmart = JSON.stringify(result);
            var chk = "";
            for (let i = 0; i < result.length; i++) {
                /*
                if(chk!=result[i].RENT_PERIL_PREM){
                    drpCompensation.push(result[i].RENT_PERIL_PREM);
                    drpCompensationText.push(result[i].RENT_PERIL_SUMINS);
                    chk=result[i].RENT_PERIL_PREM;
                }
                */
                drpCompensation.push(result[i].RENT_PERIL_PREM);
                drpCompensationText.push(result[i].RENT_PERIL_SUMINS);
                //RENT_PERIL_PREM //value
                //RENT_PERIL_SUMINS //text 

                /*
                if(result[i].TAGNAME.trim() == "FNPGCTDALR1"){
                    oneYear.push(result[i]);
                }
                if(result[i].TAGNAME == "FNPGCTDALR3"){
                    //console.log("result3",result[i]);
                    treeYear.push(result[i]);                    
                }
                */
                //default 
                console.log("code-",code)
                if (result[i].TAGNAME.trim() == code && result[i].FIRE == cover_amount) {
                    console.log("data",result[i])
                    apiMyHomeSmart1y(result[i].id);
                    apiMyHomeSmart3y(result[i].id);
                    //ข้อ 1.
                    
                    document.getElementById("rate_2").innerHTML = parseNumber(result[i].ITEM1_1_PERIL_SUMINS);
                    document.getElementById("rate_3").innerHTML = parseNumber(result[i].ITEM1_2_PERIL_SUMINS);
                    document.getElementById("rate_4").innerHTML = parseNumber(result[i].ITEM1_3_PERIL_SUMINS);
                    document.getElementById("rate_5").innerHTML = parseNumber(result[i].ITEM1_3_PERIL_SUMINS);
                    document.getElementById("rate_6").innerHTML = parseNumber(result[i].ITEM1_5_PERIL_SPE_AMOUNT);
                    document.getElementById("rate_7").innerHTML = parseNumber(result[i].ITEM1_5_PERIL_SUMINS);
                    document.getElementById("rate_8").innerHTML = parseNumber(result[i].ITEM1_6_PERIL_SUMINS);
                    document.getElementById("rate_10").innerHTML = parseNumber(result[i].ITEM1_7_PERIL_SUMINS);
                    document.getElementById("rate_11").innerHTML = parseNumber(result[i].ITEM1_8_PERIL_SUMINS);

                    document.getElementById("rate_2_3").innerHTML = parseNumber(result[i].ITEM1_1_PERIL_SUMINS);
                    document.getElementById("rate_3_3").innerHTML = parseNumber(result[i].ITEM1_2_PERIL_SUMINS);
                    document.getElementById("rate_4_3").innerHTML = parseNumber(result[i].ITEM1_3_PERIL_SUMINS);
                    document.getElementById("rate_5_3").innerHTML = parseNumber(result[i].ITEM1_3_PERIL_SUMINS);
                    document.getElementById("rate_6_3").innerHTML = parseNumber(result[i].ITEM1_5_PERIL_SPE_AMOUNT);
                    document.getElementById("rate_7_3").innerHTML = parseNumber(result[i].ITEM1_5_PERIL_SUMINS);
                    document.getElementById("rate_8_3").innerHTML = parseNumber(result[i].ITEM1_6_PERIL_SUMINS);
                    document.getElementById("rate_10_3").innerHTML = parseNumber(result[i].ITEM1_7_PERIL_SUMINS);
                    document.getElementById("rate_11_3").innerHTML = parseNumber(result[i].ITEM1_8_PERIL_SUMINS);

                    //ข้อ 2.
                    document.getElementById("rate_13").innerHTML = parseNumber(result[i].NATURAL);
                    document.getElementById("rate_13_3").innerHTML = parseNumber(result[i].NATURAL);

                    //ข้อ 3.
                    document.getElementById("rate_15").innerHTML = parseNumber(result[i].PA_PERIL_SUMINS);
                    document.getElementById("rate_15_3").innerHTML = parseNumber(result[i].PA_PERIL_SUMINS);

                    //ข้อ 4.
                    document.getElementById("rate_17").innerHTML = parseNumber(result[i].GLASS_PERIL_SUMINS);
                    document.getElementById("rate_17_3").innerHTML = parseNumber(result[i].GLASS_PERIL_SUMINS);

                    //ข้อ 5.
                    document.getElementById("rate_19").innerHTML = parseNumber(result[i].CASH_PERIL_SUMINS);
                    document.getElementById("rate_19_3").innerHTML = parseNumber(result[i].CASH_PERIL_SUMINS);

                    //ข้อ 6.
                    document.getElementById("rate_21").innerHTML = parseNumber(result[i].THEFT_PERIL_SUMINS);
                    document.getElementById("rate_21_3").innerHTML = parseNumber(result[i].THEFT_PERIL_SUMINS);

                    //ข้อ 7.
                    document.getElementById("rate_22").innerHTML = parseNumber(result[i].DANGER_PERIL_SPE_AMOUNT);
                    document.getElementById("rate_23").innerHTML = parseNumber(result[i].DANGER_PERIL_SUMINS);
                    document.getElementById("rate_22_3").innerHTML = parseNumber(result[i].DANGER_PERIL_SPE_AMOUNT);
                    document.getElementById("rate_23_3").innerHTML = parseNumber(result[i].DANGER_PERIL_SUMINS);

                    //ข้อ 9.
                    document.getElementById("drpCompensation3").value = result[i].RENT_PERIL_SUMINS;
                    document.getElementById("drpCompensation1").value = result[i].RENT_PERIL_SUMINS;

                    //ข้อ 10.    

                    document.getElementById("sp_amount1").innerHTML = parseNumber(result[i].LIABILITY_PERIL_SUMINS);
                    document.getElementById("sp_amount3").innerHTML = parseNumber(result[i].LIABILITY_PERIL_SUMINS);

                    document.getElementById("txtDeposit1").innerHTML = parseNumber(result[i].LIABILITY_PERIL_PREM);
                    document.getElementById("txtDeposit3").innerHTML = parseNumber(result[i].LIABILITY_PERIL_PREM);

                    //sp_amount3
                }

            }

        } catch (err) {
            console.log("apiMyHomeSmart", err);
            Swal.fire(
                {
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                }
            )
        }

        $form.classList.remove('ajax_loader');
    }

    function parseNumber(value) {
        //console.log("cnt",value)
        return value ? parseInt(value).format() : 0;
    }

    const apiMyHomeSmart1y = async (packageSelect) => {
        try {
            let res = await fetch(`/appApi/ApiConnect/myHomeSmartPackage1y`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                },

                //body: JSON.stringify(data)
            });
            const response = await res.json();
            const js = JSON.parse(response);
            let result = js.data;
            for (let i = 0; i < result.length; i++) {

                //drpOneYear = 
                if (result[i].id == packageSelect) {
                    oneYear = result[i];
                    //console.log("oneYear", oneYear);
                    document.getElementById("txtAmount1").value = numberWithCommas(result[i].Total);
                    p_price1 = result[i].Total;
                }
            }
            //console.log("1y",oneYear)


        } catch (err) {
            console.log("apiMyHomeSmart1y", err);
            Swal.fire(
                {
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                }
            )
        }

        $form.classList.remove('ajax_loader');
    }
    const apiMyHomeSmart3y = async (packageSelect) => {
        try {
            let res = await fetch(`/appApi/ApiConnect/myHomeSmartPackage3y`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                },

                //body: JSON.stringify(data)
            });
            const response = await res.json();
            const js = JSON.parse(response);
            let result = js.data;
            for (let i = 0; i < result.length; i++) {
                if (result[i].id == packageSelect) {
                    treeYear = result[i];
                    //treeYear", treeYear);
                    document.getElementById("txtAmount3").value = numberWithCommas(result[i].Total);
                    p_price3 = result[i].Total;
                }
            }
            //console.log("3y",treeYear)
        } catch (err) {
            console.log("apiMyHomeSmart3y", err);
            Swal.fire(
                {
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                }
            )
        }

        $form.classList.remove('ajax_loader');
    }

    //apiMyHomeSmart("500000");



    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }


    Number.prototype.format = function (n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    };
    
    //changeTextAmount("500000");

    /*
    const myHomeSmartAPI = async () => {
        const request = await fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json');
        const response = await request.json(); 
        console.log("data",response);
    }
    myHomeSmartAPI();
    */


    const changeTextPremium = (packageSelect) => {
        let building = $('#ctrl_fire_building');
        let text = building.options[building.selectedIndex].text;
        let text_value = building.options[building.selectedIndex].value;

        let select = $('#ctrl_insurer_capital');
        let cover_amount = select.options[select.selectedIndex].value;

        $('#ctrl_fire_building_text').value = text;
        if (text_value == "ONMHS3") {
            document.getElementById("tr-condo-9").classList.add("d-none");
            document.getElementById("tr-condo-9-detail").classList.add("d-none");
            document.getElementById("tr-condo-10").classList.add("d-none");
            document.getElementById("tr-condo-10-detail").classList.add("d-none");
            document.getElementById("divamount").classList.add("d-none");
            document.getElementById("lbSelectHome").classList.add("d-none");
            document.getElementById("lbSelectCondo").classList.remove("d-none");
            dep1="";
            dep3="";
        } else {
            document.getElementById("tr-condo-9").classList.remove("d-none");
            document.getElementById("tr-condo-9-detail").classList.remove("d-none");
            document.getElementById("tr-condo-10").classList.remove("d-none");
            document.getElementById("tr-condo-10-detail").classList.remove("d-none");
            document.getElementById("divamount").classList.remove("d-none");
            document.getElementById("lbSelectHome").classList.remove("d-none");
            document.getElementById("lbSelectCondo").classList.add("d-none");
            $("#fdAccording").value = parseNumber(cover_amount * 0.8);
            $("#fdContent").value = parseNumber(cover_amount * 0.2);
            dep1="1";
            dep3="3";
        }
        document.getElementById("check_rate_3").checked = true;
        document.getElementById("check_rate_4").checked = true;
        document.getElementById("check_rate_5").checked = true;
        document.getElementById("check_rate_6").checked = true;
        document.getElementById("check_rate_7").checked = true;
        //document.getElementById("check_rate_8").checked = true;
        document.getElementById("check_rate_9").checked = true;
        document.getElementById("check_rate_10").checked = true;

        const allPack = Object.keys(package_data)
            .filter(k => _.startsWith(k, packageSelect))



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
                if ($el.getAttribute("data-package").startsWith(packageSelect)) {
                    $el.style.display = "inline-flex";
                } else {
                    $el.style.display = "none";
                }
            });
        }

        allPack.map(k => {
            $('#fdPremium').value = parseInt(package_data[k].plan.COV1).toLocaleString();
            $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price).toLocaleString();
            $(`th[data-cover-cov1]`).innerHTML = $('#cover_fire_' + packageSelect).value;
        });

    }

    //changeTextPremium("ONMHS1");


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
                el.value = $('#fdAddr_Home').value;
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
        fdKeys: Keys,
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
        fdUniqKey: Redeem_Code,

        /* by dum-soken */
        user_id: "",
        coverdays: "",
        c_class: "",
        flg_ind: "",
        prem_rate: "",
        sum_pr_prem: "",
        ann_prem: "",
        sum_ann_prem: "",
        sum_ins: "",
        gross_amt: "",
        ann_nprem: "",
        stamp_amt: "",
        vat_amt: "",
        total_amt: "",
        ann_days: "",
        invoice: "",
        packget_peril: [],
        item_nbr: "",
        //block_code: "",
        block_tambun: "",
        risk_loc: "",
        exp_code: "",
        tariff_code: "",
        occupancy: "",
        building_class: "",
        whole_building: "",
        floor_nbr: "",
        dryriser: "",
        external_wall: "",
        upper_floor: "",
        roof_beam: "",
        roof: "",
        column: "",
        internal_area: "",
        nbr_room: "",
        nbr_storey: "",
        owner_ind: "",
        interest_item: [],
        sch_sumins: "",
        sch_prem: "",
        risk_rate: "",
        /* end by dum-soken */
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
                        else {
                            let fromDate = ($('#fdFromDate').value).split('/');
                            let fdFromDate = `${fromDate[2]}-${fromDate[1]}-${fromDate[0]}`;
                            data = {
                                ...data,
                                fdFromDate
                            }
                        }

                        let Redeem_Code = "";
                        if (document.getElementById("redeem_code")) {
                            Redeem_Code = document.getElementById("redeem_code").value;
                            if (document.getElementById("massage_error")) {
                                let msg_error = document.getElementById("massage_error").value;
                                if (msg_error != '') {
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
                        p_packget=fdPackage;
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
                        let valCheck = false;
                        valCheck = validatePolicyPayment($('#fdNationalID').value, data.fdPackage, $('#fdFromDate')?.value);
                        if (!valCheck) {
                            status = false;
                            return false;
                        }

                        status = true;
                        removeError($('#step3'));
                        p_price = p_packget=="ONMHS1" ? p_price1: p_price3;
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
                            //fdPayAMT: getSelectedPricePackage(data.fdPackage, package_data),
                            fdPayAMT: p_packget=="ONMHS1" ? data_result_amount_1y.Total : data_result_amount_3y.Total,
                            ctrl_accept_insurance_term: $('#ctrl_accept_insurance_term').checked ? true : undefined,
                            ctrl_terms: $('#ctrl_terms').checked ? true : undefined,

                            fdAddr_Home: $('#fdAddr_Home').value,
                            fdAddr_Moo: $('#fdAddr_Moo').value,
                            fdAddr_Village: $('#fdAddr_Village').value,
                            fdAddr_Building: $('#fdAddr_Building').value,
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

                            /* by dum-soken */
                            coverdays: p_packget=="ONMHS1" ? '365' : '1096',
                            c_class:'18-59',//test
                            flg_ind:'F',//test
                            prem_rate: p_packget=="ONMHS1" ? '100.000000' : '250.000000',
                            sum_pr_prem:'0.00',
                            ann_prem: p_packget=="ONMHS1" ? net1 : net3,
                            sum_ann_prem: p_packget=="ONMHS1" ? net1 : net3,
                            sum_ins:c_sum,
                            gross_amt: p_packget=="ONMHS1" ? net1 : net3,
                            ann_nprem: p_packget=="ONMHS1" ? net1 : net3,
                            stamp_amt: p_packget=="ONMHS1" ? stamp1 : stamp1,
                            vat_amt: p_packget=="ONMHS1" ? vat1 : vat3,
                            total_amt: p_packget=="ONMHS1" ? total1 : total3,
                            ann_days: p_packget=="ONMHS1" ? '365' : '1096',
                            invoice:'INV0001',//test
                            packget_peril: JSON.stringify([{
                                peril_code : 'TMRT',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_5_PERIL_SUMINS : data_result_3y.ITEM1_5_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_5_PERIL_RATE : data_result_3y.ITEM1_5_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_5_PERIL_PREM : data_result_3y.ITEM1_5_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers:  '0',
                                peril_spe_amount:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_5_PERIL_SPE_AMOUNT : data_result_3y.ITEM1_5_PERIL_SPE_AMOUNT,
                              },
                              {
                                peril_code: 'ANTIQ',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_8_PERIL_SUMINS : data_result_3y.ITEM1_8_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_8_PERIL_RATE : data_result_3y.ITEM1_8_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_8_PERIL_PREM : data_result_3y.ITEM1_8_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: 'FFT',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_1_PERIL_SUMINS : data_result_3y.ITEM1_1_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_1_PERIL_RATE : data_result_3y.ITEM1_1_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_1_PERIL_PREM : data_result_3y.ITEM1_1_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: '1.37',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_2_PERIL_SUMINS : data_result_3y.ITEM1_2_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_2_PERIL_RATE : data_result_3y.ITEM1_2_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_2_PERIL_PREM : data_result_3y.ITEM1_2_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: 'WRK',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_3_PERIL_SUMINS : data_result_3y.ITEM1_3_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_3_PERIL_RATE : data_result_3y.ITEM1_3_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_3_PERIL_PREM : data_result_3y.ITEM1_3_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: 'PROF',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_4_PERIL_SUMINS : data_result_3y.ITEM1_4_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_4_PERIL_RATE : data_result_3y.ITEM1_4_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_4_PERIL_PREM : data_result_3y.ITEM1_4_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: '1.12',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.ITEM1_7_PERIL_SUMINS : data_result_3y.ITEM1_7_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_7_PERIL_RATE : data_result_3y.ITEM1_7_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.ITEM1_7_PERIL_PREM : data_result_3y.ITEM1_7_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: 'PA',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.PA_PERIL_SUMINS : data_result_3y.PA_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.PA_PERIL_RATE : data_result_3y.PA_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.PA_PERIL_PREM : data_result_3y.PA_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount:  p_packget=="ONMHS1" ? data_result_1y.PA_PERIL_SPE_AMOUNT : data_result_3y.PA_PERIL_SPE_AMOUNT,
                              },
                              {
                                peril_code: '0.00',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.GLASS_PERIL_SUMINS : data_result_3y.GLASS_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.GLASS_PERIL_RATE : data_result_3y.GLASS_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.GLASS_PERIL_PREM : data_result_3y.GLASS_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: 'CASH',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.CASH_PERIL_SUMINS : data_result_3y.CASH_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.CASH_PERIL_RATE : data_result_3y.CASH_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.CASH_PERIL_PREM : data_result_3y.CASH_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: '1.38',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.THEFT_PERIL_SUMINS : data_result_3y.THEFT_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.THEFT_PERIL_RATE : data_result_3y.THEFT_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.THEFT_PERIL_PREM : data_result_3y.THEFT_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: '1.40',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.LIABILITY_PERIL_SUMINS : data_result_3y.LIABILITY_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.LIABILITY_PERIL_RATE : data_result_3y.LIABILITY_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.LIABILITY_PERIL_PREM : data_result_3y.LIABILITY_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: '0',
                                peril_spe_amount: '0',
                              },
                              {
                                peril_code: 'CMRT',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.DANGER_PERIL_SUMINS : data_result_3y.DANGER_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.DANGER_PERIL_RATE : data_result_3y.DANGER_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.DANGER_PERIL_PREM : data_result_3y.DANGER_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: p_packget=="ONMHS1" ? data_result_1y.DANGER_PERIL_SPE_COVERS : data_result_3y.DANGER_PERIL_SPE_COVERS,
                                peril_spe_amount: p_packget=="ONMHS1" ? data_result_1y.DANGER_PERIL_SPE_AMOUNT : data_result_3y.DANGER_PERIL_SPE_AMOUNT,
                              }
                              ,
                              {
                                peril_code: 'INST',
                                peril_sumins: p_packget=="ONMHS1" ? data_result_1y.RENT_PERIL_SUMINS : data_result_3y.RENT_PERIL_SUMINS,
                                peril_rate:  p_packget=="ONMHS1" ? data_result_1y.RENT_PERIL_RATE : data_result_3y.RENT_PERIL_RATE,
                                peril_prem:  p_packget=="ONMHS1" ? data_result_1y.RENT_PERIL_PREM : data_result_3y.RENT_PERIL_PREM,
                                peril_damage_per: '0',
                                peril_damage_all: '0',
                                peril_spe_covers: p_packget=="ONMHS1" ? data_result_1y.RENT_PERIL_SPE_COVERS : data_result_3y.RENT_PERIL_SPE_COVERS,
                                peril_spe_amount: '0',
                              }
                            ]).replaceAll('"',"'"),
                            item_nbr:'1',
                            interest_item: JSON.stringify([{
                                int_code: 'B',
                                int_sumins: data_result_1y.FIRE_BUILDING
                              },
                              {
                                int_code: 'F',
                                int_sumins: data_result_1y.FIRE_BELONGING
                              },
                            ]).replaceAll('"',"'"),
                            sch_sumins:  p_packget=="ONMHS1" ? data_result_1y.FIRE : data_result_3y.FIRE,
                            sch_prem: p_packget=="ONMHS1" ? net1 : net3,
                            risk_rate:  '0.08900000',
                            /* end by dum-soken */
                        }
                        data = {
                            ...data,
                            fdMarketing_Consent: $('#ctrl_marketing').checked ? true : undefined
                        }

                        console.log("data",data);
                        //=========================================================================================================
                        //address insure
                        let address_insure = "";
                        let fdAddr_Num = "";
                        let label_home = $('label[for=fdAddr_Home]').innerText;
                        label_home = label_home.replace("*", "");
                        address_insure = label_home + data.fdAddr_Home;
                        if (data.fdAddr_Moo != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Moo]').innerText + data.fdAddr_Moo;
                        }
                        if (data.fdAddr_Village != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Village]').innerText + data.fdAddr_Village;
                        }
                        if (data.fdAddr_Building != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Building]').innerText + data.fdAddr_Building;
                        }
                        if (data.fdAddr_Floor != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Floor]').innerText + data.fdAddr_Floor;
                        }
                        if (data.fdAddr_Alley != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Alley]').innerText + data.fdAddr_Alley;
                        }
                        if (data.fdAddr_Street != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=fdAddr_Street]').innerText + data.fdAddr_Street;
                        }

                        let label_district = $('label[for=fdAddr_District]').innerText;
                        label_district = label_district.replace("*", "");
                        console.log(data.fdProvince);
                        if (data.fdProvince == "00") {
                            label_district = label_district.replace("แขวง / ตำบล", "แขวง");
                        }
                        else {
                            label_district = label_district.replace("แขวง / ตำบล", "ตำบล");
                        }

                        address_insure = " " + address_insure + ", " + label_district + data.fdAddr_District;
                        fdAddr_Num = address_insure;

                        const $ddlProvince = $('#ctrl_province');
                        const province = $ddlProvince.options[$ddlProvince.selectedIndex].text;
                        address_insure = " " + address_insure + ", " + province.replace(",", "") + " " + data.fdAddr_PostCode;
                        // fdAddr_Num = address_insure;
                        //=========================================================================================================
                        //location insure
                        let loc_address_insure = "";
                        let loc_fdAddr_Num = "";
                        let loc_label_home = $('label[for=loc_fdAddr_Home]').innerText;
                        loc_label_home = loc_label_home.replace("*", "");
                        loc_address_insure = loc_label_home + data.loc_fdAddr_Home;
                        if (data.loc_fdAddr_Moo != "") {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Moo]').innerText + data.loc_fdAddr_Moo;
                        }
                        if (data.loc_fdAddr_Village != "") {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Village]').innerText + data.loc_fdAddr_Village;
                        }
                        if (data.loc_fdAddr_Building != "") {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Building]').innerText + data.loc_fdAddr_Building;
                        }
                        if (data.loc_fdAddr_Floor != "") {
                            address_insure = " " + address_insure + ", " + $('label[for=loc_fdAddr_Floor]').innerText + data.loc_fdAddr_Floor;
                        }
                        if (data.loc_fdAddr_Alley != "") {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Alley]').innerText + data.loc_fdAddr_Alley;
                        }
                        if (data.loc_fdAddr_Street != "") {
                            loc_address_insure = " " + loc_address_insure + ", " + $('label[for=loc_fdAddr_Street]').innerText + data.loc_fdAddr_Street;
                        }

                        let loc_label_district = $('label[for=loc_fdAddr_District]').innerText;
                        loc_label_district = loc_label_district.replace("*", "");
                        if (data.loc_fdAddr_Province == "00") {
                            loc_label_district = loc_label_district.replace("แขวง / ตำบล", "แขวง");
                        }
                        else {
                            loc_label_district = loc_label_district.replace("แขวง / ตำบล", "ตำบล");
                        }

                        loc_address_insure = " " + loc_address_insure + ", " + loc_label_district + data.loc_fdAddr_District;
                        // loc_fdAddr_Num = loc_address_insure;

                        const $loc_ddlProvince = $('#loc_ctrl_province');
                        const loc_province = $loc_ddlProvince.options[$loc_ddlProvince.selectedIndex].text;
                        loc_address_insure = " " + loc_address_insure + ", " + loc_province.replace(",", "") + " " + data.loc_fdAddr_PostCode;

                        loc_fdAddr_Num = loc_address_insure;
                        //=========================================================================================================

                        data = {
                            ...data,
                            fdAddr_Num: fdAddr_Num,
                            loc_fdAddr_Num: loc_fdAddr_Num
                        }

                        // console.log(data);

                        //=========================================================================================================

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
                        <div><span>${$summary_section.getAttribute('data-price')} : </span><strong>${ numberWithCommas(data.fdPayAMT) } ${$summary_section.getAttribute('data-baht')}</strong></div>
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

