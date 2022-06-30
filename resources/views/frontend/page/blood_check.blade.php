<section class="wrapper" id="bloodtest-section">
    <form action="/{{$locale}}/BloodTest/CheckBloodTestCode" class="insurance-form" data-form-type="taxdeductionform"
          data-error="ขออภัย กรุณาลองใหม่อีกครั้ง"
          data-error-description="เนื่องจากเกิดข้อผิดพลาดบางประการ"
          data-success-description="ขอบคุณค่ะ โค้ดได้ถูกส่งไปยังเบอร์มือถือของท่านแล้ว! <br> สามารถแจ้งโค้ดของคุณ เพื่อรับบริการตรวจเลือดฟรี! ได้ที่ <br> โรงพยาบาลที่ท่านเลือก"
          action2="/{{$locale}}/BloodTest/UsedBloodTest/"
          id="frm_bloodcheck" method="post">


            <div class="form-inner">
                <span class="small"><b>โปรดใส่โค้ดตรวจเลือดฟรี ของลูกค้าเพื่อตรวจสอบสิทธิ์(Please fill in a free blood test code for validation.)</b></span>
                <div class="two-col">
                <div class="controls-wrapper">
                    <input data-error-required="โปรดใส่โค้ดตรวจเลือดฟรี ของลูกค้าเพื่อตรวจสอบสิทธิ์(Please fill in a free blood test code for validation.)"
                           id="ctrl_ref_code" name="ctrl_ref_code" placeholder="โปรดใส่โค้ดตรวจเลือดฟรี" required="required" type="text" />
                    <label for="ctrl_ref_code">โปรดใส่โค้ดตรวจเลือดฟรี</label></div>

                    <div class="controls-wrapper">
                        <button class="btn btn-primary" data-gtm="bloodtest-form-submit">รับบริการตรวจเลือด</button>
{{--                        <div class="text-center">--}}
{{--                            <button class="btn btn-primary" data-gtm="bloodtest-form-submit">รับบริการตรวจเลือด</button>--}}
{{--                        </div>--}}
{{--                        <div class="btn-wrapper">--}}
{{--                            <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button"--}}
{{--                                    value="accept">ตรวจสอบสิทธิ์</button>--}}
{{--                        </div>--}}

                    </div>
                </div>
            </div>

{{--        <div class="controls-wrapper hideField">--}}
{{--            <div id="summary_section" name="summary_section" class="form-inner"></div>--}}
{{--        </div>--}}

        <div id="summary_section" name="summary_section" class="form-inner hideField"></div>


        <div class="controls-wrapper hideField">
            <div class="form-inner">
                <span class="small"><b>เลือกโรงพยาบาลในเครือที่ลูกค้าต้องการเข้ารับบริการตรวจเลือด (Please select a Hospital in the network to receive a free blood test code.)</b></span>
                <div class="controls-wrapper">
                    <select id="ctrl_hospital" name="ctrl_hospital">
                        <option value="">โรงพยาบาลปิยะเวท (Piyavate Hospital)</option>
                        <option value="">โรงพยาบาลบางปะกอก 1 (Bangpakok 1 International Hospital)</option>
                        <option value="">โรงพยาบาลบางปะกอก-รังสิต 2 (Bangpakok Rangsit 2 International Hospital)</option>
                        <option value="">โรงพยาบาลบางปะกอก 3 (Bangpakok 3 International Hospital)</option>
                        <option value="">โรงพยาบาลบางปะกอก 8 (Bangpakok 8 International Hospital)</option>
                        <option value="">โรงพยาบาลบางปะกอก 9 (Bangpakok 9 International Hospital)</option>
                        <option value="">โรงพยาบาลบางปะกอก สมุทรปราการ (Bangpakok Samut Prakan International Hospital)</option>
                        <option value="">เกษมราษฎร์ ประชาชื่น (Kasemrad Prachachuen)</option>
                        <option value="">เกษมราษฎร์ บางแค (Kasemrad Bangkae)</option>
                        <option value="">เกษมราษฎร์ สระบุรี (Kasemrad Saraburi)</option>
                        <option value="">เกษมราษฎร์ ศรีบุรินทร์ (Kasemrad Sriburin)</option>
                        <option value="">เกษมราษฎร์ ฉะเชิงเทรา (Kasemrad Chachoengsao)</option>
                        <option value="">เกษมราษฎร์ รัตนาธิเบศร์ (Kasemrad Rattanatibeth)</option>
                        <option value="">เกษมราษฎร์ รามคำแหง (Kasemrad Ramkhamhaeng)</option>
                        <option value="">เกษมราษฎร์ ปราจีนบุรี (Kasemrad Prachinburi)</option>
                        <option value="">เกษมราษฎร์ แม่สาย (Kasemrad Hospital Mae Sai)</option>
                        <option value="">เชียงแสน โพลี่คลินิก (Chiang Saen Polyclinic)</option>
                        <option value="">โรงพยาบาลเกษมราษฏร์อินเตอร์เนชั่นแนล รัตนาธิเบศร์ (Kasemrad International Hospital Rattanatibeth)</option>
                        <option value="">โรงพยาบาลเกษมราษฏร์อินเตอร์เนชั่นแนล เวียงจันทน์ (Kasemrad International Hospital Vientiane)</option>
                        <option value="">โรงพยาบาลเกษมราษฏร์อินเตอร์เนชั่นแนล อรัญประเทศ (Kasemrad International Hospital Aranyaprathet)</option>
                        <option value="">โรงพยาบาลเวิลด์เมดิคอล (World Medical Hospital)</option>
                        <option value="">โรงพยาบาลการุญเวช ปทุมธานี (Karunvej Pathumthani Hospital)</option>
                        <option value="">โรงพยาบาลการุญเวช อยุธยา (Karunvej Ayutthaya Hospital)</option>
                    </select>
                    <label for="ctrl_hospital">โปรดเลือกโรงพยาบาล</label>
                </div>
            </div>
        </div>
        <div class="controls-wrapper hideField">
            <h2><span class="small">เงื่อนไขการให้บริการ</span></h2>
            <span class="small">1. ผู้ที่สามารถใช้บริการโปรแกรมตรวจเลือดได้คือ ลูกค้าที่ถือกรมธรรม์ของ Tune Protect Thailand ตามแผนประกันเบาหวาน Protect (Bao wan protect)</span><br>
            <span class="small">2. ใช้บริการได้ 1 สิทธิต่อ 1 กรมธรรม์* (เป็นไปตามบริษัทกำหนด) โดยสามารถใช้ได้ตั้งแต่วันที่กรมธรรม์มีผลบังคับ</span><br>
            <span class="small">3. ไม่สามารถโอนสิทธิให้ผู้อื่นหรือแลกเปลี่ยนหรือทอนเป็นเงินสดหรือสิ่งอื่นได้</span><br>
            <span class="small">4. ทั้งนี้เงื่อนไขเป็นไปตามบริษัทฯ กำหนด และบริษัทฯ ขอสงวนสิทธิในการเปลี่ยนแปลงโปรโมชันได้โดยไม่แจ้งล่วงหน้า</span>
        </div>
        <br>
        <div class="text-center hideField">
{{--            <button class="btn btn-primary" data-gtm="bloodtest-form-submit">รับบริการตรวจเลือด</button>--}}
            <div id="submit_section" name="submit_section" class="form-inner"></div>

{{--            <div class="btn-wrapper">--}}
{{--                <button data-gtm="contact-form-accept" class="btn btn-primary" name="action" type="button" value="accept">รับบริการตรวจเลือด</button>--}}
{{--            </div>--}}

        </div>
    </form>
</section>
