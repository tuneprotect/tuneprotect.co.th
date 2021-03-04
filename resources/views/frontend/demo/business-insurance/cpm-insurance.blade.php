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

            <h1 style="margin-bottom: 50px;text-align: center">
                ประกันภัยความเสี่ยภัยทุกชนิดของเครื่องจักรที่ใช้ในงานก่อสร้าง</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ให้ทูนฯ ปกป้องเครื่องจักรที่เคลื่อนที่ได้
                    </h2>
                    <p>
                        &nbsp;&nbsp;
                        ประกันภัยความเสี่ยภัยทุกชนิดของเครื่องจักรที่ใช้ในงานก่อสร้าง
                        ซึ่งหมายรวมถึงเครื่องจักรที่ใช้ในการเกษตร เช่น รถเครน รถขุดดิน รถปรับผิวดิน เป็นต้น
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ความคุ้มครอง
                    </h2>
                    <p>
                        &nbsp;&nbsp;
                        กรมธรรม์ให้ความคุ้มครองแบบความเสี่ยงภัยทุกชนิด ที่มิได้ระบุไว้ในข้อยกเว้นของกรมธรรม์
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
