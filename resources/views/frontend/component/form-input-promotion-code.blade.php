<strong>@lang('product.PromotionCode.promotion_code_title')</strong>
<div class="two-col">
    <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
    <div class="date-wrapper">
        <div class="controls-wrapper">
            <input type="hidden" id="hdfdPromotionCodeStatus" />
            <input id="fdPromotionCode" type="text" name="fdPromotionCode" placeholder="@lang('product.PromotionCode.promotion_code')" 
                   data-error-promotion-code-not-qualify="@lang('product.PromotionCode.promotion_code_error')"
            />
            <label for="fdPromotionCode">@lang("product.PromotionCode.promotion_code")</label>
            <cite class="cite_error"></cite>
        </div>
        <div class="controls-wrapper"></div>
    </div>
</div>


	
