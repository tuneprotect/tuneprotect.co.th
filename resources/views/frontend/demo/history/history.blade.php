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

            <h1>ประวัติองค์กร</h1>

            <div>
                <p>เริ่มก่อตั้งกิจการ จากการร่วมมือกันระหว่าง <a
                        href="https://www.tuneprotect.com/corporate/group/about-us/" target="_blank">TPG Tune Protect
                        Group Berhad</a> ซึ่งเป็นบริษัท ประกันภัยที่ทําธุรกิจ ทั้งประกันภัยตรงและประกันภัยต่อใน 17
                    ประเทศทั่วเอเชียแปซิฟิก ตะวันออกกลางและแอฟริกาเหนือ และ บริษัท โอสถสภาประกันภัย จํากัด (มหาชน)
                    ซึ่งเป็นบริษัทใน เครือบริษัท โอสถสภา จํากัด และได้เปลี่ยนชื่อเป็น &ldquo;บริษัท ทูนประกันภัย จํากัด
                    (มหาชน)&rdquo;<br>
                    ปัจจุบันเพื่อตอบย้ำภาพลักษณ์และนโยบาย One Tune
                    Protect บริษัท ทูนประกันภัย จึงเปลี่ยนแปลงชื่อเพื่อ
                    การสื่อสารเป็น Tune Protect Thailand
                </p>

                <hr/>
                <div class="timeline-wrapper">
                    <div id="timeline">
                        <div class="item"><strong>15 กรกฎาคม 2557</strong>

                            <p>เริ่มก่อตั้งกิจการ จากการร่วมมือกันระหว่าง TPG Tune Protect Group Berhad และ บริษัท
                                โอสถสภาประกันภัย จํากัด (มหาชน)</p>
                        </div>

                        <div class="item"><strong>4 กันยายน 2557</strong>

                            <p>เริ่มให้บริการ ประกันภัยการเดินทางแอร์เอเชีย</p>
                        </div>

                        <div class="item"><strong>9 ธันวาคม 2557</strong>

                            <p>เรางวัล Best of the Best ท๊อป 200</p>
                        </div>

                        <div class="item"><strong>2558</strong>

                            <p>บริษัทฯ ประสบความสำเร็จเติบโตขึ้นอย่างก้าวกระโดด 202% จากปี 2557 ในตลาดประกันวินาศภัย</p>
                        </div>

                        <div class="item"><strong>ปัจจุบัน</strong>

                            <p>ปัจจุบันด้วยนโยบาย
                                One Tune Protect
                                บริษัท ทูนประกันภัย
                                จึงเปลี่ยนแปลงชื่อเพื่อ
                                การสื่อสารเป็น Tune
                                Protect Thailand</p>
                        </div>
                    </div>
                </div>

                <section><strong style="display:block;margin-bottom: 20px">ปี2557</strong>

                    <div><span>15 กรกฎาคม</span>

                        <p>เริ่มก่อตั้งกิจการ จากการร่วมมือกันระหว่าง TPG Tune Protect Group Berhad ซึ่งเป็นบริษัท
                            ประกันภัยที่ทําธุรกิจ ทั้งประกันภัยตรงและประกันภัยต่อใน 17 ประเทศทั่วเอเชียแปซิฟิก
                            ตะวันออกกลางและแอฟริกาเหนือ และ บริษัท โอสถสภาประกันภัย จํากัด (มหาชน) ซึ่งเป็นบริษัทใน
                            เครือบริษัท โอสถสภา จํากัด และได้เปลี่ยนชื่อเป็น &ldquo;บริษัท ทูนประกันภัย จํากัด (มหาชน)&rdquo;</p>
                    </div>

                    <div><span>4 กันยายน</span>

                        <p>เริ่มให้บริการ ประกันภัยการเดินทางแอร์เอเชีย Tune Protect Travel Insurance by AirAsia
                            ให้แก่กลุ่มลูกค้าของสายการบินแอร์เอเชีย</p>
                    </div>

                    <div><span>9 ธันวาคม</span>

                        <p>เรางวัล Best of the Best ท๊อป 200 สำหรับขนาดธุรกิจขนาดเล็กในภูมิภาค Forbe Asia Best Under a
                            Million Award</p>
                    </div>
                </section>

                <section><strong style="display:block;margin-bottom: 20px">ปี2558</strong>

                    <div>
                        <p>บริษัทฯ
                            ประสบความสำเร็จอีกครั้งในตลาดประกันวินาศภัยด้วยการพัฒนาผลิตภัณฑ์อันหลากหลายเพื่อตอบโจทย์การคุ้มครองที่เข้ากับคนไทยมากขึ้น
                            และช่วยสร้างหลักประกันความมั่นคงแก่ประชาชนและสังคมไทย พร้อมเบี้ยรับประกันภัยรวม
                            เติบโตขึ้นอย่างก้าวกระโดด 202% จากปี 2557<br>
                            ปัจจุบันด้วยนโยบาย
                            One Tune Protect
                            บริษัท ทูนประกันภัย
                            จึงเปลี่ยนแปลงชื่อเพื่อ
                            การสื่อสารเป็น Tune
                            Protect Thailand
                        </p>
                    </div>
                </section>

                <hr/>
            </div>

            <section class="text-center" style="margin-bottom: 50px">
                <img alt="Tune Protect chart" src="/storage/Organization_Chart/Oganization_Chart_Desktop.jpg"/>
            </section>

            <div style="margin-bottom: 50px">{executive_member}</div>

            <section style="margin-bottom: 50px">
                <h2 style="color: #262932">วิสัยทัศน์ / พันธกิจ</h2>

                <p>&nbsp;ทูนประกันภัยจะเป็นผู้นำในการรับประกันภัยทางดิจิทัลรายย่อย
                    มุ่งเน้นไปที่การขายสินค้าไปยังผู้บริโภคโดยตรง และดำเนินธุรกิจการค้ากับลูกค้ารายปลีกย่อย</p>

                <p>&nbsp; วิสัยทัศน์ &ldquo;เป็นผู้นำในการรับประกันภัยทางดิจิทัลที่เป็นที่ไว้วางใจ
                    และเป็นพันธมิตรกับผู้บริโภคตลอดทุกช่วงของชีวิต
                    และยังมอบความคุ้มครองที่ตอบรับกับวิถีทางการดำเนินชีวิตของผู้บริโภค&rdquo;</p>

                <p>&nbsp; พันธกิจ &ldquo;เราจะสรรสร้างนวัตกรรมที่เอื้อประโยชน์และสามารถแก้ปัญหาให้กับผู้บริโภคได้
                    ทั้งในด้านความคุ้มครอง สุขภาพ และ นวัตกรรมที่จำเป็นในวิถีชีวิตปัจจุบัน
                    โดยผู้บริโภคสามารถเข้าถึงเราได้อย่างสะดวกสบายผ่านช่องทางที่หลากหลาย (ทั้งผ่านทางพันธมิตรทางการค้า
                    ตัวกลางทางการตลาดทางตรง และช่องทางอินเตอร์เน็ต)
                    และใช้ช่องทางดิจิตัลที่สามารถส่งผ่านคุณค่าไปยังผู้ที่เกี่ยวข้อง&rdquo;</p>
            </section>

            <section style="margin-bottom: 50px">
                <h2 style="color: #262932">กลยุทธ์</h2>

                <p>แผนกลยุทธ์เพื่อความเติบโตของบริษัทฯ</p>

                <div class="text-center"><img alt="Tune Protect chart" src="/storage/Organization_Chart/Growth_TH.jpg"
                                              style="width: 600px;"/></div>
            </section>


        </article>
    </main>
@endsection
