@extends('base.template')

@section('layout')
<style>
    #taismtg-main {
        display: none;
    }
</style>
{{-- <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>--}}
{{-- <meta name="csrf-token" content="{{ csrf_token() }}" />--}}

<meta name="csrf-token" content="{{ csrf_token() }}" />

@if(($partner==='LUMA' && ($selected==='ONTALN' || $selected ==='TAIPOCT22' || $selected ==='TAIPOCT22AA' || $selected ==='TAIPCRN')) || $selected==='TGCVLP' || $selected==='TAISMTG')
@elseif($partner==='LUMA' && $selected==='CVCARE')
<header>
    <nav>
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
                            <a data-gtm="language-switcher-{{$v->code}}" href="{{ url("/{$v->code}/{$current_path}") }}">{{ strtoupper($v->code)}}</a>
                        </li>
                        @endif
                        @endforeach
                    </ul>
                </li>
            </ul>
            @endif
        </div>
    </div>
</header>
@else


<header>
    <!-- Tracking code for interspace -->
    @if(($selected === 'ONTAOB' || $selected === 'ONCSHC' || $selected === 'ONCSHCAA') && !empty($portal_key) && $portal_key === 'JQXWAMUX9JDXNGDRD8QU6TKWBJ5Q7GDR26UBNGFRBTWRXHDF3UMNX')
    <script>
        var timestamp = new Date().getTime();
        (function(d) {
            var s = d.createElement('script');
            s.src = 'https: //script.accesstrade.in.th/lp.js?cb=' + timestamp;
            s.async = true;
            var e = d.getElementsByTagName('script')[0];
            e.parentNode.insertBefore(s, e);
        })(document);
    </script>
    @endif
    <!-- Tracking code for interspace -->

    <a class="nav-icon"><span></span></a>
    <div class="logo">
        <a data-gtm="logo"><img src="{{url('images/favicon/favicon.png')}}" alt="Tune Protect Logo"></a>
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
                            <a data-gtm="language-switcher-{{$v->code}}" href="{{ url("/{$v->code}/{$current_path}") }}">{{ strtoupper($v->code)}}</a>
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
@endif

