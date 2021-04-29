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
                <div class="my-health-title" style="margin-bottom: 20px"><img alt=""
                                                                              src="/images/my_health/Logo-My-Health.png"
                                                                              style="width: 200px"/>
                    <p>ไร้กังวลทุกที่ทุกเวลา เพราะเจ็บป่วยเมื่อไหร่ ก็สามารถขอรับคำปรึกษากับแพทย์ผู้เชี่ยวชาญออนไลน์ได้
                        เพียงเป็นลูกค้า Tune Protect<br/>
                        (เงื่อนไขเป็นไปตามที่บริษัทฯ)</p>
                </div>

                <section class="my-health-service" id="my-health-service" style="padding: 50px 0 20px 0">
                    <div class="my-health-service-inner">
                        <div class="my-health-service-box"><h2>จุดเด่นของบริการ</h2>

                            <ul>
                                <li><img src="/images/my_health/icon-07.png" style="width: 20px;"/>
                                    ปรึกษาแพทย์ทางโทรศัพท์ แชท หรือ ทางวีดีโอคอล
                                </li>
                                <li><img src="/images/my_health/icon-07.png" style="width: 20px;"/> ตลอด 24 ชั่วโมง
                                    ทุกที่ทุกเวลา
                                </li>
                                <li><img src="/images/my_health/icon-07.png" style="width: 20px;"/> ตามความต้องการของคุณ
                                    หรือ ตามการนัดหมายล่วงหน้า
                                </li>
                                <li><img src="/images/my_health/icon-07.png" style="width: 20px;"/>
                                    ข้อมูลทางการแพทย์จะถูกเก็บเป็นความลับ
                                </li>
                                <li><img src="/images/my_health/icon-07.png" style="width: 20px;"/>
                                    ข้อมูลส่วนตัวของคุณจะได้รับการเก็บรักษาอย่างปลอดภัย
                                </li>
                            </ul>
                        </div>

                        <div class="my-health-service-box"><h2>ทำไมคุณควรใช้บริการ Health2Go</h2>

                            <ul>
                                <li style="display: flex;align-items: center"><img src="/images/my_health/time-fast.png"
                                                                                   style="margin-right:8px "/>
                                    <div style="display:inline-block;width: 80%;"><strong>ประหยัดเวลา </strong> <span> ด้วยเทคโนโลยีที่ช่วยเข้าถึงแพทย์ผู้เชี่ยวชาญเฉพาะทางได้ทุกที่ทุกเวลา </span>
                                    </div>
                                </li>
                                <li style="display: flex;align-items: center"><img
                                        src="/images/my_health/user-setting.png" style="margin-right:8px "/>
                                    <div style="display:inline-block;width: 80%;">
                                        <strong>ลดความเสี่ยงการติดเชื้อ </strong> <span> หลีกเลี่ยงการเดินทางไปโรงพยาบาล ลดโอกาสพบผู้ป่วย/ผู้ติดเชื้อ </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a class="btn btn_my_health btn-primary"
                       href="https://telehealth.europ-assistance.com/tuneprotect/?lang=th" style="max-width:220px"
                       target="_blank">ปรึกษาแพทย์ออนไลน์ คลิก</a>
                </section>

                <div class="my-health-condition"><h2>เงื่อนไขการให้บริการ</h2>

                    <ul>
                        <li>&bull; ผู้ใช้บริการต้องมีอายุ 20 ปีขึ้นไป</li>
                        <li>&bull; ค่าใช้จ่ายในการให้บริการปรึกษาแพทย์ผู้เชี่ยวชาญ Health2GO (Tele-Consultation)
                            ขึ้นอยู่กับข้อกำหนดและเงื่อนไข บริษัท ยุโรป แอสซิสแทนซ์ จำกัด
                        </li>
                        <li>&bull; ค่าบริการปรึกษาแพทย์ผู้เชี่ยวชาญ (Tele-Consultation) เริ่มต้นที่ 300 บาท ต่อ 15
                            นาที
                        </li>
                    </ul>

                    <h2> การเตรียมตัวก่อนรับบริการ </h2>
                    <ul>
                        <li>&bull; เพื่อความเป็นส่วนตัวของข้อมูลทางการแพทย์
                            ผู้รับบริการควรเลือกใช้บริการในสถานที่ที่มีความเป็นส่วนตัว
                            มีสัญญาณอินเตอร์เน็ตที่เสถียรเพื่อความรวดเร็วในการเชื่อมต่อ และควรมีบัตรประชาชน หรือ
                            พาสปอร์ต เพื่อใช้ในการยืนยันตัวบุคคลก่อนเข้ารับบริการ
                        </li>
                    </ul>
                </div>

                <section class="my-health-step">
                    <h2>ขั้นตอนการใช้งาน</h2>
                    <br>
                    <div class="step-wrapper">
                        <div id="step">
                            <div class="item"><img alt="" src="/images/my_health/step-1.png" style="width: 150px"/>
                                <strong>คลิก</strong>

                                <p style="font-size: .8rem">บริการปรึกษาแพทย์ ออนไลน์</p>
                            </div>

                            <div class="item"><img alt="" src="/images/my_health/step-2.png" style="width: 150px"/>
                                <strong>กรอก</strong>

                                <p style="font-size: .8rem">กรอกข้อมูลเพื่อเริ่มการปรึกษา</p>
                            </div>

                            <div class="item"><img alt="" src="/images/my_health/step-3.png" style="width: 150px"/>
                                <strong>ตอบคำถาม</strong>

                                <p style="font-size: .8rem">ประเมินอาการ พร้อมดูตารางแพทย์</p>
                            </div>

                            <div class="item"><img alt="" src="/images/my_health/step-4.png" style="width: 150px"/>
                                <strong>เริ่มปรึกษา</strong>

                                <p style="font-size: .8rem">แพทย์ออนไลน์ทางแชท, วีดีโอคอล<br/>
                                    หรือ โทรศัพท์</p>
                            </div>
                        </div>
                    </div>
                    <a class="btn btn_my_health btn-primary show_on_mobile" href="#my-health-service" style="max-width:220px">กลับสู่ด้านบน</a>
                </section>

            </div>


        </article>
    </main>
@endsection
