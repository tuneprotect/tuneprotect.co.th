@extends('frontend.layout.mainview')

@section('page')
    <main>
        <section class="article_highlight_section wrapper">
            <div class="inner-wrapper">
                @foreach($highlight as $v)
                    @include('frontend.component.article_item_view',['article' => $v,'locale' => $locale,'controller' => $controller . 'view'])
                @endforeach
            </div>
        </section>
        <section class="article_list_section wrapper">
            <div class="inner-wrapper">
                @foreach($list as $v)
                    @include('frontend.component.article_item_view',['article' => $v,'locale' => $locale,'controller' => $controller . 'view'])
                @endforeach
            </div>
        </section>
    </main>
@endsection
