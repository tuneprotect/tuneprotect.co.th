@extends('frontend.layout.portal')

@section('page')
@if($portalKey === 'JQXWAMUX9JDXNGDRD8QU6TKWBJ5Q7GDR26UBNGFRBTWRXHDF3UMNX')
<script>
    var __atw = __atw || [];
    __atw.push({
        "mcn": "024d7f84fff11dd7e8d9c510137a238",
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

<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>{!! @str_replace('{point}',$point,@str_replace('{link}',$return_link, @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content))) !!}</div>
        </div>
    </article>
</main>

@endsection