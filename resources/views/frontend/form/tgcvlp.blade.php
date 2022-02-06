@include('frontend.component.form-stepper')
<section id="step1" class="wrapper">
{{--    @include('frontend.component.form-birthdate-effectivedate')--}}

    <form method="post" action="" class="insurance-form">
        <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
        <div class="form-inner">
            <h3>@lang('product.please_specify_birthdate')</h3>
            @include('frontend.component.form-date-input')
            <div class="date-input">
                <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
                <div class="date-wrapper">
                    <div class="controls-wrapper">
                        <input id="fdFromDate" name="fdFromDate" type="date" min="{{date('Y-m-d')}}" class="flatpickr"
                               data-mindate="{{date('Y-m-d')}}"
                               data-maxdate="{{date('Y-m-d',strtotime( "+180 days"))}}"
                               data-error="@lang('product.error.travel_start_date')"
                        />
                        <label for="fdFromDate">@lang("product.effective_date")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdFlightNo" name="fdFlightNo" type="text" placeholder="Flight no. (TGxxx)"
                               data-error="Please fill in Flight no."
                        />
                        <label for="fdFlightNo">Flight no. (TGxxx)</label>
                    </div>
                    <div class="controls-wrapper">
                        <select id="ctrl_destination" name="ctrl_destination">
                                            <option selected="selected" value="">@lang('product.please_select')</option>
                                            <option value="BKK">Thailand (Bangkok)</option>
                                            <option value="HKT">Thailand (Phuket)</option>
                                        </select>
                                        <label for="ctrl_destination">Destination</label>
                        </select>
                    </div>
                </div>
                <div class="date-wrapper">
                    <div class="controls-wrapper">
                        <input id="fdFlightTickerNo" name="fdFlightTickerNo" type="text" placeholder="Flight ticket number (217-xxxxxxxxx)"
                               data-error="Please fill in Flight ticket number"
                        />
                        <label for="fdFlightTickerNo">Flight ticket number (217-xxxxxxxxx)</label>
                    </div>
                    <div class="controls-wrapper"></div>
                    <div class="controls-wrapper"></div>
                </div>
                <cite></cite>
            </div>

        </div>


        <div class="btn-wrapper">
            <a href="{{url()->current()}}#step2" data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" class="btn btn-primary btn-goto">@lang('product.next')</a>
        </div>


        <input type="hidden" id="controller" value="{{$controller}}"/>

        <input type="hidden" id="partner" value="{{$partner}}"/>
        <div class="btn-wrapper">
            <input type="hidden" id="member_id" value="{{$member_id}}"/>
            <input type="hidden" id="status_api" value="{{$status_api}}"/>
        </div>

        <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">
    </form>


    <br/>
    {!! $package->locales[$locale]->remark !!}
