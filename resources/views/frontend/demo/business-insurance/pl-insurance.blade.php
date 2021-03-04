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

            <h1 style="margin-bottom: 50px;text-align: center">กรมธรรม์ความรับผิดต่อบุคคลภายนอก</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ให้ทูนฯ ปกป้องความรับผิดต่อบุคคลภายนอก
                    </h2>
                    <p>
                        ความประมาทเลินเล่อ เป็นสาเหตุที่ก่อให้เกิดความเสียหาบต่อบุคคลภายนอกซึ่งท่านจะต้องรับผิดตามกฏหมาย
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ความคุ้มครอง
                    </h2>
                    <p>
                        กรมธรรม์ให้ความคุ้มครองถึงความสูญเสียหรือเสียหายต่อบุคคลภายนอก สำหรับทรัพย์สิน หรือร่างกาย
                        ซึ่งเกิดจากความประมาทเลินเล่อของท่าน
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
