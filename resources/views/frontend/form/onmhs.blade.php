@include('frontend.component.form-stepper')
<section id="step1" class="wrapper">

    <form method="post" action="" class="insurance-form">
        <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
        <div class="form-inner">
            <h3>@lang('product.please_specify_travel_info')</h3>
            <div class="col" data-pay-installment="" data-pay-installment-policy="">
                <div class="controls-wrapper">
                    <select id="ctrl_fire_building" name="ctrl_fire_building">
                      
                        @if($locale == 'en')
                            <option value="ONMHS1">Construction is made of concrete</option>
                            <option value="ONMHS2">The building is half-timbered</option>
                            <option value="ONMHS3">Condo (coverage content only)</option>
                        @else
                            <option value="ONMHS1">บ้าน ที่เป็นคอนกรีตล้วน</option>
                            <option value="ONMHS2">บ้าน ครึ่งคอนกรีต ครึ่งไม้</option>
                            <option value="ONMHS3">คอนโด (คุ้มครองเฉพาะทรัพย์สิน)</option>
                        @endif 
                    </select>
                    <label for="ctrl_fire_building">@lang('product.fire_building')</label>
                </div>
            </div>
            <div class="two-col">
                <div class="controls-wrapper">
                    <input id="fdFromDate" name="fdFromDate" type="date" min="{{date('Y-m-d')}}" class="flatpickr"
                           data-mindate="{{date('Y-m-d',strtotime( "+1 days"))}}"
                           data-maxdate="{{date('Y-m-d',strtotime( "+60 days"))}}"
                           data-error="@lang('product.error.fire_effective_date')"
                    />
                    <label for="fdFromDate">@lang('product.fire_effective_date')</label>
                </div>

                <div class="col" data-pay-installment="" data-pay-installment-policy="">
                    <div class="controls-wrapper">
                        <select id="ctrl_fire_owner" name="ctrl_fire_owner">
                            @foreach(__('product.insurer_fire_list_owner') as $k => $v)
                                <option value="{{$k}}">{{$v}}</option>
                            @endforeach
                        </select>
                        <label for="ctrl_fire_owner">@lang('product.fire_owner')</label>
                    </div>
                </div>

            </div>

            <div class="controls-wrapper" style="display:none">
                <input id="fdPremium" name="fdPremium" type="text" readonly  style="background-color: gainsboro;" placeholder="ทุนประกันภัย ตามลักษณะสิ่งปลูกสร้างที่คุณเลือกไว้"
                       data-error-name="@lang('product.error.insurance_limit')"
                />
                <label for="fdPremium">@lang('product.fire_premium')</label>
            </div>

            <div class="col" data-pay-installment="" data-pay-installment-policy="">
                <div class="controls-wrapper">
                    <select id="ctrl_insurer_capital" name="ctrl_insurer_capital">
                        @foreach(__('product.onmhs_insurance_home_list_building') as $k => $v)
                            <option value="{{$k}}">{{$v}}</option>
                        @endforeach
                    </select>
                    <label id="lbSelectHome" for="ctrl_insurer_capital">
                        @if($locale == 'en')
                            Insurance Capital (baht/year) 
                        @else
                            ทุนประกันภัยรวม (บาท/ปี)
                        @endif 
                    </label>
                    <label id="lbSelectCondo" for="ctrl_insurer_capital">
                        @if($locale == 'en')
                            Insurance Capital (baht/year) 
                        @else
                            ทุนประกันภัยรวม คุ้มครองทรัพย์สินภายในบ้าน (บาท/ปี)
                        @endif 
                    </label>
                </div>
                <div id="txtamountlink" style="font-size: initial;float: right;margin-bottom: 0px;">
                    <a target="_bank" href="https://www.tuneprotect.co.th/th/article/how-much-should-you-insure-your-house-for">
                        @if($locale == 'en')
                            Determination Sum insured 
                        @else
                            การกำหนดจำนวนเงินเอาประกันภัย
                        @endif 
                    </a>
                </div>
            </div>
            <div id="divamount" class="two-col" style="width: 100%;">
                <div class="controls-wrapper">
                    <input id="fdAccording" name="fdAccording" type="text" readonly style="background-color: gainsboro;" />
                    <label for="fdAccording">
                        @if($locale == 'en')
                            Insurance Capital coverage according to the nature of the building (baht/year) 
                        @else
                            ทุนประกันภัย ความคุ้มครองสิ่งปลูกสร้าง (บาท/ปี)
                        @endif 
                    </label>
                </div>

                <div class="col" data-pay-installment="" data-pay-installment-policy="">
                    <div class="controls-wrapper">
                        <input id="fdContent" name="fdContent" type="text" readonly style="background-color: gainsboro;" />
                        <label for="fdContent">
                            @if($locale == 'en')
                                Insurance Capital coverage content (baht/year) 
                            @else
                                ทุนประกันภัย ความคุ้มครองทรัพย์สินภายในบ้าน (บาท/ปี)
                            @endif 
                        </label>
                    </div>                    
                </div>
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
                <input type="hidden" id="partner" value="{{$partner}}"/>
                <input type="hidden" id="redeem_code" value="{{$redeem_code}}"/>
                <input type="hidden" id="massage_error" value="{{$massage_error}}"/>
            </div>
        @endif


        <input type="hidden" id="ctrl_fire_building_sum" name="ctrl_fire_building_sum" value="@lang('product.fire_building_sum')"/>
        <input type="hidden" id="ctrl_fire_building_text" name="ctrl_fire_building_text"/>

        <input type="hidden" id="cover_fire_ONMHS1" name="cover_fire_ONMHS1" value="@lang('product.cover_homesmart.ONMHS1')"/>
        <input type="hidden" id="cover_fire_ONMHS2" name="cover_fire_ONMHS2" value="@lang('product.cover_homesmart.ONMHS2')"/>
        <input type="hidden" id="cover_fire_ONMHS3" name="cover_fire_ONMHS3" value="@lang('product.cover_homesmart.ONMHS3')"/>
        <input type="hidden" id="cover_fire_ONMHS4" name="cover_fire_ONMHS4" value="@lang('product.cover_homesmart.ONMHS4')"/>

    </form>
    <br/>
    {!! $package->locales[$locale]->remark !!}
