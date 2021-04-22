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


            <h1>My Health</h1>
            <div>
                <div class="my-health-title" style="margin-bottom: 20px">
                    <img alt="" src="/images/my_health/Logo-My-Health.png" style="width: 100px"/>
                    <span>
    ไร้กังวลทุกที่ทุกเวลา เพราะเจ็บป่วยเมื่อไหร่ ก็สามารถขอรับคำปรึกษากับแพทย์ผู้เชี่ยวชาญออนไลน์ได้ เพียงเป็นลูกค้า Tune Protect  (เงื่อนไขเป็นไปตามที่บริษัทฯ)
</span>
                </div>
                <section class="my-health-service">
                    <div class="my-health-service-inner">
                        <div class="my-health-service-box">
                            <strong>จุดเด่นของบริการ</strong>
                            <ul>
                                <li>
                                    <img src="/images/my_health/icon-07.png">
                                    ปรึกษาแพทย์ทางโทรศัพท์ แชท หรือ ทางวีดีโอคอล
                                </li>
                                <li>
                                    <img src="/images/my_health/icon-07.png">
                                    ตลอด 24 ชั่วโมง ทุกที่ทุกเวลา
                                </li>
                                <li>
                                    <img src="/images/my_health/icon-07.png">
                                    ตามความต้องการของคุณ หรือ ตามการนัดหมายล่วงหน้า
                                </li>
                                <li>
                                    <img src="/images/my_health/icon-07.png">
                                    ข้อมูลทางการแพทย์จะถูกเก็บเป็นความลับ
                                </li>
                                <li>
                                    <img src="/images/my_health/icon-07.png">
                                    ข้อมูลส่วนตัวของคุณจะได้รับการเก็บรักษาอย่างปลอดภัย
                                </li>
                            </ul>
                        </div>

                        <div class="my-health-service-box">
                            <strong>ทำไมคุณควรใช้</strong>
                            <ul>
                                <li><img src="/images/my_health/time-fast.png" style="display: inline-block;
    position: relative;
    top: -18px;">
                                    <div style="display:inline-block;width: 80%;"><strong>ประหยัดเวลา </strong> <span> ด้วยเทคโนโลยีที่ช่วยเข้าถึงแพทย์ผู้เชี่ยวชาญเฉพาะทางได้ทุกที่ทุกเวลา </span>
                                    </div>
                                </li>
                                <li><img src="/images/my_health/user-setting.png" style="display: inline-block;
    position: relative;
    top: -20px;"/>
                                    <div style="display:inline-block;width: 80%;">
                                        <strong> ลดความเสี่ยงการติดเชื้อ </strong> <span> หลีกเลี่ยงการเดินทางไปโรงพยาบาล ลดโอกาสพบผู้ป่วย/ผู้ติดเชื้อ </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a href="https://telehealth.europ-assistance.com/tuneprotect/?lang=th" target="_blank"
                       class="btn gradient">ดูข้อมูลหรือเริ่มปรึกษา</a>
                </section>
                <div class="my-health-condition">
                    <strong> เงื่อนไขการให้บริการ</strong>
                    <ul>
                        <li>
                            &bull; ผู้ใช้บริการต้องมีอายุ 20 ปีขึ้นไป
                        </li>
                        <li>
                            &bull; ค่าใช้จ่ายในการให้บริการปรึกษาแพทย์ผู้เชี่ยวชาญ Healh2GO (Tele-Consultation)
                            ขึ้นอยู่กับข้อกำหนดและเงื่อนไข บริษัท ยุโรป แอสซิสแทนซ์ จำกัด
                        </li>
                        <li>
                            &bull; ค่าบริการปรึกษาแพทย์ผู้เชี่ยวชาญ (Tele-Consultation) เริ่มต้นที่ 300 บาท ต่อ 15 นาที
                        </li>
                    </ul>

                    <strong>
                        การเตรียมตัวก่อนรับบริการ
                    </strong>
                    <ul>
                        <li>
                            &bull; เพื่อความเป็นส่วนตัวของข้อมูลทางการแพทย์
                            ผู้รับบริการควรเลือกใช้บริการในสถานที่ที่มีความเป็นส่วนตัว
                            มีสัญญาณอินเตอร์เน็ตที่เสถียรเพื่อความรวดเร็วในการเชื่อมต่อ และควรมีบัตรประชาชน หรือ
                            พาสปอร์ต เพื่อใช้ในการยืนยันตัวบุคคลก่อนเข้ารับบริการ
                        </li>
                    </ul>
                </div>
                <section class="my-health-step">
                    <strong class="text-center">ขั้นตอนการใช้งาน</strong>
                    <div class="step-wrapper">
                        <div id="step">
                            <div class="item">
                                <img alt="" src="/images/my_health/step-1.png" style="width: 50px;height: 50px"/>
                                <strong>click</strong>
                                <p style="font-size: .8rem">
                                    “บริการปรึกษาแพทย์
                                    ออนไลน์”
                                </p>
                            </div>
                            <div class="item">
                                <img alt="" src="/images/my_health/step-2.png" style="width: 50px;height: 50px"/>
                                <strong>กรอก</strong>
                                <p style="font-size: .8rem">
                                    ข้อมูลเพื่อเริ่มการปรึกษา
                                </p>
                            </div>
                            <div class="item">
                                <img alt="" src="/images/my_health/step-3.png" style="width: 50px;height: 50px"/>
                                <strong>ตอบคำถาม</strong>
                                <p style="font-size: .8rem">
                                    ประเมิณอา
                                    การ พร้อมดู
                                    ตาราง
                                    แพทย์
                                </p>
                            </div>
                            <div class="item">
                                <img alt="" src="/images/my_health/step-3.png" style="width: 50px;height: 50px"/>
                                <strong>เริ่มปรีกษา</strong>
                                <p style="font-size: .8rem">
                                    แพทย์ออนไลน์ทาง แชท วีดีโอคอล หรือ โทรศัพท์
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>


        </article>
    </main>
@endsection
