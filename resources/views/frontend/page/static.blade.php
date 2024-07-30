@extends('frontend.layout.main')

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
            <h1>{{$content->locales[$locale]->title}}</h1>
                <div>{!! $content->locales[$locale]->content !!}</div>
            <br/>
            @if(!isset($no_share))
                <script type='text/javascript'
                        src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                        async='async'></script>
                <div class="sharethis-inline-share-buttons"></div>

            <!-- <div class="social-share-btns-container">  
                <div class="social-share-btns">
                <a class="share-btn share-btn-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://www.tuneprotect.co.th/" rel="nofollow" target="_blank">
                        <i class="icofont-facebook"></i>Facebook
                    </a>
                    <a class="share-btn share-btn-line" href="https://www.line.com/cws/share?url=https://www.tuneprotect.co.th/" rel="nofollow" target="_blank">
                        <i class="icofont icofont-line"></i>Line
                    </a>
                    <a class="share-btn share-btn-twitter" href="https://twitter.com/intent/tweet?text=https://www.tuneprotect.co.th/" rel="nofollow" target="_blank">
                        <i class="icofont icofont-twitter"></i>Tweet
                    </a>
                    <a class="share-btn share-btn-mail" href="mailto:privacy.th@tuneprotect.co.th?subject=Send to Us&amp;body=" rel="nofollow" target="_blank" title="via email">
                        <i class="icofont-email"> </i>Email
                    </a>
                    <a class="share-btn share-btn-share" href="#" rel="nofollow" target="_blank">
                        <i class="icofont-share"></i>Share
                    </a>
                </div>
            </div> -->
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
