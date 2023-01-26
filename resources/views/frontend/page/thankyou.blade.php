@extends('frontend.layout.main')

@section('page')
<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>{!! @str_replace('{point}',$point,@str_replace('{link}',$return_link, @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content))) !!}</div>
        </div>
    </article>
    @if($portalKey === 'JGVM66EX9GRM6LA3D8ARBLUX6EUXNTARD8UXN4U228UVN4RR22')
    <script>
        var __atw = __atw || [];
        __atw.push({
            "mcn": "4b0a59ddf11c58e7446c9df0da541a84",
            "param": {
                "result_id": "2",
                "identifier": $doc_no, // Lead ID
                "value": $totalAmount, // Total Amount
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
</main>

@endsection