@extends('frontend.layout.main')

@section('page')
<script src="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></script>
    <main>
        <article class="wrapper">
            @if(isset($articleImage))
                <div class="reveal">
                    <div class="main-img rotate-bg no-rotate">
                        <img src="{{url($content->pic)}}" alt="{{$content->locales[$locale]->title}}">
                    </div>
                </div>
            @endif
            <h1>{{$content->locales[$locale]->title}}</h1>
                <div>{!! $content->locales[$locale]->content !!}</div>
            <br/>
            @if(!isset($no_share))
                <!-- <script type='text/javascript'
                        src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                        async='async'></script>
                <div class="sharethis-inline-share-buttons"></div> -->

            <div class="social-share-btns-container">  
                <div class="social-share-btns">
                    <a class="share-btn.share-btn-twitter" href="https://twitter.com/intent/tweet?text=https://codepen.io/marko-zub/#" rel="nofollow" target="_blank">
                        <i class="ion-social-twitter">Tweet</i>
                    </a>
                    <a class="share-btn.share-btn-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/marko-zub/#" rel="nofollow" target="_blank">
                        <i class="ion-social-facebook">Share</i>
                    </a>
                    <a class="share-btn.share-btn-linkedin" href="https://www.linkedin.com/cws/share?url=https://codepen.io/marko-zub/#" rel="nofollow" target="_blank">
                        <i class="ion-social-linkedin">Share</i>
                    </a>
                    <a class="share-btn.share-btn-reddit" href="http://www.reddit.com/submit?url=https://codepen.io/marko-zub/&title=Marko+Zub+codepen" rel="nofollow" target="_blank">
                        <i class="ion-social-reddit">Share</i>
                    </a>
                    <a class="share-btn.share-btn-mail" href="mailto:?subject=Look Fun Codepen Account&amp;body=https://codepen.io/marko-zub/#" rel="nofollow" target="_blank" title="via email">
                        <i class="ion-paper-airplane">Share</i>
                    </a>
                </div>
            </div>
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
