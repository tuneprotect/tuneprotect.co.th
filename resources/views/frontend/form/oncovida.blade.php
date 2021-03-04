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
            @include('frontend.component.form-profile',['id_card_field' => 'id_card' ,'id_card_field_title' => __("product.thai_id_card_no") ,'prefix' => '' ])
            @include('frontend.component.form-address',['prefix' => ''])
            @include('frontend.component.form-beneficiary',['prefix' => ''])
            <h3>@lang('product.ONCOVIDA_question.title')</h3>
            <p id="q1"
               data-summary="@lang('product.ONCOVIDA_question.q1_summary')"
               data-budget="@lang('product.ONCOVIDA_question.q1_budget')"
            >
                @lang('product.ONCOVIDA_question.q1')
            </p>
            <div class="two-col">
                <div class="controls-wrapper">
                    <ul class="check-wrapper">
                        <li>
                            <input id="ctrl_question_1_N" name="fdQuestion1" type="radio"
                                   value="N" data-error-q1="@lang('product.error.health')"/><label
                                for="ctrl_question_1_N">@lang("product.no")</label>
                        </li>
                        <li>
                            <input id="ctrl_question_1_Y" name="fdQuestion1" type="radio"
                                   value="Y"/><label
                                for="ctrl_question_1_Y">@lang("product.yes")</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="ctrl_question_1_other" style="display: none">
                <div class="two-col">
                    <div class="controls-wrapper">
                        <input id="fdQuestion1_1" name="fdQuestion1_1" type="text"
                               placeholder="@lang("product.insurance_company")" data-error-q1-1="@lang('product.error.company')" />
                        <label for="fdQuestion1_1">@lang("product.insurance_company")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion1_2" name="fdQuestion1_2" type="tel"
                               placeholder="@lang("product.insurance_amount")"
                               data-error-q1-2="@lang('product.error.insurance_limit')"
                               data-error-not-number="@lang('product.error.not_number')"

                        />
                        <label for="fdQuestion1_2">@lang("product.insurance_amount")</label>
                    </div>
                </div>
            </div>
            <h4 id="q2"
                data-summary="@lang('product.ONCOVIDA_question.q2_summary')"
                data-none="@lang('product.ONCOVIDA_question.q2_none')">
                @lang('product.ONCOVIDA_question.q2')</h4>
            <div class="two-col">
                <div class="controls-wrapper">
                    <ul class="check-wrapper">
                        <li>
                            <input id="ctrl_question_2_N" name="fdQuestion2" type="radio"
                                   value="N" data-error-q2="@lang('product.error.congenital_disease')" /><label
                                for="ctrl_question_2_N">@lang("product.no")</label>
                        </li>
                        <li>
                            <input id="ctrl_question_2_Y" name="fdQuestion2" type="radio"
                                   value="Y"/><label
                                for="ctrl_question_2_Y">@lang("product.yes")</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="ctrl_question_2_choice" style="display: none" data-error-q2-1="@lang('product.error.congenital_disease')">
                <div class="controls-wrapper">
                    <ul class="check-wrapper equal">
                        @foreach(__('product.ONCOVID_DISEASE') as $k => $v)
                            <li>
                                <input id="ctrl_question_2_{{$k}}" name="fdQuestion2_1" type="checkbox"
                                       value="{{ is_numeric($k) ? $v : $k }}"/>
                                <label for="ctrl_question_2_{{$k}}">{{$v}}</label>
                            </li>
                        @endforeach
                    </ul>
                </div>
                <div id="ctrl_question_2_other_wrapper" style="display: none">
                    <div class="controls-wrapper">
                        <input id="ctrl_question_2_specify" name="ctrl_question_2_specify" type="text"
                               placeholder="@lang("product.please_specify")" data-error-q2-2="@lang('product.error.other_congenital_disease')"/>
                        <label for="ctrl_question_2_specify">@lang("product.please_specify")</label>
                    </div>
                </div>
            </div>
            @include('frontend.component.form-tax-deduct')
            @include('frontend.component.form-privacy')
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-3" data-step="4" class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>
    </form>
</section>
@include('frontend.component.form-summary')
