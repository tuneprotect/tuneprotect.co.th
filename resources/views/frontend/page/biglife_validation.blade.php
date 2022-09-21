@extends('frontend.layout.nofooter')

@section('page')

    <body id="product_page" style="height: 100%;">
    <main>
        <h1 class="product-header"></h1>
        <div>
            <center><span><img src="{{url('/storage/Icon/BIGRewardsLogo.png')}}"></span></center>
        </div>
        <section id="step1" class="wrapper">
            <form class="insurance-form" action="/{{$locale}}/Biglife/Validation" method="post" id="frm_validate">
                <div class="form-head">{{$headertext}}</div>
                <div class="form-inner">
                    <h3>{{$labeltext}}</h3>
                    <div class="date-input">
                        <div class="date-wrapper">
                            <div class="controls-wrapper">
                                <input id="memberid" name="memberid" type="text" placeholder={{$placeholdertext}}
                                       required="required" data-error-required="The Member ID. field is required.">
                                <label for="memberid">{{$placeholdertext}}</label>
                            </div>
                        </div>
                        <cite></cite>
                    </div>
                </div>

                <div class="btn-wrapper">
                    <button data-gtm="validate-memberid" id="btnValidate" class="btn btn-primary btn-goto">{{$buttontext}}</button>
                </div>


                <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">

                @if(isset($status_api))
                    <input type="hidden" id="status_api" value="{{$status_api}}"/>
                @endif
            </form>
            <br>

        </section>
    </main>


    </body>


@endsection
