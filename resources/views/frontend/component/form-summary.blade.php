<section style="display: none" id="step4" class="wrapper">
    <form class="insurance-form" method="post"
          action="{{route('current',['locale' => $locale,'controller' => $controller,'func' => "make-payment"],false)}}">
        <div class="form-head">
            @if($controller == 'tg')
                Confirmation
            @else
                @lang('product.confirmation')
            @endif
                </div>
        <div id="summary_section" class="form-inner"
             data-insurance_data="@lang('product.insurance_data')"
             data-profile_data="@lang('product.profile_data')"
             data-price="@lang('product.price')"
             data-baht="@lang('product.baht')"
             data-plan="@lang('product.insurance_plan')"
             data-price-perperson="@lang('product.price_perperson')"
             data-total-price="@lang('product.total_price')"
             data-day-wording="@lang("product.ipass_day_wording")"
             data-day="@lang("product.ipass_day")"
        ></div>
        <div class="btn-wrapper">
            @csrf
            <button data-gtm="product-{{strtolower($selected)}}-back-step-4" data-step="3"
                    class="btn btn-secondary btn-goto">@lang('product.edit')</button>
            <button data-gtm="product-{{strtolower($selected)}}-make-payment" type="submit"
                    class="btn btn-primary">@lang('product.proceed')</button>
        </div>
    </form>
</section>
