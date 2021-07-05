<section>
    <ol class="step">
        <li data-gtm="product-{{strtolower($selected)}}-stepper-1" class="btn-goto on" data-step="1"><a
                href="#">
                <strong>
                    @lang('product.please_ci_step_1_info')
                </strong>
            </a></li>
        <li data-gtm="product-{{strtolower($selected)}}-stepper-2" class="btn-goto" data-step="2"><a
                href="#"><strong>@lang('product.select_plan')</strong></a></li>
        <li data-gtm="product-{{strtolower($selected)}}-stepper-3" class="btn-goto" data-step="3"><a
                href="#"><strong>@lang('product.select_question')</strong></a></li>
        <li data-gtm="product-{{strtolower($selected)}}-stepper-4" class="btn-goto" data-step="4"><a
                href="#"><strong>@lang('product.fill_in_information')</strong></a></li>
        <li data-gtm="product-{{strtolower($selected)}}-stepper-5" class="btn-goto" data-step="5"><a
                href="#"><strong>@lang('product.confirm')</strong></a></li>
    </ol>
</section>

<div class="step_wrapper">
    <section id="step1" class="wrapper">
        <form method="post" action="" class="insurance-form">
            <div class="form-head">@lang('product.please_specify_ci_title')</div>
            <div class="form-inner">
                <div class="col" data-pay-installment="@lang("product.pay-installment")"
                     data-pay-installment-policy="@lang("product.pay-installment-policy")">
                    <div class="controls-wrapper">
                        <select id="ctrl_buy_for" name="ctrl_buy_for">
                            @foreach(__('product.insurer_list_type') as $k => $v)
                                <option value="{{$k}}">{{$v}}</option>
                            @endforeach
                        </select>
                        <label for="ctrl_travel_type">@lang("product.insurer_type")</label>
                    </div>
                </div>
                <br>
                <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
                @include('frontend.component.form-date-input')
                <br>
                <div class="slider-wrapper" data-not-qualify="@lang('product.error.birthdate.not-qualify')">
                    <h3>@lang("product.budget")</h3>
                    <div class="controls-wrapper slider_budget">
                        <br>
                        <input type="text" id="ctrl_budget"/>
                    </div>
                </div>
            </div>
        </form>
    </section>
    <div class="wrapper">
        <form>
            <div class="controls-wrapper" id="disease_box" data-disease_title="@lang("product.disease_summary")">
                <h2 class="no-color">@lang('product.disease_title')</h2>
                <div>@lang('product.disease_title_span')</div>
                <ul class="check_box_disease">
                    @foreach(array('F', 'C', 'O', 'T', 'D') as $v)
                        <li class="checkbox_disease">
                            <input type="checkbox" name="ctrl_disease" id="checkbox_disease_{{$v}}"
                                   data-disease-{{$v}}="@lang('product.ci_disease.'.$v)"
                                   {{($v=='F'?'checked disabled':'checked')}} value="{{$v}}"/>
                            <label for="checkbox_disease_{{$v}}">
                                <img src="{{asset('images/ico_ci/'.$v.'.svg')}}" alt="@lang('product.ci_disease.'.$v)"/>
                                <span>
                                        @lang('product.ci_disease_description.'.$v)
                                    </span>
                                <strong>@lang('product.ci_disease.'.$v)</strong>
                            </label>
                        </li>
                    @endforeach

                </ul>
            </div>
            <div class="btn-wrapper text-center goto-step1">
                <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" type="button"
                        class="btn btn-primary btn-goto btn-goto-step1">@lang('product.next')</button>
            </div>
            <br/>

            <input type="hidden" id="controller" value="{{$controller}}"/>
            @if($controller == 'portal')
                <div class="btn-wrapper">
                    <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
                    <input type="hidden" id="status_api" value="{{$status_api}}"/>
                    <input type="hidden" id="nopayment_status" value="{{$nopayment_status}}"/>
                </div>
            @endif
        </form>
    </div>


    @include('frontend.component.form-ci-coverage-table',['package_detail' => $package_detail,'selected' =>$selected ])
</div>
<section style="display: none" id="step3" class="wrapper">
    <h2>@lang('product.question_title')</h2>
    <div class="question">
        <p>@lang('product.question_p_1')</p>
        <p>@lang('product.question_p_2')</p>
        <p>@lang('product.question_p_3')</p>
        <div>@lang('product.question_p_5')</div>
    </div>
    <div class="btn-wrapper text-center check_q-wrapper">
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
    <div class="controls-wrapper">
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
                        <a class="btn btn-primary" href="{{$overview_link}}#leadform-section"
                           data-gtm="ci-goto-leadform">@lang('product.leave_us_your_lead')</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<section style="display: none" id="step4" class="wrapper">
    <form class="insurance-form" data-error-eng-only="@lang('product.error.eng_only')">
        <div class="form-head"> @lang('product.title_plan_4') <span id="form-head"></span></div>
        <div class="form-inner">
            @include('frontend.component.form-profile',['id_card_field' => 'both' ,'id_card_field_title' => __("product.id_card_no") ,'prefix' => '' ,'selected' =>$selected])
            @include('frontend.component.form-address',['prefix' => ''])
            @include('frontend.component.form-beneficiary',['prefix' => ''])
            @include('frontend.component.form-tax-deduct')
            @include('frontend.component.form-privacy')
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-4" data-step="5"
                    class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>

    </form>
</section>


<section style="display: none" id="step5" class="wrapper">
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
            <button data-gtm="product-{{strtolower($selected)}}-make-payment" type="submit"
                    class="btn btn-primary">@lang('product.proceed')</button>
        </div>
    </form>
</section>

