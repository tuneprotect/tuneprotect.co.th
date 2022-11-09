@extends('frontend.layout.main')

@section('page')
    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div>
                    @lang("product.errorpage.content")
                   {!! @str_replace('{point}',$point,@str_replace('{link}',$return_link,  @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content)))   !!}</div>
                </div>
            </div>
        </article>
    </main>

@endsection
