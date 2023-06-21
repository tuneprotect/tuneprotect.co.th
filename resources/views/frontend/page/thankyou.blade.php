@extends('frontend.layout.main')

@section('page')

    @if(isset($doc_no))
        @switch(session()->get('thankyou_param'))
            @case("ONCSHC")
                <script>
                    gtag("event",  "purchase",  {
                        "transaction_id": '{{$doc_no}}',
                        "currency": "THB",
                        "value": '{{$payAmount}}',
                        "items": [{
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("CI")
                <script>
                    gtag("event",  "purchase",  {
                        "transaction_id": '{{$doc_no}}',
                        "currency": "THB",
                        "value": '{{$payAmount}}',
                        "items": [{
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("DIABETES")
                <script>
                    gtag("event",  "purchase",  {
                        "transaction_id": '{{$doc_no}}',
                        "currency": "THB",
                        "value": '{{$payAmount}}',
                        "items": [{
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
        @endswitch
    @endif                

<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>{!! @str_replace('{point}',$point, @str_replace('{agentCode}',$agentCode, @str_replace('{payAmount}',$payAmount, @str_replace('{link}',$return_link, @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content))))) !!}</div>
        </div>
    </article>
</main>

@endsection