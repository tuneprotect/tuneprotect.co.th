@extends('frontend.layout.main')

@section('page')
    <script>
        gtag("event",  "purchase",  {
            "transaction_id": "67da2d0e-0ab9-4f16-b8d1-93da962c45e1",
            "link": "{{link}}",
            "currency": "THB",
            "value": "{{payAmount}}",
            "items": [{
                "policy_no": "{{doc_no}}",
                "agent_code": "{{agentCode}}",
                "price": "{{payAmount}}",
                "point": "{{point}}"
            }]
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