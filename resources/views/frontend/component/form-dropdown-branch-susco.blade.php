<strong>@lang('product.branch_susco_title')</strong>
<div class="date-input branch-select">
    <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
    <div class="date-wrapper">
        <div class="controls-wrapper">
            <input type="hidden" id="hdfMemberStatus" />
            <select id="{{$prefix}}ctrl_province" name="{{$prefix}}ctrl_province"
                data-please-select="@lang("global.default_select_option")">
                <option value="" disabled selected>@lang('product.select_branch')</option>
            </select>
            <cite class="bmi_error"></cite>
        </div>
        <div class="controls-wrapper"></div>
        <div class="controls-wrapper"></div>
    </div>
</div>