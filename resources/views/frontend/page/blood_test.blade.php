<section class="wrapper" id="bloodtest-section">
    <form action="/{{$locale}}/Service/sendBloodTestOTP" class="insurance-form" data-form-type="taxdeductionform"
          data-error="ขออภัย"
          data-error-description="เนื่องจากเกิดข้อผิดพลาดบางประการ"
          data-success-description="ขอบคุณค่ะ โค้ดได้ถูกส่งไปยังเบอร์มือถือของท่านแล้ว! <br> สามารถแจ้งโค้ดของคุณ เพื่อรับบริการตรวจเลือดฟรี! ได้ที่ <br> โรงพยาบาลที่ท่านเลือก"
          id="frm_bloodtest" method="post">

        <div class="form-inner">
            <span class="small"><b>โปรดระบุเลขประจำตัวประชาชน หรือ หนังสือเดินทาง (ID card number or Passport number)</b></span>
            <div class="controls-wrapper">
                <input data-error-required="โปรดระบุเลขประจำตัวประชาชน หรือ หนังสือเดินทาง (ID card number or Passport number)"
                       id="ctrl_card_id" name="card_id" placeholder="เลขที่บัตรประชาชน/หนังสือเดินทาง" required="required" type="text" />
                <label for="ctrl_card_id">เลขที่บัตรประชาชน/หนังสือเดินทาง</label></div>

            <span class="small"> <b>โปรดระบุเลขที่กรมธรรม์ประกันภัยเบาหวาน Protect ของคุณ (Your Policy number diabetes insurance.)</b></span>
            <div class="controls-wrapper">
                <input data-error-required="โปรดระบุเลขที่กรมธรรม์ประกันภัยเบาหวาน Protect ของคุณ (Your Policy number diabetes insurance.)"
                       id="ctrl_policy_no" name="policy_no" placeholder="โปรดระบุเลขที่กรมธรรม์ประกันภัยเบาหวาน Protect ของคุณ" required="required" type="text" />
                <label for="ctrl_policy_no">เลขที่กรมธรรม์ประกันภัยเบาหวาน Protect ของคุณ</label></div>

            <span class="small"> <b>เบอร์โทรศัพท์ (Mobile number)</b></span>
            <div class="controls-wrapper">
                <input data-error-required="โปรดระบุหมายเลขโทรศัพท์"
                       id="ctrl_mobile" name="mobile" placeholder="โปรดระบุหมายเลขโทรศัพท์" required="required" type="text" />
                <label for="ctrl_mobile">โปรดระบุหมายเลขโทรศัพท์</label></div>

        </div>
        <div>
            <h2><span class="small">โรงพยาบาลในเครือที่สามารถเข้ารับบริการตรวจเลือดฟรี</span></h2>
            <ul class="has-bullet">
                <li><span class="small">โรงพยาบาลปิยะเวท (Piyavate Hospital)</span></li>
                <li><span class="small">โรงพยาบาลบางปะกอก 1 (Bangpakok 1 International Hospital)</span></li>
                <li><span class="small">โรงพยาบาลบางปะกอก-รังสิต 2 (Bangpakok Rangsit 2 International Hospital)</span></li>
                <li><span class="small">โรงพยาบาลบางปะกอก 3 (Bangpakok 3 International Hospital)</span></li>
                <li><span class="small">โรงพยาบาลบางปะกอก 8 (Bangpakok 8 International Hospital)</span></li>
                <li><span class="small">โรงพยาบาลบางปะกอก 9 (Bangpakok 9 International Hospital)</span></li>
                <li><span class="small">โรงพยาบาลบางปะกอก สมุทรปราการ (Bangpakok Samut Prakan International Hospital)</span></li>
                <li><span class="small">เกษมราษฎร์ ประชาชื่น (Kasemrad Prachachuen)</span></li>
                <li><span class="small">เกษมราษฎร์ บางแค (Kasemrad Bangkae)</span></li>
                <li><span class="small">เกษมราษฎร์ สระบุรี (Kasemrad Saraburi)</span></li>
                <li><span class="small">เกษมราษฎร์ ศรีบุรินทร์ (Kasemrad Sriburin)</span></li>
                <li><span class="small">เกษมราษฎร์ ฉะเชิงเทรา (Kasemrad Chachoengsao)</span></li>
                <li><span class="small">เกษมราษฎร์ รัตนาธิเบศร์ (Kasemrad Rattanatibeth)</span></li>
                <li><span class="small">เกษมราษฎร์ รามคำแหง (Kasemrad Ramkhamhaeng)</span></li>
                <li><span class="small">เกษมราษฎร์ ปราจีนบุรี (Kasemrad Prachinburi)</span></li>
                <li><span class="small">เกษมราษฎร์ แม่สาย (Kasemrad Hospital Mae Sai)</span></li>
                <li><span class="small">เชียงแสน โพลี่คลินิก (Chiang Saen Polyclinic)</span></li>
                <li><span class="small">โรงพยาบาลเกษมราษฏร์อินเตอร์เนชั่นแนล รัตนาธิเบศร์ (Kasemrad International Hospital Rattanatibeth)</span></li>
                <li><span class="small">โรงพยาบาลเกษมราษฏร์อินเตอร์เนชั่นแนล เวียงจันทน์ (Kasemrad International Hospital Vientiane)</span></li>
                <li><span class="small">โรงพยาบาลเกษมราษฏร์อินเตอร์เนชั่นแนล อรัญประเทศ (Kasemrad International Hospital Aranyaprathet)</span></li>
                <li><span class="small">โรงพยาบาลเวิลด์เมดิคอล (World Medical Hospital)</span></li>
                <li><span class="small">โรงพยาบาลการุญเวช ปทุมธานี (Karunvej Pathumthani Hospital)</span></li>
                <li><span class="small">โรงพยาบาลการุญเวช อยุธยา (Karunvej Ayutthaya Hospital)</span></li>
            </ul>
        </div>
        <div>
            <h2><span class="small">เงื่อนไขการให้บริการ</span></h2>
            <span class="small">1. ผู้ที่สามารถใช้บริการโปรแกรมตรวจเลือดได้คือ ลูกค้าที่ถือกรมธรรม์ของ Tune Protect Thailand ตามแผนประกันเบาหวาน Protect (Bao wan protect)</span><br>
            <span class="small">2. ใช้บริการได้ 1 สิทธิต่อ 1 กรมธรรม์* (เป็นไปตามบริษัทกำหนด) โดยสามารถใช้ได้ตั้งแต่วันที่กรมธรรม์มีผลบังคับ</span><br>
            <span class="small">3. ไม่สามารถโอนสิทธิให้ผู้อื่นหรือแลกเปลี่ยนหรือทอนเป็นเงินสดหรือสิ่งอื่นได้</span><br>
            <span class="small">4. ทั้งนี้เงื่อนไขเป็นไปตามบริษัทฯ กำหนด และบริษัทฯ ขอสงวนสิทธิในการเปลี่ยนแปลงโปรโมชันได้โดยไม่แจ้งล่วงหน้า</span><br>
            <span class="small">5. บริการตรวจเลือดฟรี เป็นการตรวจน้ำตาลในเลือดย้อนหลัง 3 เดือน โดยไม่พบแพทย์ และไม่ต้องงดน้ำหรืออาหารเพื่อรับการตรวจ</span>
        </div>
        <br>
        <div class="text-center">
            <button class="btn btn-primary" data-gtm="bloodtest-form-submit">รับบริการตรวจเลือด</button>
        </div>
    </form>
</section>
