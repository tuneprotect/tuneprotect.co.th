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
            <h1>Tune Protect เดินหน้า “แสงบันดาลใจ” บริจาคโซลาร์เซลล์ ช่วยสังคม</h1>
            <div>
                <p>
                    Tune Protect Thailand สร้างสรรค์โครงการเพื่อตอบแทนสังคม ภายใต้โครงการ “<strong>แสงบันดาลใจ -
                        Enlightening
                        Lives with Tune</strong>” ร่วมบริจาค โคมไฟติดผนังโซลาร์เซลล์
                    ให้กับสถานสงเคราะห์เด็กชายบ้านบางละมุง ณ
                    จังหวัดชลบุรี เมื่อวันเสาร์ที่ 19 ธันวาคม 2563 ที่ผ่านมา พร้อมจัดกิจกรรมสันทนาการ
                    เลี้ยงอาหารกลางวันเด็ก และบริจาคสิ่งของจำเป็นต่าง ๆ ให้กับสถานสงเคราะห์ที่ยังขาดแคลน
                </p>
                <div class="two-col">
                    <p>
                        <img src="/storage/content/csr/csr9.jpg" alt="นายเบน อาศนะเสน ประธานเจ้าหน้าที่บริหาร (Chief Executive Officer) Tune Protect Thailand">
                    </p>
                    <p>
                        <img src="/storage/content/csr/csr6.jpg" alt="นายเบน อาศนะเสน ประธานเจ้าหน้าที่บริหาร (Chief Executive Officer) Tune Protect Thailand">
                    </p>
                </div>
                <p>
                    นายเบน อาศนะเสน ประธานเจ้าหน้าที่บริหาร (Chief Executive Officer) Tune Protect Thailand หรือ บริษัท
                    ทูนประกันภัย จำกัด (มหาชน) เปิดเผยว่า “Tune Protect มีความตั้งใจในเรื่องความรับผิดชอบต่อสังคม หรือ
                    CSR (Corporate Social Responsibility)
                    โดยวัตถุประสงค์ของโครงการนี้ก็เพื่อเป็นการเพิ่มคุณภาพชีวิตที่ดีให้แก่เด็ก ๆ
                    เพราะแสงสว่างจากโซลาร์เซลล์ที่เป็นพลังงานสะอาดจากแสงอาทิตย์
                    และพลังงานสะอาดนี้เองจะช่วยสร้างแรงบันดาลใจและความตระหนักรู้ให้เด็ก ๆ
                    เห็นถึงความสำคัญต่อการอยู่ร่วมกันระหว่างคนกับธรรชาติ การทำเพื่อชุมชนของตนเอง
                    และเพื่อดูแลสิ่งแวดล้อมด้วย”
                </p>
                <div class="two-col">
                    <p>
                        <img src="/storage/content/csr/csr1.jpg" alt="Tune Protect Thailand">
                    </p>
                    <p>
                        <img src="/storage/content/csr/csr7.jpg" alt="โคมไฟติดผนังโซลาร์เซลล์">
                    </p>
                </div>
                <p>
                    โดยโคมไฟติดผนังโซลาร์เซลล์ นอกจากจะช่วยลดรายจ่ายส่วนของค่าไฟฟ้าในแต่ละเดือนแล้ว
                    ยังช่วยเพิ่มความปลอดภัยให้แก่เด็ก ๆ ภายในสถานสงเคราะห์ในเวลากลางคืน
                    อีกทั้งยังเป็นการเพิ่มแสงสว่างให้แก่ชุมชนไปในตัว ช่วยลดการปล่อยก๊าซ CO2 หรือคาร์บอนไดออกไซด์
                    ไม่ก่อให้เกิดมลพิษต่อสิ่งแวดล้อม และเพื่อทำให้โลกสะอาดขึ้นอีกด้วย
                </p><p>
                    โครงการช่วยเหลือสังคม จาก Tune Protect Thailand ยังคงมีอย่างต่อเนื่องตามนโยบายหลักของบริษัท
                    เพื่อช่วยเหลือชุมชน พัฒนาสังคม และประเทศไทยในแต่ละด้าน เพื่อให้มีความเป็นอยู่ที่ดีขึ้นอย่างยั่งยืน
                </p>


                <div class="two-col">
                    <p>
                        <img src="/storage/content/csr/csr5.jpg" alt="Enlightening
                        Lives with Tune">
                    </p>
                    <p>
                        <img src="/storage/content/csr/csr3.jpg" alt="Enlightening
                        Lives with Tune">
                    </p>
                </div>
                <div class="two-col">
                    <p>
                        <img src="/storage/content/csr/csr11.jpg" alt="Enlightening
                        Lives with Tune">
                    </p>
                    <p>
                        <img src="/storage/content/csr/csr10.jpg" alt="Enlightening
                        Lives with Tune">
                    </p>
                </div>
                <div class="two-col">
                    <p>
                        <img src="/storage/content/csr/csr4.jpg" alt="Enlightening
                        Lives with Tune">
                    </p>
                    <p>
                        <img src="/storage/content/csr/csr8.jpg" alt="Enlightening
                        Lives with Tune">
                    </p>
                </div>
            </div>
        </article>
    </main>
@endsection
