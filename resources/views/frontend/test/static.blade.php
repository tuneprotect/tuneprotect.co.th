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
            <h1>การเรียกร้องค่าสินไหมทดแทนกรมธรรม์ประกันภัยโรคร้ายแรงและอุบัติเหตุ ทูนโพรเทค (CI)</h1>
            <div>
                <h2 class="text-primary">การเรียกร้องค่าสินไหมทดแทนกรมธรรม์ประกันภัยโรคร้ายแรงและอุบัติเหตุ ทูนโพรเทค
                    (CI)</h2>
                <br>
                <h2 class="text-primary">1.ขั้นตอน ระยะเวลา และวิธีการขอรับค่าสินไหมทดแทน</h2>
                <ul>
                    <li><strong>1.1. ช่องทางการเรียกร้องค่าสินไหมทดแทน</strong>
                        <ul class="has-bullet" style="padding-left: 20px">
                            <li>โทรศัพท์: <a href="tel:02-078-5656">02-078-5656</a> กด 1 กด 4</li>
                            <li>ติดต่อบริษัทฯ โดยตรงทางอีเมล, โทรศัพท์ หรือทางไปรษณีย์ <br>

                                <address>
                                    ฝ่ายสินไหมทดแทนทั่วไป <br>
                                    บริษัท ทูนประกันภัย จำกัด (มหาชน)<br>
                                    เลขที่ 3199 อาคารมาลีนนท์ ทาวเวอร์ ชั้น 14 ถนนพระราม 4 แขวงคลองตัน<br>
                                    เขตคลองเตย กรุงเทพมหานคร 10110<br>

                                </address>

                            </li>
                            <li>ติดต่อทางอีเมล: <a href="mailto:benchaphorn.w@tuneprotect.com">benchaphorn.w@tuneprotect.com</a>,
                                <a href="mailto:nattaporn.p@tuneprotect.com">nattaporn.p@tuneprotect.com</a></li>
                        </ul>


                    </li>
                    <li><strong>1.2 ตรวจสอบสิทธิ์รับแจ้งและเปิดเคลม</strong></li>
                    <li><strong>1.3 ขอเอกสารเพิ่มเติม แจ้งผ่านอีเมล</strong></li>
                    <li><strong>1.4 พิจารณาและตรวจสอบเอกสารที่ได้รับ</strong></li>
                    <li><strong>1.5 แจ้งผลการพิจารณาค่าสินไหมทดแทน</strong></li>
                </ul>
                <br>
                <h2 class="text-primary">2. การแจ้งและการเรียกร้องค่าสินไหมทดแทน</h2>
                <p>

                    ผู้ถือกรมธรรม์ประกันภัยและ/หรือผู้เอาประกันภัย ผู้รับผลประโยชน์หรือตัวแทนของบุคคลดังกล่าวแล้วแต่กรณี
                    จะต้องแจ้งให้บริษัทฯ ทราบถึงการบาดเจ็บหรือการเจ็บป่วยโดยไม่ชักช้า
                    และต้องส่งมอบหลักฐานและเอกสารตามที่ระบุไว้ข้างล่างนี้ให้บริษัทฯ
                    ในกรณีที่มีการเสียชีวิตจากอุบัติเหตุจะต้องให้บริษัทฯ ทราบทันที
                    เว้นแต่ผู้เอาประกันภัยมีเหตุอันสมควรไม่อาจกระทำการดังกล่าวได้ในภายในเวลาที่กำหนดหรือภายในกำหนดเวลาที่บริษัทฯ
                    ขยายให้โดยต้องทำเป็นหนังสือชี้แจง
                </p>
                <br>
                <h2 class="text-primary">3. ระยะเวลาในการขอรับค่าสินไหมทดแทน
                    เมื่อบริษัทได้รับเอกสารประกอบการพิจารณาครบถ้วน</h2>
                บริษัทจะชดใช้ค่าสินไหมทดแทน ภายใน 15 วันทำการ หลังจากที่ผู้เอาประกันภัย ผู้รับผลประโยชน์
                หรือผู้มีอำนาจลงนาม ลงนามในหนังสือตกลงค่าสินไหมทดแทนและจัดส่งเอกสารต่างๆ
                ที่เกี่ยวข้องให้แก่บริษัทเป็นที่เรียบร้อยแล้ว
                <ul class="has-bullet" style="padding-left: 20px">
                    <li>กรณีเสียชีวิตจากอุบัติเหตุ บริษัทฯ จะพิจารณาจ่ายค่าสินไหมทดแทนให้แก่ผู้รับผลประโยชน์</li>
                    <li>กรณีอื่นๆ เช่น สูญเสียอวัยวะและสายตา, ทุพพลภาพถาวร ฯลฯ บริษัทฯ
                        จะพิจารณาจ่ายค่าสินไหมทดแทนให้แก่ผู้เอาประกันภัย
                    </li>
                </ul>
                <br>
                <h2 class="text-primary">4. เอกสารที่ใช้ในการพิจารณาค่าสินไหมทดแทน</h2>
                <h3>เอกสารเบื้องต้น (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li>แบบฟอร์มเรียกร้องค่าสินไหมทดแทน <a href="/storage/claim-insurance/ci/form.pdf">(คลิกดาวน์โหลดที่นี่)</a>
                        พร้อมกรอกข้อมูลครบถ้วนและถูกต้อง
                    </li>
                    <li>สำเนาบัตรประจำตัวประชาชนของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง (ID CARD)</li>
                    <li>สำเนาทะเบียนบ้านของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li>สำเนากรมธรรม์ของผู้เอาประกันภัย</li>
                    <li>รายละเอียดบัญชีธนาคาร (Bank account details)</li>
                    <li>เอกสารอื่นๆ ตามที่บริษัทฯร้องขอ</li>

                </ol>
                <br>


                <h3>กรณีเสียชีวิต (Death) กรุณานำส่งเอกสารประกอบการพิจารณาค่าสินไหมดังต่อไปนี้ (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">


                    <li> แบบฟอร์มเรียกร้องค่าสินไหมทดแทน <a href="/storage/claim-insurance/ci/form.pdf">(คลิกดาวน์โหลดที่นี่)</a>
                    </li>
                    <li> สำเนาบัตรประจำตัวประชาชนของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง โดยผู้รับผลประโยชน์
                    </li>
                    <li> สำเนาทะเบียนบ้านของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง โดยผู้รับผลประโยชน์</li>
                    <li> ใบเปลี่ยนชื่อนามสกุลของผู้เอาประกันภัย (ถ้ามี) พร้อมลงชื่อรับรองสำเนาถูกต้อง
                        โดยผู้รับผลประโยชน์
                    </li>
                    <li> สำเนาใบมรณบัตร พร้อมลงชื่อรับรองสำเนาถูกต้อง โดยผู้รับผลประโยชน์</li>
                    <li> สำเนาหนังสือรับรองการตาย (ออกโดยโรงพยาบาล) พร้อมลงชื่อรับรองสำเนาถูกต้อง โดยผู้รับผลประโยชน์
                    </li>
                    <li> รายงานบันทึกประจำวันการเกิดเหตุ (รับรองสำเนาถูกต้อง โดยเจ้าหน้าที่ตำรวจเจ้าของคดี)</li>
                    <li> รายงานสรุปสำนวนคดี และรูปถ่ายสถานที่เกิดเหตุ (ถ้ามี) พร้อมรับรองสำเนาถูกต้อง
                        โดยเจ้าหน้าที่ตำรวจเจ้าของคดี
                    </li>
                    <li> รายงานชันสูตรพลิกศพ (รับรองสำเนาถูกต้อง โดยเจ้าหน้าที่ตำรวจเจ้าของคดี
                        และแพทย์ผู้ทำการชันสูตร)
                    </li>
                    <li> รายงานการผ่าศพ (ถ้ามี)</li>
                    <li> สำเนาประวัติการรักษาทั้งหมดจากโรงพยาบาล ตั้งแต่เกิดเหตุจนกระทั่งเสียชีวิต</li>
                    <li> สำเนาบัตรประชาชนของผู้รับผลประโยชน์ พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> สำเนาทะเบียนบ้านของผู้รับผลประโยชน์ พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> ใบเปลี่ยนชื่อนามสกุลของผู้รับผลประโยชน์(ถ้ามี) พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> เอกสารแสดงความสัมพันธ์ กรณี ผู้รับผลประโยชน์ เป็น สามี/ภรรยา/บุตร เช่น ทะเบียนสมรส,
                        หนังสือรับรองบุตร, สูติบัตรบุตร
                    </li>
                    <li> สำเนาหน้าบัญชีธนาคารแบบออมทรัพย์ ของผู้รับผลประโยชน์</li>
                </ol>
                <br>
                <h3>กรณีสูญเสียอวัยวะและสายตา (Dismemberment and Loss of Sight)
                    กรุณานำส่งเอกสารประกอบการพิจารณาค่าสินไหมดังต่อไปนี้ (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> แบบฟอร์มเรียกร้องค่าสินไหมทดแทน <a href="/storage/claim-insurance/ci/form.pdf">(คลิกดาวน์โหลดที่นี่)</a>
                    </li>
                    <li> สำเนาบัตรประจำตัวประชาชนของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> สำเนาทะเบียนบ้านของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> ใบรับรองแพทย์ตั้งแต่เกิดเหตุจนถึงปัจจุบัน</li>
                    <li> สำเนาบัตรประจำตัวผู้พิการ</li>
                    <li> แบบประเมินการสูญเสียอวัยวะและสายตา จากแพทย์ผู้ทำการรักษา</li>
                    <li> สำเนาประวัติการรักษาทั้งหมดจากโรงพยาบาล ตั้งแต่เกิดเหตุจนถึงปัจจุบัน</li>
                    <li> รูปถ่ายเต็มตัว / อวัยวะที่สูญเสียตั้งแต่วันเกิดเหตุจนถีง ณ ปัจจุบัน</li>
                    <li> รายงานบันทึกประจำวันการเกิดเหตุ (ถ้ามี) (รับรองสำเนาถูกต้อง โดยเจ้าหน้าที่ตำรวจเจ้าของคดี)</li>
                    <li> รายงานสรุปสำนวนคดี และรูปถ่ายสถานที่เกิดเหตุ (ถ้ามี) พร้อมรับรองสำเนาถูกต้อง
                        โดยเจ้าหน้าที่ตำรวจเจ้าของคดี
                    </li>
                    <li> สำเนาหน้าบัญชีธนาคารแบบออมทรัพย์ ของผู้เอาประกันภัย</li>
                </ol>
                <br>
                <h3>กรณีทุพพลภาพถาวร (Permanent Disability) กรุณานำส่งเอกสารประกอบการพิจารณาค่าสินไหมดังต่อไปนี้
                    (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> แบบฟอร์มเรียกร้องค่าสินไหมทดแทน <a href="/storage/claim-insurance/ci/form.pdf">(คลิกดาวน์โหลดที่นี่)</a>
                    </li>
                    <li> สำเนาบัตรประจำตัวประชาชนของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> สำเนาทะเบียนบ้านของผู้เอาประกันภัย พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> ใบรับรองแพทย์ตั้งแต่เกิดเหตุจนถึงปัจจุบัน</li>
                    <li> สำเนาบัตรประจำตัวผู้พิการ</li>
                    <li> แบบประเมินการทุพพลภาพถาวร จากแพทย์ผู้ทำการรักษา</li>
                    <li> สำเนาประวัติการรักษาทั้งหมดจากโรงพยาบาล ตั้งแต่เกิดเหตุจนถึงปัจจุบัน</li>
                    <li> รูปถ่ายเต็มตัวของผู้เอาประกันภัยในสภาพปัจจุบันที่เป็น</li>
                    <li> รายงานบันทึกประจำวันการเกิดเหตุ (ถ้ามี) (รับรองสำเนาถูกต้อง โดยเจ้าหน้าที่ตำรวจเจ้าของคดี)</li>
                    <li> รายงานสรุปสำนวนคดี และรูปถ่ายสถานที่เกิดเหตุ (ถ้ามี) พร้อมรับรองสำเนาถูกต้อง
                        โดยเจ้าหน้าที่ตำรวจเจ้าของคดี
                    </li>
                    <li> สำเนาหน้าบัญชีธนาคารแบบออมทรัพย์ ของผู้เอาประกันภัย/ ผู้อนุบาล</li>
                    <li> สำเนาบัตรประจำตัวประชาชนของผู้อนุบาล พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> สำเนาทะเบียนบ้านของผู้อนุบาล พร้อมลงชื่อรับรองสำเนาถูกต้อง</li>
                    <li> หนังสือรับรอง หรือหนังสือแต่งตั้งผู้อนุบาล</li>
                    <li> สำเนาหน้าบัญชีธนาคารแบบออมทรัพย์ ของผู้เอาประกันภัย/ ผู้อนุบาล</li>
                </ol>
                <br>
                <h3>กรณีการประกันภัยโรคร้ายแรง – โรคมะเร็ง (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล</li>
                    <li> ใบเสร็จรับเงิน (สำเนา) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> เอกสารอื่นๆ (ถ้ามี)</li>
                </ol>
                <br>
                <h3>การประกันภัยโรคร้ายแรง – โรคระบบหัวใจ (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล</li>
                    <li> ใบเสร็จรับเงิน (ฉบับจริง) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> เอกสารอื่นๆ (ถ้ามี)</li>
                </ol>
                <br>
                <h3>การประกันภัยโรคร้ายแรง – โรคระบบสมอง (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล</li>
                    <li> ใบเสร็จรับเงิน (ฉบับจริง) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> เอกสารอื่นๆ (ถ้ามี)</li>
                </ol>
                <br>
                <h3>การประกันภัยโรคร้ายแรง – โรคที่เกิดกับอวัยวะเฉพาะส่วน (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล</li>
                    <li> ใบเสร็จรับเงิน (ฉบับจริง) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> เอกสารอื่นๆ (ถ้ามี)</li>
                </ol>
                <br>

                <h3>การประกันภัยโรคร้ายแรงเนื่องจากแผลบาดเจ็บรุนแรง (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล
                        ตั้งแต่เกิดเหตุจนถึงปัจจุบัน
                    </li>
                    <li> ใบเสร็จรับเงิน (ฉบับจริง) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมดจากโรงพยาบาล รวมถึงผล Lap ทั้งหมด ตั้งแต่เกิดเหตุจนถึงปัจจุบัน</li>
                    <li> สำเนาบัตรประจำตัวผู้พิการ</li>
                    <li> แบบประเมินการสูญเสียอวัยวะและสายตา จากแพทย์ผู้ทำการรักษา</li>
                    <li> รูปถ่ายเต็มตัว / อวัยวะที่สูญเสีย ณ ปัจจุบัน</li>
                    <li> รายงานบันทึกประจำวันการเกิดเหตุ (ถ้ามี) (รับรองสำเนาถูกต้อง โดยเจ้าหน้าที่ตำรวจเจ้าของคดี)</li>
                    <li> รายงานสรุปสำนวนคดี และรูปถ่ายสถานที่เกิดเหตุ (ถ้ามี) พร้อมรับรองสำเนาถูกต้อง
                        โดยเจ้าหน้าที่ตำรวจเจ้าของคดี
                    </li>
                    <li> ภาพถ่ายสถานที่เกิดเหตุ โดยเจ้าหน้าที่ตำรวจเจ้าของคดี</li>
                </ol>
                <br>
                <h3>การประกันภัยโรคร้ายแรง – โรคเบาหวาน (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล</li>
                    <li> ใบเสร็จรับเงิน (ฉบับจริง) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> เอกสารอื่นๆ (ถ้ามี)</li>
                </ol>
                <br>
                <h3>ผลประโยชน์ค่าจ้างพยาบาลพิเศษอันเนื่องมาจากโรคร้ายแรง (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และความจำเป็นในการจ้างพยาบาลพิเศษ
                    </li>
                    <li> ใบเสร็จรับเงิน (สำเนา) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> ใบเสร็จรับเงินค่าจ้างพยาบาลพิเศษของสถานบริการพยาบาล (Nursing Care)</li>
                </ol>
                <br>
                <h3>ผลประโยชน์การชดเชยรายได้รายวันจากการเข้ารักษาตัวเป็นผู้ป่วยในอันเนื่องมาจากโรคร้ายแรง
                    (ฉบับจริง)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> ใบรายงานแพทย์ หรือใบรับรองแพทย์ระบุอาการสำคัญ ผลการวินิจฉัย และการรักษาพยาบาล</li>
                    <li> ใบเสร็จรับเงิน (สำเนา) ที่แสดงรายการค่าใช้จ่าย และใบสรุปปิดหน้างบ (สรุปค่าใช้จ่ายทั้งหมด)
                        ของสถานพยาบาล พร้อมรายการยา และรายละเอียดค่าใช้จ่ายทั้งหมด
                    </li>
                    <li> สำเนาประวัติการรักษาทั้งหมด รวมถึงผล Lap ทั้งหมด</li>
                    <li> เอกสารอื่นๆ (ถ้ามี)</li>
                </ol>
                <br>
                <h2 class="text-primary">5. วิธีการในการขอรับค่าสินไหมทดแทน</h2>
                <p>- โอนเงิน (กรุณาแนบรายละเอียดบัญชีธนาคาร (Bank account details))</p>

                <h2 class="text-primary">6. วิธีการติดต่อบริษัท และหน่วยงานที่เกี่ยวข้อง
                    กรณีมีข้อพิพาทหรือเรื่องร้องเรียน</h2>
                <p>หากผู้เอาประกันภัยมีข้อแนะนำ ข้อร้องเรียน ให้ติดต่อเบอร์โทรศัพท์ <a href="tel:02-078-5656">02-078-5656</a><br><br>
                    <strong>ส่วนบริหารจัดการข้อร้องเรียน</strong><br>
                    3199 อาคารมาลีนนท์ ทาวเวอร์ ถนนพระราม 4 แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110</p>
            </div>

            <div>
                <h2 class="text-primary">1.Procedure, period, and method of claiming compensation</h2>

                <ul>
                    <li><strong> 1.1. Compensation claim channels</strong>
                        <ul class="has-bullet" style="padding-left: 20px">
                            <li>Phone: <a href="tel:02-078-5656">02-078-5656</a> press 1 press 4</li>
                            <li>Contact the general claims department directly by email, phone, or postal mail.<br>
                                <address>
                                    Tune Insurance Public Company Limited <br>
                                    No. 3199 Maleenont Tower, 14th Floor, Rama 4 Road, Klongton Subdistrict
                                    Khlong Toei District, Bangkok 10110
                                </address>
                            </li>
                            <li>contact by email: <a href="mailto:benchaphorn.w@tuneprotect.com">benchaphorn.w@tuneprotect.com</a>,
                                <a href="mailto:nattaporn.p@tuneprotect.com"> nattaporn.p@tuneprotect.com</a></li>
                        </ul>
                    </li>
                    <li><strong> 1.2 Confirm eligibility and open a claim.</strong></li>
                    <li><strong> 1.3. Request for additional documents through email</strong></li>
                    <li><strong> 1.4. Read and verify the documents received.</strong></li>
                    <li><strong> 1.5. Notify the result of covered compensation.</strong></li>
                </ul>
                <br>
                <h2 class="text-primary">2. Notice and claims</h2>
                <p>
                    Insurance policyholder/ insured/ beneficiaries or representatives of such persons. Must notify the
                    Company of any injury or illness without delay. and must deliver the evidence and documents as
                    specified below to the Company</p>
                <p>
                    In the event of accidental death, the Company must be informed immediately, unless the Insured has
                    reasonable grounds for not being able to do so within the specified time or within the time limit
                    set by the Company. The time frame could be extended by providing a written statement.</p>

                <h2 class="text-primary">3. Timeline for claiming compensation after the Company receives completed
                    documents</h2>
                <p>
                    Compensation will be paid within 15 working days after the insured beneficiary or authorized
                    signatory
                    Signing a letter agreeing to receive compensation and submitting relevant documents.
                </p>
                <ul class="has-bullet">
                    <li>In the event of death from an accident, the Company will consider paying compensation to the
                        beneficiary.
                    </li>
                    <li>Other cases such as dismemberment and loss of eyesight, permanent disability, etc., the Company
                        will
                        consider paying compensation to the insured.
                    </li>
                </ul>
                <br>
                <h2 class="text-primary">4. Documents required for claim eligibility</h2>
                <h3>Preliminary documents (original version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Claim Form <a href="/storage/claim-insurance/ci/form.pdf">(Click here to download)</a> with complete and
                        correct information.
                    </li>
                    <li> Copy of ID card of the insured with a signature to ensure its authenticity
                    </li>
                    <li> Copy of the housing registration of the insured with a signature to ensure its authenticity
                    </li>
                    <li> Copy of the policy of the insured
                    </li>
                    <li> Bank account details
                    </li>
                    <li> Other documents as requested by the Company</li>
                </ol>
                <h3> In the event of death, please submit the following documents for compensation (original
                    version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Claim Form <a href="/storage/claim-insurance/ci/form.pdf">(Click here to download)</a>
                    </li>
                    <li> Copy of ID card of the insured with a signature to ensure its authenticity
                    </li>
                    <li> Copy of the housing registration of the insured with a signature to ensure its authenticity
                    </li>
                    <li> Certificate of the name change of the insured (if any) with a signature ensure its authenticity
                        by
                        the beneficiary
                    </li>
                    <li> Copy of death certificate with a signature ensuring its authenticity by the beneficiary
                    </li>
                    <li> Copy of death certificate (issued by the hospital) with a signature ensuring its authenticity
                        by the
                        beneficiary
                    </li>
                    <li>Police incident report (certified copy by an officer on duty responsible for the case)
                    </li>
                    <li> Case summary report and a photograph of the accident scene (if any) with a certified copy by an
                        officer on duty responsible for the case
                    </li>
                    <li> Autopsy report (certified copy by an officer on duty responsible for the case and the medical
                        examiner on duty responsible for the autopsy)
                    </li>
                    <li> Autopsy report (if any)
                    </li>
                    <li> Copy of all medical history from the hospital starting from the date of the incident until the
                        death
                    </li>
                    <li> Copy of the beneficiary's ID card with a signature ensuring its authenticity
                    </li>
                    <li> Copy of the beneficiary's housing registration with a signature ensuring its authenticity
                    </li>
                    <li> Certificate of the name change of the beneficiary (if any) with a signature ensure its
                        authenticity
                    </li>
                    <li> Documents showing the relationship in case the beneficiary is a husband, wife, or a child, such
                        as
                        marriage certificate, child certifying letter, and a birth certificate
                    </li>
                    <li>. Copy of the front page of the savings book account of the beneficiary</li>
                </ol>
                <br>
                <h3>Dismemberment and Loss of Sight, please submit the documents for compensation as follows (original
                    version).</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Claim Form <a href="/storage/claim-insurance/ci/form.pdf">(Click here to download)</a>
                    </li>
                    <li> Copy of ID card of the insured with a signature to ensure its authenticity
                    </li>
                    <li> Copy of the housing registration of the insured with a signature ensuring its authenticity
                    </li>
                    <li> Medical certificate starting from the date of the incident until the present
                    </li>
                    <li> Copy of disabled person's identification card
                    </li>
                    <li> Dismemberment and Vision Loss Assessment Form issued by the treating physician
                    </li>
                    <li> Copy of all medical history from the hospital starting from the date of the incident until the
                        present
                    </li>
                    <li> Full-length photos / damaged organs photos starting from the date of the incident until the
                        present
                    </li>
                    <li> Police incident report (certified copy by an officer on duty responsible for the case)
                    </li>
                    <li> Case summary report and a photograph of the accident scene (if any) with a certified copy by an
                        officer on duty responsible for the case
                    </li>
                    <li> Copy of the front page of the savings book account of the insured</li>
                </ol>
                <br>
                <h3>In case of permanent disability, please submit the following documents supporting the claim
                    (original
                    version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Claim Form <a href="/storage/claim-insurance/ci/form.pdf">(Click here to download)</a>
                    </li>
                    <li> Copy of ID card of the insured with a signature to ensure its authenticity
                    </li>
                    <li> Copy of the housing registration of the insured with a signature ensuring its authenticity
                    </li>
                    <li> Medical certificate starting from the date of the incident until the present
                    </li>
                    <li> Copy of disabled person's identification card
                    </li>
                    <li> Permanent Disability Assessment Form issued by the treating physician
                    </li>
                    <li> Copy of all medical history from the hospital starting from the date of the incident until the
                        present
                    </li>
                    <li> A full-length photograph of the insured in his or her current conditions.
                    </li>
                    <li> Police incident report (certified copy by an officer on duty responsible for the case)
                    </li>
                    <li> Case summary report and a photograph of the accident scene (if any) with a certified copy by an
                        officer on duty responsible for the case)
                    </li>
                    <li> Copy of the front page of the savings book account of the insured or the legal guardian
                    </li>
                    <li> A copy of the guardian's ID card with a signature ensuring its authenticity
                    </li>
                    <li> Copy of housing registration of legal guardian with a signature ensuring its authenticity
                    </li>
                    <li> certificate or a letter stating that the person is the legal guardian
                    </li>
                    <li> Copy of the front page of the savings book account of the insured/ legal guardian</li>
                </ol>
                <br>
                <h3>Critical Illness – Cancer (Early and Late Stage) (Original Version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Other documents (if any)
                </ol>
                <br>
                <h3>Critical Illness Insurance – Cardiovascular Disease (Original Version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Other documents (if any)</li>
                </ol>
                <br>
                <h3>Critical Illness Insurance – Brain Disease (Original Version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Other documents (if any)</li>
                </ol>
                <br>
                <h3>Critical Illness Insurance – Diseases affecting specific organs (original version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Other documents (if any)</li>
                </ol>
                <br>
                <h3>Serious illness insurance due to severe injuries (original version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">

                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required from the day of the incident until the present
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results since the day of the incident until the
                        present
                    </li>
                    <li> Copy of disabled person's identification card
                    </li>
                    <li> Dismemberment and Vision Loss Assessment Form issued by the treating physician
                    </li>
                    <li> Full-length photos / damaged organs photos from the day of the accident to the present
                    </li>
                    <li> Police incident report (certified copy by an officer on duty responsible for the case)
                    </li>
                    <li> Case summary report and a photograph of the accident scene (if any) with a certified copy by an
                        officer on duty responsible for the case)
                    </li>
                    <li> Photograph of the incident taken by an officer on duty responsible for the case</li>
                </ol>
                <br>
                <h3>Critical Illness Insurance - Diabetes (Original)</h3>
                <ol class="has-bullet" style="padding-left: 20px">

                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Other documents (if any)</li>
                </ol>
                <br>
                <h3> Specialist Nurse fee Benefit Due to Critical Illness (Original Version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, the medical
                        treatment required, and the specialist nurse needed
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Receipt of specialist nurse fee (Nursing Care)</li>
                </ol>
                <br>
                <h3>Daily Income Compensation Benefit from Inpatient Hospitalization Due to Serious Illness (Original
                    Version)</h3>
                <ol class="has-bullet" style="padding-left: 20px">
                    <li> Medical report or a medical certificate indicating symptoms, diagnostic results, and the
                        medical
                        treatment required
                    </li>
                    <li> Receipt (copy) showing expenses and a summary sheet (Summary of all expenses) of the hospital
                        with a
                        list of medicines and details of all associated expenses
                    </li>
                    <li> Copy of all medical history, including all lab results.
                    </li>
                    <li> Other documents (if any)</li>
                </ol>
                <br>

                <h2 class="text-primary">5. Methods for claiming compensation</h2>
                <p>- Bank money transfer (Please attach your bank account details)</p>

                <h2 class="text-primary"> How to contact the Company and related agencies in the event of a dispute or
                    complaint</h2>

                <p>
                    If the insured has suggestions or complaints, please contact the telephone number. <a
                        href="tel:02-078-5656">02-078-5656</a>
                    <br><br>
                    <strong>Customer complaint department</strong><br>

                    3199 Maleenont Tower (14th Floor), Rama IV Road, Klongton,
                    Khlong Toei District, Bangkok 10110
                </p>
            </div>

        </article>
    </main>
@endsection
