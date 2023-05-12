@extends('frontend.layout.main')

@section('page')
    <script>

        //google analytic [purchase]
        dataLayer.push({
            "event":  "purchase",
            "ecommerce":  {
                "link": "{{$return_link}}",
                "value": "{{$payAmount}}",
                "currency": "THB",
                "items": [{
                    "item_id": "{{$doc_no}}",
                    "price": "{{$payAmount}}",
                    "point": "{{$point}}"
                }]
            }
        });
    </script>

<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>{!! @str_replace('{point}',$point, @str_replace('{agentCode}',$agentCode, @str_replace('{payAmount}',$payAmount, @str_replace('{link}',$return_link, @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content))))) !!}</div>
        </div>
    </article>
</main>

@endsection