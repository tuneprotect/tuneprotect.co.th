import validate from "validate.js";
import {$, $$, scrollToTargetAdjusted} from "./helper";

export const showFieldError = ($this, errors) => {

    const $parent = $this.closest('.controls-wrapper');
    const $node = $this.closest('.date-wrapper');
    errors.map((v, i) => {
        if (i === 0) {
            $parent.classList.add('error');
            if(!!$parent.querySelector('cite')){
                $parent.querySelector('cite').remove();
                $node.querySelector('cite').remove();
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
    $('#step1_error').innerHTML = '<cite class="step1_error"></cite>';
    //$('cite.step1_error').innerHTML = "";
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

export const showValidateAirAsiaMemberError = (message,selector) => {
    $('.airasia-member-input cite.' + selector).innerHTML = message;
    $$('.airasia-member-input .controls-wrapper').forEach(el => {
        el.classList.add('error');
    });
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

export const showValidateBranchError = (message, selector) => {
    $('.branch-select cite.' + selector).innerHTML = message;
    $$('.branch-select .controls-wrapper').forEach(el => {
        el.classList.add('error');
    });
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

export const showPromotionCodeCount = (message, selector) => {
    $('.promotion-code span.' + selector).innerHTML = message;
    $$('.promotion-code').forEach(el => {
        el.classList.remove('error');
    });
    $('.promotion-code span.' + selector).style.color = '#F07832';
}

export const showPromotionCodeValid = (message, selector) => {
    $('.promotion-code span.' + selector).innerHTML = message;
    $$('.promotion-code').forEach(el => {
        el.classList.remove('error');
    });
    $('.promotion-code span.' + selector).style.color = '#008b06';
}

export const showValidatePromotionCodeError = (message, selector) => {
    $('.promotion-code span.' + selector).innerHTML = message;
    $$('.promotion-code').forEach(el => {
        el.classList.add('error');
    });
    $('.promotion-code span.' + selector).style.color = '#e71618';
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

export const showAcceptError = (message) => {
    $('cite.step1_error').innerHTML = message;
    scrollToTargetAdjusted($('.controls-wrapper.error'));
}

// export const showValidateNationalIDError = (selector) => {
//     $(selector).prev().classList.add('error');
//     scrollToTargetAdjusted($('.controls-wrapper.error'));
// }
