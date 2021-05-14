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
           <style type="text/css">#static_page article{margin-top:15px;}
           </style>
           <div class="my-health-title" style="margin-bottom: 20px"><img alt="" src="/storage/my_health/final-health2go-logo-color.png" style="width: 300px" />
               <h2>Health2GO บริการปรึกษาแพทย์ออนไลน์ส่วนตัวของคุณ</h2>

               <p>ไร้กังวลทุกที่ทุกเวลา เพราะเจ็บป่วยเมื่อไหร่ ก็สามารถขอรับคำปรึกษากับแพทย์ผู้เชี่ยวชาญออนไลน์ได้ เพียงเป็นลูกค้า Tune Protect<br />
                   (เงื่อนไขเป็นไปตามที่บริษัทฯ)</p>
           </div>

           <section class="my-health-service">
               <div class="my-health-service-inner">
                   <div class="my-health-service-box">
                       <h2>จุดเด่นของบริการ</h2>

                       <ul>
                           <li style="display: flex;align-items: flex-start;"><img src="/images/my_health/icon-07.png" style="width: 20px;margin:5px 5px 0 0" /> ปรึกษาแพทย์ผู้เชี่ยวชาญ ทางโทรศัพท์ แชท หรือ ทางวีดีโอคอล</li>
                           <li style="display: flex;align-items: flex-start;"><img src="/images/my_health/icon-07.png" style="width: 20px;margin:5px 5px 0 0" /> ใช้บริการได้ตลอด 24 ชั่วโมง ทุกที่ทุกเวลา</li>
                           <li style="display: flex;align-items: flex-start;"><img src="/images/my_health/icon-07.png" style="width: 20px;margin:5px 5px 0 0" /> ทำนัดตามความต้องการของคุณ หรือ นัดหมายล่วงหน้า</li>
                           <li style="display: flex;align-items: flex-start;"><img src="/images/my_health/icon-07.png" style="width: 20px;margin:5px 5px 0 0" /> ข้อมูลทางการแพทย์จะถูกเก็บเป็นความลับ</li>
                           <li style="display: flex;align-items: flex-start;"><img src="/images/my_health/icon-07.png" style="width: 20px;margin:5px 5px 0 0" /> ข้อมูลส่วนตัวของคุณจะได้รับการเก็บรักษาอย่างปลอดภัย</li>
                       </ul>
                   </div>

                   <div class="my-health-service-box">
                       <h2>ทำไมคุณควรใช้บริการ Health2GO</h2>

                       <ul>
                           <li style="display: flex;align-items: center"><img src="/storage/my_health/icon-10.png" style="margin-right:8px " />
                               <div style="display:inline-block;width: 80%;"><strong>ประหยัดเวลา </strong> <span> ด้วยเทคโนโลยีที่ช่วยเข้าถึงแพทย์ผู้เชี่ยวชาญเฉพาะทางได้ทุกที่ทุกเวลา </span></div>
                           </li>
                           <li style="display: flex;align-items: center"><img src="/storage/my_health/icon-11.png" style="margin-right:8px " />
                               <div style="display:inline-block;width: 80%;"><strong>ลดความเสี่ยงการติดเชื้อ </strong> <span> หลีกเลี่ยงการเดินทางไปโรงพยาบาล ลดโอกาสพบผู้ป่วย/ผู้ติดเชื้อ </span></div>
                           </li>
                       </ul>
                   </div>
               </div>
               <a class="btn btn_my_health btn-primary" href="https://telehealth.europ-assistance.com/tuneprotect/?lang=th" style="max-width:220px" target="_blank">ปรึกษาแพทย์ออนไลน์ คลิก</a></section>

           <div class="my-health-condition">
               <h2>เงื่อนไขการให้บริการ</h2>

               <ul>
                   <li>&bull; ผู้ใช้บริการต้องมีอายุ 20 ปีขึ้นไป</li>
                   <li>&bull; ค่าใช้จ่ายในการให้บริการปรึกษาแพทย์ผู้เชี่ยวชาญ Health2GO (Tele-Consultation) ขึ้นอยู่กับข้อกำหนดและเงื่อนไข บริษัท ยุโรป แอสซิสแทนซ์ จำกัด</li>
                   <li>&bull; บริการปรึกษาแพทย์ผู้เชี่ยวชาญ (Tele-Consultation) มีระยะเวลา 15 นาทีต่อการเข้าใช้ 1 ครั้ง</li>
               </ul>

               <h2>การเตรียมตัวก่อนรับบริการ</h2>

               <ul>
                   <li>&bull; เพื่อความเป็นส่วนตัวของข้อมูลทางการแพทย์ ผู้รับบริการควรเลือกใช้บริการในสถานที่ที่มีความเป็นส่วนตัว มีสัญญาณอินเตอร์เน็ตที่เสถียรเพื่อความรวดเร็วในการเชื่อมต่อ และควรมีบัตรประชาชน หรือ พาสปอร์ต เพื่อใช้ในการยืนยันตัวบุคคลก่อนเข้ารับบริการ</li>
               </ul>
           </div>

           <section class="my-health-step">
               <h2>ขั้นตอนการใช้งาน</h2>
               &nbsp;

               <div class="step-wrapper">
                   <div id="step">
                       <div class="item"><img alt="" src="/images/my_health/step-1.png" style="width: 150px" /> <strong>คลิก</strong>

                           <p style="font-size: .8rem">บริการปรึกษาแพทย์ออนไลน์</p>
                       </div>

                       <div class="item"><img alt="" src="/images/my_health/step-2.png" style="width: 150px" /> <strong>กรอก</strong>

                           <p style="font-size: .8rem">กรอกข้อมูลเพื่อเริ่มการปรึกษา</p>
                       </div>

                       <div class="item"><img alt="" src="/images/my_health/step-3.png" style="width: 150px" /> <strong>ตอบคำถาม</strong>

                           <p style="font-size: .8rem">ประเมินอาการ พร้อมดูตารางแพทย์</p>
                       </div>

                       <div class="item"><img alt="" src="/images/my_health/step-4.png" style="width: 150px" /> <strong>เริ่มปรึกษา</strong>

                           <p style="font-size: .8rem">แพทย์ออนไลน์ทางแชท, วีดีโอคอล<br />
                               หรือ โทรศัพท์</p>
                       </div>
                   </div>
               </div>
               <a class="btn btn_my_health btn-primary show_on_mobile" href="https://telehealth.europ-assistance.com/tuneprotect/?lang=th" style="max-width:220px;margin-top:10px" target="_blank">ปรึกษาแพทย์ออนไลน์ คลิก</a></section>

       </div>


        </article>
    </main>
@endsection
