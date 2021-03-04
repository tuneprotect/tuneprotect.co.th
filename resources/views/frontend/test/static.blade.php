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
                <a class="financeCollapse" data-year="2020"><h2
                        style="text-decoration: underline; margin:20px 0 0; color:black;">2020 - Financial Disclosure
                        (Por phor chor) Quarterly</h2></a>
                <section class="financeCollapsePanel on" data-year="2020">
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q1/2020</h3>
                                <a href="/storage/financial/financial_63_1.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q2/2020</h3>
                                <a href="/storage/financial/financial_63_2.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>

                    </div>
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q3/2020</h3>
                                <a href="/storage/financial/financial_63_3.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                    </div>
                </section>
                <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red;">
                <a class="financeCollapse" data-year="2019"><h2
                        style="text-decoration: underline; margin:20px 0 0; color:black;">
                        2019 - Financial Disclosure (Por phor chor) Quarterly</h2></a>
                <section class="financeCollapsePanel" data-year="2019" style="padding:20px 0 10px;">
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q1/2019</h3>
                                <a href="/storage/financial/financial_62_1.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q2/2019</h3>
                                <a href="/storage/financial/financial_62_2.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>

                    </div>
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q3/2019</h3>
                                <a href="/storage/financial/financial_62_3.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q4/2019</h3>
                                <a href="/storage/financial/financial_62_4.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                    </div>
                    <p style="display: flex; align-items: flex-start; flex-direction: column;">
                        <span style="padding:0 0 10px 0;">Annual Financial Statement</span>
                        <a href="/storage/financial/financial_62_all.pdf" target="_blank" class="btn btn-outline">
                            details</a>
                    </p>
                </section>
                <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red;">
                <a class="financeCollapse" data-year="2018">
                    <h2 style="text-decoration: underline; margin:20px 0 0; color:black;">
                        2018 - Financial Disclosure (Por phor chor) Quarterly
                    </h2>
                </a>
                <section class="financeCollapsePanel" data-year="2018" style=" padding:20px 0 10px;">
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q1/2018</h3>
                                <a href="/storage/financial/financial_61_1.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q2/2018</h3>
                                <a href="/storage/financial/financial_61_2.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>

                    </div>
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q3/2018</h3>
                                <a href="/storage/financial/financial_61_3.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q4/2018</h3>
                                <a href="/storage/financial/financial_61_4.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                    </div>
                    <p style="display: flex; align-items: flex-start; flex-direction: column;">
                        <span style="padding:0 0 10px 0;">Annual Financial Statement</span>
                        <a href="/storage/financial/financial_61_all.pdf" target="_blank" class="btn btn-outline">
                            details</a>
                    </p>
                </section>
                <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red;">
                <a class="financeCollapse" data-year="2017">
                    <h2 style="text-decoration: underline; margin:20px 0 0; color:black;">2017 - Financial Disclosure
                        (Por phor chor) Quarterly</h2>
                </a>
                <section class="financeCollapsePanel" data-year="2017" style=" padding:20px 0 10px;">
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q1/2017</h3>
                                <a href="/storage/financial/financial_60_1.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q2/2017</h3>
                                <a href="/storage/financial/financial_60_2.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>

                    </div>
                    <div class="two-col">
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q3/2017</h3>
                                <a href="/storage/financial/financial_60_3.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction: row; padding:10px 15px;">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img src="/storage/financial/icon-personal-disability.png"
                                     alt="Tune Protect Travel Easy">
                            </div>
                            <div
                                style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                <h3>Q4/2017</h3>
                                <a href="/storage/financial/financial_60_4.pdf" target="_blank"
                                   class="btn btn-gradient">details</a>
                            </div>
                        </div>
                    </div>
                    <p style="display: flex; align-items: flex-start; flex-direction: column;">
                        <span style="padding:0 0 10px 0;">Annual Financial Statement</span>
                        <a href="/storage/financial/financial_60_all.pdf" target="_blank" class="btn btn-outline">
                            details</a>
                    </p>
                </section>
                <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red; margin-bottom:20px;">
            </div>

        </article>
    </main>
@endsection