</section>
@include('frontend.component.form-lite-tgcvlp-coverage-table',['package_detail' => $package_detail,'selected' =>$selected ,'prefix' => '' ])
<section style="display: none" id="step3" class="wrapper">
    <form class="insurance-form">
        <div class="form-head"> {{$package->locales[$locale]->title}} <span id="form-head"></span></div>
        <div class="form-inner">
            @include('frontend.component.form-profile',['id_card_field' => 'passport','has_nationality' => true ,'id_card_field_title' => __("product.passport_no"),'prefix' => '','eng_only' => true ,'emailconfirm' => true ])
            @include('frontend.component.form-address',['prefix' => ''])
            <h3>Address in Australia</h3>
            <div class="controls-wrapper full">
                <textarea placeholder="Address" id="fdAddr_Num2" name="fdAddr_Num2" cols="30" rows="5"
                  data-error-address="@lang("product.error.address")"></textarea>
                <label for="fdAddr_Num2">Address in Australia</label>
            </div>
            <div class="two-col">
            <div class="controls-wrapper">
                <select id="ctrl_state" name="ctrl_state">
                    <option selected="selected" value="">@lang('product.please_select')</option>
                    <option value="WA">WA</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="SA">SA</option>
                    <option value="QLD">QLD</option>
                    <option value="NT">NT</option>
                    <option value="CBR">CBR</option>
                </select>
                <label for="ctrl_state">State</label>
                </select>
            </div>
            <div class="controls-wrapper">
                <input id="fdAddr_PostCode2" name="fdAddr_PostCode2" type="tel"
                       data-error-postal_code="@lang("product.error.postal_code")"
                       placeholder="@lang("product.postal_code")" autocomplete='off' />
                <label for="fdAddr_PostCode2">@lang("product.postal_code") in Australia</label>
            </div>
            </div>

            @include('frontend.component.form-beneficiary',['prefix' => ''])
            <h3>@lang('product.ONCOVIDL_question.title')</h3>
            <p>@lang('product.ONCOVIDL_question.q1')</p>
            <div class="two-col">
                <div class="controls-wrapper">
                    <ul class="check-wrapper" id="q1"
                        data-summary="@lang('product.ONCOVIDL_question.q1_summary')"
                        data-q1_summary_value="@lang('product.ONCOVIDL_question.q1_summary_value')"
                        data-none="@lang('product.ONCOVIDA_question.q2_none')"
                    >
                        <li>
                            <input id="ctrl_question_1_N" name="fdQuestion1" type="radio"
                                   value="N" data-error-q1="@lang('product.error.select')"

                            /><label
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
                               placeholder="@lang("product.insurance_company")"
                               data-error-q1-1="@lang('product.error.company')"
                        />
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
            <p>@lang('product.ONCOVIDL_question.q2')</p>
            <div class="two-col">
                <div class="controls-wrapper">
                    <ul class="check-wrapper" id="q2"
                        data-summary="@lang('product.ONCOVIDL_question.q2_summary')"
                        data-q1_summary_value="@lang('product.ONCOVIDL_question.q1_summary_value')"
                        data-none="@lang('product.ONCOVIDA_question.q2_none')">
                        <li>
                            <input id="ctrl_question_2_N" name="fdQuestion2" type="radio"
                                   value="N" data-error-q1="@lang('product.error.select')"/><label
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
            <div id="ctrl_question_2_other" style="display: none">
                <div class="two-col">
                    <div class="controls-wrapper">
                        <input id="fdQuestion2_1" name="fdQuestion2_1" type="text"
                               placeholder="@lang("product.country")" data-error-q2-1="@lang('product.error.country')"/>
                        <label for="fdQuestion2_1">@lang("product.country")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion2_2" name="fdQuestion2_2" type="text"
                               placeholder="@lang("product.city")" data-error-q2-2="@lang('product.error.city')"/>
                        <label for="fdQuestion2_2">@lang("product.city")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion2_3" name="fdQuestion2_3" type="date"
                               placeholder="@lang("product.travel_start_date")"
                               data-error-q2-3="@lang('product.error.travel_start_date')"/>
                        <label for="fdQuestion2_3">@lang("product.travel_start_date")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion2_4" name="fdQuestion2_4" type="date"
                               placeholder="@lang("product.travel_return_date")"
                               data-error-q2-4="@lang('product.error.travel_end_date')"
                        />
                        <label for="fdQuestion2_4">@lang("product.travel_return_date")</label>
                    </div>
                </div>
            </div>
            <p>@lang('product.ONCOVIDL_question.q3')</p>
            <div class="two-col">
                <div class="controls-wrapper">
                    <ul class="check-wrapper" id="q3"
                        data-summary="@lang('product.ONCOVIDL_question.q3_summary')">
                        <li>
                            <input id="ctrl_question_3_N" name="fdQuestion3" type="radio"
                                   value="N" data-error-q3="@lang('product.error.select')"/><label
                                for="ctrl_question_3_N">@lang("product.no")</label>
                        </li>
                        <li>
                            <input id="ctrl_question_3_Y" name="fdQuestion3" type="radio"
                                   value="Y"/><label
                                for="ctrl_question_3_Y">@lang("product.yes")</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="ctrl_question_3_other" style="display: none">
                <div class="two-col">
                    <div class="controls-wrapper">
                        <input id="fdQuestion3_1" name="fdQuestion3_1" type="text"
                               placeholder="@lang("product.insurance_company")"
                               data-error-q3-1="@lang('product.error.company')"
                        />
                        <label for="fdQuestion3_1">@lang("product.insurance_company")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion3_2" name="fdQuestion3_2" type="tel"
                               data-error-q3-2="@lang('product.error.insurance_limit')"
                               placeholder="@lang("product.insurance_amount")"/>
                        <label for="fdQuestion3_2">@lang("product.insurance_amount")</label>
                    </div>
                </div>
            </div>
            <p>@lang('product.ONCOVIDL_question.q4')</p>
            <div class="two-col">
                <div class="controls-wrapper">
                    <ul class="check-wrapper" id="q4"
                        data-summary="@lang('product.ONCOVIDL_question.q4_summary')">
                        <li>
                            <input id="ctrl_question_4_N" name="fdQuestion4" type="radio"
                                   value="N" data-error-q4="@lang('product.error.select')"/><label
                                for="ctrl_question_4_N">@lang("product.no")</label>
                        </li>
                        <li>
                            <input id="ctrl_question_4_Y" name="fdQuestion4" type="radio"
                                   value="Y"/><label
                                for="ctrl_question_4_Y">@lang("product.yes")</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="ctrl_question_4_other" style="display: none">
                <div class="two-col">
                    <div class="controls-wrapper">
                        <input id="fdQuestion4_1" name="fdQuestion4_1" type="text"
                               placeholder="@lang("product.disease")"
                               data-error-q4-1="@lang('product.error.disease')"
                        />
                        <label for="fdQuestion4_1">@lang("product.disease")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion4_2" name="fdQuestion4_2" type="text"
                               placeholder="@lang("product.disease_status")"
                               data-error-q4-2="@lang('product.error.disease_status')"/>
                        <label for="fdQuestion4_2">@lang("product.disease_status")</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="fdQuestion4_3" name="fdQuestion4_3" type="text"
                               placeholder="@lang("product.hospital")"
                               data-error-q4-3="@lang('product.error.disease_hospital')"/>
                        <label for="fdQuestion4_3">@lang("product.hospital")</label>
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
