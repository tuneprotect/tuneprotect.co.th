<section style="display: none;" id="step2" class="product-detail">
<style>
    @media only screen and (min-width: 600px) {
        .th-one{
            width: 40%;
        }
    }
   
</style>
    <div class="wrapper">
        <table id="table-detail" data-package_name="{{$package->locales[$locale]->title}}">
            <thead>
            <tr>
                <th class="th-one">
                    <h3>@lang('global.coverage')</h3>
                    <?php $i = 1 ?>
                    <div class="choose-plan-mobile">
                        @foreach ($package_detail as $k => $v)
                            <div class="wrapper-choose-plan">
                                <div
                                    data-package="{{$k}}"
                                    data-index="{{$i}}"
                                    data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i}}"
                                    class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">
                                    @if(isset($v->no))
                                        @if(isset($v->name))
                                            <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                        @else
                                            <strong>@lang('product.plan') {{$v->no}}</strong>
                                        @endif
                                    @else
                                        <strong class="package-number">@lang('product.plan') {{$i}}</strong>
                                    @endif
                                    <span class="show_on_mobile" data-price-{{$k}}></span>
                                    <br>
                                    <a href="#"
                                       data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"
                                       data-step="3" data-package="{{$k}}" data-sub-package=""
                                       data-plan="@lang('product.plan') {{$i}}"
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
                        @if(isset($v->no))
                            @if(isset($v->name))
                                <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                            @else
                                <strong>@lang('product.plan') {{$v->no}}</strong>
                            @endif
                        @else
                            <strong class="package-number">@lang('product.plan') {{$i}}</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"
                           @if(isset($v->no))
                           @if(isset($v->name))
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="{{$v->name}} @lang('product.plan') {{$v->no}}"
                           @else
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="@lang('product.plan') {{$v->no}}"
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
            <tr class="orange">
                <th>@lang('product.price_per_year')</th>
                <?php $i = 1 ?>
                @foreach  ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}">
                        <strong data-price-{{$k}}></strong></td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            <?php $arr_sort = ['CHILLSURE01', 'CHILLSURE02', 'CHILLSURE03', 'CHILLSURE04', 'CHILLSURE07','CHILLSURE05', 'CHILLSURE06']; ?>            @foreach ( $arr_sort as $v)
                <tr>
                    <th>{!! __('product.'.$selected.'.'.$v) !!}</th>
                    <?php $i = 1 ?>

                    @foreach ($package_detail as $k1 => $v1)
                        <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k1}}">
                            @if(isset($v1->plan->$v))
                                @if((is_numeric($v1->plan->$v)))
                                    <strong>{{number_format( $v1->plan->$v,0)}}</strong>
                                @elseif( strpos($v1->plan->$v,'__') === 0 )
                                    <strong>{!!__( str_replace('__','',$v1->plan->$v) )!!}</strong>
                                @else
                                    <strong>{!! $v1->plan->$v !!}</strong>
                                @endif
                            @endif
                        </td>
                        <?php $i++ ?>
                    @endforeach
                </tr>
            @endforeach

            </tbody>

            <tfoot>
            <tr>
                <th>&nbsp;</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}">
                        @if(isset($v->no))
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
                        @else
                            <strong style="display: block" class="text-center">@lang('product.plan') {{$i}}</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-bottom-choose-plan-{{$i}}"
                           @if(isset($v->no))
                           @if(isset($v->name))
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="{{$v->name}}  @lang('product.plan') {{$v->no}}"
                           @else
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="@lang('product.plan') {{$v->no}}"
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
        <a href="#" data-gtm="product-{{strtolower($selected)}}-more" id="btn-more-diabetes" data-expand="@lang('product.more')"
           data-collapse="@lang('product.collapse')">
            @lang('product.more')
        </a>

    </div>
</section>
