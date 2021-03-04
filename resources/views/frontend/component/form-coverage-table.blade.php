<section style="display: none" id="step2" class="product-detail">
    <div class="wrapper">
        <table id="table-detail">
            <thead>
            <tr>
                <th>
                    <h3>@lang('global.coverage')</h3>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k => $v)
                        <a href="#" data-index="{{$i}}"
                           data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i}}"
                           class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">
                            <strong>@lang('product.plan') {{$i}}</strong>
                        </a>
                        <?php $i++ ?>
                    @endforeach
                </th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <th>
                        <strong>@lang('product.plan') {{$i}}</strong>
                        <a href="#" data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"
                           data-plan="@lang('product.plan') {{$i}}"
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
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}"><strong data-price-{{$k}}></strong></td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            @foreach (__('product.'.$selected) as $k => $v)
                <tr>
                    <th>{{$v}}</th>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k1 => $v1)
                        <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}">
                            @if(isset($v1->plan->$k))
                                @if((is_numeric($v1->plan->$k)))
                                    <strong>{{number_format( $v1->plan->$k,0)}}</strong>
                                @elseif( strpos($v1->plan->$k,'__') === 0 )
                                    <strong>{{__( str_replace('__','',$v1->plan->$k) )}}</strong>
                                @else
                                    <strong>{{$v1->plan->$k}}</strong>
                                @endif
                            @else
                        @endif
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
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}">
                        <strong style="display: block" class="text-center">@lang('product.plan') {{$i}}</strong>
                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-bottom-choose-plan-{{$i}}"
                           data-step="3" data-package="{{$k}}" data-sub-package=""
                           data-plan="@lang('product.plan') {{$i}}"
                           class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                    </td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            </tfoot>
        </table>

        <br><br>
        <a href="#" data-gtm="product-{{strtolower($selected)}}-more" id="btn-more" data-expand="@lang('product.more')" data-collapse="@lang('product.collapse')">
            @lang('product.more')
        </a>

    </div>
</section>
