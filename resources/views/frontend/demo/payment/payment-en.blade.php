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
            <h1>Payment Methods & Channel</h1>
            <div>
                <div class="payment-wrap">
                    <table class="no-mobile payment">
                        <thead>
                        <tr>
                            <th style="font-weight: bold;">
                                Payment Channels
                            </th>
                            <th style="font-weight: bold;">
                                Credit Card
                            </th>
                            <th style="font-weight: bold;">
                                Debit Card
                            </th>
                            <th style="font-weight: bold;">
                                Cash/ Check/ Draft
                            </th>
                            <th style="font-weight: bold;">
                                Direct Debit/Web Payment
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style="background-color: #138f2d;color:#fff;font-weight: bold;">Kasikorn Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #4e2e7f; color:#fff;font-weight: bold;">Siam Commercial Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #1e4598; color:#fff;font-weight: bold;">Bangkok Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #fc4f1f; color:#fff;font-weight: bold;">Thanachart Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #fec43b; color:#fff;font-weight: bold;">Bank of Ayudhya</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #1279be; color:#fff;font-weight: bold;">TMB Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #7e2f36; color:#fff;font-weight: bold;">CIMB Thai</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #0b3979; color:#fff;font-weight: bold;">UOB Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        <tr>
                            <td style="background-color: #1ba5e1; color:#fff;font-weight: bold;">Krungthai Bank</td>
                            <td><i class="icofont-check-alt"><span class="text-primary">*</span></i></td>
                            <td><i class="icofont-check-alt"><span class="text-primary">**</span></i></td>
                            <td><i class="icofont-close-line">&nbsp;</i></td>
                            <td><i class="icofont-check-alt">&nbsp;</i></td>
                        </tr>
                        </tbody>
                    </table>

                    <p style="padding-top:40px;">
                        <i class="icofont-check-alt"><span class="text-primary">*</span></i> Tune Protect accept payment
                        by all credit cards under Visa, Master and JCB.
                    </p>
                    <p>
                        <i class="icofont-check-alt"><span class="text-primary">**</span></i>Tune Protect accept payment
                        by all debit cards under Visa and Master. You may need to activate your debit card for online
                        payment first.
                    </p>
                    <p>
                        <span>***</span> Personal Accident, COVID-19 and Travel Accident insurance is available to pay by
                        Credit/Debit card, e-Wallet and Bank Website.
                    </p>
                </div>
                <div class="payment-wrap" style="max-width: 360px; margin:0 auto;">
                    <table class="no-mobile payment">
                        <thead>
                        <tr>
                            <th style="font-weight: bold;">
                                Other Channel
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
