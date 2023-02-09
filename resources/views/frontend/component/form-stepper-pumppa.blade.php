<section>

    <ol class="step">
        <li id="step_1" data-gtm="product-pumppa-stepper-1" class="btn-goto on" data-step="1"><a
                href="#">
                <strong>
                        @lang('product.please_specify_travel_info')
                </strong>
            </a></li>
        <li id="step_2" data-gtm="product-{{strtolower($selected)}}-stepper-2" class="btn-goto" data-step="2"><a
                href="#"><strong>@lang('product.select_plan')</strong></a></li>
        <li id="step_3" data-gtm="product-{{strtolower($selected)}}-stepper-3" class="btn-goto" data-step="3"><a
                href="#"><strong>@lang('product.fill_in_information')</strong></a></li>
        <li id="step_4" data-gtm="product-{{strtolower($selected)}}-stepper-4" class="btn-goto" data-step="4"><a
                href="#">
                <strong>
                    @lang('product.confirm')
                </strong>
            </a></li>
    </ol>
</section>
