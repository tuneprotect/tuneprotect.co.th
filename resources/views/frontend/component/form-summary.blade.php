@if(isset($portal_key))
    @if($portal_key == '2TRZB6Y3NDEQB9E32JUXXGSF2Q5ZB6EXPAKNNGDRD8UXN4Q228UQN4RR22')
        <!-- Activity name for this tag: TuneProtect-Confirmation Page -->
        <script>
            (function() {
                var a = String(Math.floor(Math.random() * 10000000000000000));
                new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4909934;ord='+ a +'?';
            })();
        </script>
        <noscript>
            <img src='https://pubads.g.doubleclick.net/activity;xsp=4909934;ord=1?' width=1 height=1 border=0>
        </noscript>
    @endif
@endif

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
            <button data-gtm="product-{{strtolower($selected)}}-make-payment" data-step="payment" type="button"
                    class="btn btn-primary btn-disable-fake">@lang('product.proceed')</button>
            <button data-gtm="product-{{strtolower($selected)}}-make-payment" data-step="payment" type="submit"
                    class="btn btn-primary btn-disable" style="display: none;">@lang('product.proceed')</button>
        </div>
    </form>
</section>

<script>
    var clickBtn = document.getElementsByClassName('btn-disable-fake')[0];
    var btnSubmit = document.getElementsByClassName('btn-disable')[0];
    clickBtn.addEventListener('click', function(event) {
        btnSubmit.click();
        clickBtn.disabled = true;
    });
</script>
