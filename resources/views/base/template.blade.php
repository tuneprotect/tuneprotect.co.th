<?php

use App\Helper\TemplateHelper; ?>
{!! $template[TemplateHelper::DOCTYPE] !!}

<html <?php echo TemplateHelper::genAttribute($template[TemplateHelper::HTML]) ?>>

    <head>

        {{-- TEST--}}
        {{-- <!-- OneTrust Cookies Consent Notice start for tuneprotect.co.th -->--}}
        {{-- <script type="text/javascript" src="https://cdn-apac.onetrust.com/consent/e1a3cf11-6147-44de-b09e-241fa390bac3-test/OtAutoBlock.js" ></script>--}}
        {{-- <script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="e1a3cf11-6147-44de-b09e-241fa390bac3-test" ></script>--}}
        {{-- <script type="text/javascript">--}}
        {{-- function OptanonWrapper() { }--}}
        {{-- </script>--}}
        {{-- <!-- OneTrust Cookies Consent Notice end for tuneprotect.co.th -->--}}

        <!-- OneTrust Cookies Consent Notice start for tuneprotect.co.th -->
        <script type="text/javascript" src="https://cdn-apac.onetrust.com/consent/e1a3cf11-6147-44de-b09e-241fa390bac3/OtAutoBlock.js"></script>
        <script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="e1a3cf11-6147-44de-b09e-241fa390bac3"></script>
        <script type="text/javascript">
            function OptanonWrapper() {}
        </script>
        <!-- OneTrust Cookies Consent Notice end for tuneprotect.co.th -->


        <meta name="facebook-domain-verification" content="pa4vdurvww8ktkzh7xbm2tyrc7iwzv" />
        <meta name='facebook-domain-verification' content='4ojuebt1n4u0c2808tn6hhc3vi6e75' />

        @if(isset($template[TemplateHelper::META] ))
            @foreach ($template[TemplateHelper::META] as $v)
            <meta <?php echo TemplateHelper::genAttribute($v) ?> />
            @endforeach

            @endif
            <title>{{ $template[TemplateHelper::TITLE] }}</title>
            @if(isset($template[TemplateHelper::STYLESHEET] ))
                @foreach ($template[TemplateHelper::STYLESHEET] as $v)
                <link rel="stylesheet" type="text/css" href="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?> />
                @endforeach
            @endif

            @if(isset($template[TemplateHelper::FAVICON] ))
                @foreach ($template[TemplateHelper::FAVICON] as $v)
                <link href="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?> />
                @endforeach
            @endif

            @if(isset($template[TemplateHelper::HEAD_JS] ))
                @foreach ($template[TemplateHelper::HEAD_JS] as $v)
                <script type="text/javascript" src="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>></script>
            @endforeach

        @endif

        @if(isset($template[TemplateHelper::HEAD_OTHER] ))
            @foreach ($template[TemplateHelper::HEAD_OTHER] as $v)
            {!! $v !!}
            @endforeach
        @endif

        @if(isset($controller))

            @if($controller === 'product')
            
                <!-- Google Tag Manager -->
                <script>
                    ! function(w,d,s,l,i){
                        w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),
                            dl=l!='dataLayer'?'&l='+l:'';
                            j.async=true;
                            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                            f.parentNode.insertBefore(j,f);
                    }
                    (window,document,'script','dataLayer','GTM-T67LW6X');
                </script>
                <!-- End Google Tag Manager -->

                <!-- Global site tag (gtag.js) - Google Ads: 445121093 -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-445121093"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());

                    gtag('config', 'AW-445121093');
                </script>

                <!-- Google tag (gtag.js) --> 
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QHJGFFXSVN"></script>
                <script>   
                    window.dataLayer = window.dataLayer || [];   
                    function gtag(){
                        dataLayer.push(arguments);
                    }   
                    gtag('js', new Date());   
                    gtag('config', 'G-QHJGFFXSVN'); 
                </script>

                <!-- Facebook Pixel Code -->
                <script>
                    !function(f,b,e,v,n,t,s){
                        if(f.fbq)return;
                        n=f.fbq=function(){
                            n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)
                        };
                        if(!f._fbq)f._fbq=n;
                            n.push=n;
                            n.loaded=!0;
                            n.version='2.0';
                            n.queue=[];
                            t=b.createElement(e);
                            t.async=!0;
                            t.src=v;
                            s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)
                        }
                    (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '231909862379759');
                    fbq('track', 'PageView');
                </script>

            @else

                @if(isset($partner))
                    @if($partner==='rabbit' && $selected==='ONTAOB')
                        @if(!isset($portal_key))
                            <!-- Google Tag Manager -->
                            <script>
                                ! function(w,d,s,l,i){
                                    w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                                    var f=d.getElementsByTagName(s)[0],
                                        j=d.createElement(s),
                                        dl=l!='dataLayer'?'&l='+l:'';
                                        j.async=true;
                                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                                        f.parentNode.insertBefore(j,f);
                                }
                                (window,document,'script','dataLayer','GTM-T67LW6X');
                            </script>
                            <!-- End Google Tag Manager -->

                            <!-- Global site tag (gtag.js) - Google Ads: 445121093 -->
                            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-445121093"></script>
                            <script>
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){
                                    dataLayer.push(arguments);
                                }
                                gtag('js', new Date());
                                gtag('config', 'AW-445121093');
                            </script>

                            <!-- Google tag (gtag.js) --> 
                            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QHJGFFXSVN"></script>
                            <script>   
                                window.dataLayer = window.dataLayer || [];   
                                function gtag(){
                                    dataLayer.push(arguments);
                                }   
                                gtag('js', new Date());   
                                gtag('config', 'G-QHJGFFXSVN'); 
                            </script>

                            <!-- Event snippet for Payment Completed conversion page -->
                            <script>
                                gtag('event', 'conversion', {
                                    'send_to': 'AW-10813138401/MXLqCPPS3ocYEOHLjaQo',
                                    'transaction_id': ''
                                });
                            </script>

                            <!-- Facebook Pixel Code -->
                            <script>
                                ! function(f, b, e, v, n, t, s) {
                                    if (f.fbq) return;
                                    n = f.fbq = function() {
                                        n.callMethod ?
                                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                                    };
                                    if (!f._fbq) f._fbq = n;
                                    n.push = n;
                                    n.loaded = !0;
                                    n.version = '2.0';
                                    n.queue = [];
                                    t = b.createElement(e);
                                    t.async = !0;
                                    t.src = v;
                                    s = b.getElementsByTagName(e)[0];
                                    s.parentNode.insertBefore(t, s)
                                }(window, document, 'script',
                                    'https://connect.facebook.net/en_US/fbevents.js');
                                fbq('init', '682962723368236');
                                fbq('track', 'PageView');
                                fbq('track', 'PaymentCompleted');
                            </script>
                            <noscript>
                                <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=682962723368236&ev=PageView&noscript=1" />
                            </noscript>
                            <!-- End Facebook Pixel Code -->
                        @endif

                        <!-- Google tag (gtag.js) -->
                        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10813138401"></script>
                        <script>
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'AW-10813138401');
                        </script>

                        <!-- Facebook Pixel Code -->
                        <script>
                            ! function(f, b, e, v, n, t, s) {
                                if (f.fbq) return;
                                n = f.fbq = function() {
                                    n.callMethod ?
                                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                                };
                                if (!f._fbq) f._fbq = n;
                                n.push = n;
                                n.loaded = !0;
                                n.version = '2.0';
                                n.queue = [];
                                t = b.createElement(e);
                                t.async = !0;
                                t.src = v;
                                s = b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t, s)
                            }(window, document, 'script',
                                'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '682962723368236');
                            fbq('track', 'PageView');
                        </script>
                        <noscript>
                            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=682962723368236&ev=PageView&noscript=1" />
                        </noscript>
                        <!-- End Facebook Pixel Code -->

                    @elseif(($partner==='Rabbit' || $partner==='rabbit' || $partner==='RABBIT') && $selected==='ONCSHC')
                        <!-- Google tag (gtag.js) -->
                        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10813138401"></script>
                        <script>
                            window.dataLayer = window.dataLayer || [];

                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());

                            gtag('config', 'AW-10813138401');
                        </script>

                        <!-- Facebook Pixel Code -->
                        <script>
                            ! function(f, b, e, v, n, t, s) {
                                if (f.fbq) return;
                                n = f.fbq = function() {
                                    n.callMethod ?
                                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                                };
                                if (!f._fbq) f._fbq = n;
                                n.push = n;
                                n.loaded = !0;
                                n.version = '2.0';
                                n.queue = [];
                                t = b.createElement(e);
                                t.async = !0;
                                t.src = v;
                                s = b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t, s)
                            }(window, document, 'script',
                                'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '682962723368236');
                            fbq('track', 'PageView');
                        </script>
                        <noscript>
                            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=682962723368236&ev=PageView&noscript=1" />
                        </noscript>
                        <!-- End Facebook Pixel Code -->

                    @endif
                @endif

            @endif

        @endif
    </head>

    <body <?php echo @TemplateHelper::genAttribute($template[TemplateHelper::BODY]) ?>>
        @if(isset($template[TemplateHelper::OPEN_BODY] ))
            @foreach ($template[TemplateHelper::OPEN_BODY] as $v)
            {!! $v !!}
            @endforeach
        @endif

        @yield('layout')

        @if(isset($template[TemplateHelper::FOOT_JS] ))
            @foreach ($template[TemplateHelper::FOOT_JS] as $v)
            <script src="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>></script>
            @endforeach
        @endif
        
        @if(isset($template[TemplateHelper::FOOT_OTHER] ))
            @foreach ($template[TemplateHelper::FOOT_OTHER] as $v)
            {!! $v !!}
            @endforeach
        @endif

    </body>

</html>