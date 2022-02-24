@extends('frontend.layout.main')

@section('page')
    <main>
        <div class="-wrapper">
        <section class="wrapper" id="form-section">
            <form class="insurance-form" action="/{{$locale}}/PolicyEnquiry/policyEnquiry" method="post" id="frm_policyenquiry"
                  data-form-type="policyenquiry"
                  novalidate
                  data-error="ดำเนินเรียบร้อยแล้ว"
                  data-error-description="เนื่องจากเกิดข้อผิดพลาดบางประการ"
                  data-error-button="ลองอีกครั้ง"
                  data-success="สำเร็จ"
                  data-success-description="หากท่านมีข้อสอบถามเพิ่มเติม กรุณาติดต่อ ศูนย์บริการลูกค้า  Tune Customer Service หมายเลข 02-078-5656 ต่อ 600 หรือ E-mail customercare@tuneprotect.com"
                  data-success-button="กลับสู่หน้าหลัก"
          >
                <div class="form-inner">
                    <h4>ค้นหากรมธรรม์</h4>
                    <div class="controls-wrapper">
                        <input id="policyNumber" name="policyNumber" type="text" placeholder=*"เลขกรมธรรม์"
                               required="required"
                               data-error-idcard="กรุณาตรวจสอบเลขกรมธรรม์"
                               data-error-required="กรุณาระบุเลขกรมธรรม์"/>
                        <label for="policyNumber">*เลขกรมธรรม์</label>
                    </div>

                </div>
                <div class="btn-wrapper">
                    <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button"
                            value="accept">@lang('global.search')</button>
{{--                    <button data-gtm="contact-form-decline" class="btn btn-primary" name="action" type="button"--}}
{{--                            value="decline">@lang('global.decline')</button>--}}
                </div>

                <br>
                <div id="summary_section" class="form-inner"></div>

            </form>
        </section>
        </div>
    </main>
@endsection


