@extends('frontend.layout.portal')

@section('page')
    <body id="thankyou_page" style="height: 100%;">
    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div><h1>{{$UnlockStatus}}</h1>
                    <p>
                    <p>{{$UnlockDisplay}}</p>
            </div>
        </article>
    </main>
    </body>

@endsection
