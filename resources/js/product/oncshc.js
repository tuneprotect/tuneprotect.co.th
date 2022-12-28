import {
    removeError,
    showBMIError,
    showBMIValidateError,
    showDateError,
    showAcceptError,
    showFieldError,
    validateField
} from "../validate_form";
import validate from "validate.js";
import {
    $,
    $$, calculateAge,
    current_package,
    getCheckedCheckboxesFor,
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
    validatePolicy, validatePolicyPayment, validatePolicyStep5
} from "../form/productHelper";

import Swal from "sweetalert2";
import {format, isValid, parseISO} from "date-fns";
import intlTelInput from "intl-tel-input";

