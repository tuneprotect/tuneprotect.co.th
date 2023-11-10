import { $, $$, calculateAge, current_package, fadeIn, fadeOut, locale, scrollToTargetAdjusted } from "../helper";
import { isValid, parseISO } from "date-fns";
import { showDateError } from "../validate_form";
import Swal from "sweetalert2";

export const getPackageData = async (currentPackage,channel) => {
    let res = await fetch(`/storage/json/${currentPackage.toLowerCase() + (channel ? '_'+channel : '') }.json?1655814514568`);
    return await res.json();
}

export const getNationalityData = async () => {
    let res = await fetch(`/storage/json/nationality.json?1647230395`);
    return await res.json();
}

export const getNationalityDataTH = async () => {
    let res = await fetch(`/storage/json/nationality_th.json`);
    return await res.json();
}

export const getProvinceData = async () => {
    let res = await fetch(`/storage/json/province.json`);
    return await res.json();
}

export const getProvinceDataWithOutPrefix = async () => {
    let res = await fetch(`/storage/json/provincenotprefix.json`);
    return await res.json();
}

export const getCountryData = async () => {
    let res = await fetch(`/storage/json/country.json`);
    return await res.json();
}
export const validateAgeInPackage = (package_data, cal_price) => {
    $$('.date-input .controls-wrapper').forEach(el => {
        el.classList.remove('error');
    });
    $('.date-input cite').innerHTML = "";

    let dd = $('#ctrl_day').value,
        mm = $('#ctrl_month').value;
    let yy = $('#ctrl_year').value;

    $$('#ctrl_dob').forEach(el => {
        const dob = $('#ctrl_dob').value;
       if(dob!='' || dob!=undefined){
            const _dob = dob.split("/");
            dd = _dob[0];
            mm = _dob[1];
            yy = _dob[2];
        }
        if (dd === '' || mm === '' || yy === '') {
            showDateError($('#ctrl_dob').getAttribute('data-error-format'));
            return {status: false};
        }
    });

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
    const age_in_range = Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package))
        .some(k => Object.keys(package_data[k].price).some(ageRange => checkAge(birthday, ageRange)))
    
    if (!age_in_range) {
        showDateError($('#ctrl_day').getAttribute('data-error-not-qualify'));
        return {status: false};
    }

    const age = calculateAge(birthday)
    if (cal_price !== false) {
        genPrice(birthday, package_data)
    }

    return {
        status: true, data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}


const callValidateApi = async (data) => {
    const response = await fetch(`/${$('html').getAttribute('lang')}/Product/checkDup`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({...data, CheckType: null})
    })

    return await response.json();
}
const CheckRegisterForChillSure = async (data) => {
    const response = await fetch(`/${$('html').getAttribute('lang')}/Product/CheckRegisterForChillSure`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({...data})
    })
    return await response.json();
}
const callSuscoBranch = async () => {
    const response = await fetch(`/appApi/ApiConnect/getSuscoBranch`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
        }
    })

    return await response.json();
}

const callPromotionCode = async (data) => {
    const response = await fetch(`/${$('html').getAttribute('lang')}/Product/validatePromotionCode`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({...data})
    })

    return await response.json();
}

const callPrePromotionCode = async (data) => {
    const response = await fetch(`/${$('html').getAttribute('lang')}/Product/preValidatePromotionCode`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({...data})
    })

    return await response.json();
}

export const validatePolicyLoc = async ($this, fdPackage,fdFromDate) => {
    let field = $this.getAttribute('name');
    let data = {fdNationalID: null, loc_fdAddr_Home:null}
    Object.keys(data).map((k) => {
        let fieldId = k;
        if (field.startsWith('data_')) {
            const index = field.split("_")[1];
            fieldId = `data_${index}_${k}`;
        }
        data = {...data, [k]: $(`#${fieldId}`).value}
    });

    if (Object.keys(data).every((k) => !!data[k])) {
        const result = await callValidateApi({...data, fdPackage,fdFromDate})
        if (result.status === 'error') {
            $('button[data-step="4"]').style.display = 'none';
            $this.closest('.controls-wrapper').classList.add("error");

            Swal.fire({
                icon: 'error',
                text: result.message
            })
            $('#swal2-content').innerHTML = $('#swal2-content').textContent

            return false;
        } else {
            $('button[data-step="4"]').style.display = 'inline-flex';
            return true;
        }
    }
}

