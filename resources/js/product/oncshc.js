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


