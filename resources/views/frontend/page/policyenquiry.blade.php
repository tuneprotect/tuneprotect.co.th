@extends('frontend.layout.nofooter')

@section('page')
<main>
    <div class="-wrapper">
        <section class="wrapper" id="form-section">
            <form class="insurance-form" action="/{{$locale}}/PolicyEnquiry/policyEnquiry" method="post" id="frm_policyenquiry" data-form-type="policyenquiry" novalidate data-error="ดำเนินเรียบร้อยแล้ว" data-error-description="เนื่องจากเกิดข้อผิดพลาดบางประการ" data-error-button="ลองอีกครั้ง" data-success="สำเร็จ" data-success-description="หากท่านมีข้อสอบถามเพิ่มเติม กรุณาติดต่อ ศูนย์บริการลูกค้า  Tune Customer Service หมายเลข 02-078-5656 ต่อ 600 หรือ E-mail customercare@tuneprotect.com" data-success-button="กลับสู่หน้าหลัก">
                <div class="form-inner">
                    <h4>ค้นหากรมธรรม์</h4>
                    <div class="two-col">
                        <div class="controls-wrapper">
                            <input id="policyNumber" name="policyNumber" type="text" placeholder="เลขกรมธรรม์" data-error-idcard="กรุณาตรวจสอบเลขกรมธรรม์" data-error-required="กรุณาระบุเลขกรมธรรม์" />
                            <label for="policyNumber">เลขกรมธรรม์</label>
                        </div>
                        <div class="controls-wrapper">
                            <input id="IDCard" name="IDCard" type="text" placeholder="เลขบัตรประชาชน/passport" data-error-idcard="กรุณาตรวจสอบ เลขบัตรประชาชน/passport" data-error-required="กรุณาระบุ เลขบัตรประชาชน/passport" />
                            <label for="IDCard">เลขบัตรประชาชน/passport</label>
                        </div>
                        <div class="controls-wrapper">
                            <input id="RefCode" name="RefCode" type="text" placeholder="เลขอ้างอิง (Ref Code.)" data-error-idcard="กรุณาตรวจสอบ เลขอ้างอิง (Ref Code.)" data-error-required="กรุณาระบุ เลขอ้างอิง (Ref Code.)" />
                            <label for="RefCode">เลขอ้างอิง (Ref Code.)</label>
                        </div>
                        <div class="controls-wrapper">
                            <input id="InvoiceNumber" name="InvoiceNumber" type="text" placeholder="เลขอินวอยซ์" data-error-idcard="กรุณาตรวจสอบ เลขอินวอยซ์" data-error-required="กรุณาระบุ เลขอินวอยซ์" />
                            <label for="InvoiceNumber">เลขอินวอยซ์</label>
                        </div>
                        <div class="controls-wrapper">
                            <input id="email" name="email" type="text" placeholder="อีเมล" data-error-idcard="กรุณาตรวจสอบ อีเมล" data-error-required="กรุณาระบุ อีเมล" />
                            <label for="email">อีเมล</label>
                        </div>
                        <div class="controls-wrapper">
                            <input id="mobile" name="mobile" type="text" placeholder="เบอร์โทรศัพท์" data-error-idcard="กรุณาตรวจสอบ เบอร์โทรศัพท์" data-error-required="กรุณาระบุ เบอร์โทรศัพท์" />
                            <label for="mobile">เบอร์โทรศัพท์</label>
                        </div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button" value="accept">@lang('global.search')</button>
                    {{-- <button data-gtm="contact-form-decline" class="btn btn-primary" name="action" type="button"--}}
                    {{-- value="decline">@lang('global.decline')</button>--}}
                </div>

                <br>
                <div id="policy_section" class="form-inner"></div>
                <br>
                <div id="summary_section" class="form-inner"></div>

                <input type="hidden" id="group_p" value="{{$group_p}}" />

            </form>
        </section>
    </div>
</main>
@endsection