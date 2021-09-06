@extends('frontend.layout.main')

@section('page')
    <main data-package="{{$selected}}">
        @if(isset($current_package))
            <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
            <div class="two-tone-icon" id="two-tone-icon">
                <span><img src="{{url($current_package->pic)}}"></span>
                <div class="description-product">
                    {!! $current_package->locales[$locale]->content !!}
                </div>
            </div>
            @includeIf('frontend.form.'.strtolower($selected) ,[ 'product' => $current_product,'package' => $current_package,'selected' => $selected])

            @if($selected === "CI")
                <div class="wrapper">
                    @if($locale == 'th')
                        <div class="my-health-condition">
                            <h2>เงื่อนไขการขอเอาประกันภัย</h2>
                            <ol class="has-bullet">
                                <li>การพิจารณารับประกันภัยเป็นไปตามหลักเกณฑ์ของบริษัทฯ</li>
                                <li>ผู้ขอเอาประกันภัยต้องมีอายุ 18 &ndash; 60 ปีบริบูรณ์ (ต่ออายุได้ถึง 65 ปี)</li>
                                <li>ผู้ขอเอาประกันภัยต้องมีสุขภาพร่างกายแข็งแรง ก่อนวันที่ขอเอาประกันภัย</li>
                                <li>แถลงสุขภาพ ไม่ต้องตรวจสุขภาพ (กรณีที่ข้อมูลการแถลงสุขภาพไม่เพียงพอต่อการพิจารณารับประกันภัย ทางบริษัทขอสงวนสิทธิ์ในการแจ้งขอตรวจสุขภาพก่อนรับประกันภัย)</li>
                                <li>ข้อมูลในเอกสารนี้เป็นเพียงข้อมูลเบื้องต้นของผลิตภัณฑ์ประกันภัย ผู้ขอเอาประกันภัย/ผู้เอาประกันภัยควรศึกษาข้อมูลเพิ่มเติม และทำความเข้าใจในรายละเอียดเงื่อนไขความคุ้มครอง ผลประโยชน์ และข้อยกเว้น ก่อนตัดสินใจทำประกันภัยทุกครั้ง เมื่อได้รับกรมธรรม์ประกันภัยแล้วโปรดศึกษาเพิ่มเติม</li>
                                <li>เงื่อนไขความคุ้มครองเป็นไปตามที่ระบุในกรมธรรม์</li>
                                <li>กรณีต้องการใบกำกับภาษีฯ หรือกรมธรรม์ฯ ให้จัดส่งทางไปรษณีย์ กรุณาติดต่อฝ่ายบริการลูกค้า โทร. 1183</li>
                                <li>ท่านสามารถใช้สิทธิ์ยกเลิกกรมธรรม์ (Free Look Period) ภายใน 15 วัน นับแต่วันที่ได้รับกรมธรรม์ โดยไม่มีค่าใช้จ่าย</li>
                            </ol>
                        </div>
                    @else
                        <div class="my-health-condition">
                            <h2>Insurance claim conditions</h2>
                            <ol class="has-bullet">
                                <li>The underwriting consideration is made strictly following the Company&rsquo;s guidelines.</li>
                                <li>The applicant must be 18-60 years of age (renewable up to 65 years).</li>
                                <li>The applicant must be in good health before applying for the insurance</li>
                                <li>No health check necessary unless there are discrepancies in the health declaration (In the event which there is a discrepancy in the health declaration or information is insufficient. The Company reserves the right to request a health check-up before issuing an insurance policy.)</li>
                                <li>The information on this document is only preliminary information on the insurance products. The applicant/insured should conduct more research and understand the details of coverage conditions, benefits, and exclusions before deciding to purchase the insurance. After receiving the insurance policy, please review the information.</li>
                                <li>The coverage conditions are as stipulated in the policy.</li>
                                <li>If you need a tax invoice or policy to be delivered by post, please contact our customer service team at 1183.</li>
                                <li>You are entitled to the right to cancel the policy (Free Look Period) within 15 days from the date of receiving the policy. Free of charge.</li>
                            </ol>
                        </div>
                    @endif
                    <div class="btn-wrapper text-center goto-step1">
                        <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" type="button"
                                class="btn btn-primary btn-goto btn-goto-step1">@lang('product.next')</button>
                    </div>
                </div>

                @include('frontend.component.faq')
                @include('frontend.component.lead-form')
            @endif


        @endif

    </main>

@endsection
