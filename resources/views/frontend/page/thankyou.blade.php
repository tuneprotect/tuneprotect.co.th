@extends('frontend.layout.main')

@section('page')

<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>{!! @str_replace('{point}',$point, @str_replace('{agentCode}',$agentCode, @str_replace('{payAmount}',$payAmount, @str_replace('{link}',$return_link, @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content))))) !!}</div>
        </div>
    </article>
</main>

<script>
    //google analytic [purchase]
    dataLayer.push({
        "event":  "purchase",
        "ecommerce":  {
            "transaction_id": "{{$doc_no}}",
            "value": "{{$payAmount}}",
            "currency": "THB",
            "items": [{
                "item_id": "{{$package}}",
                "item_name": "{{$product_code}}",
                "price": "{{$payAmount}}"
            }]
        }
    });
</script>

@endsection