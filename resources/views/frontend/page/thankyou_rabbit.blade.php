@extends('frontend.layout.main')

@section('page')
    <main class="111">
        <article class="wrapper">
            <div class="inner-wrapper">
                <div>{!! @str_replace('{point}',$point,@str_replace('{link}',$return_link,  @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content)))   !!}</div>
            </div>
        </article>
    </main>

@endsection
