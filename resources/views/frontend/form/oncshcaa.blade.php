<section>
    <ol class="step">
        <li id="step_1" data-gtm="product-{{strtolower($selected)}}-stepper-1" class="btn-goto on" data-step="1"><a
                href="#">
                <strong>
                    @lang('product.please_ci_step_1_info')
                </strong>
            </a></li>
        <li id="step_2" data-gtm="product-{{strtolower($selected)}}-stepper-2" class="btn-goto" data-step="2"><a
                href="#"><strong>@lang('product.select_plan')</strong></a></li>
        <li id="step_3" data-gtm="product-{{strtolower($selected)}}-stepper-3" class="btn-goto" data-step="3"><a
                href="#"><strong>@lang('product.select_question')</strong></a></li>
        <li id="step_4" data-gtm="product-{{strtolower($selected)}}-stepper-4" class="btn-goto" data-step="4"><a
                href="#"><strong>@lang('product.fill_in_information')</strong></a></li>
        <li id="step_5" data-gtm="product-{{strtolower($selected)}}-stepper-5" class="btn-goto" data-step="5"><a
                href="#"><strong>@lang('product.confirm')</strong></a></li>
    </ol>
    <input type="hidden" id="controller" value="{{$controller}}"/>
    @if($controller == 'portal')
        <div class="btn-wrapper">
            <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
            <input type="hidden" id="status_api" value="{{$status_api}}"/>
            <input type="hidden" id="nopayment_status" value="{{$nopayment_status}}"/>
            <input type="hidden" id="channel" value="{{$channel}}"/>
{{--            <input type="hidden" id="brochure_ci" value="{{$brochure_ci}}"/>--}}
            <input type="hidden" id="partner" value="{{$partner}}"/>
        </div>
    @endif
</section>
<section id="step1" class="wrapper">
    <form method="post" action="" class="insurance-form">
        <div class="form-head">@lang('product.please_specify_ci_title')</div>
        <div class="form-inner">
            <h3>@lang('product.your-details')</h3>
            @include('frontend.component.form-date-input-calendar')
            @include('frontend.component.form-bmi-input')
            @include('frontend.component.form-input-airasia-member')
            <div class="controls-wrapper full">
                <input id="ctrl_accept_step1" name="ctrl_accept_insurance_term" type="checkbox"
                    data-error-insurance_term="@lang("product.error.insurance_term")"
                    value="1"/>
                <label for="ctrl_accept_step1">@lang('product.ONCSHC_MSG.oncshc_msg_accept_step1')</label>
                <span id="step1_error"><cite class="step1_error"></cite></span>
            </div>
        </div>
        
        <div class="btn-wrapper">
            <a href="{{url()->current()}}#step2" data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" class="btn btn-primary btn-goto">@lang('product.next')</a>
        </div>
        <input type="hidden" id="controller" value="{{$controller}}"/>
        @if($controller == 'portal')
            <div class="btn-wrapper">
                <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
                <input type="hidden" id="status_api" value="{{$status_api}}"/>
                <input type="hidden" id="nopayment_status" value="{{$nopayment_status}}"/>
            </div>
        @endif
    </form>
</section>
@include('frontend.component.form-chill-sure-table',['package_detail' => $package_detail,'selected' =>$selected ])

