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

            <h1 style="margin-bottom: 50px;text-align: center">Contractor/Machanical Installation All Risks
                Insurance</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE Protect covers contract work insurance
                    </h2>
                    <p>
                        Policy covers All risks: Loss or damage of construction accorgance with the construction
                        contract including construction materials and Third Party Liability
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Coverage
                    </h2>
                    <p> Policy divided into 3 main coverages as follows:-</p>
                    <ul>
                        <li>
                            Section 1 Civil Work.
                        </li>
                        <li>
                            Section 2 Installation Work.
                        </li>
                        <li>
                            Section 3 Third Party Liability.
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </main>
@endsection
