@include('frontend.component.form-stepper')
<section id="step1" class="wrapper">
    <form method="post" action="" class="insurance-form">
        <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
        <div class="form-inner">
            <h3>@lang('product.please_specify_travel_info')</h3>
            <div class="two-col">
                <div class="controls-wrapper">
                    <select id="fdDestFrom" name="fdDestFrom" data-please-select="@lang('product.please_select')"
                            data-error="@lang('product.error.province')"></select>
                    <label for="fdDestFrom">@lang("product.depart_province")</label>
                </div>
                <div class="controls-wrapper">
                    <select id="fdDestTo" name="fdDestTo" data-please-select="@lang('product.please_select')"
                            data-error="@lang('product.error.province')"></select>
                    <label for="fdDestTo">@lang("product.destination_province")</label>
                </div>
                <div class="controls-wrapper">
                    <input id="fdFromDate" name="fdFromDate" type="text" class="flatpickr"
                           data-mindate="{{date('Y-m-d',strtotime( "+1 days"))}}"
                           data-maxdate="{{date('Y-m-d',strtotime( "+60 days"))}}"
                           data-setmindateto="fdToDate" data-setmaxdateto="fdToDate" data-setmaxdaterange="29"
                           data-error="@lang('product.error.travel_start_date')"
                    />
                    <label for="fdFromDate">@lang("product.effective_date")</label>
                </div>
                <div class="controls-wrapper">
                    <input id="fdToDate" name="fdToDate" type="text" class="flatpickr"
                           data-mindate="{{date('Y-m-d',strtotime( "+2 days"))}}"
                           data-error="@lang('product.error.travel_end_date')"/>
                    <label for="fdToDate">@lang("product.expiry_date")</label>
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
            <div class="controls-wrapper full">
                <input id="ctrl_accept_step1" name="ctrl_accept_step1" type="checkbox"
                    data-error-accept-step1="@lang("product.error.insurance_term")"
                    value="1"/>
                <label for="ctrl_accept_step1">@lang('product.msg_accept_step1')</label>
                <span id="step1_error"><cite class="step1_error"></cite></span>
            </div>
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" class="btn btn-primary btn-goto">@lang('product.next')</button>
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
                                'id_card_field' => 'both' ,
                                'id_card_field_title' => __("product.id_card_no") ,
                                'has_birthdate' => true  ,
                                'index' => $i,
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
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-3" data-step="4"
                    class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>
    </form>
</section>
@include('frontend.component.form-summary')
