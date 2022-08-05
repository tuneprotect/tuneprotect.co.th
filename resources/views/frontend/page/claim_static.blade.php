@extends('frontend.layout.main')

@section('page')

    <main>
        <article class="wrapper">
            <div>{!! $content->locales[$locale]->content !!}</div>
            <br/>
        </article>
    </main>
@endsection
