import {
    showBMIError,
    showBMIValidateError,
    showAcceptError,
    showFieldError,
    validateField
} from "../validate_form";
import validate from "validate.js";
import {
    $,
    $$, 
    current_package,
    getRadioSelectedValue,
    locale,
    scrollToTargetAdjusted
} from "../helper";
import {
    changeStep, checkAge,
    formatInputFieldByLanguage,
    formatTelNumber,
    getPackageData,
    getSelectedPrice,
    showTitle,
    validateAgeInPackage,
    validatePolicyPayment, validatePolicyStep5
} from "../form/productHelper";

import Swal from "sweetalert2";
import {format, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

require('../main');
require('../product');

validate.validators.idcard = function (value, options, key, attributes) {
    for (var i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
    if (!result) {
        return "^" + $('#fdNationalID').getAttribute('data-error-idcard')
    }
};