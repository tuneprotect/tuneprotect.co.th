<style>
    .d-none{
        display: none;
    }
</style>
<section style="display: none" id="step2" class="product-detail">
    <div class="wrapper">
        <table id="table-detail">
            <thead>
            <tr>
                <th>
                    @if($selected != "CI")
                        <h3>@lang('global.coverage')</h3>
                    @else
                        <h3>@lang('product.ci_coverage')</h3>
                    @endif
                    <?php $i = 1 ?>
                    <div class="choose-plan-mobile">

                        @foreach ($package_detail as $k => $v)
                            <div class="wrapper-choose-plan">
                                <a href="#"
                                   data-package="{{$k}}"
                                   data-index="{{$i}}"
                                   data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i}}"
                                   class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">
                                    @if(isset($v->no))
                                        @if($v->no == 0)
                                            <strong>@lang('product.no_plan')</strong>
                                        @else
                                            @if(isset($v->name))
                                                <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                            @else
                                                <strong>@lang('product.plan') {{$v->no}}</strong>
                                            @endif
                                        @endif
                                    @else
                                        @if($selected == "CI")
                                            <span data-recommend>@lang('product.recommend')</span>
                                        @endif
                                        <strong class="package-number">@lang('product.plan') {{$i}}</strong>
                                    @endif

                                    @if($selected == "CI")
                                        <span class="show_on_mobile" data-price-{{$k}}></span>
                                    @endif
                                </a>

                                <?php $i++ ?>
                            </div>

                        @endforeach

                    </div>
                </th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <th data-package="{{$k}}">
                        @if(isset($v->no))
                            @if($v->no == 0)
                                <strong>@lang('product.no_plan')</strong>
                            @else
                                @if(isset($v->name))
                                    <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                @else
                                    <strong>@lang('product.plan') {{$v->no}}</strong>
                                @endif
                            @endif

                        @else
                            @if($selected == "CI")
                                <span data-recommend>@lang('product.recommend')</span>
                            @endif
                            <strong class="package-number">@lang('product.plan') {{$i}}</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"

                           @if(isset($v->no))
                               @if($v->no == 0)
                                    data-step="3" data-package="{{$k}}" data-sub-package="" data-plan=""
                               @else
                                   @if(isset($v->name))
                                       data-step="3" data-package="{{$k}}" data-sub-package=""
                                       data-plan="{{$v->name}} @lang('product.plan') {{$v->no}}"
                                   @else
                                       data-step="3" data-package="{{$k}}" data-sub-package=""
                                       data-plan="@lang('product.plan') {{$v->no}}"
                                    @endif
                               @endif
                           @else
                               data-step="3" data-package="{{$k}}" data-sub-package=""
                               data-plan="@lang('product.plan') {{$i}}"
                           @endif

                           class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                    </th>
                    <?php $i++ ?>
                @endforeach
            </tr>
            </thead>
            <tbody>
            @if($selected == "CI")
                <tr class="pink">
                    <th>@lang('product.installment')</th>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k => $v)
                        <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}"><strong
                                data-installment-{{$k}}></strong></td>
                        <?php $i++ ?>
                    @endforeach
                </tr>
            @endif
            <tr class="orange">
                <th>@lang('product.price_per_year').</th>
                <td data-index="1" data-package="ONCOVIDMW1" class="">
                    <strong class="d-none" data-price-oncovidmw1="">990</strong>
                    <strong>990</strong>
                </td>
            </tr>
            <tr style="display: table-row;">
                <th data-cover-covidmw1="" class="">
                    @if($locale == 'en')
                        Medical expense benefits in case of the Insured admits medical treatment as an Inpatient (IPD) due to an accident and illness (up to a maximum) including illness caused by Coronavirus Disease 2019 (COVID-19)
                    @else
                        ผลประโยชน์ค่ารักษาพยาบาลกรณีผู้เอาประกันภัยเข้ารับการรักษาพยาบาลในฐานะผู้ป่วยใน (IPD) อันเนื่องมาจากอุบัติเหตุและเจ็บป่วย (สูงสุดไม่เกิน) รวมถึงการเจ็บป่วยด้วยโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                    @endif
                </th>
                <td data-index="1" data-package="ONCOVIDMW1">
                    <strong>150,000</strong>
                </td>
            </tr>
            <tr>
                <th data-cover-covidmw1="">
                    @if($locale == 'en')
                        Medical expenses benefit in case the Insured receives medical treatment as an outpatient (OPD) due to accident and illness (maximum 15 times per visit), excluding vaccine allergy.
                    @else
                        ผลประโยชน์ค่ารักษาพยาบาลกรณีผู้เอาประกันภัยเข้ารับการรักษาพยาบาลในฐานะผู้ป่วยนอก (OPD) อันเนื่องมาจากอุบัติเหตุและเจ็บป่วย (ต่อครั้ง สูงสุดไม่เกิน 15 ครั้ง) ยกเว้นการแพ้วัคซีน
                    @endif
                </th>
                <td data-index="1" data-package="ONCOVIDMW1" class="">
                    <strong>1,000</strong>
                </td>
            </tr>
            <tr>
                <th data-cover-covidmw1="">
                    @if($locale == 'en')
                        Death, dismemberment, loss of sight, or total permanent disability (Or Bor 1) from a general accident (Excluding murder or assault and driving or riding a motorcycle)
                    @else
                        การเสียชีวิต การสูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิง (อบ.1) จากอุบัติเหตุทั่วไป (ไม่รวมการถูกฆาตกรรมหรือถูกทำร้ายร่างกาย และการขับขี่หรือโดยสารรถจักรยานยนต์) 
                    @endif
                </th>
                <td data-index="1" data-package="ONCOVIDMW1" class="">
                    <strong>50,000</strong>
                </td>
            </tr>
            <tr>
                <th data-cover-covidmw1="">
                    @if($locale == 'en')
                        Medical treatment as an inpatient due to the impact of vaccination to prevent coronavirus disease 2019 (COVID-19)
                    @else
                        การรักษาพยาบาลในฐานะผู้ป่วยใน อันเนื่องมาจากผลกระทบจากการฉีดวัคซีนเพื่อป้องกันโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                    @endif
                </th>
                <td data-index="1" data-package="ONCOVIDMW1" class="">
                    <strong>150,000</strong>
                </td>
            </tr>
            <tr>
                <th data-cover-covidmw1="">
                    @if($locale == 'en')
                        Illness with any condition caused by the coronavirus disease 2019 (COVID-19)
                    @else
                        การเจ็บป่วยด้วยภาวะใดภาวะหนึ่งที่มีสาเหตุมาจากโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                    @endif
                </th>
                <td data-index="1" data-package="ONCOVIDMW1" class="">
                    <strong>300</strong>
                </td>
            </tr>
            <tr>
                <th data-cover-covidmw1="">
                    @if($locale == 'en')
                        Medical treatment from coronavirus disease 2019 (COVID-19)
                    @else
                        การรักษาพยาบาลจากโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                    @endif
                </th>
                <td data-index="1" data-package="ONCOVIDMW1" class="">
                    <strong>300</strong>
                </td>
            </tr>
            </tbody>

            <tfoot>
            <tr>
                <th>&nbsp;</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}">
                        @if(isset($v->no))
                            @if($v->no == 0)
                                <strong style="display: block" class="text-center">@lang('product.no_plan')</strong>
                            @else
                                @if(isset($v->name))
                                    @if(isset($v->name))
                                        <strong style="display: block"
                                                class="text-center">{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                    @else
                                        <strong style="display: block"
                                                class="text-center">@lang('product.plan') {{$v->no}}</strong>
                                    @endif
                                @else
                                    <strong style="display: block"
                                            class="text-center">@lang('product.plan') {{$v->no}}</strong>
                                @endif
                            @endif

                        @else
                            <strong style="display: block" class="text-center">@lang('product.plan') {{$i}}</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-bottom-choose-plan-{{$i}}"
                           @if(isset($v->no))
                                @if($v->no == 0)
                                       data-step="3" data-package="{{$k}}" data-sub-package="" data-plan=""
                                @else
                                       @if(isset($v->name))
                                           data-step="3" data-package="{{$k}}" data-sub-package=""
                                           data-plan="{{$v->name}}  @lang('product.plan') {{$v->no}}"
                                       @else
                                           data-step="3" data-package="{{$k}}" data-sub-package=""
                                           data-plan="@lang('product.plan') {{$v->no}}"
                                       @endif
                               @endif
                           @else
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="@lang('product.plan') {{$i}}"
                           @endif
                           class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                    </td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            </tfoot>
        </table>

        <br><br>
        <a href="#" data-gtm="product-{{strtolower($selected)}}-more" id="btn-more" data-expand="@lang('product.more')"
           data-collapse="@lang('product.collapse')">
            @lang('product.more')
        </a>

    </div>
</section>
