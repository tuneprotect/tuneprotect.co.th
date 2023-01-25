@extends('frontend.layout.main')

@section('page')
<header>
                @if($partner==='rabbit' && $selected==='ONTAOB')
                   <!-- Event snippet for Payment Completed conversion page -->
                    <script>
                    gtag('event', 'conversion', {
                        'send_to': 'AW-10813138401/MXLqCPPS3ocYEOHLjaQo',
                        'transaction_id': ''
                    });
                    </script>

                    <!-- Facebook Pixel Code -->
                    <script>
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '682962723368236');
                    fbq('track', 'PageView');
                    fbq('track', 'PaymentCompleted');
                    </script>
                    <noscript>
                    <img height="1" width="1" style="display:none" 
                        src="https://www.facebook.com/tr?id=682962723368236&ev=PageView&noscript=1"/>
                    </noscript>
                    <!-- End Facebook Pixel Code -->

                @endif
                    </header>
    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div>{!! @str_replace('{point}',$point,@str_replace('{link}',$return_link,  @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content)))   !!}</div>
            </div>
        </article>
    </main>

@endsection