@if(isset($slideshow))
<section class="slide_wrapper">
    <div class="slider">
        @foreach ($slideshow as $v )
        <a {{!empty($v->action_link) ? 'data-gtm="banner-'.$v->id.'"  href='. str_replace('{locale}',$locale,$v->action_link) : '' }}>
            @if(\Illuminate\Support\Str::startsWith($v->video_link,'<iframe')) <div class="video-wrapper">{{$v->video_link}}
    </div>
    @elseif(\Illuminate\Support\Str::endsWith($v->video_link,'.mp4'))
    <div class="video-banner-wrapper">
        <video autoplay playsinline loop muted poster="{{url($v->pic)}}">
            <source src={{$v->video_link}} type="video/mp4" />
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
            @if($selected==='ONVACINA' || $selected === 'ONVSUREA')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D_EN', 'Banner_VSURE_D_EN', $v->pic_en))}}">
                <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_Covid_D_EN', 'Banner_VSURE_D_EN', $v->pic_mobile_en)) : url(str_replace('Banner_Covid_D_EN', 'Banner_VSURE_M_EN', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='TAISM') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-ismile-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-ismile-MASII.webp" : "/storage/Banner/Masii/Banner-ismile-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='TAISM')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_TAI_D', $v->pic_en))}}">
                <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONCSHC')
                @if(isset($partner))
                    <!-- Rabbit -->
                    @if(($partner==='Rabbit' || $partner==='rabbit' || $partner==='RABBIT') && $agentCode==='00BD114L266')
                        <picture class="bbb">
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/rabbit/Chillsure-Rabbit-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/rabbit/Chillsure-Rabbit-Broker-MB-TH.webp" : "/storage/Banner/chillsure/rabbit/Chillsure-Rabbit-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                        <script src="https://code.jquery.com/jquery-3.6.4.slim.js" integrity="sha256-dWvV84T6BhzO4vG6gWhsWVKVoa4lVmLnpBOZh/CAHU4=" crossorigin="anonymous"></script>
                        <script>
                            $().ready(function() {
                                $("#brochure_rabbit_en").attr("href", "/storage/product/brochure/ChillSure/Tune-Brochure-En_Rabbit Care.pdf");
                            });
                        </script>
                    <!-- BoltTech -->
                    @elseif($agentCode==='00BD073L130')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/bolttec/Chillsure-Bolttech-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/bolttec/Chillsure-Bolttech-Broker-MB-TH.webp" : "/storage/Banner/chillsure/bolttec/Chillsure-Bolttech-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    <!-- Luma -->
                    @elseif($agentCode==='00BD056L107')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/luma/Chillsure-Luma-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/luma/Chillsure-Luma-Broker-MB-TH.webp" : "/storage/Banner/chillsure/luma/Chillsure-Luma-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    <!-- Hugs -->
                    @elseif($agentCode==='00BD115L272')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/hugs/Chillsure-Hugs-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/hugs/Chillsure-Hugs-Broker-MB-TH.webp" : "/storage/Banner/chillsure/hugs/Chillsure-Hugs-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    @elseif($agentCode==='00BD144L409')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/truelife/Chillsure-Banner-Promo-Truelife.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/truelife/Chillsure-Banner-Promo-Truelife.webp" : "/storage/Banner/chillsure/truelife/Chillsure-Banner-Promo-Truelife.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    <!-- Masii -->
                    @elseif($agentCode==='00BD039L82')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-Chillsure-EN-MASII.webp">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-Chillsure-EN-MASII.webp" : "/storage/Banner/Masii/Banner-Chillsure-EN-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @else
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/Chillsure-Banner-Desktop-EN.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/Chillsure-Banner-Mobile-EN.webp" : "/storage/Banner/chillsure/Chillsure-Banner-Mobile-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>

                    @endif
                @endif

            @elseif($selected==='ONCSHCAA')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/banner-chillsure-airasia-desktop-en.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/banner-chillsure-airasia-desktop-en.webp" : "/storage/Banner/chillsure/banner-chillsure-airasia-mobile-en.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>

            @elseif($selected==='ONCSHCSC')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/susco/Tune-Chillsure-EN-NonDirect.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/susco/Tune-Chillsure-EN-NonDirect.webp" : "/storage/Banner/chillsure/susco/Tune-Chillsure-EN-NonDirect.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>

            @elseif($selected==='ONCSHCGV')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/GiftVoucher/Banner_Website_ChillSure_GiftVoucher_EN.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/GiftVoucher/Banner_Website_ChillSure_GiftVoucher_EN.webp" : "/storage/Banner/chillsure/GiftVoucher/Banner_Website_ChillSure_GiftVoucher_EN.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONTADM')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-Domestic-EN-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-Domestic-EN-MASII.webp" : "/storage/Banner/Masii/Banner-Domestic-EN-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONTADM')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TA_D_EN.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TA_D_EN.jpg" : "/storage/Banner/Banner_TA_M_EN.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONCOVIDMW')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_iPass_COVID', 'Migrant-Banner-En01', $v->pic_en))}}">
                <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_iPass_COVID', 'Migrant-Banner-En01', $v->pic_mobile_en)) : url(str_replace('Banner_iPass_COVID', 'Migrant-Banner-En02', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONVSAFEA')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D_EN', 'Banner_VSafe_D_EN2', $v->pic_en))}}">
                <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_Covid_D_EN', 'Banner_VSafe_D_EN2', $v->pic_mobile_en)) : url(str_replace('Banner_Covid_D_EN', 'Banner_VSafe_M_EN2', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONB2BTA')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_TA_D_EN', 'b2b/iTravel_PC_EN', $v->pic_en))}}">
                <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'b2b/iTravel_MB_EN', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'b2b/iTravel_MB_EN', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONPACAA') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-PA-Choice-Care-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-PA-Choice-Care-MASII.webp" : "/storage/Banner/Masii/Banner-PA-Choice-Care-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONPAKDA') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-PA-Choice-Kids-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-PA-Choice-Kids-MASII.webp" : "/storage/Banner/Masii/Banner-PA-Choice-Kids-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONPASNA') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-PA-Choice-Senior-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-PA-Choice-Senior-MASII.webp" : "/storage/Banner/Masii/Banner-PA-Choice-Senior-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONPACA' || $selected==='ONPAKD' || $selected==='ONPASN')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner-PAChoice-Ena.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner-PAChoice-Ena.jpg" : "/storage/Banner/Banner-PAChoice-Ena.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONB2BTAD')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/b2b/TADomestic_PC_EN.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/b2b/TADomestic_PC_EN.jpg" : "/storage/Banner/b2b/TADomestic_MB_EN.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONTAISMB2B')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/b2b/iSmile-Banner01.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/b2b/iSmile-Banner01.jpg" : "/storage/Banner/b2b/iSmile-Banner02.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif(isset($partner))
                @if(($partner==='LUMA' || $partner==='Luma') && ($selected==='ONTALN' || $selected==='TAIPOCT22' || $selected==='TAIPOCT22AA'))
                    <picture class="bbb">
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_Luma_D.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_Luma_D.jpg" : "/storage/Banner/Banner_Luma_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($agentCode==='00DM004D00' && $selected==='TAIPOCT22')
                    <picture class="aa">
                        <source media="(min-width:768px)" srcset="/storage/Banner/iPass/banner_tune_ipass_pc.webp">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/iPass/banner_tune_ipass_pc.webp" : "/storage/Banner/iPass/banner_tune_ipass_mb.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($agentCode==='00BD039L82' && $selected==='TAIPOCT22') <!-- Masii -->
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-ipass-MASII.webp">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-ipass-MASII.webp" : "/storage/Banner/Masii/Banner-ipass-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='TAIPOCT22')
                    <picture class="ccc">
                        <source media="(min-width:768px)" srcset="/storage/Banner/Tune_iPass_Desktop.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Tune_iPass_Desktop.jpg" : "/storage/Banner/Tune_iPass_Mobile.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='TAIPOCT22AA')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/airasia/Banner-ipass02.webp">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/airasia/Banner-ipass01.webp" : "/storage/Banner/airasia/Banner-ipass01.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($partner==='rabbit' && $selected==='ONTAOB')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TA_Rabbit_D_EN.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TA_Rabbit_D_EN.jpg" : "/storage/Banner/Banner_TA_Rabbit_MB_EN.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($agentCode==='00BD039L82' && $selected==='ONTAOB') <!-- Masii -->
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-itravel-EN-MASII.webp">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-itravel-EN-MASII.webp" : "/storage/Banner/Masii/Banner-itravel-EN-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='ONTATO')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/iTravel/iTravelTour/Banner-iTravel-Tour-PC-TH.webp">
                        <img src="{{url(!empty($v->pic_mobile) ? "/storage/Banner/iTravel/iTravelTour/Banner-iTravel-Tour-PC-TH.webp" : "/storage/Banner/iTravel/iTravelTour/Banner-iTravel-Tour-PC-TH.webp" )}}" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='ONTALN')
                    <picture>
                        <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_en))}}">
                        <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='CVCARE')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_LumaCare_D.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_LumaCare_D.jpg" : "/storage/Banner/Banner_LumaCare_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='TGCVLP')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TG_D.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TG_D.jpg" : "/storage/Banner/Banner_TG_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='TAISMTG')
                    <picture id="taismtg-main">
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TG_D.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TG_D.jpg" : "/storage/Banner/Banner_TG_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    <picture id="taismtg-page">
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TAI_D.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TAI_D.jpg" : "/storage/Banner/Banner_TAI_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @elseif($selected==='ONTGISM')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TG_D.jpg">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TG_D.jpg" : "/storage/Banner/Banner_TG_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @else
                    <picture>
                        <source media="(min-width:768px)" srcset="{{url($v->pic_en)}}">
                        <img src="{{url(!empty($v->pic_mobile_en) ? $v->pic_mobile_en : $v->pic_en )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                @endif
            @else
                <picture>
                    <source media="(min-width:768px)" srcset="{{url($v->pic_en)}}">
                    <img src="{{url(!empty($v->pic_mobile_en) ? $v->pic_mobile_en : $v->pic_en )}}" alt="{{$v->locales[$locale]->title}}">
                </picture>
            @endif
        @endif
    @else
        @if(!empty($v->pic))
            @if($selected==='ONVACINA' || $selected === 'ONVSUREA')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D', 'Banner_VSure_Protect_D', $v->pic))}}">
                <img src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner_Covid_D', 'Banner_VSure_Protect_D', $v->pic_mobile)) : url(str_replace('Banner_Covid_D', 'Banner_VSure_Protect_M', $v->pic)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONTADM')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-Domestic-TH-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-Domestic-TH-MASII.webp" : "/storage/Banner/Masii/Banner-Domestic-TH-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONTADM')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TA_D.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TA_D.jpg" : "/storage/Banner/Banner_TA_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONCOVIDMW')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_iPass_COVID', 'Migrant-Banner-Th01', $v->pic_en))}}">
                <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_iPass_COVID', 'Migrant-Banner-Th01', $v->pic_mobile_en)) : url(str_replace('Banner_iPass_COVID', 'Migrant-Banner-Th02', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONVSAFEA')
            <picture>
                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D', 'Banner_VSafe_D2', $v->pic))}}">
                <img src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner_Covid_D', 'Banner_VSafe_D2', $v->pic_mobile)) : url(str_replace('Banner_Covid_D', 'Banner_VSafe_M2', $v->pic)) )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='CVCARE')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner_LumaCare_D.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_LumaCare_D.jpg" : "/storage/Banner/Banner_LumaCare_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONCSHC')
                @if(isset($partner))
                    <!-- Rabbit -->
                    @if(($partner==='Rabbit' || $partner==='rabbit' || $partner==='RABBIT') && $agentCode==='00BD114L266')
                        <picture class="bbb">
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/rabbit/Chillsure-Rabbit-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/rabbit/Chillsure-Rabbit-Broker-MB-TH.webp" : "/storage/Banner/chillsure/rabbit/Chillsure-Rabbit-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                        <script src="https://code.jquery.com/jquery-3.6.4.slim.js" integrity="sha256-dWvV84T6BhzO4vG6gWhsWVKVoa4lVmLnpBOZh/CAHU4=" crossorigin="anonymous"></script>
                        <script>
                            $().ready(function() {
                                $("#brochure_rabbit_en").attr("href", "/storage/product/brochure/ChillSure/Tune-Brochure-En_Rabbit Care.pdf");
                            });
                        </script>
                    <!-- BoltTech -->
                    @elseif($agentCode==='00BD073L130')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/bolttec/Chillsure-Bolttech-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/bolttec/Chillsure-Bolttech-Broker-MB-TH.webp" : "/storage/Banner/chillsure/bolttec/Chillsure-Bolttech-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    <!-- Luma -->
                    @elseif($agentCode==='00BD056L107')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/luma/Chillsure-Luma-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/luma/Chillsure-Luma-Broker-MB-TH.webp" : "/storage/Banner/chillsure/luma/Chillsure-Luma-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    <!-- Hugs -->
                    @elseif($agentCode==='00BD115L272')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/hugs/Chillsure-Hugs-Broker-PC-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/hugs/Chillsure-Hugs-Broker-MB-TH.webp" : "/storage/Banner/chillsure/hugs/Chillsure-Hugs-Broker-MB-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    @elseif($agentCode==='00BD144L409')
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/truelife/Chillsure-Banner-Promo-Truelife.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/truelife/Chillsure-Banner-Promo-Truelife.webp" : "/storage/Banner/chillsure/truelife/Chillsure-Banner-Promo-Truelife.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>
                    <!-- Masii -->
                    @elseif($agentCode==='00BD039L82')
                    <picture>
                        <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-Chillsure-TH-MASII.webp">
                        <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-Chillsure-TH-MASII.webp" : "/storage/Banner/Masii/Banner-Chillsure-TH-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                    </picture>
                    @else
                        <picture>
                            <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/Chillsure-Banner-Desktop-TH.webp">
                            <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/Chillsure-Banner-Mobile-EN.webp" : "/storage/Banner/chillsure/Chillsure-Banner-Mobile-TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                        </picture>

                    @endif
                @endif
            @elseif($selected==='ONCSHCAA')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/banner-chillsure-airasia-desktop-th.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/banner-chillsure-airasia-desktop-th.webp" : "/storage/Banner/chillsure/banner-chillsure-airasia-mobile-th.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONCSHCSC')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/susco/Tune-Chillsure-TH-NonDirect.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/susco/Tune-Chillsure-TH-NonDirect.webp" : "/storage/Banner/chillsure/susco/Tune-Chillsure-TH-NonDirect.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONCSHCGV')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/chillsure/GiftVoucher/Banner_Website_ChillSure_GiftVoucher_TH.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/chillsure/GiftVoucher/Banner_Website_ChillSure_GiftVoucher_TH.webp" : "/storage/Banner/chillsure/GiftVoucher/Banner_Website_ChillSure_GiftVoucher_TH.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='TAISMTG')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TAI_D.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TAI_D.jpg" : "/storage/Banner/Banner_TAI_M.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONB2BTA')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/b2b/iTravel_PC_TH.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/b2b/iTravel_PC_TH.jpg" : "/storage/Banner/b2b/iTravel_MB_TH.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONB2BTAD')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/b2b/TADomestic_PC_TH.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/b2b/TADomestic_PC_TH.jpg" : "/storage/Banner/b2b/TADomestic_MB_TH.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONTAISMB2B')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/b2b/iSmile-Banner01.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/b2b/iSmile-Banner01.jpg" : "/storage/Banner/b2b/iSmile-Banner02.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONPACAA') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-PA-Choice-Care-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-PA-Choice-Care-MASII.webp" : "/storage/Banner/Masii/Banner-PA-Choice-Care-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONPAKDA') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-PA-Choice-Kids-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-PA-Choice-Kids-MASII.webp" : "/storage/Banner/Masii/Banner-PA-Choice-Kids-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONPASNA') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-PA-Choice-Senior-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-PA-Choice-Senior-MASII.webp" : "/storage/Banner/Masii/Banner-PA-Choice-Senior-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONPACA' || $selected==='ONPAKD' || $selected==='ONPASN')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner-PAChoice-THa.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner-PAChoice-THa.jpg" : "/storage/Banner/Banner-PAChoice-THa.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($partner==='rabbit' && $selected==='ONTAOB')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Banner_TA_Rabbit_D_TH.jpg">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Banner_TA_Rabbit_D_TH.jpg" : "/storage/Banner/Banner_TA_Rabbit_MB_TH.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($agentCode==='00BD039L82' && $selected==='ONTAOB') <!-- Masii -->
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/Masii/Banner-itravel-TH-MASII.webp">
                <img src="{{url(!empty($v->pic_mobile_en) ? "/storage/Banner/Masii/Banner-itravel-TH-MASII.webp" : "/storage/Banner/Masii/Banner-itravel-TH-MASII.webp" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>
            @elseif($selected==='ONTATO')
            <picture>
                <source media="(min-width:768px)" srcset="/storage/Banner/iTravel/iTravelTour/Banner-iTravel-Tour-PC-TH.webp">
                <img src="{{url(!empty($v->pic_mobile) ? "/storage/Banner/iTravel/iTravelTour/Banner-iTravel-Tour-PC-TH.webp" : "/storage/Banner/iTravel/iTravelTour/Banner-iTravel-Tour-PC-TH.webp" )}}" )}}" alt="{{$v->locales[$locale]->title}}">
            </picture>

            @else
            <picture>
                <source media="(min-width:768px)" srcset="{{url($v->pic)}}">
                <img src="{{url(!empty($v->pic_mobile) ? $v->pic_mobile : $v->pic )}}" alt="{{$v->locales[$locale]->title}}">
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
    @if(isset($partner))
    {{-- @if($partner === 'LUMA')--}}
    {{-- @if(isset($selected))--}}
    {{-- @if($selected === 'CVCARE')--}}
    {{-- <p class="copyright">{!! __('global.copyright_luma_care') !!}  </p>--}}
    {{-- @endif--}}
    {{-- @endif--}}
    {{-- @endif--}}
    @else
    <p class="copyright">{!! __('global.copyright') !!} </p>
    @endif

</footer>

<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>
    // $.ajaxSetup({
    //     headers: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    // });

    window.fbAsyncInit = function() {
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
{{-- <div class="fb-customerchat"--}}
{{-- attribution=setup_tool--}}
{{-- page_id="714883198577339">--}}
{{-- </div>--}}
@endsection