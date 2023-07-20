@extends('frontend.layout.portal')

@section('page')    
    @if(isset($portal_key))
        @if($portal_key == '2TRZB6Y3NDEQB9E32JUXXGSF2Q5ZB6EXPAKNNGDRD8UXN4Q228UQN4RR22')
            <!-- Activity name for this tag: TuneProtect-Thank You Page -->
            <!-- URL of the webpage where the tag will be placed: https://www.tuneprotect.co.th/en/portal/travel-insurance/ONTALN/2TRZB6Y3NDEQB9E32JUXXGSF2Q5ZB6EXPAKNNGDRD8UXN4Q228UQN4RR22 -->
            <script>
                (function() {
                    var a = String(Math.floor(Math.random() * 10000000000000000));
                    new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4899901;qty=1;cost=[revenue];ord=[order id]?';
                })();
            </script>
            <noscript>
                <img src='https://pubads.g.doubleclick.net/activity;xsp=4899901;qty=1;cost=[revenue];ord=[order id]?' width=1 height=1 border=0>
            </noscript>
        @endif
        
        @if(session()->get('agentCode') == '00AA603T88')
            <script>
                console.log("https://invle.co/aff_lsr?offer_id=103074&adv_sub='{{$refCode}}'&adv_sub2='{{$package}}'&adv_ sub3={}&adv_sub4={}&adv_sub5={}&adv_sub6={}&adv_sub7={}&amount='{{$payAmount}}'&currency=THB&transaction_id='{{$session()->get('transaction_id')}}'");
                //window.location.href = "https://invle.co/aff_lsr?offer_id=103074&adv_sub='{{$refCode}}'&adv_sub2='{{$package}}'&adv_ sub3={}&adv_sub4={}&adv_sub5={}&adv_sub6={}&adv_sub7={}&amount='{{$payAmount}}'&currency=THB&transaction_id='{{$session()->get('transaction_id')}}'";
            </script>
        @endif

    @endif

    @if(isset($portalKey))
        
        {{$mcn = ""}}
        @switch(session()->get('thankyou_param'))
            @case("ONCSHC")
                @php $mcn = '024d7f84fff11dd7e8d9c510137a2381'; @endphp
                @break
            @case("ONTAOB")
                @php $mcn = '4b0a59ddf11c58e7446c9df0da541a84'; @endphp
                @break
        @endswitch

        @if($portalKey === 'JQXWAMUX9JDXNGDRD8QU6TKWBJ5Q7GDR26UBNGFRBTWRXHDF3UMNX')
            <script>
                var __atw = __atw || [];
                __atw.push({
                    "mcn": '{{$mcn}}',
                    "param": {
                        "result_id": "2",
                        "identifier": '{{$doc_no}}', // Lead ID
                        "value": '{{$payAmount}}', // Total Amount
                        "currency": 'THB' // In this case : THB
                    }
                });
                var timestamp = new Date().getTime();
                (function(d) {
                    var s = d.createElement('script');
                    s.src = 'https://script.accesstrade.in.th/cv.js?cb=' + timestamp;
                    s.async = true;
                    var e = d.getElementsByTagName('script')[0];
                    e.parentNode.insertBefore(s, e);
                })(document);
            </script>
        @endif
    @endif

    <main>
        <article class="wrapper">
            <div class="inner-wrapper">			
                <div>{!! @str_replace('{point}',$point, @str_replace('{agentCode}',$agentCode, @str_replace('{payAmount}',$payAmount,@str_replace('{link}',$return_link,  @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content)))))   !!}</div>
            </div>
        </article>
    </main>

@endsection
