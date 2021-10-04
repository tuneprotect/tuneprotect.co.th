@include('frontend.component.form-stepper')
<section id="step1" class="wrapper">
    <form method="post" action="" class="insurance-form">
        <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
        <div class="form-inner">
            <h3>@lang('product.please_specify_travel_info')</h3>
            <div class="col" data-pay-installment="" data-pay-installment-policy="">
                <div class="controls-wrapper">
                    <select id="ctrl_fire_building" name="ctrl_fire_building">
                        @foreach(__('product.insurer_fire_list_building') as $k => $v)
                            <option value="{{$k}}">{{$v}}</option>
                        @endforeach
                    </select>
                    <label for="ctrl_fire_building">@lang('product.fire_building')</label>
                </div>
            </div>
            <div class="two-col">
                <div class="controls-wrapper">
                    <input id="fdFromDate" name="fdFromDate" type="date" min="{{date('Y-m-d')}}" class="flatpickr"
                           data-mindate="{{date('Y-m-d')}}"
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

            <div class="controls-wrapper">
                <input id="fdPremium" name="fdPremium" type="text" readonly placeholder="ทุนประกันภัย ตามลักษณะสิ่งปลูกสร้างที่คุณเลือกไว้"
                       data-error-name="@lang('product.error.insurance_limit')"
                />
                <label for="fdPremium">@lang('product.fire_premium')</label>
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


        <input type="hidden" id="ctrl_fire_building_sum" name="ctrl_fire_building_sum" value="@lang('product.fire_building_sum')"/>
        <input type="hidden" id="ctrl_fire_building_text" name="ctrl_fire_building_text"/>

        <input type="hidden" id="cover_fire_ONFIMP1" name="cover_fire_ONFIMP1" value="@lang('product.cover_fire.ONFIMP1')"/>
        <input type="hidden" id="cover_fire_ONFIMP2" name="cover_fire_ONFIMP2" value="@lang('product.cover_fire.ONFIMP2')"/>
        <input type="hidden" id="cover_fire_ONFIMP3" name="cover_fire_ONFIMP3" value="@lang('product.cover_fire.ONFIMP3')"/>
        <input type="hidden" id="cover_fire_ONFIMP4" name="cover_fire_ONFIMP4" value="@lang('product.cover_fire.ONFIMP4')"/>

    </form>
    <br/>
    {!! $package->locales[$locale]->remark !!}
</section>
@include('frontend.component.form-coverage-table',['package_detail' => $package_detail,'selected' =>$selected ,'prefix' => '' ])
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