</section>
@include('frontend.component.form_coverage_homesmart_table',['package_detail' => $package_detail,'selected' =>$selected ,'prefix' => '' ])
<section style="display: none" id="step3" class="wrapper">
    <form class="insurance-form">
        <div class="form-head"> {{$package->locales[$locale]->title}} <span id="form-head"></span></div>
        <div class="form-inner">
            @include('frontend.component.form-profile',['id_card_field' => 'both' ,'id_card_field_title' => __("product.id_card_no") ,'prefix' => '','has_birthdate' => true ])
            @include('frontend.component.form-address-home',['prefix' => ''])

            <div class="controls-wrapper full">
                <div class="controls-wrapper">
                    <input id="fdAddressDup" name="fdAddressDup" type="checkbox" value="1"/>
                    <label for="fdAddressDup"><span class="small">@lang('product.fire_address_data')</span></label>
                </div>
            </div>

            @include('frontend.component.form-address-home',['prefix' => 'loc_'])

{{--            <h3>@lang('product.fire_address_location_data')</h3>--}}
{{--                <div class="two-col">--}}
{{--                    <div class="controls-wrapper">--}}
{{--                        <input id="fdAddress2_Home" name="fdAddress2_Home" type="text"--}}
{{--                               placeholder="@lang("product.fire_home")"--}}
{{--                               data-error-home="@lang("product.error.fire_home")" autocomplete='off' />--}}
{{--                        <label for="fdAddress2_Home">@lang("product.fire_home")</label>--}}
{{--                    </div>--}}
{{--                    <div class="controls-wrapper full">--}}
{{--                        <textarea id="fdAddress2_Village" name="fdAddress2_Village" cols="30" rows="5" type="text"--}}
{{--                               placeholder="@lang("product.fire_village")" autocomplete='off'--}}
{{--                               data-error-village="@lang("product.error.fire_village")" ></textarea>--}}
{{--                        <label for="fdAddress2_Village">@lang("product.fire_village")</label>--}}
{{--                    </div>--}}
{{--                    <div class="controls-wrapper">--}}
{{--                        <input id="fdAddress2_Alley" name="fdAddress2_Alley" type="text"--}}
{{--                               placeholder="@lang("product.fire_alley")"--}}
{{--                               data-error-alley="@lang("product.error.fire_alley")" autocomplete='off' />--}}
{{--                        <label for="fdAddress2_Alley">@lang("product.fire_alley")</label>--}}
{{--                    </div>--}}

{{--                    <div class="controls-wrapper">--}}
{{--                        <input id="fdAddress2_Road" name="fdAddress2_Road" type="text"--}}
{{--                               placeholder="@lang("product.fire_road")"--}}
{{--                               data-error-road="@lang("product.error.fire_road")" autocomplete='off' />--}}
{{--                        <label for="fdAddress2_Road">@lang("product.fire_road")</label>--}}
{{--                    </div>--}}
{{--                    <div class="controls-wrapper">--}}
{{--                        <input id="fdAddress2_District" name="fdAddress2_District" type="text"--}}
{{--                               data-error-district="@lang("product.error.district")"--}}
{{--                               placeholder="@lang("product.district")" autocomplete='off' />--}}
{{--                        <label for="fdAddress2_District">@lang("product.district")</label>--}}
{{--                    </div>--}}
{{--                    <div class="controls-wrapper">--}}
{{--                        <input id="fdAddress2_PostCode" name="fdAddress2_PostCode" type="tel"--}}
{{--                               data-error-postal_code="@lang("product.error.postal_code")"--}}
{{--                               placeholder="@lang("product.postal_code")" autocomplete='off' />--}}
{{--                        <label for="fdAddress2_PostCode">@lang("product.postal_code")</label>--}}
{{--                    </div>--}}
{{--                    <div class="controls-wrapper">--}}
{{--                        <select id="fdAddress2_ctrl_province" name="fdAddress2_ctrl_province"--}}
{{--                                data-please-select="@lang("global.default_select_option")"--}}
{{--                                data-error-province="@lang("product.error.province")"></select>--}}
{{--                        <label for="fdAddress2_ctrl_province">@lang("product.province")</label>--}}
{{--                    </div>--}}
{{--                </div>--}}
            <br/>
            @include('frontend.component.form-beneficiary',['prefix' => ''])
{{--            @include('frontend.component.form-tax-deduct')--}}
            @include('frontend.component.form-privacy')
        </div>


        <div class="btn-wrapper">
            <button data-gtm="product-{{strtolower($selected)}}-proceed-step-3" data-step="4" class="btn btn-primary btn-goto">@lang('product.proceed')</button>
        </div>

    </form>
</section>
@include('frontend.component.form-summary')
