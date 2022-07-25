<section class="wrapper" id="bloodtest-section">
    <form action="/{{$locale}}/Service/sendBloodTestOTP" class="insurance-form" data-form-type="taxdeductionform"
          data-error="@lang("product.blood_test.data-error")"
          data-error-description="@lang("product.blood_test.data-error-description")"
          data-success-description="@lang("product.blood_test.data-success-description")"
          id="frm_bloodtest" method="post">

        <div class="form-inner">
            <span class="small"><b>@lang("product.blood_test.card-validation")</b></span>
            <div class="controls-wrapper">
                <input data-error-required=@lang("product.blood_test.card-validation")
                       id="ctrl_card_id" name="card_id" placeholder=@lang("product.blood_test.card-placeholder") required="required" type="text" />
                <label for="ctrl_card_id">@lang("product.blood_test.card-placeholder")</label></div>

            <span class="small"> <b>@lang("product.blood_test.policy-validation")</b></span>
            <div class="controls-wrapper">
                <input data-error-required=@lang("product.blood_test.policy-validation")
                       id="ctrl_policy_no" name="policy_no" placeholder=@lang("product.blood_test.policy-placeholder") required="required" type="text" />
                <label for="ctrl_policy_no">@lang("product.blood_test.policy")</label></div>

            <span class="small"> <b>@lang("product.blood_test.mobile")</b></span>
            <div class="controls-wrapper">
                <input data-error-required=@lang("product.blood_test.mobile-validation")
                       id="ctrl_mobile" name="mobile" placeholder=@lang("product.blood_test.mobile-validation") required="required" type="text" />
                <label for="ctrl_mobile">@lang("product.blood_test.mobile-validation")</label></div>

        </div>
        <div>
            <h2><span class="small">@lang("product.blood_test.hospital")</span></h2>
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
            <h2><span class="small">@lang("product.blood_test.underwrite-condition")</span></h2>
            <span class="small">@lang("product.blood_test.underwrite-condition1")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition2")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition3")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition4")</span><br>
            <span class="small">@lang("product.blood_test.underwrite-condition5")</span>
        </div>
        <br>
        <div class="text-center">
            <button class="btn btn-primary" data-gtm="bloodtest-form-submit">@lang("product.blood_test.submit2")</button>
        </div>
    </form>
</section>
