@extends('frontend.layout.portal')

@section('page')
    @if(isset($partner))
        @if($partner == 'partnership')
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
    @endif

    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div>{!! @str_replace('{point}',$point,@str_replace('{link}',$return_link,  @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content)))   !!}</div>
            </div>
        </article>
    </main>

@endsection
