<section style="display: none" id="step2" class="product-detail">
    <div class="wrapper">
        <table id="table-detail" data-package_name="{{$package->locales[$locale]->title}}">
                        <thead>
                        <tr>
                            <th>
                                <h3>@lang('global.coverage')</h3>
                                <?php $i = 1 ?>
                                <div class="choose-plan-mobile">
                                    @foreach ($package_detail as $k => $v)
                                        <div class="wrapper-choose-plan">
                                            <div
                                                data-package="{{$k}}"
                                                data-index="{{$i}}"
                                                data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$v->no}}"
                                                class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">

                                                @if($v->no > 1)
                                                    <span><img src="/storage/product/iTravel/icon_visa_approved.png"></span>
                                                @endif

                                                <strong class="package-number">@lang('product.plan') {{$v->no}}</strong>

                                                <span class="show_on_mobile" data-price-{{$k}}></span>
                                                <br>
                                                <a href="#"
                                                   data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$v->no}}"
                                                   data-step="3" data-package="{{$v->no}}" data-sub-package=""
                                                   data-plan="@lang('product.plan') {{$v->no}}"
                                                   data-health="{{$v->health2go}}"
                                                   class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>

                                            </div>

                                            <?php $i++ ?>

                                        </div>

                                    @endforeach

                                </div>
                            </th>
                            <?php $i = 1 ?>
                            @foreach ($package_detail as $k => $v)
                                <th data-package="{{$k}}">
                                    @if($v->no > 1)
                                        <span><img src="/storage/product/iTravel/icon_visa_approved.png"></span>
                                    @endif
                                    <strong class="package-number">@lang('product.plan') {{$v->no}}</strong>
                                    <a href="#"
                                       data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$v->no}}"
                                       data-step="3" data-package="{{$k}}" data-sub-package=""
                                       data-plan="@lang('product.plan') {{$v->no}}"
                                       data-health="{{$v->health2go}}"
                                       class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                                </th>
                                <?php $i++ ?>
                            @endforeach
                        </tr>
                        </thead>
            <tbody>
            <tr class="orange">
                <th>@lang('product.price')</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}"><strong
                            data-price-{{$k}}></strong></td>
                    <?php $i++ ?>
                @endforeach
            </tr>

            <?php $j = 1 ?>
            @foreach (__('product.'.$selected) as $k => $v)
                <tr>
                    <?php $i = 1 ?>
                    <th>{!! $v !!}</th>
{{--                        <th>{!! $j !!}</th>--}}
                    @foreach ($package_detail as $k1 => $v1)
                        <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k1}}" data-h2go={{$j.$i}}>
                            @if(isset($v1->plan->$k))
                                @if((is_numeric($v1->plan->$k)))
                                    <strong>{{number_format($v1->plan->$k,0)}}</strong>
                                @else
{{--                                    @if($j === 7 && ($i === 3 || $i ===4) && $days <= 5)--}}
{{--                                        <strong><i class='icofont-close-circled' style='color:red'></i></strong>--}}
{{--                                        <strong>{{$days}}</strong>--}}
{{--                                    @else--}}
                                        <strong>{!! str_replace('{itravel_coverage_fix1}',__('product.itravel_coverage_fix1'),$v1->plan->$k) !!}</strong>
{{--                                    @endif--}}

                                @endif
                            @endif
                        </td>
                        <?php $i++ ?>
                    @endforeach
                </tr>
                <?php $j++ ?>
            @endforeach

            </tbody>
            <tfoot>
            <tr>
                <th>&nbsp;</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}">
                        <strong style="display: block" class="text-center">@lang('product.plan') {{$v->no}}</strong>
                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-bottom-choose-plan-{{$v->no}}"
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="@lang('product.plan') {{$v->no}}"
                           data-health="{{$v->health2go}}"
                           class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                    </td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            </tfoot>
        </table>

        <br><br>
        <a href="#" id="btn-more" data-expand="@lang('product.more')" data-collapse="@lang('product.collapse')">
            @lang('product.more')
        </a>

    </div>
</section>
