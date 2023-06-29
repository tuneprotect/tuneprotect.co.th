@extends('frontend.layout.main')

@section('page')

    @if(isset($doc_no))
        @switch(session()->get('thankyou_param'))
            @case("ONCSHC")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'ChillSure_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });

                    fbq("trackCustom", "purchase", {
                        currency: "THB",
                        item_id: 'ChillSure_{{$package}}',
                        doc_no: '{{$doc_no}}',
                        price: '{{$payAmount}}',
                    });
                </script>
            @break
            @case("CI")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'myFlexiCI_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("DIABETES")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'Diabetes_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONPACA")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'PAChoiceCare_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONPAKD")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'PAChoiceKids_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONPASN")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'PAChoiceSenior_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("TAISM")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'iSmile_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("TAIPOCT22")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'TuneiPass_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONTADM")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'TADomestic_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONTAOB")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'TAOutbound_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONFIMP")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'myHomePlus_{{$package}}',
                             "doc_no": '{{$doc_no}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONMHS")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "items": [{
                             "item_id": 'myHomeSmart_{{$package}}',
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