import validate from "validate.js";
import {$, $$, scrollToTargetAdjusted} from "./helper";

export const showFieldError = ($this, errors) => {


    const $parent = $this.closest('.controls-wrapper');
    errors.map((v, i) => {
        if (i === 0) {
            $parent.classList.add('error');
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
