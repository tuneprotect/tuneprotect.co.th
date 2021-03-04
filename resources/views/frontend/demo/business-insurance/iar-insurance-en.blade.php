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
            <h1 style="margin-bottom: 50px;text-align: center">Industrial All Risks Insurance</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE protects your business
                    </h2>
                    <p>
                        Industrial All Risks Insurance is suitable for business with high Sum Insured i.e. Condominiums,
                        Factories, Hotels, Office Building Projects stated in the coverage.
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Policy divided into 2 mains coverage as:-
                    </h2>
                    <ul>
                        <li>
                            1. Property Damage
                        </li>
                        <li>
                            2. Third Party Liability
                        </li>
                    </ul>
                </div>

                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Coverage
                    </h2>
                    <p>
                        All Risks Coverage stated in the policies.
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
