@include('frontend.component.form-stepper')
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
            <div class="controls-wrapper">
                <input type="text" id="ctrl_budget"/>
            </div>

        </div>
        <div class="controls-wrapper">
            <h3 class="text-center">@lang('product.disease_title')</h3>
            <ul class="check_box_disease">
                @foreach(array('f', 'c', 'o', 't', 'd') as $v)
                    <li>
                        <input type="checkbox" name="ctrl_disease" id="checkbox_disease_{{$v}}" {{($v=='f'?'checked disabled':'')}} value="{{$v}}"/>
                        <label for="checkbox_disease_{{$v}}">
                            <img src="{{asset('images/ico_ci/'.$v.'.svg')}}"/>
                            <strong>@lang('product.ci_disease.'.$v)</strong>
                        </label>
                    </li>
                @endforeach

            </ul>
        </div>
        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" type="button"
                    class="btn btn-primary btn-goto">@lang('product.next')</button>
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


{{--@include('frontend.component.form-coverage-table-with-subpackage',['package_detail' => $package_detail,'selected' =>$selected ])--}}
<section style="display: none" id="step3" class="wrapper">
    <form class="insurance-form">
        <div class="form-head"> {{$package->locales[$locale]->title}} <span id="form-head"></span></div>
        <div id="multipleform">
            @for($i = 1;$i < 10;$i++)
                <div class="form-inner" id="form_profile_{{$i}}" {{$i > 1 ? 'style=display:none;' : ''}}>

                    @include('frontend.component.form-profile',[
                             'id_card_field' => 'passport' ,
                             'id_card_field_title' => __("product.passport_no") ,
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
