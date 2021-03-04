@include('frontend.component.form-stepper')
<section id="step1" class="wrapper">
    <form method="post" action="" class="insurance-form">
        <div class="form-head">@lang('product.please_specify_travel_info')</div>
        <div class="form-inner">
            <h3>@lang('product.please_specify_travel_info')</h3>
            <div class="two-col">
                <div class="controls-wrapper">
                    <select id="ctrl_sub_package" name="ctrl_sub_package">
                        <option value="01">30 @lang('global.day')</option>
                        <option value="02">90 @lang('global.day')</option>
                        <option value="03">180 @lang('global.day')</option>
                        <option value="04">@lang('product.annual_trip')</option>
                    </select>
                    <label for="ctrl_sub_package">@lang("product.coverage_period")</label>
                </div>
                <div class="controls-wrapper">
                    <input id="fdFromDate" name="fdFromDate" type="date" min="{{date('Y-m-d')}}" class="flatpickr"
                           data-mindate="{{date('Y-m-d')}}"
                           data-error="@lang('product.error.travel_start_date')"
                    />
                    <label for="fdFromDate">@lang("product.effective_date")</label>
                </div>

                <div class="controls-wrapper">
                    <select id="fdDestFrom" name="fdDestFrom"
                            data-please-select="@lang('product.please_select')"
                            data-error="@lang('product.error.country')"
                    ></select>
                    <label for="fdDestFrom">@lang("product.departure_country")</label>
                </div>

                <div class="controls-wrapper">
                    <select id="fdDestTo" name="fdDestTo" disabled></select>
                    <label for="fdDestTo">@lang("product.destination_country")</label>
                </div>
                <div class="controls-wrapper">
                    <select id="ctrl_no_of_insured" name="ctrl_no_of_insured">
                        @for($i = 1;$i < 10;$i++)
                            <option value="{{$i}}">{{$i}}</option>
                        @endfor
                    </select>
                    <label for="ctrl_no_of_insured">@lang("product.no_of_insured")</label>
                </div>
            </div>
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2"
                    class="btn btn-primary btn-goto">@lang('product.next')</button>
        </div>
    </form>

    <br/>
    {!! $package->locales[$locale]->remark !!}
</section>
@include('frontend.component.form-coverage-table',['package_detail' => $package_detail,'selected' =>$selected ])
<section style="display: none" id="step3" class="wrapper">
    <form class="insurance-form">
        <div class="form-head"> {{$package->locales[$locale]->title}} <span id="form-head"></span></div>
        <div id="multipleform">
            @for($i = 1;$i < 10;$i++)
                <div class="form-inner" id="form_profile_{{$i}}" {{$i > 1 ? 'style=display:none;' : ''}}>

                    @include('frontend.component.form-profile',[
                             'id_card_field' => 'passport' ,
                             'has_nationality' => true,
                             'id_card_field_title' => __("product.passport_no") ,
                             'has_birthdate' => true  ,
                             'index' => $i,
                             'eng_only' => true,
                             'prefix' => 'data_'. $i .'_'])
                    @include('frontend.component.form-address',['prefix' => 'data_'. $i .'_'])
                    @include('frontend.component.form-beneficiary',['prefix' => 'data_'. $i .'_'])
                </div>
            @endfor
        </div>
        <div class="form-inner">
            @include('frontend.component.form-privacy')
        </div>
        <div class="btn-wrapper">
            <button data-step="4" class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>
    </form>
</section>
@include('frontend.component.form-summary')
