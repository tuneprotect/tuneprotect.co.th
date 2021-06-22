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

            <main data-package="CI">

                <div>
                    <section class="wrapper">
                        <h2>Critical illness insurance from Tune Protect</h2>

                        <p>Taking care of every major disease. Determine the Coverage that best fits you with a simple
                            click. Covering five critical disease groups, Coverage up to 3,000,000 baht. For just
                            thousands of baht, you will have critical illness insurance cover up to several million
                            baht.</p>

                        <div class="wrapper text-center"><a class="btn btn-primary" href="" style="width: 200px">download</a>
                            {btn_buy}
                        </div>
                    </section>

                    <section class="select-ci-wrapper">
                        <div class="wrapper">
                            <div class="box">
                                <div><img alt="" src="/storage/product/CI/phone.png"/></div>

                                <div>
                                    <h3>myFlexi CI allows you to select your critical illness coverage.</h3>

                                    <ul>
                                        <li>
                                            <i class="icofont-shield-alt"></i>
                                            <div><strong><em>Choose</em> the right coverage </strong> <span> You can choose the disease group that most concerns you.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="icofont-coins"></i>
                                            <div><strong><em>Choose</em> a plan according to your budget</strong> <span>Adjust, increase, or reduce insurance premiums as you wish.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="icofont-holding-hands"></i>
                                            <div><strong><em>Choose</em> for yourself or those you care about</strong>
                                                <span>Provide protection for you and your loved ones with a simple click.</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="wrapper text-center" style="margin: 20px auto 0 auto"><a
                                            class="btn btn-primary" href="" style="width: 200px">download</a> {btn_buy}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="wrapper">
                        <section class="my-health-step">
                            <h2 style="margin: 20px 0">Insurance Highlights</h2>

                            <div class="highlight-ci-wrapper" style="margin-bottom: 20px">
                                <div id="step">
                                    <div class="item"><span class="material-icons md-dark">price_check</span>

                                        <p style="font-size: .8rem">Option to adjust, increase or reduce your protection
                                            coverage</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">rule</span>

                                        <p style="font-size: .8rem">Protection against critical illnesses with coverage
                                            up to 3 million baht</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">health_and_safety</span>

                                        <p style="font-size: .8rem">Apply now without having to purchase life
                                            insurance.</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">elderly</span>

                                        <p style="font-size: .8rem">Coverage until the age of 65</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">local_atm</span>

                                        <p style="font-size: .8rem">Receive daily hospital cash and home nursing care
                                            benefits (if doctor recommended)</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">savings</span>

                                        <p style="font-size: .8rem">Annual premiums easily payable in 10 credit card
                                            installments</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">fact_check</span>

                                        <p style="font-size: .8rem">Covers five critical illnesses</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">do_not_disturb_alt</span>

                                        <p style="font-size: .8rem">Option to receive a second medical opinion as well
                                            as consulting a doctor online.</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">trending_down</span>

                                        <p style="font-size: .8rem">Insurance premiums are tax deductible*</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">medical_services</span>

                                        <p style="font-size: .8rem">Answer three simple health questions; there is no
                                            need to go to the hospital for a check-up</p>
                                    </div>
                                </div>
                            </div>

                            <div class="wrapper text-center">{btn_buy}</div>
                        </section>

                        <div class="service_flexi">
                            <h2 style="margin: 20px 0">Once you purchase myFlexi CI you will also be eligible to receive
                                additional services provided by the company.</h2>

                            <div class="service_flexi_box">
                                <div class="inner"><a href="/en/myHealth/health2go"><img alt=""
                                                                                         src="/storage/product/CI/health2go-520x480-en.jpg"/>
                                    </a></div>

                                <div class="inner"><a href="/en/myHealth/health2go"><img alt=""
                                                                                         src="/storage/product/CI/myelitedoctor520x480-en.jpg"/>
                                    </a></div>
                            </div>

                            <div class="wrapper text-center">{btn_buy}</div>
                        </div>

                        <section class="why-ci">
                            <div>
                                <h2>Why purchase myFlexi CI?</h2>

                                <p>Because it is critical illness insurance that is ready to take care of you and your
                                    loved ones for both early and late stage illnesses. You can also choose additional
                                    critical illness coverage for a small additional cost. With this insurance coverage,
                                    you will not need to worry about the enormous medical bills that could occur for
                                    treatment.</p>
                            </div>

                            <div>
                                <h2>Top 5 deadly diseases in Thailand</h2>
                                <small>*Number of deaths per hour</small>

                                <ul>
                                    <li><strong style="width: 270px;">7.7</strong> <span> Cancer</span></li>
                                    <li><strong style="width: 113px;">3.2</strong> <span>Hemorrhagic stroke</span></li>
                                    <li><strong style="width: 98px;">2.8</strong> <span>Atrial fibrillation severe stroke</span>
                                    </li>
                                    <li><strong style="width: 84px;">2.4</strong> <span>Lung disease</span></li>
                                    <li><strong style="width: 60px;">1.7</strong> <span>Chronic kidney disease</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <div class="wrapper text-center">{btn_buy}</div>

                        <section>
                            <h2>Examples of the cost of treating severe illnesses</h2>

                            <div class="ci-cost">
                                <div class="ci-cost-table">
                                    <h6>Cancer</h6>

                                    <ul>
                                        <li><strong>Breast cancer <span>3D radiation technique</span></strong> <span
                                                class="col-price">215,600</span></li>
                                        <li><strong>Lung cancer<span>3D radiation technique</span></strong> <span
                                                class="col-price">184,800</span></li>
                                        <li><strong>Cervical cancer<span>3D radiation technique</span></strong> <span
                                                class="col-price">184,800</span></li>
                                    </ul>
                                </div>

                                <div class="ci-cost-table">
                                    <h6>Heart Attack</h6>

                                    <ul>
                                        <li><strong>Balloon angioplasty therapy </strong> <span class="col-price">250,000</span>
                                        </li>
                                        <li><strong>Coronary artery surgery</strong> <span
                                                class="col-price">340,000</span></li>
                                        <li><strong>Coronary angiography examination </strong> <span class="col-price">150,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div class="wrapper text-center">{btn_buy}</div>

                        <section class="installment-ci">
                            <div class="img-wrapper">
                                <img alt="ci"
                                     src="/storage/product/CI/waist-portrait-happy-smiling-young-600w-1959752341.webp"/>
                            </div>
                            <div>
                                <h2>Purchasing critical illness insurance myFlexi CI is a better choice! Because you can
                                    choose to pay your annual premium in 10 easy credit card installments.</h2>

                                <p>Pay for your insurance comfortably with the option of paying your annual premium in
                                    10 credit card installments. Or you can pay the full annual premium via credit or
                                    debit cards accepted for all banks in Thailand.*<br/>
                                    <em>*Payment terms and conditions are specified by each bank.</em></p>
                            </div>
                        </section>

                        <div class="wrapper text-center">{btn_buy}</div>

                        <div class="my-health-condition">
                            <h2>Insurance underwriting conditions</h2>

                            <ol class="has-bullet">
                                <li>The underwriting consideration is in accordance with the Company&#39;s guidelines.
                                </li>
                                <li>The applicant must be between 18 to 60 years old (renewable up to 65 years).</li>
                                <li>The applicant must be in good health before the date of applying for insurance</li>
                                <li>A health declaration is needed without requiring medical tests (If the health
                                    declaration information is insufficient for consideration, the company reserves the
                                    right to request a health check-up before issuing the insurance.)
                                </li>
                                <li>The information in this document is preliminary only and does not replace the policy
                                    wording. The applicant/insured should study the policy wording in detail to
                                    understand the details of coverage conditions, benefits, and exclusions before
                                    deciding to purchase the insurance.
                                </li>
                                <li>The coverage conditions are specified in the actual policy wording.</li>
                                <li>If the insured needs a tax invoice or policy to be delivered by post, please contact
                                    customer service at 1183.
                                </li>
                                <li>You have the right to amend and cancel the policy free of charge (Free Look Period)
                                    within 15 days of receiving the insurance policy.
                                </li>
                            </ol>

                            <div class="wrapper text-center">{btn_buy}</div>
                        </div>
                    </div>
                </div>


                {{--                <div>--}}
                {{--                    <section class="wrapper">--}}
                {{--                        <h2>ประกันโรคร้ายแรง จาก Tune Protect</h2>--}}

                {{--                        <p>มีงบหลักพัน ก็มีประกันโรคร้ายแรงคุ้มครองทุกระยะหลักล้านได้ เพราะโรคร้ายแรงมีมากกว่าที่คิด!--}}
                {{--                            ประกันโรคร้ายแรงจาก Tune Protect พร้อมดูแลคุ้มครองโรคร้ายทุกระยะ--}}
                {{--                            และเลือกความคุ้มครองโรคร้ายเพิ่มเติมได้ตามต้องการ สมัครได้ตั้งแต่อายุ 18-60 ปี ต่ออายุได้ถึง--}}
                {{--                            65 ปี ลดหย่อนภาษีได้ พร้อมบริการความเห็นที่สองทางการแพทย์และบริการปรึกษาแพทย์ออนไลน์</p>--}}
                {{--                        &nbsp;--}}

                {{--                        <div class="wrapper text-center"><a class="btn btn-primary" href="" style="width: 200px">ดาวน์โหลด</a>--}}
                {{--                            {btn_buy}--}}
                {{--                        </div>--}}
                {{--                    </section>--}}

                {{--                    <section class="select-ci-wrapper">--}}
                {{--                        <div class="wrapper">--}}
                {{--                            <div class="box">--}}
                {{--                                <div><img alt="" src="/storage/product/CI/phone.png"/></div>--}}

                {{--                                <div>--}}
                {{--                                    <h3>myFlexi CI ให้คุณเลือกความคุ้มครองโรคร้ายได้ตามต้องการ</h3>--}}

                {{--                                    <ul>--}}
                {{--                                        <li>--}}
                {{--                                            <i class="icofont-shield-alt"></i>--}}
                {{--                                            <div><strong><em>ได้!</em>--}}
                {{--                                                    เลือกความคุ้มครองที่ใช่ </strong> <span>สามารถเลือกกลุ่มโรคร้ายที่คุณกังวล</span>--}}
                {{--                                            </div>--}}
                {{--                                        </li>--}}
                {{--                                        <li>--}}
                {{--                                            <i class="icofont-coins"></i>--}}
                {{--                                            <div><strong><em>ได้!</em>--}}
                {{--                                                    เลือกแผนตามงบ</strong>--}}
                {{--                                                <span>ปรับ ลด-เพิ่ม เบี้ยประกันได้ตามใจ</span></div>--}}
                {{--                                        </li>--}}
                {{--                                        <li>--}}
                {{--                                            <i class="icofont-holding-hands"></i>--}}
                {{--                                            <div><strong><em>ได้!</em>--}}
                {{--                                                    เลือกให้คุณหรือคนรัก</strong> <span>มอบความคุ้มครอง แทนความห่วงใย ง่ายแค่คลิก</span>--}}
                {{--                                            </div>--}}
                {{--                                        </li>--}}
                {{--                                    </ul>--}}

                {{--                                    <div class="wrapper text-center" style="margin: 20px auto 0 auto"><a--}}
                {{--                                            class="btn btn-primary" href="" style="width: 200px">ดาวน์โหลด</a> {btn_buy}--}}
                {{--                                    </div>--}}
                {{--                                </div>--}}
                {{--                            </div>--}}
                {{--                        </div>--}}
                {{--                    </section>--}}

                {{--                    <div class="wrapper">--}}
                {{--                        <section class="my-health-step">--}}
                {{--                            <h2 style="margin: 20px 0">จุดเด่นแบบประกัน</h2>--}}

                {{--                            <div class="highlight-ci-wrapper" style="margin-bottom: 20px">--}}
                {{--                                <div id="step">--}}
                {{--                                    <div class="item"><span class="material-icons md-dark">price_check</span>--}}

                {{--                                        <p style="font-size: .8rem">เลือกปรับเพิ่ม-ลด <span class="nowrap">ความคุ้มครองได้</span>--}}
                {{--                                        </p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">rule</span>--}}

                {{--                                        <p style="font-size: .8rem">คุ้มครองโรคร้ายทุกระยะ <span class="nowrap">สูงสุดมากกว่า 3 ล้านบาท*</span>--}}
                {{--                                        </p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">health_and_safety</span>--}}

                {{--                                        <p style="font-size: .8rem">สมัครได้เลย โดยไม่ต้องซื้อประกันชีวิต</p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">elderly</span>--}}

                {{--                                        <p style="font-size: .8rem">คุ้มครองถึงอายุ 65 ปี</p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">local_atm</span>--}}

                {{--                                        <p style="font-size: .8rem">มีค่าชดเชยรายวัน <span--}}
                {{--                                                class="nowrap">และพยาบาลพิเศษ</span></p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">savings</span>--}}

                {{--                                        <p style="font-size: .8rem">เบี้ยประกันรายปีผ่อน <span class="nowrap">ได้สูงสุด 10 เดือน</span>--}}
                {{--                                        </p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">fact_check</span>--}}

                {{--                                        <p style="font-size: .8rem">คุ้มครอง 5 กลุ่มโรคร้ายแรง</p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">do_not_disturb_alt</span>--}}

                {{--                                        <p style="font-size: .8rem">มีบริการความเห็นที่สองทางการแพทย์--}}
                {{--                                            และปรึกษาแพทย์ออนไลน์</p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">trending_down</span>--}}

                {{--                                        <p style="font-size: .8rem">เบี้ยประกันนำไป<span--}}
                {{--                                                class="nowrap">ลดหย่อนภาษีได้*</span></p>--}}
                {{--                                    </div>--}}

                {{--                                    <div class="item"><span class="material-icons md-dark">medical_services</span>--}}

                {{--                                        <p style="font-size: .8rem">ตอบคำถามสุขภาพแค่ 3 ข้อ ไม่ต้องไปตรวจสุขภาพที่<span--}}
                {{--                                                class="nowrap">โรงพยาบาล</span></p>--}}
                {{--                                    </div>--}}
                {{--                                </div>--}}
                {{--                            </div>--}}

                {{--                            <div class="wrapper text-center">{btn_buy}</div>--}}
                {{--                        </section>--}}

                {{--                        <div class="service_flexi">--}}
                {{--                            <h2 style="margin: 20px 0">พร้อมรับบริการเสริมที่หลากหลาย เมื่อสมัครประกันภัยโรคร้ายแรง--}}
                {{--                                myFlexi CI</h2>--}}

                {{--                            <div class="service_flexi_box">--}}
                {{--                                <div class="inner">--}}
                {{--                                    <a href="/th/myHealth/health2go">--}}
                {{--                                        <img alt="" src="/storage/product/CI/health2go-520x480th.jpg"/> </a>--}}
                {{--                                </div>--}}

                {{--                                <div class="inner">--}}
                {{--                                    <a href="/th/myHealth/health2go">--}}
                {{--                                    <img alt="" src="/storage/product/CI/myelitedoctor520x480-th.jpg"/>--}}
                {{--                                    </a>--}}
                {{--                                </div>--}}
                {{--                            </div>--}}

                {{--                            <div class="wrapper text-center">{btn_buy}</div>--}}
                {{--                        </div>--}}

                {{--                        <section class="why-ci">--}}
                {{--                            <div>--}}
                {{--                                <h2>ทำไมต้องซื้อ myFlexi CI</h2>--}}

                {{--                                <p>เพราะเป็นแบบประกันโรคร้ายแรง ที่พร้อมดูแลคุ้มครองโรคร้ายทุกระยะ--}}
                {{--                                    และเลือกความคุ้มครองโรคร้ายเพิ่มเติมได้ตามต้องการ อุ่นใกว่าจเพราะ &lsquo;ได้&rsquo;--}}
                {{--                                    มากกว่า หากวันนั้นมาถึง&hellip;คุณจึงพร้อมจะรับมือกับ ค่าใช้จ่ายก้อนโต--}}
                {{--                                    จากการรักษา</p>--}}
                {{--                            </div>--}}

                {{--                            <div>--}}
                {{--                                <h2>5 โรคร้ายอันดับต้นๆ ที่คร่าชีวิตคนไทย</h2>--}}
                {{--                                <small>*จำนวนผู้เสียชีวิตต่อชั่วโมง</small>--}}

                {{--                                <ul>--}}
                {{--                                    <li><strong style="width: 270px;">7.7</strong> <span> โรคมะเร็ง </span></li>--}}
                {{--                                    <li><strong style="width: 113px;">3.2</strong> <span>โรคหลอดเลือดสมองแตก</span></li>--}}
                {{--                                    <li><strong style="width: 98px;">2.8</strong>--}}
                {{--                                        <span>โรคภาวะหัวใจเต้นผิดจังหวะรุนแรง</span></li>--}}
                {{--                                    <li><strong style="width: 84px;">2.4</strong> <span>โรคปลอดระยะสุดท้าย</span></li>--}}
                {{--                                    <li><strong style="width: 60px;">1.7</strong> <span>โรคไตวายเรื้อรัง</span></li>--}}
                {{--                                </ul>--}}
                {{--                            </div>--}}
                {{--                        </section>--}}

                {{--                        <div class="wrapper text-center">{btn_buy}</div>--}}

                {{--                        <section>--}}
                {{--                            <h2>ตัวอย่างค่าใช้จ่ายในการรักษาโรคร้ายแรง</h2>--}}

                {{--                            <div class="ci-cost">--}}
                {{--                                <div class="ci-cost-table">--}}
                {{--                                    <h6>โรคมะเร็ง</h6>--}}

                {{--                                    <ul>--}}
                {{--                                        <li><strong>มะเร็งเต้านม <span>เทคนิคการฉายรังสี 3 มิติ</span></strong> <span--}}
                {{--                                                class="col-price">215,600</span></li>--}}
                {{--                                        <li><strong>มะเร็งปอด <span>เทคนิคการฉายรังสี 3 มิติ</span></strong> <span--}}
                {{--                                                class="col-price">184,800</span></li>--}}
                {{--                                        <li><strong>มะเร็งปากมดลูก <span>เทคนิคการฉายรังสี 3 มิติ</span></strong> <span--}}
                {{--                                                class="col-price">184,800</span></li>--}}
                {{--                                    </ul>--}}
                {{--                                </div>--}}

                {{--                                <div class="ci-cost-table">--}}
                {{--                                    <h6>โรคหัวใจ</h6>--}}

                {{--                                    <ul>--}}
                {{--                                        <li><strong>การรักษาด้วยการขยายหลอดเลือดหัวใจด้วยบอลลูน </strong> <span--}}
                {{--                                                class="col-price">250,000</span></li>--}}
                {{--                                        <li><strong>การผ่าตัดเส้นเลือดหัวใจ</strong> <span--}}
                {{--                                                class="col-price">340,000</span></li>--}}
                {{--                                        <li><strong>การตรวจด้วยการฉีดสีหลอดเลือดหัวใจ </strong> <span class="col-price">150,000</span>--}}
                {{--                                        </li>--}}
                {{--                                    </ul>--}}
                {{--                                </div>--}}
                {{--                            </div>--}}
                {{--                        </section>--}}

                {{--                        <div class="wrapper text-center">{btn_buy}</div>--}}

                {{--                        <section class="installment-ci">--}}
                {{--                            <div class="img-wrapper"><img src="/storage/product/CI/waist-portrait-happy-smiling-young-600w-1959752341.webp" alt="ci"></div>--}}
                {{--                            <div>--}}
                {{--                                <h2>สบายใจกว่า! เพราะเลือกผ่อนชำระได้สูงสุด 10 เดือน</h2>--}}

                {{--                                <p>ชำระค่าเบี้ยสบาย ตามสไตล์คุณ ให้คุณผ่อนชำระค่าเบี้ยประกันภัยแบบเบาๆ <span--}}
                {{--                                        style="text-decoration: underline;color:red">นานสูงสุดถึง 10 เดือน*</span>--}}
                {{--                                    ด้วยการผ่อนชำระเงินผ่านทางบัตรเครดิต หรือ ชำระเต็มจำนวนแบบรายปี--}}
                {{--                                    ผ่านบัตรเครดิตหรือเดบิตของทุกธนาคารในประเทศไทย<br/>--}}
                {{--                                    <em>*เงื่อนไขการผ่อนชำระเป็นไปตามแต่ละธนาคารกำหนด</em></p>--}}
                {{--                            </div>--}}
                {{--                        </section>--}}

                {{--                        <div class="wrapper text-center">{btn_buy}</div>--}}

                {{--                        <div class="my-health-condition">--}}
                {{--                            <h2>เงื่อนไขการขอเอาประกันภัย</h2>--}}

                {{--                            <ol class="has-bullet">--}}
                {{--                                <li>การพิจารณารับประกันภัยเป็นไปตามหลักเกณฑ์ของบริษัทฯ</li>--}}
                {{--                                <li>ผู้ขอเอาประกันภัยต้องมีอายุ 18 &ndash; 60 ปีบริบูรณ์ (ต่ออายุได้ถึง 65 ปี)</li>--}}
                {{--                                <li>ผู้ขอเอาประกันภัยต้องมีสุขภาพร่างกายแข็งแรง ก่อนวันที่ขอเอาประกันภัย</li>--}}
                {{--                                <li>แถลงสุขภาพ ไม่ต้องตรวจสุขภาพ--}}
                {{--                                    (กรณีที่ข้อมูลการแถลงสุขภาพไม่เพียงพอต่อการพิจารณารับประกันภัย--}}
                {{--                                    ทางบริษัทขอสงวนสิทธิ์ในการแจ้งขอตรวจสุขภาพก่อนรับประกันภัย)--}}
                {{--                                </li>--}}
                {{--                                <li>ข้อมูลในเอกสารนี้เป็นเพียงข้อมูลเบื้องต้นของผลิตภัณฑ์ประกันภัย--}}
                {{--                                    ผู้ขอเอาประกันภัย/ผู้เอาประกันภัยควรศึกษาข้อมูลเพิ่มเติม--}}
                {{--                                    และทำความเข้าใจในรายละเอียดเงื่อนไขความคุ้มครอง ผลประโยชน์ และข้อยกเว้น--}}
                {{--                                    ก่อนตัดสินใจทำประกันภัยทุกครั้ง เมื่อได้รับกรมธรรม์ประกันภัยแล้วโปรดศึกษาเพิ่มเติม--}}
                {{--                                </li>--}}
                {{--                                <li>เงื่อนไขความคุ้มครองเป็นไปตามที่ระบุในกรมธรรม์</li>--}}
                {{--                                <li>กรณีต้องการใบกำกับภาษีฯ หรือกรมธรรม์ฯ ให้จัดส่งทางไปรษณีย์--}}
                {{--                                    กรุณาติดต่อฝ่ายบริการลูกค้า โทร. 1183--}}
                {{--                                </li>--}}
                {{--                                <li>ท่านสามารถใช้สิทธิยกเลิกกรมธรรม์ (Free Look Period) ภายใน 15 วัน--}}
                {{--                                    นับแต่วันที่ได้รับกรมธรรม์ โดยไม่มีค่าใช้จ่าย--}}
                {{--                                </li>--}}
                {{--                            </ol>--}}

                {{--                            <div class="wrapper text-center">{btn_buy}</div>--}}
                {{--                        </div>--}}
                {{--                    </div>--}}
                {{--                </div>--}}


            </main>

        </article>
    </main>
@endsection
