@extends('frontend.layout.nofooter')

@section('page')

    <body id="product_page" style="height: 100%;">
    <main>
        <h1 class="product-header"></h1>
        <div>
            <center><span><img src="{{url('/storage/Icon/amadoLogo2.png')}}"></span></center>
        </div>

        <section id="step1" class="wrapper">
            <form class="insurance-form" action="/{{$locale}}/Amado/Validation" method="post" id="frm_validate">
                <div class="form-head">ระบุรายละเอียด</div>
                <div class="form-inner">
                    <h3>กรุณากรอกโปรโมชั่นโค้ดของท่านเพื่อดำเนินการต่อ</h3>
                    <div class="date-input">
                        <div class="date-wrapper">
                            <div class="controls-wrapper">
                                <input id="promocode" name="promocode" type="text" placeholder=โปรโมชั่นโค้ด
                                    required="required" data-error-required="The Member ID. field is required.">
                                <label for="promocode">โปรโมชั่นโค้ด</label>
                            </div>
                        </div>
                        <cite></cite>
                    </div>
                </div>

                <div class="btn-wrapper">
                    <button data-gtm="validate-promocode" id="btnProcess" class="btn btn-primary btn-goto">ดำเนินการต่อ</button>
                </div>


                <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">

                @if(isset($status_api))
                    <input type="hidden" id="status_api" value="{{$status_api}}"/>
                    <input type="hidden" id="massage_key" value="{{$massage_key}}"/>
                @endif

            </form>
            <br>

        </section>

    </main>


    </body>


@endsection
