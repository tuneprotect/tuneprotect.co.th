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
                ประกันความเสี่ยงภัยทุกชนิดสำหรับงานรับเหมาก่อสร้าง/ติดตั้งเครื่องจักร</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ให้ทูนฯคุ้มครองความเสี่ยงภัยทุกชนิดสำหรับงานรับเหมาตามสัญญา
                    </h2>
                    <p>
                        กรมธรรม์ให้ความคุ้มครองความเสี่ยงภัยทุกชนิดต่อความสูญเสียหรือเสียหายต่อเนื้องานตามสัญญาจ้างเหมาซึงรวมถึงวัสดุที่ใช้ในงานก่อสร้างต่าง
                        ๆ รวมถึงความเสียหายต่อบุคคลภายนอก
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ความคุ้มครอง
                    </h2>
                    <p> กรมธรรม์แบ่งออกเป็น 3 หมวดหลัก ดังนี้</p>
                    <ul>
                        <li>
                            &nbsp; หมวดที่ 1 งานโยธา
                        </li>
                        <li>
                            &nbsp; หมวดที่ 2 งานติดตั้ง
                        </li>
                        <li>
                            &nbsp; หมวดที่ 3 ความรับผิดตามกฏหมายต่อบุคคลภายนอก
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </main>
@endsection
