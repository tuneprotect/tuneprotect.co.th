import {$, $$, calculateAge, current_package, fadeIn, fadeOut, scrollToTargetAdjusted} from "../helper";
import {isValid, parseISO} from "date-fns";
import {showDateError} from "../validate_form";

export const getPackageData = async (currentPackage) => {
    let res = await fetch(`/storage/json/${currentPackage.toLowerCase()}.json`);
    return await res.json();
}

export const getNationalityData = async () => {
    let res = await fetch(`/storage/json/nationality.json`);
    return await res.json();
}

export const getProvinceData = async () => {
    let res = await fetch(`/storage/json/province.json`);
    return await res.json();
}

export const getCountryData = async () => {
    let res = await fetch(`/storage/json/country.json`);
    return await res.json();
}

export const validateAgeInPackage = (package_data) => {
    $$('.date-input .controls-wrapper').forEach(el => {
        el.classList.remove('error');
    });
    $('.date-input cite').innerHTML = "";

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

    const age_in_range = Object.keys(package_data)
        .filter(k => _.startsWith(k, current_package))
        .some(k => Object.keys(package_data[k].price).some(ageRange => checkAge(birthday, ageRange)))

    if (!age_in_range) {
        showDateError($('#ctrl_day').getAttribute('data-error-not-qualify'));
        return {status: false};
    }

    const age = calculateAge(birthday)
    genPrice(birthday, package_data)

    return {
        status: true, data: {
            fdHBD: birthday,
            fdAge: age.year
        }
    };
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
        if (
            (age.year > monthRange[0] || (age.year == monthRange[0] && age.month > monthRange[1]))
            && age.year < range[1]
        ) {

            return true;
        }
    } else if (age.year >= range[0] && age.year < range[1]) {
        return true;
    }
    return false;
}

export const getSelectedPrice = (birthday, packageCode, package_data) => {
    const pack = Object.keys(package_data[packageCode].price).filter(ageRange => checkAge(birthday, ageRange))
    return package_data[packageCode].price[pack];
}

export const showTitle = (sex, age) => {

    $$('.title-wrapper').forEach(el => {
        el.style.display = 'block';
    });

    let arrHide = [];

    if (age > 15) {
        arrHide.push('#li_title_184');
        arrHide.push('#li_title_185');
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
    }

    if (sex === 'F') {
        arrHide.push('#li_title_042');
        arrHide.push('#li_title_184');
        arrHide.push('#li_title_001');
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
    }

    if (sex === 'F') {
        arrHide.push('#li_title_042_' + index);
        arrHide.push('#li_title_184_' + index);
        arrHide.push('#li_title_001_' + index);
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
