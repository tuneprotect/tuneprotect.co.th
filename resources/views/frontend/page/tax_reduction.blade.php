@extends('frontend.layout.main')

@section('page')
    <main>
        <section class="wrapper contact-section" id="taxreductionform-section">
            <form class="insurance-form" action="/{{$locale}}/TaxReduction/apiTaxReduction" method="post" id="frm_taxreduction"
                  data-form-type="taxreductionform"
                  novalidate
                  data-error="บริษัทได้รับข้อมูลของท่านเรียบร้อยแล้ว"
                  data-duplicate="ขออภัยเลขประจำตัวประชาชนนี้ มีการขอทำรายการแล้ว"
                  data-error-description="เนื่องจากเกิดข้อผิดพลาดบางประการ"
                  data-error-button="ลองอีกครั้ง"
                  data-success="บริษัทได้รับข้อมูลของท่านในการเปิดเผยข้อมูลต่อกรมสรรพากรเพื่อสิทธิประโยชน์ทางภาษีเรียบร้อยแล้ว บริษัทจะทำการจัดส่งหนังสือรับรองเบี้ยประกันภัยเพื่อการลดหย่อนภาษีเงินได้ ไปยังอีเมล์ของท่าน ภายใน 7 วันทำการ"
                  data-success-description="หากท่านมีข้อสอบถามเพิ่มเติม กรุณาติดต่อ ศูนย์บริการลูกค้า  Tune Customer Service หมายเลข 02-078-5656 ต่อ 600 หรือ E-mail customercare@tuneprotect.com"
                  data-success-button="กลับสู่หน้าหลัก"
          >
                <div class="form-inner">
                    <h3>Tax Consent (on TPT’s website)</h3>
                    <br>
                    <h4>แบบฟอร์มให้ความยินยอมในการเปิดเผยข้อมูลต่อกรมสรรพากรเพื่อสิทธิประโยชน์ทางภาษี</h4>
                    <br>
                    <span class="small">
                    เพื่อเป็นไปตามหลักเกณฑ์ และวิธีการตามที่กรมสรรพากรกำหนด เพื่อวัตถุประสงค์ยกเว้นภาษีเงินได้ โดยกำหนดให้ผู้มีเงินได้ต้องทำการแจ้งความประสงค์ที่จะใช้สิทธิยกเว้นภาษีเงินได้ต่อบริษัทประกันภัย และการกำหนดหน้าที่ของบริษัทประกันภัยในการนำส่งข้อมูลของผู้เอาประกันภัยต่อกรมสรรพากรด้วยวิธีการทางอิเล็กทรอนิกส์
                    </span>
                    <br>
                    <div class="controls-wrapper">
                        <input id="ctrl_name" name="name" type="text" placeholder="ข้าพเจ้า (ชื่อ-นามสกุล)"/>
                        <label for="ctrl_name">ข้าพเจ้า (ชื่อ-นามสกุล)</label>
                    </div>

                    <div class="controls-wrapper">
                        <input id="ctrl_card_id" name="name" type="text" placeholder=*"เลขประจำตัวประชาชน"
                               required="required"
                               data-error-idcard="กรุณาตรวจสอบรูปแบบ เลขประจำตัวประชาชน"
                               data-error-required="กรุณาระบุ เลขประจำตัวประชาชน"/>
                        <label for="ctrl_card_id">*เลขประจำตัวประชาชน</label>
                    </div>

                    <div class="controls-wrapper">
                        <span class="small"><b>เลขประจำตัวผู้เสียภาษีอากร (ถ้ามี) (สำหรับชาวต่างชาติ Non-Thai Residence และเป็นผู้ที่มีหน้าที่เสียภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอาการ)</b></span>
                        <input id="ctrl_tax_id" name="name" type="text"
                               placeholder="เลขประจำตัวผู้เสียภาษีอากร (ถ้ามี)"/>
                    </div>

                    <br>
                    <span class="small">
                    ขอรับรองว่าข้าพเจ้าเป็นผู้ชำระเบี้ยประกันภัย และมีความประสงค์ที่จะใช้สิทธิยกเว้นภาษีเงินได้ ต่อบริษัท ทูนประกันภัย จำกัด (มหาชน) (“บริษัทฯ”) ตั้งแต่ปีภาษีที่ทำคำร้องนี้เป็นต้นไป และยินยอมให้บริษัทฯ เปิดเผยข้อมูลเกี่ยวกับเบี้ยประกันภัยของข้าพเจ้าต่อกรมสรรพากร ตามหลักเกณฑ์ วิธีการที่กรมสรรพากรกำหนด โดยขอให้ผลทุกกรมธรรม์ของข้าพเจ้า ทั้งนี้การใช้สิทธิดังกล่าว ต้องเป็นไปตามเงื่อนไขที่กรมสรรพากรกำหนด</span>
                    <br>
                    <br>
                    <span class="small">
                            โดยข้าพเจ้าคลิกปุ่ม <b>“ยอมรับ”</b> หรือ <b>“accept”</b> ถือว่าข้าพเจ้าได้แสดงเจตนารับรองและให้ความยิมยอมในการเปิดเผยข้อมูลต่อกรมสรรพากร และมีผลผูกพันตามกฎหมาย</span>

                </div>
                <div class="btn-wrapper">
                    <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button"
                            value="accept">@lang('global.accept')</button>
                    <button data-gtm="contact-form-decline" class="btn btn-primary" name="action" type="button"
                            value="decline">@lang('global.decline')</button>
                </div>
{{--                <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">--}}
            </form>
        </section>
    </main>
@endsection


