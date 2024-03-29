<section style="display: none" id="step2" class="product-detail">
    <div class="wrapper">
        <table id="table-detail">
            <thead>
            <tr>
                <th>
                    <h3>@lang('global.coverage')</h3>
                    <?php $i = 1 ?>
                    <div class="choose-plan-mobile">

                        @foreach ($package_detail as $k => $v)
                            <div class="wrapper-choose-plan">
                                <a href="#"
                                   data-package="{{$k}}"
                                   data-index="{{$i-1}}"
                                   data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i-1}}"
                                   class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">

                                    @if($i == 1)
                                        <strong class="package-number">LITE @lang('product.plan')</strong>
                                    @else
                                        <strong class="package-number">@lang('product.plan') {{$i-1}}</strong>
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
                        @if($i == 1)
                            <strong class="package-number">iSmile TG</strong>
                        @else
                            <strong class="package-number">@lang('product.plan') {{$i-1}}</strong>
                        @endif

{{--                        <a href="#"--}}
{{--                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i-1}}"--}}
{{--                           data-step="3" data-package="{{$k}}" data-sub-package=""--}}
{{--                           @if($i == 1)--}}
{{--                                data-plan='iSmile TG'--}}
{{--                           @else--}}
{{--                                data-plan="@lang('product.plan') {{$i-1}}"--}}
{{--                           @endif--}}

{{--                           class="btn btn-block btn-outline btn-goto">Accept & Continue</a>--}}

                    </th>
                    <?php $i++ ?>
                @endforeach
            </tr>
            </thead>
            <tbody>
            <tr class="orange">
                <th>Insurance premium price</th>


                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i-1}}" data-package="{{$k}}"><strong
                            data-price-{{$k}}></strong></td>
                    <?php $i++ ?>
                @endforeach
            </tr>

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
            @endforeach

            </tbody>

            <tfoot>
            <tr>
                <th>&nbsp;</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i-1}}" data-package="{{$k}}">
                        @if($i == 1)
                            <strong style="display: block" class="text-center">iSmile TG</strong>
                        @else
                            <strong style="display: block" class="text-center">iSmile TG</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-bottom-choose-plan-{{$i-1}}"
                               data-step="3" data-package="{{$k}}" data-sub-package=""

                           @if($i == 1)
                                data-plan='iSmile TG'
                           @else
                                data-plan="@lang('product.plan') {{$i-1}}"
                           @endif


                           class="btn btn-block btn-outline btn-goto">SELECT</a>

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
