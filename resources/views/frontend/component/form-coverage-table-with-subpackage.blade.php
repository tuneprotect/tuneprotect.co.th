<section style="display: none" id="step2" class="product-detail">
    <div class="wrapper">
        <table id="table-detail">
            <thead>
            <tr>
                <th>
                    <h3>@lang('global.coverage')</h3>
                    @foreach ($package_detail as $k => $v)
                        <a href="#" data-index="{{$i}}"
                           data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i}}"
                           data-package="{{$k}}"
                           class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">
                            <strong>@lang('product.plan') {{$v->no}}</strong>
                        </a>
                    @endforeach
                </th>

                @foreach ($package_detail as $k => $v)
                    <th data-package="{{$k}}">
                        <strong>@lang('product.plan') {{$v->no}}</strong>
                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"
                           data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="@lang('product.plan') {{$v->no}}"
                           class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                    </th>

                @endforeach
            </tr>
            </thead>
            <tbody>
            <tr class="orange">
                <th>@lang('product.price')</th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k}}"><strong data-price-{{$k}}></strong></td>
                    <?php $i++ ?>
                @endforeach
            </tr>
            @foreach (__('product.'.$selected) as $k => $v)
                <tr>
                    <th>{{$v}}</th>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k1 => $v1)
                        <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}" data-package="{{$k1}}">
                            <strong>{{isset($v1->plan->$k) ? (is_numeric($v1->plan->$k) ? number_format( $v1->plan->$k,0) : $v1->plan->$k)  : ''   }}</strong></td>
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
        <a href="#" id="btn-more" data-expand="@lang('product.more')" data-collapse="@lang('product.collapse')">
            @lang('product.more')
        </a>

    </div>
</section>
