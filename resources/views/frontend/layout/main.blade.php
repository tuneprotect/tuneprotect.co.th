@extends('base.template')
<style>

    
   /* #onetrust-consent-sdk{
    display: none;
   } */
   .ins-preview-wrapper-26 .ins-content-wrapper-26 .inline-resolution.ins-element-link.ins-notification-content.ins-notification-content-26{
    height: fit-content;
   }
   </style>
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
                                                            @if($v2->code === 'ONCSHC' || $v2->code === 'CI'|| $v2->code === 'DIABETES' || $v2->code === 'ONPACA' || $v2->code === 'ONPAKD' || $v2->code === 'ONPASN' || $v2->code === 'TAISM' || $v2->code === 'TAIPOCT22' || $v2->code === 'ONTADM' || $v2->code === 'ONTAOB' || $v2->code === 'ONFIMP' || $v2->code === 'ONMHS')
                                                                <a data-gtm="main-nav-product-{{$v1->friendly_url}}-{{$v2->code}}"
                                                                    href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v1->friendly_url,'params' => $v2->code ])}}">
                                                                    <span>{{$v2->locales[$locale]->title}}
                                                                        @if($v2->code === 'ONCSHC')                                                            
                                                                            <img id="imgnew" src="https://www.tuneprotect.co.th/storage/Icon/new2.gif" style="width:30%;margin-bottom: -5px;" />
                                                                        @endif
                                                                    </span>
                                                                </a>
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
                @if(@$menu_enable[\App\Enum\ProjectEnum::WEB_CONTENT_PROMOTION] > 0)
                    <li>
                        <a data-gtm="main-nav-promotion"
                           href="{{route('current',['locale' => $locale,'controller' => 'promotion'],false)}}">{{__('global.nav_promotion')}}</a>
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
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure02.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure04.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure04.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHCAA')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/banner-chillsure-airasia-desktop-en.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/banner-chillsure-airasia-mobile-en.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/banner-chillsure-airasia-mobile-en.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHCSC')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure02.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure04.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure04.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHCGV')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure02.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure04.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure04.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='PUMPPA')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('banner-Choice-Eng final', 'PUMP PA', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('banner-Choice-Eng final', 'PUMP PA', $v->pic_mobile_en)) : url(str_replace('banner-Choice-Eng final', 'PUMP PA', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSH')
                                        <picture></picture>
                                    @elseif($selected==='ONTALN')
                                            <picture>
                                                <source media="(min-width:768px)"
                                                        srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_en))}}">
                                                <img
                                                    src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_Tune_iPass', $v->pic_en)) )}}"
                                                    alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                    @elseif($selected==='TAIPOCT22')
                                        <picture class="aa">
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg" : "https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>    
                                    @elseif($selected==='TAIPOCT22AA')
                                        <picture class="aa">
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg" : "https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>      
                                    @elseif(isset($agentCode))
                                        @if($agentCode==='00DM004D00' && $selected==='TAIPOCT22')
                                            <picture class="aa">
                                                <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg">
                                                <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg" : "https://www.tuneprotect.co.th/storage/Banner/Tune%20iPass/dtacbanner.jpg" )}}" alt="{{$v->locales[$locale]->title}}">
                                            </picture>    
                                        @endif
                                    @elseif($selected==='TAISM')
                                            <picture>
                                                <source media="(min-width:768px)"
                                                        srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_TAI_D', $v->pic_en))}}">
                                                <img
                                                    src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_en)) )}}"
                                                    alt="{{$v->locales[$locale]->title}}">
                                            </picture>
                                    @elseif($selected==='TAISMC')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('Banner_TA_D_EN', 'Banner_TAI_D', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_mobile_en)) : url(str_replace('Banner_TA_D_EN', 'Banner_TAI_M', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONB2BTAD')
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
                                                <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/iTravel/Banner_iTravel_20230330_pc_en.webp">
                                                <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/iTravel/Banner_iTravel_20230330_mb_en.webp" : "https://www.tuneprotect.co.th/storage/Banner/iTravel/Banner_iTravel_20230330_mb_en.webp" )}}" alt="{{$v->locales[$locale]->title}}">
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
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure01.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure03.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure03.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHCAA')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/banner-chillsure-airasia-desktop-th.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/banner-chillsure-airasia-mobile-th.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/banner-chillsure-airasia-mobile-th.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture> 
                                    @elseif($selected==='ONCSHCSC')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure01.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure03.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure03.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSHCGV')
                                        <picture>
                                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure01.webp">
                                            <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure03.webp" : "https://www.tuneprotect.co.th/storage/Banner/chillsure/Tune-Chillsure03.webp" )}}" alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='PUMPPA')
                                        <picture>
                                            <source media="(min-width:768px)"
                                                    srcset="{{url(str_replace('banner-Choice-Eng final', 'PUMP PA', $v->pic_en))}}">
                                            <img
                                                src="{{url(!empty($v->pic_mobile_en) ? url(str_replace('banner-Choice-Eng final', 'PUMP PA', $v->pic_mobile_en)) : url(str_replace('banner-Choice-Eng final', 'PUMP PA', $v->pic_en)) )}}"
                                                alt="{{$v->locales[$locale]->title}}">
                                        </picture>
                                    @elseif($selected==='ONCSH')
                                        <picture></picture>
                                    @elseif($selected==='ONB2BTAD')
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
                                                <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/iTravel/Banner_iTravel_20230330_pc_th.webp">
                                                <img src="{{url(!empty($v->pic_mobile_en) ? "https://www.tuneprotect.co.th/storage/Banner/iTravel/Banner_iTravel_20230330_mb_th.webp" : "https://www.tuneprotect.co.th/storage/Banner/iTravel/Banner_iTravel_20230330_mb_th.webp" )}}" alt="{{$v->locales[$locale]->title}}">
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