export const validateNationalID = async ($this, insuredDatas) => {
    let field = $this.getAttribute('name');
    if (field.startsWith('data_')) {
        const index = field.split("_")[1];
        console.log('this ' +$(`#data_${index}_fdNationalID`).value);
    }
    
    insuredDatas.forEach(insured => {
        let insuredField = insured.getAttribute('name');
        if (insuredField.startsWith('data_')) {
            const index = insuredField.split("_")[1];
            console.log('insured ' +$(`#data_${index}_fdNationalID`).value);
        }
    });
}

export const validatePolicy = async ($this, fdPackage,fdFromDate) => {
    let field = $this.getAttribute('name');
    let data = {fdName: null, fdSurname: null, fdNationalID: null}
    Object.keys(data).map((k) => {
        let fieldId = k;
        if (field.startsWith('data_')) {
            const index = field.split("_")[1];
            fieldId = `data_${index}_${k}`;
        }
        data = {...data, [k]: $(`#${fieldId}`).value}
    });

    if (Object.keys(data).every((k) => !!data[k])) {
        const result = await callValidateApi({...data, fdPackage,fdFromDate})
        if (result.status === 'error') {
            $('button[data-step="4"]').style.display = 'none';
            $this.closest('.controls-wrapper').classList.add("error");

            Swal.fire({
                icon: 'error',
                text: result.message
            })
            $('#swal2-content').innerHTML = $('#swal2-content').textContent
            return false;
        } else {
            $('button[data-step="4"]').style.display = 'inline-flex';
            return true;
        }
    }
}

export const getSuscoBranch = async ($this) => {
    return callSuscoBranch();
}

export const validatePromotionCode = async (code, costAmount) => {
    return callPromotionCode({code, costAmount});
}

export const preValidatePromotionCode = async (code) => {
    return callPrePromotionCode({code});
}

export const validatePolicyStep5 = async ($this, datas) => {
    let field = $this.getAttribute('name');
    let data = {fdName: null, fdSurname: null, fdNationalID: null}
    Object.keys(data).map((k) => {
        let fieldId = k;
        if (field.startsWith('data_')) {
            const index = field.split("_")[1];
            fieldId = `data_${index}_${k}`;
        }
        data = {...data, [k]: $(`#${fieldId}`).value}
    });
    let fdNationalID = datas.fdNationalID;
    let fdProductCode = datas.fdProductCode;
    let fdPackage = datas.fdPackage;

    if (Object.keys(data).every((k) => !!data[k])) {        
        const result = await callValidateApi({...data, fdPackage})        
        if (result.status === 'error') {
            $('button[data-step="5"]').style.display = 'none';
            $this.closest('.controls-wrapper').classList.add("error");

            Swal.fire({
                icon: 'error',
                text: result.message
            })
            $('#swal2-content').innerHTML = $('#swal2-content').textContent
            return false;
        } else {
            if(fdProductCode=="ONCSHC"){
                const result = await CheckRegisterForChillSure({fdNationalID, fdProductCode}) 
                if (result.status === 'error') {
                    $('button[data-step="5"]').style.display = 'none';
                    $this.closest('.controls-wrapper').classList.add("error");
        
                    Swal.fire({
                        icon: 'error',
                        text: result.message
                    })
                    $('#swal2-content').innerHTML = $('#swal2-content').textContent
                    $('#hdfidcard').value = "false";
                    return false;
                } else {                    
                    $('button[data-step="5"]').style.display = 'inline-flex';
                    $('#hdfidcard').value = "true";
                    return true;
                }
            } 
            $('button[data-step="5"]').style.display = 'inline-flex';
            return true;
        }
    }
}

export const validatePolicyPayment = async (pfdNationalID,pfdPackage,pfdFromDate) => {
    let data = {fdNationalID: pfdNationalID,fdPackage: pfdPackage,fdFromDate:pfdFromDate}

    const result = await callValidateApi(data)
    if (result.status === 'error') {
        $('button[data-step="payment"]').style.display = 'none';
        Swal.fire({
            icon: 'error',
            text: result.message
            //text: result.message + ' National ID / Passport : ' + pfdNationalID
        })        
        $('#swal2-content').innerHTML = $('#swal2-content').textContent
        return false;
    } else {
        $('button[data-step="payment"]').style.display = 'inline-flex';
        return true;
    }
}


