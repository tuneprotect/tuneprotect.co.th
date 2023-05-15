<strong>@lang('product.branch_susco_title')</strong>
<div class="date-input airasia-member-input">
    <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
    <div class="date-wrapper">
        <div class="controls-wrapper">
            <input type="hidden" id="hdfMemberStatus" />
            <select id="{{$prefix}}ctrl_province" name="{{$prefix}}ctrl_province"
                data-please-select="@lang("global.default_select_option")"
                data-error-province="@lang("product.error.province")">
                <option value="" disabled selected>Select your option</option>
            </select>
            <cite class="bmi_error"></cite>
        </div>
        <div class="controls-wrapper"></div>
        <div class="controls-wrapper"></div>
    </div>
</div>