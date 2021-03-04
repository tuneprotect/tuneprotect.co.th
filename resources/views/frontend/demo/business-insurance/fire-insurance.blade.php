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
            <h1 style="margin-bottom: 50px;text-align: center">ประกันอัคคีภัย</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ให้ทูนฯ ปกป้องทรัพย์สินของคุณทุกที่ ทั่วประเทศไทย
                    </h2>
                    <p>
                        ประกันอัคคีภัยจะช่วยคุ้มครองความเสียหาย จากอัคคีภัยที่อาจเกิดขึ้นกับ สิ่งปลูกสร้าง ตัวอาคาร รวมถึง อุปกรณ์ตกแต่ง ติดตั้ง ตรึงตรา และทรัพย์สินของคุณ
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ทรัพย์สินที่สามารถนำมาทำประกันภัย
                    </h2>
                    <p>
                        บ้าน อาคาร ร้านค้า โรงงาน ห้องชุด
                    </p>
                </div>

                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        ความคุ้มครองมาตรฐาน
                    </h2>
                    <ul>
                        <li>
                            1. ไฟไหม้ รวมถึงความเสียหายที่เป็นผลสืบเนื่องโดยตรงจากไฟไหม้ เช่น ความเสียหายจากน้ำที่ใช้ดับไฟความเสียหายจากควันไฟ
                        </li>
                        <li>
                            2. ฟ้าผ่า
                        </li>
                        <li>
                            3. การระเบิดของแก๊สที่ใช้เพื่อการอยู่อาศัย
                        </li>
                    </ul>

                </div>
            </div>
        </article>
    </main>
@endsection