export const validateQuestion = async ($this) => {
    let message = "ข้อมูลการสมัครไม่ตรงกับเงื่อนไขเกณฑ์การพิจารณารับประกัน จึงไม่สามารถทำรายการต่อได้";
    if (locale === 'en') {
        message= "The application information does not meet the criteria for underwriting insurance, therefore unable to continue the transaction.";
    }
    if ($this.value === 'Y' && ($this.id === 'ctrl_question_1_Y'||$this.id === 'ctrl_question_2_Y')) {
        $('button[data-step="4"]').style.display = 'none';
        $this.closest('.controls-wrapper').classList.add("error");
        Swal.fire({
            icon: 'error',
            text: message
        })
        return false;
    } else {
        $('button[data-step="4"]').style.display = 'inline-flex';
        return true;
    }
}


export const validateQuestionTG = async ($this) => {
    let message = "ข้อมูลการสมัครไม่ตรงกับเงื่อนไขเกณฑ์การพิจารณารับประกัน จึงไม่สามารถทำรายการต่อได้";
    if (locale === 'en') {
        message= "The application information does not meet the criteria for underwriting insurance, therefore unable to continue the transaction.";
    }
    if ($this.value === 'Y' && ($this.id === 'ctrl_question_1_Y'||$this.id === 'ctrl_question_2_Y' ||$this.id === 'ctrl_question_3_Y' ||$this.id === 'ctrl_question_4_Y' )) {
        $('button[data-step="4"]').style.display = 'none';
        $this.closest('.controls-wrapper').classList.add("error");
        Swal.fire({
            icon: 'error',
            text: message
        })
        return false;
    } else {
        return true;
    }
}


export const validateQuestion3 = async ($this) => {
    let message = "ข้อมูลการสมัครไม่ตรงกับเงื่อนไขเกณฑ์การพิจารณารับประกัน จึงไม่สามารถทำรายการต่อได้";
    if (locale === 'en') {
        message= "The application information does not meet the criteria for underwriting insurance, therefore unable to continue the transaction.";
    }
    if ($this.value === 'Y' && ($this.id === 'ctrl_question_1_Y'||$this.id === 'ctrl_question_2_Y' ||$this.id === 'ctrl_question_5_Y' )) {
        $('button[data-step="4"]').style.display = 'none';
        $this.closest('.controls-wrapper').classList.add("error");
        Swal.fire({
            icon: 'error',
            text: message
        })
        return false;
    } else {
        // $('button[data-step="4"]').style.display = 'inline-flex';
        return true;
    }
}



export const genPrice = (birthday, package_data) => {
    Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package))
        .map(k => {
            const pack = Object.keys(package_data[k].price).filter(ageRange => checkAge(birthday, ageRange))
            $(`strong[data-price-${k}]`).innerHTML = parseInt(package_data[k].price[pack]).toLocaleString();
        })
}

