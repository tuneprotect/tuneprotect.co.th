@extends('frontend.layout.main')

@section('page')

    <main>
        <section id="main-product">
            <div class="wrapper text-center">
                <h1>{{$content->locales[$locale]->title}}</h1>
                <div>
                    {!! $content->locales[$locale]->content !!}
                </div>

            </div>
        </section>
        @if($main_highlight_product)
            <section class="product_section">
                <div class="wrapper">
                    <div class="main_product reveal">
                        @if($main_highlight_product->productSlideshow)
                            <div class="product_slide_wrapper">
                                <div id="product_slide_1" class="product_slider">
                                    @foreach($main_highlight_product->productSlideshow AS $v)
                                        <div class="product-slide-item rotate-bg no-rotate">
                                            <picture>
                                                <source media="(min-width:768px)" srcset="{{url($v->pic)}}">
                                                <img src="{{url($v->pic_mobile)}}"
                                                     alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                            <div class="caption">
                                                <h3>{{$v->locales[$locale]->title}}</h3>
                                                <p>{{$v->locales[$locale]->content}}</p>
                                            </div>

                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endif
                        <div class="description">

                            <div>
                                <h2>{{$main_highlight_product->locales[$locale]->title}}</h2>
                                <p>{{$main_highlight_product->locales[$locale]->sub_title}}</p>
                            </div>
                            <ul>
                                @foreach($main_highlight_product->productPackage AS $v)
                                    @if($v->code === 'ONCSHC' || $v->code === 'CI'|| $v->code === 'DIABETES' || $v->code === 'ONPACA' || $v->code === 'ONPAKD' || $v->code === 'ONPASN' || $v->code === 'TAISM' || $v->code === 'TAIPOCT22' || $v->code === 'ONTADM' || $v->code === 'ONTAOB' || $v->code === 'ONFIMP' || $v->code === 'ONMHS')
                                        <li>
                                            <a
                                                data-gtm="index-product-image-{{$main_highlight_product->friendly_url}}-{{$v->code}}"
                                                href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $main_highlight_product->friendly_url,'params' => $v->code ])}}">
                                                <div class="two-tone-icon">
                                                    <span><img src="{{url($v->pic)}}" alt=""></span>
                                                    <strong>{{$v->locales[$locale]->title}}
                                                        @if($v->code === 'ONCSHC')                                                            
                                                            <img src="https://www.tuneprotect.co.th/storage/Icon/new2.gif" style="width:40%;margin-bottom: -5px;" />
                                                        @endif
                                                    </strong>
                                                </div>
                                            </a>
                                            <div class="btn-wrapper">
                                                <a class="btn btn-gradient"
                                                data-gtm="index-product-button-{{$main_highlight_product->friendly_url}}-{{$v->code}}"
                                                href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $main_highlight_product->friendly_url,'params' => $v->code ])}}">@lang('global.choose_product')</a>
                                            </div>
                                        </li>
                                    @endif
                                @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="two-col">
                        @foreach ($highlight_product as $k => $v)
                            <div class="reveal" style="transform: unset !important;">
                                @if($v->productSlideshow)
                                    <div class="product_slide_wrapper">
                                        <div id="product_slide_{{$k}}" class="product_slider">
                                            @foreach($v->productSlideshow as $v1)
                                                <div class="product-slide-item rotate-bg no-rotate">
                                                    <img src="{{url($v1->pic_mobile)}}"
                                                         alt="{{$v1->locales[$locale]->title}}">
                                                    <div class="caption">
                                                        <h3>{{$v1->locales[$locale]->title}}</h3>
                                                        <p>{{$v1->locales[$locale]->content}}</p>
                                                    </div>

                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                @endif
                                <div class="description">
                                    <div>
                                        <h2>{{$v->locales[$locale]->title}}</h2>
                                        <p>{{$v->locales[$locale]->sub_title}}</p>
                                    </div>
                                    <ul>
                                        @foreach($v->productPackage AS $v)
                                            @if($v->code === 'ONCSHC' || $v->code === 'CI'|| $v->code === 'DIABETES' || $v->code === 'ONPACA' || $v->code === 'ONPAKD' || $v->code === 'ONPASN' || $v->code === 'TAISM' || $v->code === 'TAIPOCT22' || $v->code === 'ONTADM' || $v->code === 'ONTAOB' || $v->code === 'ONFIMP' || $v->code === 'ONMHS')    
                                                <li>
                                                    <a
                                                        data-gtm="index-product-image-{{$v->friendly_url}}-{{$v->code}}"
                                                        href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v->friendly_url,'params' => $v->code ])}}">
                                                        <div class="two-tone-icon">
                                                            <span><img src="{{url($v->pic)}}" alt=""></span>
                                                            <strong>{{$v->locales[$locale]->title}}</strong>
                                                        </div>
                                                    </a>
                                                    <div class="btn-wrapper">
                                                        <a class="btn btn-gradient"
                                                           data-gtm="index-product-button-{{$v->friendly_url}}-{{$v->code}}"
                                                           href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v->friendly_url,'params' => $v->code ])}}">@lang('global.choose_product')</a>
                                                    </div>
                                                </li>
                                            @endif

                                        @endforeach
                                    </ul>
                                </div>


                            </div>
                        @endforeach

                    </div>
                    @if(@$last_highlight_product)
                        <div class="main_product reveal">
                            @if($last_highlight_product->productSlideshow)
                                <div class="product_slide_wrapper">
                                    <div id="product_slide_1" class="product_slider">
                                        @foreach($last_highlight_product->productSlideshow AS $v)
                                            <div class="product-slide-item rotate-bg no-rotate">
                                                <picture>
                                                    <source media="(min-width:768px)" srcset="{{url($v->pic)}}">
                                                    <img src="{{url($v->pic_mobile)}}"
                                                         alt="{{$v->locales[$locale]->title}}">
                                                </picture>
                                                <div class="caption">
                                                    <h3>{{$v->locales[$locale]->title}}</h3>
                                                    <p>{{$v->locales[$locale]->content}}</p>
                                                </div>

                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                            <div class="description">

                                <div>
                                    <h2>{{$last_highlight_product->locales[$locale]->title}}</h2>
                                    <p>{{$last_highlight_product->locales[$locale]->sub_title}}</p>
                                </div>
                                <ul>
                                    @foreach($last_highlight_product->productPackage AS $v)
                                        @if($v->code === 'ONCSHC' || $v->code === 'CI'|| $v->code === 'DIABETES' || $v->code === 'ONPACA' || $v->code === 'ONPAKD' || $v->code === 'ONPASN' || $v->code === 'TAISM' || $v->code === 'TAIPOCT22' || $v->code === 'ONTADM' || $v->code === 'ONTAOB' || $v->code === 'ONFIMP' || $v->code === 'ONMHS')                             
                                            <li>
                                                <a
                                                    data-gtm="index-product-image-{{$last_highlight_product->friendly_url}}-{{$v->code}}"
                                                    href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $last_highlight_product->friendly_url,'params' => $v->code ])}}">
                                                    <div class="two-tone-icon">
                                                        <span><img src="{{url($v->pic)}}" alt=""></span>
                                                        <strong>{{$v->locales[$locale]->title}}</strong>
                                                    </div>
                                                </a>
                                                <div class="btn-wrapper">
                                                    <a class="btn btn-gradient"
                                                    data-gtm="index-product-button-{{$last_highlight_product->friendly_url}}-{{$v->code}}"
                                                    href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $last_highlight_product->friendly_url,'params' => $v->code ])}}">@lang('global.choose_product')</a>
                                                </div>
                                            </li>
                                        @endif
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
            </section>
        @endif
        <section class="service_section">
            <div class="wrapper">
                <h1>{{__('index.service_header')}}</h1>
                <ul>
                    @foreach ($service AS $v)
                        <li class="reveal"><a data-gtm="index-service-{{$v->id}}"
                                              href="{{url(str_replace('{locale}',$locale,$v->action_link))}}">
                                <span><img src="{{url($v->pic)}}" alt="{{$v->locales[$locale]->title}}"></span>
                                <strong>{{$v->locales[$locale]->title}}</strong>
                                <span class="description">{{$v->locales[$locale]->sub_title}}</span>
                            </a></li>
                    @endforeach
                </ul>
            </div>
        </section>
        @include('frontend.component.review',['review' => $review,'locale' => $locale])


        @if(isset($overlayComponent))
            @includeIf($overlayComponent)
        @endif

        @if(isset($overlayCloseComponent))
            @includeIf($overlayCloseComponent)
        @endif

    </main>

@endsection
