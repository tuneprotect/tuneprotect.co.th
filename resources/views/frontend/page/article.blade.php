@extends('frontend.layout.main')

@section('page')
    <main>
        <section class="article_highlight_section wrapper">
            <div class="inner-wrapper">
                @foreach($highlight as $v)
                    @include('frontend.component.article_item',['article' => $v,'locale' => $locale,'controller' => $controller])
                @endforeach
            </div>
        </section>
        <section class="article_list_section wrapper">
            <div class="inner-wrapper">
                @foreach($list as $v)
                    @include('frontend.component.article_item',['article' => $v,'locale' => $locale,'controller' => $controller])
                @endforeach
            </div>
        </section>
    </main>
@endsection
