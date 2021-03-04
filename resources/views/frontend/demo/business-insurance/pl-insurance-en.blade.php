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

            <h1 style="margin-bottom: 50px;text-align: center">Public Liability Insurance</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE Protect Liability for Third Party
                    </h2>
                    <p>
                        Loss from Negligence to Third Party protected by law.
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Coverage
                    </h2>
                    <p>
                        Policy covers the Loss or damage to third party (valuable or physical) occurred from your negligence.
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
