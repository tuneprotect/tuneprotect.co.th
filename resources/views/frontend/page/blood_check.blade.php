<section class="wrapper" id="bloodtest-section">
    <form action="/{{$locale}}/BloodTest/CheckBloodTestCode" class="insurance-form" data-form-type="taxdeductionform"
          data-error="@lang("product.blood_test.data-error")"
          data-error-description="@lang("product.blood_test.data-error-description")"
          data-success-description="@lang("product.blood_test.data-success-description")"
          action2="/{{$locale}}/BloodTest/UsedBloodTest/"
          id="frm_bloodcheck" method="post">


            <div class="form-inner">
                <span class="small"><b>@lang("product.blood_test.code-validation")</b></span>
                <div class="two-col">
                <div class="controls-wrapper">
                    <input data-error-required=@lang("product.blood_test.code-validation")
                           id="ctrl_ref_code" name="ctrl_ref_code" placeholder=@lang("product.blood_test.code-placeholder") required="required" type="text" />
                    <label for="ctrl_ref_code">@lang("product.blood_test.code-placeholder")</label></div>

                    <div class="controls-wrapper">
                        <button class="btn btn-primary" data-gtm="bloodtest-form-submit">@lang("product.blood_test.submit")</button>
                    </div>
                </div>
            </div>
        <div id="summary_section" name="summary_section" class="form-inner hideField"></div>


        <div class="controls-wrapper hideField">
            <div class="form-inner">
                <span class="small"><b>@lang("product.blood_test.hospital-select")</b></span>
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
                    <label for="ctrl_hospital">@lang("product.blood_test.hospital-validation")</label>
                </div>
            </div>
        </div>
        <div class="controls-wrapper hideField">
            <h2><span class="small">@lang("product.blood_test.underwrite-condition")</span></h2>
            <span class="small">@lang("product.blood_test.underwrite-condition1")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition2")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition3")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition4")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition5")</span>
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