<section style="display: none;" id="step3" class="wrapper">
    <h2>@lang('product.chillsure.question_title')</h2>
    <div class="question">
        <main>
            <p>@lang('product.chillsure.question_no1')</p>
            <form>
                <div class="two-col">
                    <div class="controls-wrapper">
                        <ul class="check-wrapper">
                            <li>
                                <input id="ctrl_channel_answer_no1_1" name="fdSendAnswer1" type="radio" 
                                    value="N"/><label
                                    for="ctrl_channel_answer_no1_1">@lang('product.chillsure.answer_no1_1')</label>
                            </li>
                            <li>
                                <input id="ctrl_channel_answer_no1_2" name="fdSendAnswer1" type="radio"
                                    value="Y"/><label
                                    for="ctrl_channel_answer_no1_2">@lang('product.chillsure.answer_no1_2')</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>@lang('product.chillsure.question_no2')</p>
                <div class="bmi_wrapper" style="padding-left: 25;">
                    <p>@lang('product.question_diabetes_4')</p>
                    <div id="bmi_result">25</div>
                    <p>@lang('product.question_diabetes_4_1')</p>
                </div>
                <!--div class="two-col">
                    <div class="controls-wrapper">
                        <ul class="check-wrapper">
                            <li>
                                <input id="ctrl_channel_answer_no2_1" name="fdSendAnswer2" type="radio" 
                                    value="N"/><label
                                    for="ctrl_channel_answer_no2_1">@lang('product.chillsure.answer_no2_1')</label>
                            </li>
                            <li>
                                <input id="ctrl_channel_answer_no2_2" name="fdSendAnswer2" type="radio"
                                    value="Y"/><label
                                    for="ctrl_channel_answer_no2_2">@lang('product.chillsure.answer_no2_2')</label>
                            </li>
                        </ul>
                    </div>
                </div-->
                <p>@lang('product.chillsure.question_no3')</p>
                <div class="two-col">
                    <div class="controls-wrapper">
                        <ul class="check-wrapper">
                            <li>
                                <input id="ctrl_channel_answer_no3_1" name="fdSendAnswer3" type="radio" 
                                    value="N"/><label
                                    for="ctrl_channel_answer_no3_1">@lang('product.chillsure.answer_no3_1')</label>
                            </li>
                            <li>
                                <input id="ctrl_channel_answer_no3_2" name="fdSendAnswer3" type="radio"
                                    value="Y"/><label
                                    for="ctrl_channel_answer_no3_2">@lang('product.chillsure.answer_no3_2')</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
            <br>
        </main>
    </div>
    <div class="btn-wrapper text-center check_q-wrapper" style="display: none">
        <div class="check_q">
            <a id="btn-q-n" class="btn btn-outline red">@lang('product.proceed_q_n')</a>
        </div>
        <div class="check_q">
            <input id="fdQuestion1" name="fdQuestion1" type="checkbox"
                   data-error-insurance_term="@lang('product.proceed_q_y')" value="1"
                   data-gtm="product-{{strtolower($selected)}}-proceed-step-3" data-step="4">
            <label for="fdQuestion1">
                <a data-gtm="product-{{strtolower($selected)}}-proceed-step-3" data-step="4"
                   class="btn btn-outline green  btn-goto" id="btn-fdQuestion1">@lang('product.proceed_q_y')</a></label>
        </div>

    </div>
    <div class="controls-wrapper"  style="display: none">
        @lang('product.question_p_4')
    </div>

    <div class="page-overlay" style="display: none">
        <div class="popup-wrapper">
            <a data-gtm="index-question-close" class="close"><i class="icofont-close"></i></a>
            <div class="popup-inner-wrapper">
                <div>
                    <div class="text-primary" style="text-align: center">
                        <i style="font-size: 2.5rem" class="icofont-alarm"></i>
                    </div>
                    <br>
                    @lang('product.question_block')
                    <br>
                    <br>
                    <div style="text-align: center">
                        <a class="btn btn-primary" href="javascript:void(0)" onclick='location.reload();'
                           data-gtm="ci-goto-leadform">@lang('product.leave_us_your_lead')</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<section style="display: none;" id="step4" class="wrapper">
    <form class="insurance-form" data-error-eng-only="@lang('product.error.eng_only')">
        <div class="form-head"> @lang('product.title_plan_4') <span id="form-head"></span></div>
        <div class="form-inner">
            @include('frontend.component.form-profile',['id_card_field' => 'both' ,'id_card_field_title' => __("product.id_card_no") ,'prefix' => '' ,'selected' =>$selected])
            @include('frontend.component.form-address',['prefix' => ''])
            @include('frontend.component.form-beneficiary',['prefix' => ''])
            @include('frontend.component.form-privacy')
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-4" data-step="5"
                    class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>
        <input type="hidden" id="hdfidcard" />
    </form>
</section>
<section style="display: none;" id="step5" class="wrapper">
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
        <div class="btn-wrapper">
            @csrf
            <button data-gtm="product-{{strtolower($selected)}}-back-step-5" data-step="4"
                    class="btn btn-secondary btn-goto">@lang('product.edit')</button>
            <button data-gtm="product-{{strtolower($selected)}}-make-payment" data-step="payment" type="submit"
                    class="btn btn-primary">@lang('product.proceed')</button>
        </div>
    </form>
</section>
<div id="h-cont">
    {!! $current_package->locales[$locale]->remark !!}
</div>

<script>
    var timestamp = new Date().getTime();(function (d) {
        var s = d.createElement('script');
        s.src = 'https://script.accesstrade.in.th/lp.js?cb=' + timestamp;
        s.async = true;var e = d.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(s, e);
    })(document);
</script>
