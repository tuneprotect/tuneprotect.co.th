@extends('frontend.layout.nofooter')

@section('page')

    <body id="product_page" style="height: 100%;">
    <section class="slide_wrapper">
        <div class="tns-outer" id="tns1-ow"><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1</span>  of 1</div><div id="tns1-mw" class="tns-ovh"><div class="tns-inner" id="tns1-iw"><div class="slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                        <a class="tns-item tns-slide-active" id="tns1-item0">
                            <picture>
                                <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/Banner_Covid_D.jpg">
                                <img src="https://www.tuneprotect.co.th/storage/Banner/Banner_Covid_D.jpg" alt="ประกันภัย COVID - 19">
                            </picture>
                        </a>
    </section>
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
{{--                <input type="hidden" id="controller" value="{{$controller}}"/>--}}
{{--                <input type="hidden" id="urllinkvalidate" value="{{$urllinkvalidate}}">--}}
{{--                <input type="hidden" id="auth" value="{{$auth}}">--}}



            </form>
            <br>

        </section>
    </main>


    </body>
@endsection
