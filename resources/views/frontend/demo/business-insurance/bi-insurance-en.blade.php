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

            <h1 style="margin-bottom: 50px;text-align: center">Business Interruption</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE protects your Business Interruption
                    </h2>
                    <p>
                        &nbsp;&nbsp;
                        Business Interruption Insurance covers Business Loss (insured income) as a consequence of the
                        properties damage under main policy coverage ie Fire Insurance and Industrial All Risks
                        Insurance. This Policy is suitable for Business and industries with high Sum Insured.
                    </p>
                    <p>
                        &nbsp;&nbsp;
                        To regain the financial position by providing basic reimbursement such as Salary, Rental Fee,
                        including the Loan Interest during the Interruption Period.
                    </p>
                </div>

            </div>
        </article>
    </main>
@endsection
