@extends('frontend.layout.main')

@section('page')

    <main>
        <article class="wrapper">
            @if(isset($articleImage))
                <div class="reveal">
                    <div class="main-img rotate-bg no-rotate">
                        <img src="{{url($content->pic)}}" alt="">
                    </div>
                </div>
            @endif
            <h1>{{$content->locales[$locale]->title}}</h1>
            <div>{!! $content->locales[$locale]->content !!}</div>
            <br/>
            <script type='text/javascript'
                    src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                    async='async'></script>
            <div class="sharethis-inline-share-buttons"></div>
            <br/>
        </article>
        @include('frontend.component.contact-form',['content' => $contact])
    </main>

@endsection
