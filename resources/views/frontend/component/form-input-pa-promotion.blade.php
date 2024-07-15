<strong>@lang('product.PromotionCode.promotion_code_title_pa')</strong>
<div class="controls-wrapper promotion-code">
	<div id="divPromotionCode" class="check-wrapper" 
            data-error-promotion-code-count="@lang('product.PromotionCode.promotion_code_count')"
            data-error-promotion-code-valid="@lang('product.PromotionCode.promotion_code_valid')"
            data-error-promotion-code-invalid="@lang('product.PromotionCode.promotion_code_invalid')">
		<div class="controls-wrapper">
			<input id="ctrl_promotion_starbucks" name="fdPromotionCode" type="radio" value="pastb2024">
			<label for="ctrl_promotion_starbucks">
				<img src="/storage/promotion/Starbucks_Giftcard.png" width="30%" />
			</label>
		</div>
		<div class="controls-wrapper">
			<input id="ctrl_promotion_central" name="fdPromotionCode" type="radio" value="pact2024">
			<label for="ctrl_promotion_central">
				<img src="/storage/promotion/Central_Giftcard.png" width="30%" />
			</label>
		</div>
        <span class="span_error"></span>
	</div>
</div>
