<form method="post" action="" class="insurance-form">
    <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
    <div class="form-inner">
        <h3>@lang('product.please_specify_birthdate')</h3>
        <div class="date-input">
            <div class="date-wrapper">
                <div class="controls-wrapper">
                    <input id="ctrl_day" type="tel" placeholder="@lang('product.day')"
                           data-birthdate="@lang('product.birthdate')"
                           data-years-old="@lang('product.years_old')"
                           data-error-format="@lang('product.error.birthdate.format')"
                           data-error-not-qualify="@lang('product.error.birthdate.not-qualify')"
                    />
                    <label for="ctrl_day">@lang('product.day')</label>
                </div>
                <div class="controls-wrapper">
                    <select id="ctrl_month" name="ctrl_month">
                        <option selected="selected" value="">@lang('product.please_select')</option>
                        <option value="01">@lang('product.month_list.jan')</option>
                        <option value="02">@lang('product.month_list.feb')</option>
                        <option value="03">@lang('product.month_list.mar')</option>
                        <option value="04">@lang('product.month_list.apr')</option>
                        <option value="05">@lang('product.month_list.may')</option>
                        <option value="06">@lang('product.month_list.jun')</option>
                        <option value="07">@lang('product.month_list.jul')</option>
                        <option value="08">@lang('product.month_list.aug')</option>
                        <option value="09">@lang('product.month_list.sep')</option>
                        <option value="10">@lang('product.month_list.oct')</option>
                        <option value="11">@lang('product.month_list.nov')</option>
                        <option value="12">@lang('product.month_list.dec')</option>
                    </select>
                    <label for="ctrl_month">@lang('product.month')</label>
                </div>
                <div class="controls-wrapper">
                    <input id="ctrl_year" type="tel" placeholder="@lang('product.year')"/>
                    <label for="ctrl_year">@lang('product.year')</label>
                </div>
            </div>
            <cite></cite>
        </div>
    </div>
    <div class="btn-wrapper">
        <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" class="btn btn-primary btn-goto">@lang('product.next')</button>
    </div>
</form>
