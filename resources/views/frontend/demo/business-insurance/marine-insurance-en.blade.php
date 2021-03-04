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

            <h1 style="margin-bottom: 50px;text-align: center">Marine and transportation insurance</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE protects your Cargo
                    </h2>
                    <p>
                        Marine Cargo Insurance covers Loss or Damage from seafreight or airfreight including land
                        transport. The insurance divided into:
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Marine/Aviation Cargo Insurance
                    </h2>
                    <p>
                        Covers Cargo Damages from international transportation such as Fire, Explosion, Earthquake,
                        stranded, Collision, water damage, theft, and broken.
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Inland Transit Insurance
                    </h2>
                    <p>
                        Covers Cargo Damages from domestic transportation such as Fire, Explosion, Collision, Overturn,
                        Aircrash, Stranded, etc.
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Carrier Liability Insurance
                    </h2>
                    <p>
                        Covers Cargo Damages occurred during the transportation or loading/unloading as stated in the
                        policy.
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
