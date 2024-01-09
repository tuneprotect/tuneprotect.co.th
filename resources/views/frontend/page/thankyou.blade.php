@extends('frontend.layout.main')

@section('page')

    @if(isset($doc_no))
        @switch(session()->get('thankyou_param'))
            @case("ONCSHC")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'ChillSure_{{$package}}',
                             "item_name": 'ChillSure_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("CI")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'myFlexiCI_{{$package}}',
                             "item_name": 'myFlexiCI_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("DIABETES")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'Diabetes_{{$package}}',
                             "item_name": 'Diabetes_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONPACA")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'PAChoiceCare_{{$package}}',
                             "item_name": 'PAChoiceCare_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONPAKD")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'PAChoiceKids_{{$package}}',
                             "item_name": 'PAChoiceKids_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONPASN")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'PAChoiceSenior_{{$package}}',
                             "item_name": 'PAChoiceSenior_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("TAISM")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'iSmile_{{$package}}',
                             "item_name": 'iSmile_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("TAIPOCT22")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'TuneiPass_{{$package}}',
                             "item_name": 'TuneiPass_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONTADM")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'TADomestic_{{$package}}',
                             "item_name": 'TADomestic_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONTAOB")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: "{{$payAmount}}",
                            currency: "THB",
                            items: [{
                                item_id: "iTravel_{{$package}}",
                                item_name: "iTravel Plan Code {{$package}}",
                                price: "{{$payAmount}}"
                            }]
                        }
                    });
                </script>
            @break
            @case("ONFIMP")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'myHomePlus_{{$package}}',
                             "item_name": 'myHomePlus_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
                    });
                </script>
            @break
            @case("ONMHS")
                <script>
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'myHomeSmart_{{$package}}',
                             "item_name": 'myHomeSmart_{{$package}}',
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
            @if(session()->get('thankyou_param') === 'ONTAOB')
                @lang('product.PromotionCode.promotion_code_thankyou')
            @endif
        </div>
    </article>
</main>

@endsection