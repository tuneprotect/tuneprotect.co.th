import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears, parseISO} from "date-fns";

export const $ = (selector, base = null) => {
    return (base || document).querySelector(selector);
};

export const $$ = (selector, base = null) => {
    return (base || document).querySelectorAll(selector);
};

export const current_package = $('main').getAttribute('data-package');
export const locale = $('html').getAttribute('lang');

export const calculateAge = (date) => {
    const now = new Date();
    let result = {
        year: 0,
        month: 0,
        day: 0
    };
    let age = parseISO(date);

    const year = differenceInYears(now, age);
    if (year > 0) {
        result = {...result, year};
        age = addYears(age, year);
    }

    const month = differenceInMonths(now, age);
    if (month > 0) {
        result = {...result, month};
        age = addMonths(age, month);
    }

    const day = differenceInDays(now, age);
    if (day > 0) {
        result = {...result, day};
    }

    return result;
}


export const fadeIn = (elem, ms) => {
    if (!elem)
        return;

    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "block";
    elem.style.visibility = "visible";

    if (ms) {
        let opacity = 0;
        let timer = setInterval(function () {
            opacity += 50 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 1;
        elem.style.filter = "alpha(opacity=1)";
    }
}

export const fadeOut = (elem, ms) => {
    if (!elem)
        return;

    if (ms) {
        let opacity = 1;
        let timer = setInterval(function () {
            opacity -= 50 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
                elem.style.visibility = "hidden";
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 0;
        elem.style.filter = "alpha(opacity=0)";
        elem.style.display = "none";
        elem.style.visibility = "hidden";
    }
}


export const getZipcodeData = async () => {
    let res = await fetch('/storage/json/zipcode.json');
    return await res.json();
}

export const getRadioSelectedValue = (name) => {
    const radios = document.getElementsByName(name);
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

export const getCheckedCheckboxesFor = (name) => {
    let checkeds = $$('input[name="' + name + '"]:checked'),
        values = [];
    checkeds.forEach(function (chkd) {
        values.push(chkd.value);
    });
    return values;
}

export const scrollToTargetAdjusted = ($elm) => {

    if ($elm) {

        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = $elm.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}
