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

            <h1 style="margin-bottom: 50px;text-align: center">Contractor's Plant All Risks Insurance</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE Protects Mobile Machine
                    </h2>
                    <p>
                        &nbsp;&nbsp;Contractor's Plant All Risks Insurance including agricultural machines for i.e.
                        Crane, Excavator, Grader, etc.
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Coverage
                    </h2>
                    <p>
                        &nbsp;&nbsp; All Risks Coverage stated in the Policy.
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
