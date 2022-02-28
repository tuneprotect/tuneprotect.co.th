@extends('frontend.layout.nofooter')

@section('page')

    <body id="product_page" style="height: 100%;">
    <main>
        <h1 class="product-header"></h1>
        <div>
            <center><span><img src="{{url('/storage/Icon/TuneProtect_Logo_RGB_color.png')}}" Style="max-height: 350px; max-width: 350px; height: auto; width: auto;"></span></center>
        </div>
        <section id="step1" class="wrapper">
            <form class="insurance-form" action="/{{$locale}}/PortalLogin/userPortalLogin" method="post" id="frm_login"
                  data-form-type="login"
                  data-error="ดำเนินไม่สำเร็จ"
                  data-error-description="เนื่องจากเกิดข้อผิดพลาดบางประการ"
                  data-error-button="ลองอีกครั้ง"
                  data-success="สำเร็จ"
                  data-success-description="หากท่านมีข้อสอบถามเพิ่มเติม กรุณาติดต่อ ศูนย์บริการลูกค้า  Tune Customer Service หมายเลข 02-078-5656 ต่อ 600 หรือ E-mail customercare@tuneprotect.com"
            >
                <div class="form-inner">
                    <h3>ระบุรายละเอียดเข้าใช้งานระบบ</h3>
                    <div class="date-input">
                        <div class="date-wrapper">
                            <div class="controls-wrapper">
                                <input id="ctrl_username" name="ctrl_username" type="text" placeholder="*ชื่อผู้ใช้งาน"
                                       required="required"
                                       data-error-username="กรุณาตรวจสอบชื่อผู้ใช้งาน "
                                       data-error-required="กรุณาระบุชื่อผู้ใช้งาน"/>
                                <label for="ctrl_username">*ชื่อผู้ใช้งาน</label>
                            </div>
                        </div>
                        <div class="date-wrapper">
                            <div class="controls-wrapper">
                                <input id="ctrl_password" name="ctrl_password" type="password" placeholder="*รหัสผู้ใช้งาน"
                                       required="required"
                                       data-error-password="กรุณาตรวจสอบรหัสผู้ใช้งาน"
                                       data-error-required="กรุณาระบุรหัสผู้ใช้งาน"/>
                                <label for="ctrl_password">*รหัสผู้ใช้งาน</label>
                            </div>
                        </div>
                        <cite></cite>
                    </div>
                </div>

                <div class="btn-wrapper">
                    <button data-gtm="validate-login" id="btnLogin" class="btn btn-primary btn-goto">เข้าสู่ระบบ</button>
                </div>

                @if(isset($status))
                    <input type="hidden" id="status" value="{{$status}}"/>
                    <input type="hidden" id="message" value="{{$message}}"/>
                @endif


                <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">

            </form>
            <br>

        </section>
    </main>


    </body>


@endsection
