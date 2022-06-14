<strong>@lang('product.bmi_title')</strong>
<div class="bmi-input" id="bmi_input">
    <div class="bmi-wrapper">
        <div class="controls-wrapper">
            <input id="ctrl_weight" type="number" min="0" placeholder="@lang('product.weight')"
                   pattern="^[0-9]*$"
                   data-error-fill-in-number-only="@lang('product.error.bmi.fill_in_number_only')"
                   data-error-not-qualify="@lang('product.error.bmi.text-not-qualify')" />
            <label for="ctrl_weight">@lang('product.weight')</label>
        </div>
        <div class="controls-wrapper">
            <input id="ctrl_height" pattern="^[0-9]*$" type="number" min="0" placeholder="@lang('product.height')"/>
            <label for="ctrl_weight">@lang('product.height')</label>
        </div>
        <div class="controls-wrapper">
            <input id="ctrl_bmi_calculator" type="tel" placeholder="@lang('product.bmi_calculator')" readonly />
            <label for="ctrl_bmi_calculator">@lang('product.bmi_calculator')</label>
        </div>
    </div>
    <cite></cite>
</div>
