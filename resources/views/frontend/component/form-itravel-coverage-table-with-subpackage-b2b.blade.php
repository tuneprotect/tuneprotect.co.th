<section style="display: none" id="step2" class="product-detail">
<style>
    #table-detail img{
        max-width: 50% !important;
    }
</style>
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

                                                @if($v->no < 1)
                                                    <span><img src="/storage/product/iTravel/icon_visa_approved.png"></span>
                                                @endif

                                                <strong class="package-number">@lang('product.plan') {{$v->no}}</strong>

                                                <span class="show_on_mobile" data-price-{{$k}}></span>
                                                <br>
                                                <a href="#"
                                                   data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$v->no}}"
                                                   data-step="3" data-package="{{$v->no}}" data-sub-package=""
                                                   data-plan="@lang('product.plan') {{$v->no}}"
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
                    <th data-cover-{{$k}}>{!! $v !!}</th>

                    @foreach ($package_detail as $k1 => $v1)
                        <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i-1}}" data-package="{{$k1}}">
                            @if(isset($v1->plan->$k))
                                @if((is_numeric($v1->plan->$k)))
                                    <strong>{{number_format( $v1->plan->$k,0)}}</strong>
                                @elseif( strpos($v1->plan->$k,'__') === 0 )
                                    <strong>{!!__( str_replace('__','',$v1->plan->$k) )!!}</strong>
                                @elseif(str_contains($v1->plan->$k,'healt2go_plan'))
                                    <strong>{!!__( str_replace('healt2go_plan',__('product.healt2go_plan'),$v1->plan->$k)) !!}</strong>
                                @elseif(str_contains($v1->plan->$k,'healt2go_desc'))
                                    <strong>{!!__( str_replace('healt2go_desc',__('product.healt2go_desc'),$v1->plan->$k)) !!}</strong>
                                @elseif(str_contains($v1->plan->$k,'healt2go_word'))
                                    <strong>{!!__( str_replace('healt2go_word',__('product.healt2go_word'),$v1->plan->$k)) !!}</strong>
                                @else
                                    <strong>{!! $v1->plan->$k !!}</strong>
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
