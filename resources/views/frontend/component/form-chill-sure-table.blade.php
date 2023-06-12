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
                    <th>
                        <h3>@lang('product.chillsure_coverage')</h3>
                        <?php $i = 1 ?>
                        <div class="choose-plan-mobile">

                            @foreach ($package_detail as $k => $v)
                                <div class="wrapper-choose-plan">
                                    <div
                                        data-package="{{$k}}"
                                        data-index="{{$i}}"
                                        data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i}}"
                                        class="btn btn-block btn-outline btn-choose-plan {{$i == 4 ? 'on' : '' }}">
                                        @if(isset($v->no))
                                            @if(isset($v->name))
                                                <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                            @else
                                                <strong>@lang('product.plan') {{$v->no}}</strong>
                                            @endif
                                        @else

                                            <span data-recommend>
                                                    <img src="/images/ico_ci/recommended-{{$locale}}.png" alt="recommendth">
                                                </span>

                                            <strong class="package-number">@lang('product.plan') {{$i}}</strong>
                                        @endif
                                        <span class="show_on_mobile" data-price-{{$k}}></span>
                                        <br>
                                        <a href="#"
                                        data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"
                                        data-step="3" data-package="{{$k}}" data-sub-package=""
                                        data-plan="@lang('product.plan') {{$i}}"
                                        data-health="{{$v->health2go}}"
                                        class="btn btn-block btn-outline btn-goto" 
                                        style="z-index: 9999;">@lang('product.choose_plan')</a>

                                    </div>

                                    <?php $i++ ?>
                                </div>

                            @endforeach

                        </div>
                    </th>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k => $v)
                        <th data-package="{{$k}}" class="{{$i==4? 'recommendPackage on basePrice':''}}">
                            @if(isset($v->no))
                                <span data-recommend>
                                    <img src="/images/ico_ci/recommended-{{$locale}}.png" alt="recommendth">
                                </span>
                                @if(isset($v->name))
                                    <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                @else
                                    <strong>@lang('product.plan') {{$v->no}}</strong>
                                @endif
                            @else
                                @if(isset($v->recommend))
									<span data-recommend>
											<img src="/images/ico_ci/recommended-{{$locale}}.png" alt="recommendth">
									</span>
								@endif
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
                                data-step="3" data-package="{{$k}}" data-health="{{$v->health2go}}" data-sub-package=""
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
                    <td {{$i == 4 ? "class=recommendPackage" : "class=hide"}} data-index="{{$i}}" data-package="{{$k}}">
                        <strong data-price-{{$k}}></strong></td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            @foreach (__('product.'.$selected) as $k => $v)
                <tr>
                    <?php $i = 1 ?>
                    <th data-cover-{{$k}}>{!! $v !!}</th>

                    @foreach ($package_detail as $k1 => $v1)
                        <td  {{$i == 4 ? "class=recommendPackage" : "class=hide"}} data-index="{{$i}}" data-package="{{$k1}}">
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
            @endforeach
            

            </tbody>

            <tfoot>
            <tr>
                <th>&nbsp;</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i == 4 ? "class=recommendPackage" : "class=hide"}} data-index="{{$i}}" data-package="{{$k}}">
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
                                data-step="3" data-package="{{$k}}" data-health="{{$v->health2go}}" data-sub-package=""
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
