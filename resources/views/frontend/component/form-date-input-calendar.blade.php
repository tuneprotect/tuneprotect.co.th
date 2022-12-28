<style>
    .d-none{
        display: none !important;
    }
</style>
<div class="date-input">
    <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
    <div class="date-wrapper">
        <div class="controls-wrapper"></div>
        <div class="controls-wrapper">
            
            <input class="flatpickr flatpickr-input active" 
                    data-id="disableSpecific"
                    type="text" 
                    id="ctrl_dob" 
                    placeholder="@lang('product.day')"
                    data-birthdate="@lang('product.birthdate')"
                    data-years-old="@lang('product.years_old')"
                    data-error-format="@lang('product.error.birthdate.format')"
                    data-error-not-qualify="@lang('product.error.birthdate.not-qualify')"
                    readonly="readonly" />
            <label for="ctrl_dob">@lang('product.day')</label>
        </div>
        <div class="controls-wrapper"></div>
    </div>
    <cite></cite>
</div>


	
