@extends('base.template')

@section('layout')
    <header>
{{--        <meta name="facebook-domain-verification" content="4ojuebt1n4u0c2808tn6hhc3vi6e75" />--}}
        <a class="nav-icon"><span></span></a>
        <div class="logo">
            <a data-gtm="logo" href="{{route('current',['locale' => $locale],false)}}"><img
                    src="{{url('images/favicon/favicon.png')}}"
                    alt="Tune Protect Logo"></a>
        </div>
        <div class="right">
            <div class="language-section">
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
                                    <picture>
                                        <source media="(min-width:768px)" srcset="{{url($v->pic_en)}}">
                                        <img src="{{url(!empty($v->pic_mobile_en) ? $v->pic_mobile_en : $v->pic_en )}}"
                                             alt="{{$v->locales[$locale]->title}}">
                                    </picture>
                            @endif
                        @else
                            @if(!empty($v->pic))
                                    <picture>
                                        <source media="(min-width:768px)" srcset="{{url($v->pic)}}">
                                        <img src="{{url(!empty($v->pic_mobile) ? $v->pic_mobile : $v->pic )}}"
                                             alt="{{$v->locales[$locale]->title}}">
                                    </picture>
                            @endif
                        @endif
                    </a>
                @endforeach
            </div>
        </section>
    @endif
    @yield('page')
    <div class="sticky-menu"></div>
    <footer>
        <div class="wrapper">
            <div class="logo-wrapper">
                <img src="{{url('images/template/white_logo.svg')}}" alt="">
                @include('frontend.component.call_center', ['color' => 'white','gtm' => 'footer-call-center'])
            </div>
        </div>
{{--        <p class="copyright">{!! __('global.copyright') !!}  </p>--}}
    </footer>

    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v9.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

    <!-- Your Chat Plugin code -->
    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="714883198577339">
    </div>
@endsection