export const checkAge = (birthday, ageRange) => {
    const range = ageRange.split('-');
    const age = calculateAge(birthday)

    if (range[0].indexOf(',') !== -1) {
        const monthRange = range[0].split(',');
        if(monthRange.length == 2)
        {
            if(age.year >= monthRange[0] && age.year <= range[1])
            {
                if(age.year == monthRange[0])
                {
                    if(age.month >= monthRange[1])
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                return true;
            }
            return false;

            // if (
            //     (age.year > monthRange[0] || (age.year == monthRange[0] && age.month > monthRange[1]))
            //     && age.year < range[1]
            // ) {

            //     return true;
            // }
        }
        else
        {
            //day and year range
            const rangeAll = ageRange.split(',');
            const yearRange = rangeAll[2].split('-');


            if (age.year <= yearRange[1]) {
                if (age.year == yearRange[0]) {
                    if (age.month <= rangeAll[1]) {
                        if (age.day >= rangeAll[0]) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else
                    return true;
            } else {
                return false;
            }
        }



    } else if (age.year >= range[0] && age.year <= range[1]) {
        return true;
    }
    return false;
}

export const getSelectedPrice = (birthday, packageCode, package_data) => {
    const pack = Object.keys(package_data[packageCode].price).filter(ageRange => checkAge(birthday, ageRange))
    return package_data[packageCode].price[pack];
}

export const getSelectedApiPackage = (packageCode, package_data) => {
    return package_data[packageCode].apiPackage;
}

export const showTitle = (sex, age) => {

    $$('.title-wrapper').forEach(el => {
        el.style.display = 'block';
    });
    let arrHide = [];

    if (age >= 15) {
        arrHide.push('#li_title_184');
        arrHide.push('#li_title_185');
        arrHide.push('#li_title_280');
        arrHide.push('#li_title_283');
    } else {
        arrHide.push('#li_title_040');
        arrHide.push('#li_title_041');
        arrHide.push('#li_title_042');
    }

    if (sex === 'M') {
        arrHide.push('#li_title_185');
        arrHide.push('#li_title_040');
        arrHide.push('#li_title_041');
        arrHide.push('#li_title_002');
        arrHide.push('#li_title_003');
        arrHide.push('#li_title_280');
    }

    if (sex === 'F') {
        arrHide.push('#li_title_042');
        arrHide.push('#li_title_184');
        arrHide.push('#li_title_001');
        arrHide.push('#li_title_283');
    }
    arrHide.map(v => {
        if ($(v)) {
            $(v).style.display = "none";
        }

    })
}


export const showTitleOnly = (sex) => {

    $$('.title-wrapper').forEach(el => {
        el.style.display = 'block';
    });

    let arrHide = [];

    if (sex === 'M') {
        arrHide.push('#li_title_185');
        arrHide.push('#li_title_040');
        arrHide.push('#li_title_041');
        arrHide.push('#li_title_002');
        arrHide.push('#li_title_003');
        arrHide.push('#li_title_280');
    }

    if (sex === 'F') {
        arrHide.push('#li_title_042');
        arrHide.push('#li_title_184');
        arrHide.push('#li_title_001');
        arrHide.push('#li_title_283');
    }

    arrHide.map(v => {
        if ($(v)) {
            $(v).style.display = "none";
        }

    })
}


export const showMultipleTitle = (sex, index) => {

    $$(`#form_profile_${index} .title-wrapper`).forEach(el => {
        el.style.display = 'block';
    });

    let arrHide = [];

    if (sex === 'M') {
        arrHide.push('#li_title_185_' + index);
        arrHide.push('#li_title_040_' + index);
        arrHide.push('#li_title_041_' + index);
        arrHide.push('#li_title_002_' + index);
        arrHide.push('#li_title_003_' + index);
        arrHide.push('#li_title_280_' + index);
    }

    if (sex === 'F') {
        arrHide.push('#li_title_042_' + index);
        arrHide.push('#li_title_184_' + index);
        arrHide.push('#li_title_001_' + index);
        arrHide.push('#li_title_283_' + index);
    }

    arrHide.map(v => {
        if ($(v)) {
            $(v).style.display = "none";
        }

    })
}

export const formatTelNumber = (tel, country) => {
    if (country.iso2 === 'th') {
        if (tel.length === 9) {
            return '0' + tel;
        }
        if (tel.length === 10) {
            return tel;
        }
    }
    return country.dialCode + tel;
}

export const changeStep = (step, goToStep) => {
    fadeOut($('#step' + step), 800);
    setTimeout(() => {
        fadeIn($('#step' + goToStep), 800);
    }, 800)

    if (typeof ga === 'function') {
        ga('send', 'pageview', window.location.pathname + '/step' + goToStep);
    }


    if (typeof gtag === 'function') {
        switch (parseInt(goToStep)) {
            case 2:
                gtag('event', 'conversion', {'send_to': 'AW-445121093/zRzuCK2P5vIBEMWEoNQB'});
                break;
            case 3:
                gtag('event', 'conversion', {'send_to': 'AW-445121093/PxU1CPO31fIBEMWEoNQB'});
                break;
            case 4:
                gtag('event', 'conversion', {'send_to': 'AW-445121093/qo9FCK2_1fIBEMWEoNQB'});
                break;
        }
    }


    $('ol.step li[data-step="' + step + '"]').classList.remove('on');
    $('ol.step li[data-step="' + goToStep + '"]').classList.add('on');
    scrollToTargetAdjusted($('ol.step'));
}

const showMultipleDateError = (message, i) => {
    const $cite = document.createElement('cite');
    $cite.innerHTML = message;
    $(`#form_profile_${i} .date-input`).appendChild($cite);
    $$(`#form_profile_${i} .date-input .controls-wrapper`).forEach(el => {
        el.classList.add('error');
    });
}

export const checkTaBirthDate = (i) => {

    const dd = $(`#data_${i}_ctrl_day`).value,
        mm = $(`#data_${i}_ctrl_month`).value;
    let yy = $(`#data_${i}_ctrl_year`).value;

    if (dd === '' || mm === '' || yy === '') {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    const age = calculateAge(birthday)

    if (age.year < 2 || age.year > 75) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-not-qualify'), i);
        return {status: false};
    }

    return {
        status: true,
        data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}

export const iTravelCheckBirthDate = (i) => {

    const dd = $(`#data_${i}_ctrl_day`).value,
        mm = $(`#data_${i}_ctrl_month`).value;
    let yy = $(`#data_${i}_ctrl_year`).value;

    if (dd === '' || mm === '' || yy === '') {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    const age = calculateAge(birthday)

    if (age.year < 1 || age.year > 85) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-not-qualify'), i);
        return {status: false};
    }

    return {
        status: true,
        data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}

export const checkTaBirthDateIPass = (i) => {

    const dd = $(`#data_${i}_ctrl_day`).value,
        mm = $(`#data_${i}_ctrl_month`).value;
    let yy = $(`#data_${i}_ctrl_year`).value;

    if (dd === '' || mm === '' || yy === '') {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    const age = calculateAge(birthday)

    if (age.year < 1 || age.year > 75) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-not-qualify'), i);
        return {status: false};
    }

    return {
        status: true,
        data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}

//================= Start B2B
export const B2BTACheckBirthDate = (i) => {

    const dd = $(`#data_${i}_ctrl_day`).value,
        mm = $(`#data_${i}_ctrl_month`).value;
    let yy = $(`#data_${i}_ctrl_year`).value;

    if (dd === '' || mm === '' || yy === '') {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    const age = calculateAge(birthday)

    if (age.year < 1 || age.year > 85) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-not-qualify'), i);
        return {status: false};
    }

    return {
        status: true,
        data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}

export const B2BTADCheckBirthDate = (i) => {

    const dd = $(`#data_${i}_ctrl_day`).value,
        mm = $(`#data_${i}_ctrl_month`).value;
    let yy = $(`#data_${i}_ctrl_year`).value;

    if (dd === '' || mm === '' || yy === '') {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    if (parseInt(yy.substring(0, 2)) > 21) {
        yy = (parseInt(yy) - 543).toString();
    }

    const birthday = `${yy}-${mm}-${dd}`;

    if (!isValid(parseISO(birthday))) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-format'), i);
        return {status: false};
    }

    const age = calculateAge(birthday)

    if (age.year < 1 || age.year > 75) {
        showMultipleDateError($(`#data_1_ctrl_day`).getAttribute('data-error-not-qualify'), i);
        return {status: false};
    }

    return {
        status: true,
        data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
}
//================= End B2B


export const formatInputFieldByLanguage = () => {

    if (locale === 'en') {
        return {
            pattern: /^[a-zA-Z0-9 \-_!@#$&()\\-`.+,/\"\n\r]*$/,
            flags: "i",
            message: "^Only English Allowed"
        };
    } else {
        return {
            pattern: /^[ก-๙0-9 \-_!@#$&()\\-`.+,/\"\n\r]*$/,
            flags: "i",
            message: "^กรุณาใส่ภาษาไทยเท่านั้น"
        };
    }

}

export const formatInputFieldOnlyEnglish = () => {
    let message = "^กรุณากรอกภาษาอังกฤษเท่านั้น";
    if (locale === 'en') {
        message= "^Only English Allowed";
    }
    return {
        pattern: /^[a-zA-Z0-9 \-_!@#$&()\\-`.+,/\"\n\r]*$/,
        flags: "i",
        message: message
    };
}



