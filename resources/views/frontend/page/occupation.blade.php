@extends('frontend.layout.main')

@section('page')
<main>
    <article class="wrapper">
        @if($locale == 'en')
        <h1>What is insurance warranty career level?</h1>
        <div>
            <p>Insurance warranty career level is a measure of the risk of an accident in that career. The level of risk will determined the insurance premium and the extent of coverage. If it is a high-risk job, the insurance premium will be higher than the other career levels, and in some cases, the company may refuse to provide insurance coverage. There are 4 career levels, as follows:</p>

            <p>&nbsp;</p>

            <h3>Career level 1</h3>

            <p>A job that takes place in an office and does not involve the use of machinery or dangerous equipment is regarded as a low-risk occupation. Therefore, the insurance premium will be lower, and the scope of coverage will be better comparing to other career levels.  Executives, doctors, nurses, company employees, and government officials are examples for this group.</p>

            <p>&nbsp;</p>

            <h3>Career level 2</h3>

            <p>This level of job work both inside and outside of the office. Therefore, the risk will be higher and will affect the cost of premium to be higher in some plans. This group of job requires expertise and skills including engineers, carpenters, small business owners, agents/brokers, etc.</p>

            <p>&nbsp;</p>

            <h3>Career level 3</h3>

            <p>A high-risk job, such as production, manual labor, work involving machinery, or work that requires working regularly away from the office. Some companies will pay a higher insurance premium or, in some cases, the company will not provide insurance coverage for these jobs such as sales, actors, journalists, tour guides, drivers, production, transportation, etc.</p>

            <p>&nbsp;</p>

            <h3>Career level 4</h3>

            <p>This type of job has the highest risk than any other job such as construction workers, stunt performers, securities/guards, document delivery staffs, extreme, sport athlete, etc. If these group of occupation want to apply for insurance, they must undertake research on high-risk insurance plans in which the cost of premium will be a lot higher comparing to the other job.</p>
        </div>
        @else
        <h1>ขั้นอาชีพในการรับประกัน คืออะไร?</h1>
        <div>
            <p>ขั้นอาชีพคือระดับความเสี่ยงที่มีต่ออาชีพ โดยความเสี่ยงสูงมากน้อยจะมีผลต่อเบี้ยประกันภัยและขอบเขตของความคุ้มครอง ถ้าหากเป็นอาชีพที่มีความเสี่ยงสูง อาจจะต้องจ่ายค่าเบี้ยแพงกว่าอาชีพอื่น ๆ หรือในบางกรณีบริษัทประกันก็ปฏิเสธรับทำประกัน โดยขั้นอาชีพจะมีทั้งหมด 4 ขั้น ดังนี้</p>

            <p>&nbsp;</p>

            <h3>อาชีพชั้น 1</h3>

            <p>เป็นอาชีพที่ทำงานอยู่ในสำนักงานและไม่ได้เกี่ยวข้องกับงานเครื่องจักร หรืออุปกรณ์ที่เป็นอันตราย ซึ่งกลุ่มอาชีพนี้จัดอยู่ในอาชีพที่มีความเสี่ยงต่ำ ดังนั้นเบี้ยประกันที่จ่ายก็ไม่แพง ความคุ้มครองถือว่าครอบคลุมมากกว่าอาชีพอื่น ๆ เช่น ผู้บริหาร แพทย์ เภสัชกร พยาบาล พนักงานบริษัท ข้าราชการ เป็นต้น</p>

            <p>&nbsp;</p>

            <h3>อาชีพชั้น 2</h3>

            <p>งานของกลุ่มอาชีพนี้จะปฏิบัติงานทั้งภายในและภายนอกสำนักงาน ความเสี่ยงของการเกิดอุบัติเหตุก็จะเพิ่มขึ้น นั่นส่งผลให้เบี้ยประกันสูงขึ้นในบางแผน&nbsp; โดยกลุ่มอาชีพจะเป็นอาชีพที่ต้องความชำนาญและทักษะ เช่น วิศวกร ช่างไม้ เจ้าของกิจการขนาดเล็ก ตัวแทน/นายหน้า เป็นต้น</p>

            <p>&nbsp;</p>

            <h3>อาชีพชั้น 3</h3>

            <p>อาชีพที่มีรูปแบบงานค่อนข้างมีความเสี่ยงมาก อาทิ งานการช่าง ฝ่ายผลิต ผู้ใช้แรงงาน ลักษณะงานที่มีเครื่องจักรเข้ามาเกี่ยวข้อง หรือทำงานนอกสำนักงานเป็นประจำ โดยความเสี่ยงลักษณะนี้บางบริษัทจะมีการเพิ่มเบี้ยประกัน หรือบางบริษัทก็จะไม่มีแผนความคุ้มครองในอาชีพขั้นนี้ ตัวอย่างอาชีพ เช่น พนักงานขาย นักแสดง นักข่าว มัคคุเทศก์ พนักงานขับรถ การผลิต การขนส่ง เป็นต้น</p>

            <p>&nbsp;</p>

            <h3>อาชีพชั้น 4</h3>

            <p>อาชีพลักษณะนี้มีความเสี่ยงสูงที่สุดมากกว่าทุกอาชีพ เช่น คนงานก่อสร้าง นักแสดงผาดโผน พนักงานรักษาความปลอดภัย พนักงานรับส่งเอกสาร นักกีฬาเอ็กซ์ตรีม ในกรณีที่อยากจะสมัครประกัน จำเป็นต้องมีการศึกษาหาบริษัทที่มีแผนประกันรองรับอาชีพที่มีความเสี่ยงสูงมาก ซึ่งค่าเบี้ยก็จะสูงมาก เมื่อเทียบกับอาชีพอื่นๆ</p>
        </div>
        @endif

        <br>
        <div class="sharethis-inline-share-buttons st-center st-has-labels  st-inline-share-buttons st-animated" id="st-1">
            <div class="st-total st-hidden">
                <span class="st-label"></span>
                <span class="st-shares">
                    Shares
                </span>
            </div>
            <div class="st-btn st-first" data-network="facebook" style="display: inline-block;">
                <img alt="facebook sharing button" src="https://platform-cdn.sharethis.com/img/facebook.svg">
                <span class="st-label">Share</span>
            </div>
            <div class="st-btn" data-network="line" style="display: inline-block;">
                <img alt="line sharing button" src="https://platform-cdn.sharethis.com/img/line.svg">
                <span class="st-label">Share</span>
            </div>
            <div class="st-btn" data-network="twitter" style="display: inline-block;">
                <img alt="twitter sharing button" src="https://platform-cdn.sharethis.com/img/twitter.svg">
                <span class="st-label">Tweet</span>
            </div>
            <div class="st-btn" data-network="email" style="display: inline-block;">
                <img alt="email sharing button" src="https://platform-cdn.sharethis.com/img/email.svg">
                <span class="st-label">Email</span>
            </div>
            <div class="st-btn st-last" data-network="sharethis" style="display: inline-block;">
                <img alt="sharethis sharing button" src="https://platform-cdn.sharethis.com/img/sharethis.svg">
                <span class="st-label">Share</span>
            </div>
        </div>
        <br>
        <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&amp;product=inline-share-buttons" async="async" class="optanon-category-C0003 "></script>

    </article>
</main>
@endsection
