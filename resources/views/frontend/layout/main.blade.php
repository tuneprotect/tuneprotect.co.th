@extends('base.template')
<head lang="en-us">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1">
	<meta http-equiv="x-ua-compatible" content="IE=10">
	<meta name="generator" content="Hugo 0.79.1">
	<meta name="description" content="A lightweight and powerful datetimepicker">
	<link rel="canonical" href="https://flatpickr.js.org/examples/">
	<meta name="author" content="chmln">
	<meta property="og:url" content="https://flatpickr.js.org/examples/">
	<meta property="og:title" content="flatpickr"><meta property="og:image" content="https://flatpickr.js.org/images/logo.png">
	<meta name="apple-mobile-web-app-title" content="flatpickr">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/confirmDate/confirmDate.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/style.css">
	<script src="https://flatpickr.js.org/javascripts/modernizr.js"></script>
</head>
<main class="main">

<article class="article">
	<div class="wrapper">
		<input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.." readonly="readonly">
	</div>
</article>
</main>
<script>var base_url='https:\/\/flatpickr.js.org\/';var repo_id='flatpickr\/flatpickr';</script><script src="https://flatpickr.js.org/javascripts/application.js"></script><script src="https://flatpickr.js.org/init.js"></script><script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.js"></script><script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/confirmDate/confirmDate.js"></script><script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/weekSelect/weekSelect.js"></script><script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/rangePlugin.js"></script><script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/minMaxTimePlugin.js"></script><script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/index.js"></script><script src="https://flatpickr.js.org/flatpickr.js"></script><div class="flatpickr-calendar animate arrowLeft arrowTop" tabindex="-1" style="top: 409px; left: 397.5px; right: auto;"><div class="flatpickr-months"><span class="flatpickr-prev-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path></svg></span><div class="flatpickr-month"><div class="flatpickr-current-month"><select class="flatpickr-monthDropdown-months" aria-label="Month" tabindex="-1"><option class="flatpickr-monthDropdown-month" value="0" tabindex="-1">January</option><option class="flatpickr-monthDropdown-month" value="1" tabindex="-1">February</option><option class="flatpickr-monthDropdown-month" value="2" tabindex="-1">March</option><option class="flatpickr-monthDropdown-month" value="3" tabindex="-1">April</option><option class="flatpickr-monthDropdown-month" value="4" tabindex="-1">May</option><option class="flatpickr-monthDropdown-month" value="5" tabindex="-1">June</option><option class="flatpickr-monthDropdown-month" value="6" tabindex="-1">July</option><option class="flatpickr-monthDropdown-month" value="7" tabindex="-1">August</option><option class="flatpickr-monthDropdown-month" value="8" tabindex="-1">September</option><option class="flatpickr-monthDropdown-month" value="9" tabindex="-1">October</option><option class="flatpickr-monthDropdown-month" value="10" tabindex="-1">November</option><option class="flatpickr-monthDropdown-month" value="11" tabindex="-1">December</option></select><div class="numInputWrapper"><input class="numInput cur-year" type="number" tabindex="-1" aria-label="Year"><span class="arrowUp"></span><span class="arrowDown"></span></div></div></div><span class="flatpickr-next-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></span></div><div class="flatpickr-innerContainer"><div class="flatpickr-rContainer"><div class="flatpickr-weekdays"><div class="flatpickr-weekdaycontainer">
      
      </div></div><div class="flatpickr-days" tabindex="-1"><div class="dayContainer"><span class="flatpickr-day prevMonthDay" aria-label="November 27, 2022" tabindex="-1">27</span><span class="flatpickr-day prevMonthDay" aria-label="November 28, 2022" tabindex="-1">28</span><span class="flatpickr-day prevMonthDay" aria-label="November 29, 2022" tabindex="-1">29</span><span class="flatpickr-day prevMonthDay" aria-label="November 30, 2022" tabindex="-1">30</span><span class="flatpickr-day" aria-label="December 1, 2022" tabindex="-1">1</span><span class="flatpickr-day" aria-label="December 2, 2022" tabindex="-1">2</span><span class="flatpickr-day" aria-label="December 3, 2022" tabindex="-1">3</span><span class="flatpickr-day" aria-label="December 4, 2022" tabindex="-1">4</span><span class="flatpickr-day" aria-label="December 5, 2022" tabindex="-1">5</span><span class="flatpickr-day" aria-label="December 6, 2022" tabindex="-1">6</span><span class="flatpickr-day" aria-label="December 7, 2022" tabindex="-1">7</span><span class="flatpickr-day" aria-label="December 8, 2022" tabindex="-1">8</span><span class="flatpickr-day" aria-label="December 9, 2022" tabindex="-1">9</span><span class="flatpickr-day" aria-label="December 10, 2022" tabindex="-1">10</span><span class="flatpickr-day" aria-label="December 11, 2022" tabindex="-1">11</span><span class="flatpickr-day" aria-label="December 12, 2022" tabindex="-1">12</span><span class="flatpickr-day" aria-label="December 13, 2022" tabindex="-1">13</span><span class="flatpickr-day" aria-label="December 14, 2022" tabindex="-1">14</span><span class="flatpickr-day" aria-label="December 15, 2022" tabindex="-1">15</span><span class="flatpickr-day" aria-label="December 16, 2022" tabindex="-1">16</span><span class="flatpickr-day" aria-label="December 17, 2022" tabindex="-1">17</span><span class="flatpickr-day" aria-label="December 18, 2022" tabindex="-1">18</span><span class="flatpickr-day" aria-label="December 19, 2022" tabindex="-1">19</span><span class="flatpickr-day" aria-label="December 20, 2022" tabindex="-1">20</span><span class="flatpickr-day" aria-label="December 21, 2022" tabindex="-1">21</span><span class="flatpickr-day" aria-label="December 22, 2022" tabindex="-1">22</span><span class="flatpickr-day" aria-label="December 23, 2022" tabindex="-1">23</span><span class="flatpickr-day" aria-label="December 24, 2022" tabindex="-1">24</span><span class="flatpickr-day" aria-label="December 25, 2022" tabindex="-1">25</span><span class="flatpickr-day" aria-label="December 26, 2022" tabindex="-1">26</span><span class="flatpickr-day" aria-label="December 27, 2022" tabindex="-1">27</span><span class="flatpickr-day today" aria-label="December 28, 2022" aria-current="date" tabindex="-1">28</span><span class="flatpickr-day" aria-label="December 29, 2022" tabindex="-1">29</span><span class="flatpickr-day" aria-label="December 30, 2022" tabindex="-1">30</span><span class="flatpickr-day" aria-label="December 31, 2022" tabindex="-1">31</span><span class="flatpickr-day nextMonthDay" aria-label="January 1, 2023" tabindex="-1">1</span><span class="flatpickr-day nextMonthDay" aria-label="January 2, 2023" tabindex="-1">2</span><span class="flatpickr-day nextMonthDay" aria-label="January 3, 2023" tabindex="-1">3</span><span class="flatpickr-day nextMonthDay" aria-label="January 4, 2023" tabindex="-1">4</span><span class="flatpickr-day nextMonthDay" aria-label="January 5, 2023" tabindex="-1">5</span><span class="flatpickr-day nextMonthDay" aria-label="January 6, 2023" tabindex="-1">6</span><span class="flatpickr-day nextMonthDay" aria-label="January 7, 2023" tabindex="-1">7</span></div></div></div></div></div><script src="https://flatpickr.js.org/themer.js"></script><script>var headers=document.getElementsByTagName("h2");var scrollspy=document.getElementById('scrollspy');if(scrollspy){if(headers.length>0){for(var i=0;i<headers.length;i++){var li=document.createElement("li");li.setAttribute("class","anchor");var a=document.createElement("a");a.setAttribute("href","#"+headers[i].id);a.setAttribute("title",headers[i].innerHTML);a.innerHTML=headers[i].innerHTML;li.appendChild(a)
scrollspy.appendChild(li);}}else{scrollspy.parentElement.removeChild(scrollspy)}
var headers=document.querySelectorAll("h1, h2, h3, h4, h5, h6");for(var i=0;i<headers.length;i++){var a=document.createElement("a");a.setAttribute("class","headerlink");a.setAttribute("href","#"+headers[i].id);a.setAttribute("title","Permanent link")
a.innerHTML="#";headers[i].appendChild(a);}}</script>
@section('layout')
    <header>
        <meta name="facebook-domain-verification" content="4ojuebt1n4u0c2808tn6hhc3vi6e75" />
        <a class="nav-icon"><span></span></a>
        <div class="logo">
            <a data-gtm="logo" href="{{route('current',['locale' => $locale],false)}}"><img
                    src="{{url('images/favicon/favicon.png')}}"
                    alt="Tune Protect Logo"></a>
        </div>
        <nav>
            <ul class="main">
                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_PRODUCT] > 0)
                    <li><a class="has_sub" href="#">{{__('global.nav_product')}}
                            <i class="icofont-caret-right"></i></a>
                        <div class="sub">
                            @foreach ($product_category as $k => $v)
                                <h3 data-index="{{$k}}" {{$k > 0 ?  "class=no-package" : ""}}>{{$v->locales[$locale]->title}} {!! $k > 0 ?  "<i class=icofont-caret-right></i>" : "" !!}</h3>
                                <div class="section {{$k > 0 ?  "no-package" : ""}}" data-index="{{$k}}">
                                    @foreach ($product as $v1)
                                        @if($v->id == $v1->cat_id)
                                            <div>
                                                <a class="category" data-gtm="main-nav-product-{{$v1->friendly_url}}"
                                                   href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v1->friendly_url],false)}}">
                                                    @if($v1->productPackage->first())
                                                        @if($locale == 'en')
                                                            <img src="{{url($v1->pic_en)}}" alt="">
                                                        @else
                                                            <img src="{{url($v1->pic)}}" alt="">
                                                        @endif
                                                    @endif
                                                    <strong>{{$v1->locales[$locale]->title}}</strong>
                                                </a>
                                                @if($v1->productPackage)
                                                    <ul>
                                                        @foreach ($v1->productPackage as $v2)
                                                            <li>
                                                            @if($v2->code === 'ONVACINA' || $v2->code === 'CVCARE'|| $v2->code === 'ONCOVIDMW' || $v2->code === 'TGCVLP' || $v2->code === 'TAISMTG' || $v2->code === 'ONTALN' || $v2->code === 'ONVSUREA' || $v2->code === 'ONTAOBB2B' || $v2->code === 'ONTAISMB2B' || $v2->code === 'ONTADMB2B')
                                                            @else
                                                                    <a data-gtm="main-nav-product-{{$v1->friendly_url}}-{{$v2->code}}"
                                                                       href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v1->friendly_url,'params' => $v2->code ])}}">
                                                                        <span>{{$v2->locales[$locale]->title}}</span></a>
                                                                @endif
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                            </div>
                                        @endif
                                    @endforeach
                                </div>
                            @endforeach
                        </div>
                    </li>
                @endif
                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_NEWS] > 0)
                    <li>
                        <a data-gtm="main-nav-news"
                           href="{{route('current',['locale' => $locale,'controller' => 'news'],false)}}">{{__('global.nav_news')}}</a>
                    </li>
                @endif

                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_SERVICE_MY_HEALTH] > 0)
                    <li>
                        <a class="has_sub" href="#">{!! __('global.nav_my_health') !!}
                            <i class="icofont-caret-right"></i></a>
                        <div class="sub">
                            <div class="section">
                                <div>
                                    <ul>
                                        @foreach($service_my_health as $k =>$v)
                                            @if($v->friendly_url === 'tax-deduction' || $v->friendly_url === 'pumpfreepa')
                                            @else
                                                <li>
                                                    <a data-gtm="main-nav-news"
                                                       href="/{{$locale}}/service/{{$v->friendly_url}}">
                                                        <span>{{$v->locales[$locale]->title}}</span>
                                                    </a>
                                                </li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                @endif
                <li>
                    <a data-gtm="main-nav-claim"
                       href="{{route('current',['locale' => $locale,'controller' => 'claim'],false)}}">{{__('global.nav_claim')}}</a>
                </li>
                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_ARTICLE] > 0)
                    <li>
                        <a data-gtm="main-nav-article"
                           href="{{route('current',['locale' => $locale,'controller' => 'article'],false)}}">{{__('global.nav_article')}}</a>
                    </li>
                @endif
                <li>
                    <a data-gtm="main-nav-contactus"
                       href="{{route('current',['locale' => $locale,'controller' => 'contactus2'],false)}}">{{__('global.nav_contact')}}</a>
                </li>
                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_ABOUT] > 0 || @$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_ORGANIZATION > 0])
                    <li>
                        <a class="has_sub"
                           data-gtm="main-nav-about"
                           href="{{route('current',['locale' => $locale,'controller' => 'aboutus'],false)}}">{{__('global.nav_about')}}
                            <i class="icofont-caret-right"></i></a>
                        <div class="sub">
                            <div class="section">
                                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_ABOUT] > 0)
                                    @foreach ($about_category as $v)
                                        @if(isset($about[$v->id]))
                                            <div>
                                                <a class="category"><strong>{{$v->locales[$locale]->title}}</strong></a>
                                                <ul>
                                                    @foreach ($about[$v->id] as $v1)
                                                        <li>
                                                            <a data-gtm="main-nav-about-{{$v1->friendly_url}}"
                                                               href="{{route('current',['locale' => $locale,'controller' => 'aboutus','func' => $v1->friendly_url ],false)}}">
                                                                <span>{{$v1->locales[$locale]->title}}</span>
                                                            </a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                        @endif
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </li>
                @endif
            </ul>
        </nav>
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
                                @if(isset($selected))
                                    @if($selected==='ONVSAFEA')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner_Covid_D_EN', 'Banner_VSafe_D_EN2', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_Covid_D_EN', 'Banner_VSafe_D_EN2', $v->pic_mobile_en)) : url(str_replace('Banner_Covid_D_EN', 'Banner_VSafe_M_EN2', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='CI')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner-baowan-main-en', 'Banner_myFlexi_CI_ENv2', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-baowan-main-en', 'Banner_myFlexi_CI_ENv2', $v->pic_mobile_en)) : url(str_replace('Banner-baowan-main-en', 'Banner_myFlexi_CI_ENv2', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONFIMP')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner-Home-En01', 'TuneFireInsurance-D-EN', $v->pic_en))}}">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-Home-En01', 'TuneFireInsurance-D-EN', $v->pic_mobile_en)) : url(str_replace('Banner-Home-En01', 'TuneFireInsurance-M-EN', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONMHS')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner-Home-En01', 'myHomeSmart_En_pc', $v->pic_en))}}">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-Home-En01', 'myHomeSmart_En_pc', $v->pic_mobile_en)) : url(str_replace('Banner-Home-En01', 'myHomeSmart_En_mobile', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='DIABETES')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner-baowan-main-en', 'Banner-diabetes-detail-en', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-baowan-main-en', 'Banner-diabetes-detail-en', $v->pic_mobile_en)) : url(str_replace('Banner-baowan-main-en', 'Banner-diabetes-detail-en', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHC')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner-baowan-main-en', 'Banner-chillsure-main-en-pc', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-baowan-main-en', 'Banner-chillsure-main-en-mb', $v->pic_mobile_en)) : url(str_replace('Banner-baowan-main-en', 'Banner-chillsure-main-en-mb', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONTALN')
                                            <picture>
                                                <source media="(min-width:768px)"
                                                        srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_en))}}">
                                                <img
                                                    src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_en)) )}}"
                                                    alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                    @elseif($selected==='TAIPOCT22')
										<picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_TA_D_EN', 'Tune_iPass_Desktop', $v->pic_en))}}">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Tune_iPass_Desktop', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Tune_iPass_Mobile', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
										
                                        
                                    @elseif($selected==='TAISM')
                                            <picture>
                                                <source media="(min-width:768px)"
                                                        srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_TAI_D', $v->pic_en))}}">
                                                <img
                                                    src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_en)) )}}"
                                                    alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                    @elseif($selected==='ONTAOBB2B')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner_TA_D_EN', 'b2b/iTravel_PC_EN', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'b2b/iTravel_MB_EN', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'b2b/iTravel_MB_EN', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @else
                                        @if($selected==='ONTAOB')
                                            <picture>
                                                <source media="(min-width:768px)"
                                                        srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_iTravel_D_EN', $v->pic_en))}}">
                                                <img
                                                    src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_iTravel_D_EN', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_iTravel_M_EN', $v->pic_en)) )}}"
                                                    alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                        @endif
                                        @if($selected !== 'ONTAOB')
                                                <picture>
                                                    <source media="(min-width:768px)" srcset="{{url($v->pic_en)}}">
                                                    <img src="{{url(!empty($v->pic_mobile_en) ? $v->pic_mobile_en : $v->pic_en )}}"
                                                         alt="{{$v->locales[$locale]->title}}">
                                                </picture>
                                            @endif
                                    @endif
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
                                @if(isset($selected))
                                    @if($selected==='ONVSAFEA')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_Covid_D', 'Banner_VSafe_D2', $v->pic))}}">
                                            <img src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner_Covid_D', 'Banner_VSafe_D2', $v->pic_mobile)) : url(str_replace('Banner_Covid_D', 'Banner_VSafe_M2', $v->pic)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='CI')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner-baowan-main-th', 'Banner_myFlexi_CI_THv2', $v->pic))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner-baowan-main-th', 'Banner_myFlexi_CI_THv2', $v->pic_mobile)) : url(str_replace('Banner-baowan-main-th', 'Banner_myFlexi_CI_THv2', $v->pic)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONFIMP')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner-Home-En01', 'TuneFireInsurance-D', $v->pic_en))}}">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-Home-En01', 'TuneFireInsurance-D', $v->pic_mobile_en)) : url(str_replace('Banner-Home-En01', 'TuneFireInsurance-M', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONMHS')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner-Home-En01', 'myHomeSmart_Th_pc', $v->pic_en))}}">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-Home-En01', 'myHomeSmart_Th_pc', $v->pic_mobile_en)) : url(str_replace('Banner-Home-En01', 'myHomeSmart_Th_mobile', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='DIABETES')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner-baowan-main-th', 'Banner-diabetes-detail-th', $v->pic))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner-baowan-main-th', 'Banner-diabetes-detail-th', $v->pic_mobile)) : url(str_replace('Banner-baowan-main-th', 'Banner-diabetes-detail-th', $v->pic)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHC')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="{{url(str_replace('Banner-baowan-main-en', 'Banner-chillsure-main-th-pc', $v->pic_en))}}">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner-baowan-main-en', 'Banner-chillsure-main-th-mb', $v->pic_mobile_en)) : url(str_replace('Banner-baowan-main-en', 'Banner-chillsure-main-th-mb', $v->pic_en)) )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONTAOBB2B')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner_TA_D', 'b2b/iTravel_PC_TH', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D', 'b2b/iTravel_MB_TH', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D', 'b2b/iTravel_MB_TH', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @else
                                        @if($selected==='ONTAOB')
                                            <picture>
                                                <source media="(min-width:768px)" srcset="{{url(str_replace('Banner_TA_D', 'Banner_iTravel_D', $v->pic))}}">
                                                <img src="{{url(!empty($v->pic_mobile) ? url(str_replace('Banner_TA_D', 'Banner_iTravel_D', $v->pic_mobile)) : url(str_replace('Banner_TA_D', 'Banner_iTravel_M', $v->pic)) )}}"
                                                     alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                        @endif
                                        @if($selected !== 'ONTAOB')
                                                <picture>
                                                    <source media="(min-width:768px)" srcset="{{url($v->pic)}}">
                                                    <img src="{{url(!empty($v->pic_mobile) ? $v->pic_mobile : $v->pic )}}"
                                                         alt="{{$v->locales[$locale]->title}}">
                                                </picture>
                                        @endif


                                    @endif
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
        <a href="#" class="open">
            <img src="{{url('images/template/menu.svg')}}" alt="">
            <span>@lang('global.menu')</span>
        </a>
        <a href="#" class="close"><i class="icofont-double-right"></i></a>
        <ul>
            @foreach($sticky_menu AS $v)
                <li><a data-gtm="sticky-menu-{{$v->id}}"
                       href="{{url(str_replace('{locale}',$locale,$v->action_link))}}">
                        <span><img src="{{url($v->pic)}}" alt="{{$v->locales[$locale]->title}}"></span>
                        <strong>{{$v->locales[$locale]->title}}</strong>
                    </a></li>
            @endforeach
        </ul>

    </div>
    <footer>
        <div class="wrapper">
            <div class="logo-wrapper">
                <img src="{{url('images/template/white_logo.svg')}}" alt="">
                @include('frontend.component.call_center', ['color' => 'white','gtm' => 'footer-call-center'])
            </div>
            <nav>
                <section>
                    <h6 class="collapse">{{__('global.nav_product')}}</h6>
                    {{--                    <div class="two-col">--}}
                    @foreach ($product_category as $v)
                        <ul class="collapse">
                            <li><a href="#"><strong>{{$v->locales[$locale]->title}}</strong></a></li>

                            @foreach ($product as $v1)
                                @if($v->id == $v1->cat_id )
                                    <li>
                                        <a data-gtm="footer-nav-product-{{$v1->friendly_url}}"
                                           href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v1->friendly_url ])}}">{{$v1->locales[$locale]->title}}</a>
                                    </li>
                                @endif
                            @endforeach

                        </ul>
                    @endforeach
                    {{--                    </div>--}}
                </section>
                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_SERVICE_MY_HEALTH] > 0)
                    <section>
                        <h6 class="collapse">@lang('global.nav_service')</h6>
                        <ul class="collapse">
                            <li><a href="#"><strong>@lang('global.nav_service_my_health')</strong></a></li>
                            @foreach($service_my_health as $k =>$v)
                                @if($v->friendly_url === 'pumpfreepa')
                                @else
                                    <li>
                                        <a data-gtm="footer-nav-my-health"
                                        href="/{{$locale}}/service/{{$v->friendly_url}}">
                                            <span>{{$v->locales[$locale]->title}}</span>
                                        </a>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </section>
                @endif
                <section>
                    <h6 class="collapse">@lang('global.nav_claim')</h6>
                    @if($claim_category)
                        @foreach ($claim_category as $v)
                            <ul class="collapse">
                                <li><a href="#"><strong>{{$v->locales[$locale]->title}}</strong></a></li>

                                @foreach ($claim as $v1)
                                    @if($v->id == $v1->cat_id )
                                        @if(strtolower($v1->locales[$locale]->title) !== 'vsure')
                                            <li>
                                                <a data-gtm="footer-nav-claim-{{$v1->friendly_url}}"
                                                   href="{{route('current',['locale' => $locale,'controller' => 'claim','func' => $v1->friendly_url ])}}">{{$v1->locales[$locale]->title}}</a>
                                            </li>
                                        @endif
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
                                        <a data-gtm="footer-nav-about-{{$v1->friendly_url}}"
                                           href="{{route('current',['locale' => $locale,'controller' => 'aboutus','func' => $v1->friendly_url ])}}">{{$v1->locales[$locale]->title}}</a>
                                    </li>
                                @endforeach
                            </ul>
                        @endforeach
                    @endif

                    <ul class="collapse">
                        <li>
                            <a data-gtm="footer-nav-contact-{{$v1->friendly_url}}"
                               href="{{route('current',['locale' => $locale,'controller' => 'contactus2'],false)}}"><strong> {{__('global.nav_contact')}}</strong></a>
                        </li>
                    </ul>

                    <ul class="collapse">
                        <li><a data-gtm="footer-nav-tune-group" target="_blank"
                               href="https://www.tuneprotect.com/corporate/group/about-us/"><strong>Tune
                                    Protect
                                    Group</strong></a></li>
                    </ul>

                    <ul class="collapse">
                        <li><a><strong>@lang('global.our_partner')</strong></a></li>
                        <li>
                            <a data-gtm="footer-nav-partner-hospital"
                               href="{{route('current',['locale' => $locale,'controller' => 'partner','func' => 'hospital' ])}}">@lang('global.hospital')</a>
                        </li>
                        <li>
                            <a data-gtm="footer-nav-partner-garage"
                               href="{{route('current',['locale' => $locale,'controller' => 'partner','func' => 'garage' ])}}">@lang('global.garage')</a>
                        </li>
                        <li>
                            <a data-gtm="footer-nav-partner-service-center"
                               href="{{route('current',['locale' => $locale,'controller' => 'partner','func' => 'service_center' ])}}">@lang('global.service_center')</a>
                        </li>
                    </ul>


                    <ul class="social">
                        @foreach($social AS $v)
                            <li><a data-gtm="footer-nav-social" target="_blank" href="{{$v->action_link}}"><i
                                        class="{{$v->pic}}"></i></a></li>
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
