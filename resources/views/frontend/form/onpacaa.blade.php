@include('frontend.component.form-stepper')
<section id="step1" class="wrapper">
    @include('frontend.component.form-birthdate')
    <br/>
    {!! $package->locales[$locale]->remark !!}
</section>
@include('frontend.component.form-coverage-table',['package_detail' => $package_detail,'selected' =>$selected ])

<section style="display: none" id="step3" class="wrapper">
    <form class="insurance-form">
        <div class="form-head"> {{$package->locales[$locale]->title}} <span id="form-head"></span></div>
        <div class="form-inner">
            @include('frontend.component.form-profile',['id_card_field' => 'both' ,'id_card_field_title' => __("product.id_card_no") ,'prefix' => '' ])
            @include('frontend.component.form-address',['prefix' => ''])
            @include('frontend.component.form-beneficiary',['prefix' => ''])
            @include('frontend.component.form-tax-deduct')
            @include('frontend.component.form-privacy')
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-3" data-step="4"
                    class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>

    </form>
</section>
@include('frontend.component.form-summary')
