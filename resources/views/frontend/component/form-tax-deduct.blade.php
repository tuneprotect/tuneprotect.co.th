<h3 id="tax_deduction_title">@lang('product.tax_deduction.title')</h3>
<p>@lang('product.tax_deduction.sub_title')</p>
<div class="two-col">
    <div class="controls-wrapper full no-lable">
        <input id="fdRevenue" name="fdRevenue" type="checkbox" value="1"/>
        <label for="fdRevenue">
            <span class="small">
                @lang('product.tax_deduction.description')<br/>
            </span>
            <span class="text-primary small">@lang('product.tax_deduction.remark')</span>
        </label>
    </div>
    <div class="controls-wrapper full tax_no_detail" style="display: none">
        <div class="controls-wrapper">
            <input id="fdTaxno" name="fdTaxno" type="tel" placeholder="@lang('product.tax_no')"
                   data-error-tax_no-require="@lang("product.error.tax_no.require")"
                   data-error-tax_no-format="@lang("product.error.tax_no.format")"
                   data-yes="@lang("product.yes")"
                   data-no="@lang("product.no")"
            />
            <label for="fdTaxno">@lang('product.tax_no')</label>
        </div>
    </div>
</div>
<br/>
