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

                @if(session()->get('agentCode') == '00AA603T88')
                    <script>
                        console.log("https://invle.co/aff_lsr?offer_id=103074&adv_sub='{{$refCode}}'&adv_sub2='{{$package}}'&adv_ sub3={}&adv_sub4={}&adv_sub5={}&adv_sub6={}&adv_sub7={}&amount='{{$payAmount}}'&currency=THB&transaction_id='{{$session()->get('transaction_id')}}'");
                        //window.location.href = "https://invle.co/aff_lsr?offer_id=103074&adv_sub='{{$refCode}}'&adv_sub2='{{$package}}'&adv_ sub3={}&adv_sub4={}&adv_sub5={}&adv_sub6={}&adv_sub7={}&amount='{{$payAmount}}'&currency=THB&transaction_id='{{$session()->get('transaction_id')}}'";
                    </script>
                @endif

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
                    gtag("event",  "purchase",  {
                        "currency": "THB",
                        "transaction_id": '{{$refCode}}',
                        "value": '{{$payAmount}}',
                        "items": [{
                             "item_id": 'TAOutbound_{{$package}}',
                             "item_name": 'TAOutbound_{{$package}}',
                             "price": '{{$payAmount}}',
                         }]
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
        </div>
    </article>
</main>

@endsection