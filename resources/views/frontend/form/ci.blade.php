@include('frontend.component.form-stepper')
<div class="step_wrapper">
    <section id="step1" class="wrapper">
        <form method="post" action="" class="insurance-form">
            <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
            <div class="form-inner">
                <h3>@lang('product.please_ci_info')</h3>
                <div class="two-col">
                    <div class="controls-wrapper">
                        <select id="ctrl_buy_for" name="ctrl_buy_for">
                            @foreach(__('product.insurer_list_type') as $k => $v)
                                <option value="{{$k}}">{{$v}}</option>
                            @endforeach
                        </select>
                        <label for="ctrl_travel_type">@lang("product.insurer_type")</label>
                    </div>
                    <div class="controls-wrapper">
                        <select id="ctrl_career" name="ctrl_career">
                            @foreach(__('product.career_list') as $k => $v)
                                <option value="{{$k}}">{{$v}}</option>
                            @endforeach
                        </select>
                        <label for="ctrl_career">@lang("product.career")</label>
                    </div>
                </div>
                @include('frontend.component.form-date-input')
                <br>

                <div class="slider-wrapper">
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
                <h2 class="text-center no-color">@lang('product.disease_title')</h2>
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


    @include('frontend.component.form-coverage-table',['package_detail' => $package_detail,'selected' =>$selected ])
</div>
<section style="display: none" id="step3" class="wrapper">
    <form class="insurance-form">
        <div class="form-head"> {{$package->locales[$locale]->title}} <span id="form-head"></span></div>
        <div class="form-inner">
{{--            <h3>{{ isset($index) ? __('product.protection_start_date').' '.$index : __('product.protection_start_date')   }}</h3>--}}
{{--            <div class="two-col">--}}
{{--                <div class="controls-wrapper">--}}
{{--                    <input id="ctrl_protection_start_date" name="ctrl_protection_start_date" type="text"--}}
{{--                           class="flatpickr"--}}
{{--                           data-mindate="{{date('Y-m-d')}}"--}}
{{--                           data-maxdate="{{date('Y-m-d',strtotime( "+60 days"))}}"--}}
{{--                           value="{{date('d/m/Y')}}"--}}
{{--                           data-error="@lang('product.error.protection_start_date')"--}}
{{--                    />--}}
{{--                    <label for="ctrl_protection_start_date">@lang("product.protection_start_date")</label>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <br>--}}
            @include('frontend.component.form-profile',['id_card_field' => 'both' ,'id_card_field_title' => __("product.id_card_no") ,'prefix' => '' ,'selected' =>$selected])
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
