<p>@lang('global.another_company')</p>
<div class="controls-wrapper">
    <ul class="check-wrapper">
        <li>
            <input id="ctrl_is_another_company_no" name="fdIsAnotherCompany" type="radio" checked value="N"/>
            <label for="ctrl_is_another_company_no">@lang('product.no')</label>
        </li>
        <li>
            <input id="ctrl_is_another_company_yes" name="fdIsAnotherCompany" type="radio" value="Y"/>
            <label for="ctrl_is_another_company_yes">@lang('product.yes')</label>
        </li>
    </ul>
</div>
<div class="two-col">
    <div class="controls-wrapper full another_company_name" style="display: none">
        <div class="controls-wrapper">
            <input id="fdAnotherCompanyName1" name="fdAnotherCompanyName1" type="text" placeholder="@lang('product.another_company_name')"
                    data-error-tax_no-require="@lang("product.error.tax_no.require")"
                    data-error-tax_no-format="@lang("product.error.tax_no.format")"
            />
            <label for="fdTaxno">@lang('product.tax_no')</label>
        </div>
    </div>
</div>