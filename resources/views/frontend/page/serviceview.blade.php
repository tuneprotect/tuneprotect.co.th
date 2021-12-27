@extends('frontend.layout.mainview')

@section('page')

    <main>
        <article class="wrapper">
            @if(isset($articleImage))
                <div class="reveal">
                    <div class="main-img rotate-bg no-rotate">
                        <img src="{{url($content->pic)}}" alt="{{$content->locales[$locale]->title}}">
                    </div>
                </div>
            @endif
            <div>{!! $content->locales[$locale]->content !!}</div>
            <br/>
            @if(!isset($no_share))
                <script type='text/javascript'
                        src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                        async='async'></script>
                <div class="sharethis-inline-share-buttons"></div>
                <br/>
            @endif
        </article>

        @if(isset($relatedProduct))
            @include('frontend.component.product_list')
        @endif

        @if(isset($relatedArticle))
            @include('frontend.component.related_article', ['relatedArticle' => $relatedArticle])
        @endif

        @if(isset($faq))
            @include('frontend.component.faq')
        @endif

        @if(isset($extraComponent))
            @includeIf($extraComponent)
        @endif


    </main>

@endsection
