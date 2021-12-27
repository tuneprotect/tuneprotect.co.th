@if($relatedArticle->first())
    <section class="article_list_section wrapper">
        <h2>@lang('global.related')</h2>
        <div class="inner-wrapper">
            @foreach($relatedArticle as $v)
                @include('frontend.component.article_item_view',['article' => $v,'locale' => $locale,'controller' => $controller . 'view'])
            @endforeach
        </div>
    </section>
@endif
