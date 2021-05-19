<section style="display: none" id="step2" class="product-detail">
    @if(strtolower($selected) == 'onvacina')
        <section id="sectionPackage"  class="wrapper">
            <form method="post" action="" class="insurance-form">
                @if($locale == 'en')
                    <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
                @else
                    <div class="form-head">เลือกแผนประกัน</div>
                @endif

                <div class="form-inner">
                    <div class="controls-wrapper">
                        <select id="ctrl_package" name="ctrl_package">
                            <option value="1">Silver</option>
                            <option value="2">Gold</option>
                            <option value="3" selected="selected">Platinum</option>
                        </select>
                        @if($locale == 'en')
                            <label for="ctrl_package">Package</label>
                        @else
                            <label for="ctrl_package">แผนประกันภัย</label>
                        @endif


                    </div>
                </div>
            </form>
        </section>
    @endif

    <div class="wrapper">
        <table id="table-detail">
            <thead>
            <tr>
                <th>
                    <h3>@lang('global.coverage')</h3>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k => $v)
                        <a href="#"
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
                                <strong>@lang('product.plan') {{$i}}</strong>
                            @endif

                        </a>
                        <?php $i++ ?>
                    @endforeach
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
                            <strong>@lang('product.plan') {{$i}}</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"
                           @if(isset($v->no))
                                @if(isset($v->name))
                                    data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="{{$v->name}} @lang('product.plan') {{$v->no}}"
                                @else
                                    data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="@lang('product.plan') {{$v->no}}"
                                @endif

                           @else
                                data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="@lang('product.plan') {{$i}}"
                           @endif

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
                    <td {{$i > 1 ? 'class=hide' : ""}} data-index="{{$i}}"  data-package="{{$k}}">
                        @if(isset($v->no))
                            @if(isset($v->name))
                                @if(isset($v->name))
                                    <strong style="display: block" class="text-center">{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                @else
                                    <strong style="display: block" class="text-center">@lang('product.plan') {{$v->no}}</strong>
                                @endif

                            @else
                                <strong style="display: block" class="text-center">@lang('product.plan') {{$v->no}}</strong>
                            @endif
                        @else
                            <strong style="display: block" class="text-center">@lang('product.plan') {{$i}}</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-bottom-choose-plan-{{$i}}"
                            @if(isset($v->no))
                                @if(isset($v->name))
                                    data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="{{$v->name}}  @lang('product.plan') {{$v->no}}"
                                @else
                                    data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="@lang('product.plan') {{$v->no}}"
                                @endif

                            @else
                                data-step="3" data-package="{{$k}}" data-sub-package="" data-plan="@lang('product.plan') {{$i}}"
                            @endif
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
