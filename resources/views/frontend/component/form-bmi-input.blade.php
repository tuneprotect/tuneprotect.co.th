<div class="bmi_title_wrapper"><strong>@lang('product.bmi_title')</strong>
    <span class="bmi-tooltip"><span class="span">?</span><span class="info">@lang('product.bmi_info')</span></span>
</div>
<div class="bmi-input" id="bmi_input">
    <div class="bmi-wrapper">
        <div class="controls-wrapper">
            <input id="ctrl_weight" type="number" min="0" placeholder="@lang('product.weight')"
                   pattern="^[0-9]*$"
                   data-error-fill-in-number-only="@lang('product.error.bmi.fill_in_number_only')"
                   data-error-weight-not-qualify="@lang('product.error.bmi.weight-not-qualify')"
                   data-error-height-not-qualify="@lang('product.error.bmi.height-not-qualify')"
                   data-error-not-qualify="@lang('product.error.bmi.text-not-qualify')"/>
            <label for="ctrl_weight">@lang('product.weight')</label>
            <cite class="error_weight"></cite>
        </div>
        <div class="controls-wrapper">
            <input id="ctrl_height" pattern="^[0-9]*$" type="number" min="0" placeholder="@lang('product.height')"/>
            <label for="ctrl_height">@lang('product.height')</label>
            <cite class="error_height"></cite>
        </div>
        <div class="controls-wrapper">
            <input id="ctrl_bmi_calculator" type="tel" placeholder="@lang('product.bmi_calculator')" readonly/>
            <label for="ctrl_bmi_calculator">@lang('product.bmi_calculator')</label>
        </div>
    </div>
    <cite class="bmi_error"></cite>
</div>
