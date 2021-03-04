@if($relatedArticle->first())
    <section class="article_list_section wrapper">
        <h2>@lang('global.related')</h2>
        <div class="inner-wrapper">
            @foreach($relatedArticle as $v)
                @include('frontend.component.article_item',['article' => $v,'locale' => $locale,'controller' => $controller])
            @endforeach
        </div>
    </section>
@endif
