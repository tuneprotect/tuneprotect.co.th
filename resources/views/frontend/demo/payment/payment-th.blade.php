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
            <h1>ช่องทางการชำระเบี้ยประกันภัย</h1>
            <div>
                <div class="payment-wrap">
                    <table class="no-mobile payment">
                        <thead>
                        <tr>
                            <th style="font-weight: bold;">
                                ผู้ให้บริการ
                            </th>
                            <th style="font-weight: bold;">
                                เครดิตการ์ด
                            </th>
                            <th style="font-weight: bold;">
                                เดบิตการ์ด
                            </th>
                            <th style="font-weight: bold;">
                                เงินสด/ เช็ค/ ดร๊าฟ
                            </th>
                            <th style="font-weight: bold;">
                                ผ่านเว็บไซต์ของธนาคาร
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style="background-color: #138f2d;color:#fff;font-weight: bold;">ธนาคารกสิกรไทย</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #4e2e7f; color:#fff;font-weight: bold;">ธนาคารไทยพาณิชย์</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #1e4598; color:#fff;font-weight: bold;">ธนาคารกรุงเทพ</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #fc4f1f; color:#fff;font-weight: bold;">
                                ธนาคารธนชาต</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #fec43b; color:#fff;font-weight: bold;">ธนาคารกรุงศรี</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #1279be; color:#fff;font-weight: bold;">ธนาคารทหารไทย</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #7e2f36; color:#fff;font-weight: bold;">ธนาคาร ซีไอเอ็มบี ไทย</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #0b3979; color:#fff;font-weight: bold;">ธนาคาร ยูโอบี</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #1ba5e1; color:#fff;font-weight: bold;">ธนาคารกรุงไทย</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        </tbody>
                    </table>
                    <p style="padding-top:40px;">
                        <i class="icofont-check-alt"><span class="text-primary">*</span></i>
                        บริษัทรับชำระบัตรเครดิตทุกประเภทที่ร่วม Visa, Master และ JCB.
                    </p>
                    <p>
                        <i class="icofont-check-alt"><span class="text-primary">**</span></i>
                        บริษัทรับชำระบัตรเดบิตทุกประเภทที่ร่วม Visa and Master.
                        ท่านอาจจะต้องติดต่อธนาคารเจ้าของบัตรเพื่อเปิดใช้บริการชำระเงินออนไลน์
                    </p>
                    <p>
                        <span>***</span> ผลิตภัณฑ์ ประกันภัยอุบัติเหตุส่วนบุคคล, ประกันภัย COVID-19
                        และประกันภัยการเดินทาง สามารถชำระผ่านช่องทาง บัตรเครดิต/บัตรเดบิต, e-Wallet
                        และผ่านเว็บไซต์ของธนาคารได้
                    </p>
                </div>
                <div class="payment-wrap" style="max-width: 360px; margin:0 auto;">
                    <table class="no-mobile payment">
                        <thead>
                        <tr>
                            <th style="font-weight: bold;">
                                ชื่องทางอื่นๆ
                            </th>
                            <th style="font-weight: bold;">
                                e-Wallet
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style="background-color :#0079C1;color:#fff; font-weight: bold;">Alipay</td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color :#00B900;color:#fff; font-weight: bold;">Wechat</td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color :#0079C1;color:#fff; font-weight: bold;">Paypal</td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color :#00B900;color:#fff; font-weight: bold;">Line Pay</td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color :#b3d236;color:#fff; font-weight: bold;">Mpay</td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color :#00B900;color:#fff; font-weight: bold;">Grab</td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </article>
    </main>
@endsection
