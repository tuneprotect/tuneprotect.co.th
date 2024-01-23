<p>@lang('product.another_company')</p>
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
<div class="two-col another_company_name" style="display: none">
    <div class="controls-wrapper">
        <div class="question-wrapper">
            <p>@lang('product.another_policy')</p>
            <input id="fdAnotherCompanyName1" name="fdAnotherCompanyName1" 
                    type="text" size="10"
                    placeholder="@lang('product.another_company_name')"
                    data-error-tax_no-require="@lang("product.error.tax_no.require")"
                    data-error-tax_no-format="@lang("product.error.tax_no.format")"
            />
            <label for="fdTaxno">@lang('product.tax_no')</label>
            <p>@lang('product.policy_unit')</p>
        </div>
    </div>
    <div class="controls-wrapper" >
        <div class="question-wrapper">
            <p>@lang('product.another_policy_price')</p>
            <input id="fdAnotherCompanyName1" name="fdAnotherCompanyName1" 
                    type="text" size="10"
                    placeholder="@lang('product.another_company_name')"
                    data-error-tax_no-require="@lang("product.error.tax_no.require")"
                    data-error-tax_no-format="@lang("product.error.tax_no.format")"
            />
            <label for="fdTaxno">@lang('product.tax_no')</label>
            <p>@lang('product.price_unit')</p>
        </div>
    </div>
</div>