@extends('frontend.layout.main')

@section('page')

    <main>
        <article class="wrapper">
            <h1>{{$content->locales[$locale]->title}}</h1>
            <div>{!! $content->locales[$locale]->content !!}</div>

            @if($claim_category)
                @foreach ($claim_category as $v)

                    <h2 class="underline">{{$v->locales[$locale]->title}}</h2>
                    <ul>
                        @foreach ($claim as $v1)
                            @if($v->id == $v1->cat_id )
                                <li><a class="text-primary"
                                       data-gtm="claim-page-{{$v1->friendly_url}}"
                                       href="{{route('current',['locale' => $locale,'controller' => 'claim','func' => $v1->friendly_url ])}}">{{$v1->locales[$locale]->title}}</a>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                @endforeach
            @endif


            <br/>
            <br/>
            <script type='text/javascript'
                    src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                    async='async'></script>
            <div class="sharethis-inline-share-buttons"></div>
            <br/>
        </article>
    </main>

@endsection
