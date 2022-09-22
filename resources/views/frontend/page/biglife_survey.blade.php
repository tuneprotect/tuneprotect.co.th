@extends('frontend.layout.mainaddon')

@section('page')
    <body id="product_page" style="height: 100%;">
    <main>
        <h1 class="product-header"></h1>
        <section id="step1" class="wrapper">
            <form class="insurance-form" action="/{{$locale}}/Biglife/thankyou" method="post" id="frm_survey"
                  data-error="@lang("product.blood_test.data-error")"
                  data-error-description="@lang("product.blood_test.data-error-description")"
                  data-success-description="@lang("product.blood_test.data-success-description")"
            >
                <div class="form-head">@lang("product.biglife.header")</div>
                <div class="form-inner">
                    <span class="small"><b>@lang("product.biglife.name")</b></span>
                    <div class="controls-wrapper">
                        <input data-error-required=@lang("product.biglife.name_placeholder")
                            id="ctrl_name" name="name" placeholder=@lang("product.biglife.name_placeholder") required="required" type="text" />
                        <label for="ctrl_name">@lang("product.biglife.name_placeholder")</label></div>

                    <span class="small"><b>@lang("product.biglife.lastname")</b></span>
                    <div class="controls-wrapper">
                        <input data-error-required=@lang("product.biglife.lastname_placeholder")
                            id="ctrl_lastname" name="lastname" placeholder=@lang("product.biglife.lastname_placeholder") required="required" type="text" />
                        <label for="ctrl_lastname">@lang("product.biglife.lastname_placeholder")</label></div>

                    <span class="small"><b>@lang("product.biglife.mobile")</b></span>
                    <div class="controls-wrapper">
                        <input data-error-required=@lang("product.biglife.mobile_placeholder")
                            id="ctrl_mobile" name="mobile" placeholder=@lang("product.biglife.mobile_placeholder") required="required" type="text" />
                        <label for="ctrl_mobile">@lang("product.biglife.mobile_placeholder")</label></div>

                    <span class="small"><b>@lang("product.biglife.email")</b></span>
                    <div class="controls-wrapper">
                        <input data-error-required=@lang("product.biglife.email_placeholder")
                            id="ctrl_email" name="email" placeholder=@lang("product.biglife.email_placeholder") required="required" type="text" />
                        <label for="ctrl_email">@lang("product.biglife.email_placeholder")</label></div>

                    <br>

                    <div class="controls-wrapper">
                        <h2>@lang("product.biglife.question")</h2><br>

                        <b><p>@lang("product.biglife.question1")</p></b>

                        <input id="ctrl_question11" name="ctrl_question11" type="checkbox" value="1"/>
                        <label for="ctrl_question11">
                            <span class="small">@lang('product.biglife.question11')</span>
                        </label>

                        <input id="ctrl_question12" name="ctrl_question12" type="checkbox" value="1"/>
                        <label for="ctrl_question12">
                            <span class="small">@lang('product.biglife.question12')</span>
                        </label>

                        <input id="ctrl_question13" name="ctrl_question13" type="checkbox" value="1"/>
                        <label for="ctrl_question13">
                            <span class="small">@lang('product.biglife.question13')</span>
                        </label>

                        <input id="ctrl_question14" name="ctrl_question14" type="checkbox" value="1"/>
                        <label for="ctrl_question14">
                            <span class="small">@lang('product.biglife.question14')</span>
                        </label>

                        <b><p>@lang("product.biglife.question2")</p></b>

                        <input id="ctrl_question21" name="ctrl_question21" type="checkbox" value="1"/>
                        <label for="ctrl_question21">
                            <span class="small">@lang('product.biglife.question21')</span>
                        </label>

                        <input id="ctrl_question22" name="ctrl_question22" type="checkbox" value="1"/>
                        <label for="ctrl_question22">
                            <span class="small">@lang('product.biglife.question22')</span>
                        </label>

                        <input id="ctrl_question23" name="ctrl_question23" type="checkbox" value="1"/>
                        <label for="ctrl_question23">
                            <span class="small">@lang('product.biglife.question23')</span>
                        </label>

                        <input id="ctrl_question24" name="ctrl_question24" type="checkbox" value="1"/>
                        <label for="ctrl_question24">
                            <span class="small">@lang('product.biglife.question24')</span>
                        </label>

                        <b><p>@lang("product.biglife.question3")</p></b>

                        <input id="ctrl_question31" name="ctrl_question3" type="radio" value="Y" />
                        <label for="ctrl_question31">
                            <span class="small">@lang('product.biglife.question31')</span>
                        </label>
                        <input id="ctrl_question32" name="ctrl_question3" type="radio" value="N" />
                        <label for="ctrl_question32">
                            <span class="small">@lang('product.biglife.question32')</span>
                        </label>

                    </div>

                    <br>
                    <div class="controls-wrapper">
                        <h2>@lang("product.biglife.consent_header")</h2><br>
                        <div class="controls-wrapper">
                            <input id="ctrl_marketing" name="ctrl_marketing" type="checkbox" value="1"
                                   data-error-required="@lang("product.error.terms")"
                            /><label
                                for="ctrl_marketing">@lang('product.marketing_consent')</label>
                        </div>
                    </div>

                </div>


                <div class="btn-wrapper">
{{--                    <button data-gtm="validate-memberid" id="btnValidate" value="validate" class="btn btn-primary btn-goto">@lang("product.biglife.OTP_confirm1")</button>--}}
                    <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button"
                            value="validate">@lang("product.biglife.OTP_confirm1")</button>
                </div>

                <div class="form-inner hideField">
                    <h2>@lang("product.biglife.OTP_confirm5")</h2>
                    <span class="small"><b>@lang("product.biglife.OTP_confirm2")</b></span>
                        <div class="controls-wrapper">
                            <input data-error-required=@lang("product.biglife.OTP_confirm4")
                                id="ctrl_ref_code" name="ctrl_ref_code" placeholder=@lang("product.biglife.OTP_confirm4") type="text" />
                            <label for="ctrl_ref_code">@lang("product.biglife.OTP_confirm4")</label></div>

                        <div class="controls-wrapper">
{{--                            <button class="btn btn-primary" id="btnConfirm" value="confirm" data-gtm="survey-form-submit">@lang("product.biglife.buttontext")</button>--}}
{{--                            <button data-gtm="validate-memberid" id="btnValidate" class="btn btn-primary btn-goto">{{$buttontext}}</button>--}}

                            <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button"
                                    value="confirm">@lang("product.biglife.buttontext")</button>
                        </div>
                </div>

                <input type="hidden" id="ctrl_massage2" value="@lang("product.biglife.massage2")"/>
                <input type="hidden" id="ctrl_massage3" value="@lang("product.biglife.massage3")"/>
                <input type="hidden" id="ctrl_massage4" value="@lang("product.biglife.massage4")"/>
                <input type="hidden" id="ctrl_massage6" value="@lang("product.biglife.OTP_confirm6")"/>
                <input type="hidden" id="ctrl_memberID" name="member_id" value="{{$member_id}}"/>
                <input type="hidden" id="ctrl_otp" name="OTP"/>
                <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">


            </form>
            <br>

        </section>
    </main>


    </body>


@endsection
