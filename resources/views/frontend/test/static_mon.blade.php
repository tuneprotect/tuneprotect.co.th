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


            <div class="wrapper">
{{--                <div>--}}
{{--                    <img src="/images/ico_ci/ci_benner_main.jpg" alt="">--}}
{{--                </div>--}}

                <div>
                    <h3>ได้ครบที่คลิกเลือก! มีงบหลักพัน ก็มีประกันโรคร้ายแรงคุ้มครองทุกระยะหลักล้านได้</h3>

                    <p>เพราะโรคร้ายแรงมีมากกว่าที่คิด! ประกันโรคร้ายแรงจาก Tune Protect พร้อมดูแลคุ้มครองโรคร้ายทุกระยะ
                        และเลือกความคุ้มครองโรคร้ายเพิ่มเติมได้ตามต้องการ สมัครได้ตั้งแต่อายุ 18-60 ปี ต่ออายุได้ถึง 65
                        ปี ลดหย่อนภาษีได้ พร้อมบริการความเห็นที่สองทางการแพทย์และบริการปรึกษาแพทย์ออนไลน์</p>

                    <section class="my-health-step">
                        <h2 style="margin: 20px 0">จุดเด่นแบบประกัน</h2>

                        <div class="step-ci-wrapper" style="margin-bottom: 20px">
                            <div id="step">
                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_1.png"/>
                                    <p style="font-size: .8rem">คุ้มครองโรคร้ายทุกระยะ สูงสุดมากกว่า 3 ล้านบาท*</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_2.png"/>
                                    <p style="font-size: .8rem">เลือกปรับเพิ่ม-ลด ความคุ้มครองได้</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_3.png"/>
                                    <p style="font-size: .8rem">คุ้มครอง 5 กลุ่มโรคร้ายแรง</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_4.png"/>
                                    <p style="font-size: .8rem">คุ้มครองถึงอายุ 65 ปี</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_5.png"/>
                                    <p style="font-size: .8rem">มีค่าชดเชยและพยาบาลพิเศษ</p>
                                </div>
                            </div>
                        </div>

                        <div class="step-ci-wrapper" style="margin-bottom: 20px">
                            <div id="step">
                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_1.png"/>
                                    <p style="font-size: .8rem">เบี้ยเริ่มต้นเพียงไม่ถึง 2 บาทต่อวัน</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_6.png"/>
                                    <p style="font-size: .8rem">ตอบคำถามสุขภาพแค่ 3 ข้อ
                                        ไม่ต้องไปตรวจสุขภาพที่โรงพยาบาล</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_7.png"/>
                                    <p style="font-size: .8rem">สมัครได้เลย โดยไม่ต้องซื้อประกันชีวิต</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_8.png"/>
                                    <p style="font-size: .8rem">เบี้ยประกันนำไปลดหย่อนภาษีได้*</p>
                                </div>

                                <div class="item" style="padding: 10px 5px"><img alt=""
                                                                                 src="/images/ico_ci/flexi_9.png"/>
                                    <p style="font-size: .8rem">มีบริการความเห็นที่สองทางการแพทย์
                                        และปรึกษาแพทย์ออนไลน์</p>
                                </div>
                            </div>
                        </div>

                        <div class="wrapper text-center">
                            <a class="btn btn-primary" href=""
                               style="width: 200px;margin: 10px">download</a>
                            {btn_buy}
                        </div>
                    </section>

                    <div class="service_flexi">
                        <h2 style="margin: 20px 0">พร้อมรับบริการเสริมที่หลากหลาย เมื่อสมัครประกันภัยโรคร้ายแรง myFlexi
                            CI</h2>

                        <div class="service_flexi_box">
                            <div class="inner"><img alt="" src="/images/ico_ci/ci_benner_1.jpg"/>
                                <div class="text-center"><a class="btn btn-outline" href="">ดูข้อมูลเพิ่มเติม </a></div>
                            </div>

                            <div class="inner"><img alt="" src="/images/ico_ci/ci_benner_2.jpg"/>
                                <h3 style="margin: 10px">MSO บริการความเห็นที่ 2 ทางการแพทย์</h3>

                                <p style="margin: 10px 10px 107px">บริการให้คำปรึกษาความเห็นที่ 2
                                    ทางการแพทย์คือการให้ข้อมูลการรักษาเพื่อให้แพทย์ที่สองวินิจฉัยและ/หรือนำเสนอแผนการรักษา
                                    เพื่อเพิ่มทางเลือกในการรักษาให้เกิดประสิทธิภาพสูงสุด</p>

                                <div class="text-center"><a class="btn btn-outline" href="">ดูข้อมูลเพิ่มเติม </a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="my-health-condition">
                    <h2>เงื่อนไขการขอเอาประกันภัย</h2>

                    <ul>
                        <li>1. การพิจารณารับประกันภัยเป็นไปตามหลักเกณฑ์ของบริษัทฯ</li>
                        <li>2. ผู้ขอเอาประกันภัยต้องมีอายุ 18 &ndash; 60 ปีบริบูรณ์ (ต่ออายุได้ถึง 65 ปี)</li>
                        <li>3. ผู้ขอเอาประกันภัยต้องมีสุขภาพร่างกายแข็งแรง ก่อนวันที่ขอเอาประกันภัย</li>
                        <li>4. แถลงสุขภาพ ไม่ต้องตรวจสุขภาพ
                            (กรณีที่ข้อมูลการแถลงสุขภาพไม่เพียงพอต่อการพิจารณารับประกันภัย
                            ทางบริษัทขอสงวนสิทธิ์ในการแจ้งขอตรวจสุขภาพก่อนรับประกันภัย)
                        </li>
                        <li>5. ข้อมูลในเอกสารนี้เป็นเพียงข้อมูลเบื้องต้นของผลิตภัณฑ์ประกันภัย
                            ผู้ขอเอาประกันภัย/ผู้เอาประกันภัยควรศึกษาข้อมูลเพิ่มเติม
                            และทำความเข้าใจในรายละเอียดเงื่อนไขความคุ้มครอง ผลประโยชน์ และข้อยกเว้น
                            ก่อนตัดสินใจทำประกันภัยทุกครั้ง เมื่อได้รับกรมธรรม์ประกันภัยแล้วโปรดศึกษาเพิ่มเติม
                        </li>
                        <li>6. เงื่อนไขความคุ้มครองเป็นไปตามที่ระบุในกรมธรรม์</li>
                        <li>7. กรณีต้องการใบกำกับภาษีฯ หรือกรมธรรม์ฯ ให้จัดส่งทางไปรษณีย์ กรุณาติดต่อฝ่ายบริการลูกค้า
                            โทร. 1183
                        </li>
                    </ul>
                </div>
            </div>

        </article>
    </main>
@endsection
