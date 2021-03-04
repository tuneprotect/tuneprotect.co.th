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
            <h1 style="margin-bottom: 50px;text-align: center">ประกันความเสี่ยงภัยทุกชนิดของอุตสาหกรรม</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ให้ทูนฯคุ้มครองความเสี่ยงภัยทุกชนิดของธุรกิจของคุณ
                    </h2>
                    <p>
                        ประกันความเสี่ยงภัยทุกชนิด เหมาะกับ ธุรกิจขนาดใหญ่ที่มีทุนประกันภัยสูง เช่น อาคารชุด,
                        โรงงาน,โรงแรม
                        ,โครงการอาคารสำนักงานเพื่อคุ้มครองการเสี่ยงภัยทุกชนิดของอาคารที่มิได้ระบุไว้ในข้อยกเว้น
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        กรมธรรม์แบ่งออกเป็น 2 หมวดหลักใหญ่ การประกันดังนี้
                    </h2>
                    <ul>
                        <li>
                            ส่วนที่1 การประกันภัยทรัพย์สินที่เอาประกันภัย
                        </li>
                        <li>
                            ส่วนที่2 ความรับผิดต่อบุคคลภายนอก
                        </li>
                    </ul>
                </div>

                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ความคุ้มครอง
                    </h2>
                    <p>
                        ความเสี่ยงภัยทุกชนิดที่มิได้ระบุไว้ในข้อยกเว้นของกรมธรรม์
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
