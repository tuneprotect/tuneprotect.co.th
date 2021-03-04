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
            <h1>ข้อมูลสำคัญทางการเงิน</h1>
                <div>
                    <a class="financeCollapse" data-year="2563"><h2
                            style="text-decoration: underline; margin:20px 0 0; color:black;">2563 - รายการเปิดเผยข้อมูล
                            (ปผว) รายไตรมาส</h2></a>
                    <section class="financeCollapsePanel on" data-year="2563">
                        <div class="two-col">
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 1/2563</h3>
                                    <a href="/storage/financial/financial_63_1.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 2/2563</h3>
                                    <a href="/storage/financial/financial_63_2.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
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
                                    <h3>ไตรมาส 3/2563</h3>
                                    <a href="/storage/financial/financial_63_3.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red;">
                    <a class="financeCollapse" data-year="2562"><h2
                            style="text-decoration: underline; margin:20px 0 0; color:black;">
                            2562 - รายการเปิดเผยข้อมูล (ปผว) รายไตรมาส</h2></a>
                    <section class="financeCollapsePanel" data-year="2562" style="padding:20px 0 10px;">
                        <div class="two-col">
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 1/2562</h3>
                                    <a href="/storage/financial/financial_62_1.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 2/2562</h3>
                                    <a href="/storage/financial/financial_62_2.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
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
                                    <h3>ไตรมาส 3/2562</h3>
                                    <a href="/storage/financial/financial_62_3.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 4/2562</h3>
                                    <a href="/storage/financial/financial_62_4.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                        </div>
                        <p style="display: flex; align-items: flex-start; flex-direction: column;">
                            <span style="padding:0 0 10px 0;">แบบรายการเปิดเผยข้อมูลรายปี</span>
                            <a href="/storage/financial/financial_62_all.pdf" target="_blank" class="btn btn-outline">
                                รายละเอียด</a>
                        </p>
                    </section>
                    <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red;">
                    <a class="financeCollapse" data-year="2561">
                        <h2 style="text-decoration: underline; margin:20px 0 0; color:black;">
                            2561 - รายการเปิดเผยข้อมูล (ปผว) รายไตรมาส
                        </h2>
                    </a>
                    <section class="financeCollapsePanel" data-year="2561" style=" padding:20px 0 10px;">
                        <div class="two-col">
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 1/2561</h3>
                                    <a href="/storage/financial/financial_61_1.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 2/2561</h3>
                                    <a href="/storage/financial/financial_61_2.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
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
                                    <h3>ไตรมาส 3/2561</h3>
                                    <a href="/storage/financial/financial_61_3.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 4/2561</h3>
                                    <a href="/storage/financial/financial_61_4.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                        </div>
                        <p style="display: flex; align-items: flex-start; flex-direction: column;">
                            <span style="padding:0 0 10px 0;">แบบรายการเปิดเผยข้อมูลรายปี</span>
                            <a href="/storage/financial/financial_61_all.pdf" target="_blank" class="btn btn-outline">
                                รายละเอียด</a>
                        </p>
                    </section>
                    <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red;">
                    <a class="financeCollapse" data-year="2560">
                        <h2 style="text-decoration: underline; margin:20px 0 0; color:black;">2560 - รายการเปิดเผยข้อมูล
                            (ปผว) รายไตรมาส</h2>
                    </a>
                    <section class="financeCollapsePanel" data-year="2560" style=" padding:20px 0 10px;">
                        <div class="two-col">
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 1/2560</h3>
                                    <a href="/storage/financial/financial_60_1.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 2/2560</h3>
                                    <a href="/storage/financial/financial_60_2.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
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
                                    <h3>ไตรมาส 3/2560</h3>
                                    <a href="/storage/financial/financial_60_3.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                            <div style="display:flex; flex-direction: row; padding:10px 15px;">
                                <div style="display:flex; justify-content: center; align-items: center;">
                                    <img src="/storage/financial/icon-personal-disability.png"
                                         alt="Tune Protect Travel Easy">
                                </div>
                                <div
                                    style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding:0 15px;">
                                    <h3>ไตรมาส 4/2560</h3>
                                    <a href="/storage/financial/financial_60_4.pdf" target="_blank"
                                       class="btn btn-gradient">รายละเอียด</a>
                                </div>
                            </div>
                        </div>
                        <p style="display: flex; align-items: flex-start; flex-direction: column;">
                            <span style="padding:0 0 10px 0;">แบบรายการเปิดเผยข้อมูลรายปี</span>
                            <a href="/storage/financial/financial_60_all.pdf" target="_blank" class="btn btn-outline">
                                รายละเอียด</a>
                        </p>
                    </section>
                    <hr style="border-top:1px solid #fff; border-left:1px solid #fff;border-right:1px solid #fff; border-bottom:3px solid red; margin-bottom:20px;">
                </div>
        </article>
    </main>
@endsection
