@extends('base.template')

@section('layout')
    <header>
{{--        <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>--}}
{{--        <meta name="csrf-token" content="{{ csrf_token() }}" />--}}

        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <a class="nav-icon"><span></span></a>
        <div class="logo">
            <a data-gtm="logo" href=""><img
                    src="{{url('images/favicon/favicon.png')}}"
                    alt="Tune Protect Logo"></a>
        </div>
        <nav>
            <ul class="main">
            </ul>
        </nav>
        <div class="right">
            <div class="language-section" id="language" name="language">
                @if(count($activeLanguage) > 1 )

                    <ul class="language-switcher">
                        <li class="current">
                            <strong>{{$locale}} <i class="icofont-caret-right"></i></strong>
                            <ul>
                                @foreach($activeLanguage as $v)
                                    @if($v->code !== $locale )
                                        <li>
                                            <a data-gtm="language-switcher-{{$v->code}}"
                                               href="{{ url("/{$v->code}/{$current_path}") }}">{{  strtoupper($v->code)}}</a>
                                        </li>
                                    @endif
                                @endforeach
                            </ul>
                        </li>
                    </ul>
                @endif
            </div>
            @include('frontend.component.call_center', ['color' => 'red','gtm' => 'header-call-center'])
        </div>
    </header>
    @if(isset($slideshow))
        <section class="slide_wrapper">
            <div class="slider">
                @foreach ($slideshow as $v )
                    <a {{!empty($v->action_link) ? 'data-gtm="banner-'.$v->id.'"  href='. str_replace('{locale}',$locale,$v->action_link) : '' }}>
                        @if(\Illuminate\Support\Str::startsWith($v->video_link,'<iframe'))
                            <div class="video-wrapper">{{$v->video_link}}</div>
                        @elseif(\Illuminate\Support\Str::endsWith($v->video_link,'.mp4'))
                            <div class="video-banner-wrapper">
                                <video autoplay playsinline loop muted poster="{{url($v->pic)}}">
                                    <source src={{$v->video_link}} type="video/mp4"/>
                                </video>
                                <div class="video-overlay">
                                    <div class="description">
                                        <h3>{!! $v->locales[$locale]->title !!}</h3>
                                        @if(!empty($v->action_link) )
                                            <span class="btn btn-gradient">@lang('global.choose_product')</span>
                                        @endif
                                    </div>
                                </div>

                            </div>
                        @elseif($locale == 'en')
                            @if(!empty($v->pic_en))
                                @if($selected==='ONVACINA')
                                    <picture>
                                    <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D', 'Banner_VSURE_D_EN', $v->pic))}}">
                                            <img src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner_Covid_D', 'Banner_VSURE_D_EN', $v->pic_mobile)) : url(str_replace('Banner_Covid_D', 'Banner_VSURE_M_EN', $v->pic)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                                </picture>
                                @else
                                    <picture>
                                        <source media="(min-width:768px)" srcset="{{url($v->pic_en)}}">
                                        <img src="{{url(!empty($v->pic_mobile_en) ? $v->pic_mobile_en : $v->pic_en )}}"
                                            alt="{{$v->locales[$locale]->title}}">
                                    </picture>
                                @endif
                            @endif
                        @else
                            @if(!empty($v->pic))
                                @if($selected==='ONVACINA')
                                    <picture>
                                        <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D', 'Banner_VSure_Protect_D', $v->pic))}}">
                                        <img src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner_Covid_D', 'Banner_VSure_Protect_D', $v->pic_mobile)) : url(str_replace('Banner_Covid_D', 'Banner_VSure_Protect_D', $v->pic)) )}}"
                                             alt="{{$v->locales[$locale]->title}}">
                                    </picture>
                                @else
                                    <picture>
                                        <source media="(min-width:768px)" srcset="{{url($v->pic)}}">
                                        <img src="{{url(!empty($v->pic_mobile) ? $v->pic_mobile : $v->pic )}}"
                                             alt="{{$v->locales[$locale]->title}}">
                                    </picture>
                                @endif

                            @endif
                        @endif
                    </a>
                @endforeach
            </div>
        </section>
    @endif
    @yield('page')
    <div class="sticky-menu">
    </div>
    <footer>
        <div class="wrapper">
            <div class="logo-wrapper">
                <img src="{{url('images/template/white_logo.svg')}}" alt="">
                @include('frontend.component.call_center', ['color' => 'white','gtm' => 'footer-call-center'])
            </div>
            <nav>
                <section>
                    <h6 class="collapse">@lang('global.nav_claim')</h6>
                    @if($claim_category)
                        @foreach ($claim_category as $v)
                            <ul class="collapse">
                                <li><a href="#"><strong>{{$v->locales[$locale]->title}}</strong></a></li>

                                @foreach ($claim as $v1)
                                    @if($v->id == $v1->cat_id )
                                        <li>
                                            <a data-gtm="footer-nav-claim-{{$v1->friendly_url}}" href="{{route('current',['locale' => $locale,'controller' => 'claim','func' => $v1->friendly_url ])}}">{{$v1->locales[$locale]->title}}</a>
                                        </li>
                                    @endif
                                @endforeach

                            </ul>
                        @endforeach
                    @endif
                </section>
                <section>
                    <h6 class="collapse">@lang('global.nav_about')</h6>

                    @if(isset($about_category))
                        @foreach ($about_category as $v)
                            <ul class="collapse">
                                <li><a href="#"><strong>{{$v->locales[$locale]->title}}</strong></a></li>
                                @foreach ($about[$v->id] as $v1)
                                    <li>
                                        <a data-gtm="footer-nav-about-{{$v1->friendly_url}}" href="{{route('current',['locale' => $locale,'controller' => 'aboutus','func' => $v1->friendly_url ])}}">{{$v1->locales[$locale]->title}}</a>
                                    </li>
                                @endforeach
                            </ul>
                        @endforeach
                    @endif

                    <ul class="collapse">
                        <li>
                            <a data-gtm="footer-nav-contact-{{$v1->friendly_url}}" href="{{route('current',['locale' => $locale,'controller' => 'contactus'],false)}}"><strong> {{__('global.nav_contact')}}</strong></a>
                        </li>
                    </ul>

                    <ul class="collapse">
                        <li><a data-gtm="footer-nav-tune-group" target="_blank" href="https://www.tuneprotect.com/corporate/group/about-us/"><strong>Tune
                                    Protect
                                    Group</strong></a></li>
                    </ul>

                    <ul class="collapse">
                        <li><a><strong>@lang('global.our_partner')</strong></a></li>
                        <li>
                            <a data-gtm="footer-nav-partner-hospital" href="{{route('current',['locale' => $locale,'controller' => 'partner','func' => 'hospital' ])}}">@lang('global.hospital')</a>
                        </li>
                        <li>
                            <a data-gtm="footer-nav-partner-garage" href="{{route('current',['locale' => $locale,'controller' => 'partner','func' => 'garage' ])}}">@lang('global.garage')</a>
                        </li>
                        <li>
                            <a data-gtm="footer-nav-partner-service-center" href="{{route('current',['locale' => $locale,'controller' => 'partner','func' => 'service_center' ])}}">@lang('global.service_center')</a>
                        </li>
                    </ul>


                    <ul class="social">
                        @foreach($social AS $v)
                            <li><a data-gtm="footer-nav-social" target="_blank" href="{{$v->action_link}}"><i class="{{$v->pic}}"></i></a></li>
                        @endforeach
                    </ul>
                </section>
            </nav>
        </div>
        <p class="copyright">{!! __('global.copyright') !!}  </p>
    </footer>

    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script>
        // $.ajaxSetup({
        //     headers: {
        //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //     }
        // });

        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v9.0'
            });
        };

        // (function (d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) return;
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

    </script>

    <!-- Your Chat Plugin code -->
{{--    <div class="fb-customerchat"--}}
{{--         attribution=setup_tool--}}
{{--         page_id="714883198577339">--}}
{{--    </div>--}}
@endsection
