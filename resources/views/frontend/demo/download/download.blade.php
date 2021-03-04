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

            <h1 style="margin-bottom: 50px;text-align: center">ดาวน์โหลดเอกสาร</h1>

            <div>
                <h2 style="color: #0c1021">แบบฟอร์มเรียกร้องค่าสินไหมทดแทน</h2>
                <div>
                    <h3 style="text-decoration: underline;">
                        ประกันภัยการเดินทาง
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับ Tune iPass
                            <a href="/storage/form/1-TA-Inbound-For-Foreign.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc"
                               title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                        <li style="margin: 0 auto">แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันเดินทาง AirAsia
                            <a href="/storage/form/2-Claim-Form-TAA-TH.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 style="text-decoration: underline;">
                        ประกันภัยอุบัติเหตุส่วนบุคคล
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">
                            แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันอุบัติเหตุส่วนบุคคลและกลุ่ม
                            <a href="/storage/form/4-PA-Claim-Form.pdf.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                        <li style="margin: 0 auto"> แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันอุบัติเหตุส่วนบุคคล
                            กรณีมรณกรรม
                            <a href="/storage/form/5-Personal-Accident-In-case-of-death.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                        <li style="margin: 0 auto"> แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันอุบัติเหตุส่วนบุคคล
                            กรณีทุพพลภาพสิ้นเชิงถาวร
                            <a href="/storage/form/6-case-of-permanent-disability.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style="text-decoration: underline;">
                        ประกันภัย COVID-19
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับ iPass COVID-19
                            <a href="/storage/form/3-covid2019.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc">ดาวน์โหลด</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style="text-decoration: underline;">
                        ประกันภัยสำหรับธุรกิจ
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันภัยทรัพย์สิน
                            <a href="/storage/form/7-PROPERTY-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc"
                               title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                        <li style="margin: 0 auto">แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันภัยการขนส่งสินค้า
                            <a href="/storage/form/8-MARINE-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                        <li style="margin: 0 auto">แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันภัยกอล์ฟ
                            <a href="/storage/form/9-GFI-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                        <li style="margin: 0 auto">
                            แบบฟอร์มเรียกร้องค่าสินไหมทดแทนสำหรับประกันภัยความรับผิดต่อบุคคลภายนอก
                            <a href="/storage/form/10-PLI-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="ดาวน์โหลด">ดาวน์โหลด</a>
                        </li>
                    </ul>
                </div>


            </div>
        </article>
    </main>
@endsection
