<h3>@lang('product.another_company')</h3>
<div class="question-wrapper">
    <br/>
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
    <div class="date-input another_company_name" style="display: none">
        <div class="date-wrapper">
            <div><p class="small">@lang('product.another_policy')</p></div>
            <div class="controls-wrapper">
                <input id="fdAnotherNoOfPolicy" name="fdAnotherNoOfPolicy" 
                    type="text" data-error-another_no_of_policy-require="@lang("product.error.another_no_of_policy.require")"
                    data-error-another_no_of_policy-format="@lang("product.error.another_no_of_policy.format")"
                />
            </div>
            <div><p class="small">@lang('product.policy_unit')</p></div>
        </div>
        <div class="date-wrapper">
            <div><p class="small">@lang('product.another_policy_price')</p></div>
            <div class="controls-wrapper">
                <input id="fdAnotherPolicyTotalPrice" name="fdAnotherPolicyTotalPrice" 
                    type="text" data-error-another_policy_total_price-require="@lang("product.error.another_policy_total_price.require")"
                    data-error-another_policy_total_price-format="@lang("product.error.another_policy_total_price.format")"
                />
            </div>
            <div><p class="small">@lang('product.price_unit')</p></div>
        </div>
        <div class="date-wrapper">
            <div><p class="small">@lang('product.detail_another_policy')</p></div>
        </div>
        <div class="date-wrapper">
            <div><p class="small">@lang('product.company')</p></div>
            <div class="controls-wrapper"><input id="fdAnotherCompName1" name="fdAnotherCompName1" 
                    type="text" data-error-another_company-format="@lang("product.error.another_company.format")" /></div>
            <div><p class="small">@lang('product.policy_price')</p></div>
            <div class="controls-wrapper">
                <input id="fdAnotherPolicyPrice1" name="fdAnotherPolicyPrice1" 
                    type="text" data-error-another_policy_price-format="@lang("product.error.another_policy_price.format")"
                />
            </div>
            <div><p class="small">@lang('product.price_unit')</p></div>
        </div>
        <div class="date-wrapper">
            <div><p class="small">@lang('product.company')</p></div>
            <div class="controls-wrapper"><input id="fdAnotherCompName2" name="fdAnotherCompName2" 
                    type="text" data-error-another_company-format="@lang("product.error.another_company.format")" /></div>
            <div><p class="small">@lang('product.policy_price')</p></div>
            <div class="controls-wrapper">
                <input id="fdAnotherPolicyPrice2" name="fdAnotherPolicyPrice2" 
                    type="text" data-error-another_policy_price-format="@lang("product.error.another_policy_price.format")"
                />
            </div>
            <div><p class="small">@lang('product.price_unit')</p></div>
        </div>
        <div class="date-wrapper">
            <div><p class="small">@lang('product.company')</p></div>
            <div class="controls-wrapper"><input id="fdAnotherCompName3" name="fdAnotherCompName3" 
                    type="text" data-error-another_company-format="@lang("product.error.another_company.format")" /></div>
            <div><p class="small">@lang('product.policy_price')</p></div>
            <div class="controls-wrapper">
                <input id="fdAnotherPolicyPrice3" name="fdAnotherPolicyPrice3" 
                    type="text" data-error-another_policy_price-format="@lang("product.error.another_policy_price.format")"
                />
            </div>
            <div><p class="small">@lang('product.price_unit')</p></div>
        </div>
    </div>
</div>
<br/>
