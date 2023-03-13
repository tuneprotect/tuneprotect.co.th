import validate from "validate.js";
import {$, $$, scrollToTargetAdjusted} from "./helper";

export const showFieldError = ($this, errors) => {

    const $parent = $this.closest('.controls-wrapper');
    errors.map((v, i) => {
        if (i === 0) {
            $parent.classList.add('error');
            if(!!$parent.querySelector('cite')){
                $parent.querySelector('cite').remove();
            }
            const $cite = document.createElement('cite');
            $cite.innerHTML = v;
            $parent.appendChild($cite);
        }
    });
}

export const validateField = ($this, constraints) => {

    let field = $this.getAttribute('name');
    if (field) {

        if (field.startsWith('data_')) {
            const index = field.split("_")[1];
            field = field.replace(`data_${index}_`, '');
        }

        let fieldValue = $this.value;

        const $parent = $this.closest('.controls-wrapper');
        $parent.classList.remove('error')
        $$('cite', $parent).forEach($el => $el.remove());

        const result = validate({[field]: fieldValue}, constraints);

        if (result && result[field]) {
            showFieldError($this, result[field]);
        }
    }
}
export const validateAcceptStep1 = () => {
       
    $('cite.step1_error').innerHTML = "";
    let chkAccept = $('#ctrl_accept_step1').checked ? true : false;
     return chkAccept;
}

export const removeErrorMessage = ($this) => {
    const $cite = $this.getElementsByTagName('cite');
    for (let i = 0, len = $cite.length; i !== len; ++i) {
        $cite[0].parentNode.removeChild($cite[0]);
    }
}


export const removeError = ($form) => {
    const $cite = $form.getElementsByTagName('cite');
    for (let i = 0, len = $cite.length; i !== len; ++i) {
        $cite[0].parentNode.removeChild($cite[0]);
    }

    $form.querySelectorAll('.controls-wrapper').forEach(($el) => {
        $el.classList.remove('error')
    });
}

export const showError = ($form, result) => {
    Object.keys(result).map(k => {
        let $elm = $form.querySelector(`[name=${k}]`);
        showFieldError($elm, result[k])
    });
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

export const showDateError = (message) => {
    $('.date-input cite').innerHTML = message;
    $$('.date-input .controls-wrapper').forEach(el => {
        el.classList.add('error');
    });
}

export const showBMIError = (message) => {
    $('.bmi-input cite.bmi_error').innerHTML = message;
    $$('.bmi-input .controls-wrapper').forEach(el => {
        el.classList.add('error');
    });
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

export const showBMIValidateError = (message,selector) => {
    $('.bmi-input cite.' + selector).innerHTML = message;
    $$('.bmi-input .controls-wrapper').forEach(el => {
        el.classList.add('error');
    });
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

export const showAcceptError = (message) => {
    $('cite.step1_error').innerHTML = message;
    // $$('.bmi-input .controls-wrapper').forEach(el => {
    //     el.classList.add('error');
    // });
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}
