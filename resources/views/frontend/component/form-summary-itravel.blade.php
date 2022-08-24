
{{--<div class="officer">--}}
{{--    <a>--}}
{{--        <u>ความคุ้มครองที่เลือกไว้</u>--}}
{{--    </a>--}}
{{--</div>--}}

{{--<div>--}}
{{--    <section id="">--}}
{{--        <div class="page-overlay" style="display: none">--}}
{{--            <div class="popup-wrapper">--}}
{{--                <a data-gtm="index-organization-close" class="close"><i class="icofont-close"></i>--}}
{{--                </a>--}}
{{--                <div style="height: 750px; width: 750px; overflow: auto">--}}
{{--                        <table id="table-scroll">--}}
{{--                        </table>--}}
{{--                </div>--}}
{{--        </div>--}}
{{--    </section>--}}
{{--</div>--}}

<section style="display: none" id="step4" class="wrapper">
    <form class="insurance-form" method="post"
          action="{{route('current',['locale' => $locale,'controller' => $controller,'func' => "make-payment"],false)}}">
        <div class="form-head">@lang('product.confirmation')</div>

        <div id="summary_section" class="form-inner"
             data-insurance_data="@lang('product.insurance_data')"
             data-profile_data="@lang('product.profile_data')"
             data-price="@lang('product.price')"
             data-baht="@lang('product.baht')"
             data-plan="@lang('product.insurance_plan')"
             data-price-perperson="@lang('product.price_perperson')"
             data-total-price="@lang('product.total_price')"
        ></div>

        <div class="form-inner" style="text-align: left;">
            <div class="officer">
                <a><u>@lang('product.itravel_coverage_choose')</u></a>
            </div>
        </div>

        <div class="btn-wrapper">
            @csrf
            <button data-gtm="product-{{strtolower($selected)}}-back-step-4" data-step="3"
                    class="btn btn-secondary btn-goto">@lang('product.edit')</button>
            <button data-gtm="product-{{strtolower($selected)}}-make-payment" data-step="payment" type="submit"
                    class="btn btn-primary">@lang('product.proceed')</button>
        </div>

        <div>
            <section>
                <div class="page-overlay" style="display: none">
                    <div class="popup-wrapper">
                        <a data-gtm="index-organization-close" class="close"><i class="icofont-close"></i>
                        </a>
                        <div style="height: 750px; width: 100%; overflow: auto">
                            <table id="table-scroll">
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </form>
</section>
