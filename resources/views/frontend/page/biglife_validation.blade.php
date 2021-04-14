@extends('frontend.layout.nofooter')

@section('page')

    <body id="product_page" style="height: 100%;">
    <main>
        <h1 class="product-header">Biglife</h1>
        <section id="step1" class="wrapper">
            <form class="insurance-form" action="/{{$locale}}/Biglife/Validation" method="post" id="frm_validate">
                <div class="form-head">ระบุรายละเอียด</div>
                <div class="form-inner">
                    <h3>กรุณากรอกหมายเลขสมาชิก BIG ของท่านเพื่อดำเนินการต่อและสะสม BIG Points</h3>
                    <div class="date-input">
                        <div class="date-wrapper">
                            <div class="controls-wrapper">
                                <input id="memberid" name="memberid" type="text" placeholder="หมายเลขสมาชิก BIG / Member ID"
                                       required="required" data-error-required="The Member ID. field is required.">
                                <label for="memberid">หมายเลขสมาชิก BIG / Member ID</label>
                            </div>
                        </div>
                        <cite></cite>
                    </div>
                </div>

                <div class="btn-wrapper">
                    <button data-gtm="validate-memberid" id="btnValidate" class="btn btn-primary btn-goto">ล็อกอิน</button>
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
