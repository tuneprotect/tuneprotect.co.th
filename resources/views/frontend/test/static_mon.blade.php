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

                        <p>Taking care of every major disease. Determine the Coverage that best fits you with a simple click. Covering five critical disease groups, Coverage up to 3,000,000 baht. For just thousands of baht, you will have critical illness insurance cover up to several million baht.</p>

                        <div class="wrapper text-center"><a class="btn btn-primary" href="" style="width: 200px">download</a> {btn_buy}</div>
                    </section>

                    <section class="select-ci-wrapper">
                        <div class="wrapper">
                            <div class="box">
                                <div><img alt="" src="/storage/product/CI/phone.png" /></div>

                                <div>
                                    <h3>myFlexi CI allows you to select your critical illness coverage.</h3>

                                    <ul>
                                        <li>
                                            <i class="icofont-shield-alt"
                                               style="display: inline-block;position: relative;top: -20px;color: red"></i>
                                            <div style="display:inline-block;width: 80%;">
                                                <strong><em>Choose</em> the right coverage </strong> <span> You can choose the disease group that most concerns you.</span>
                                            </div>

                                        </li>
                                        <li>
                                            <i class="icofont-coins"
                                               style="display: inline-block;position: relative;top: -20px;color: red"></i>
                                            <div style="display:inline-block;width: 80%;">
                                                <strong><em>Choose</em> a plan according to your budget</strong> <span>Adjust, increase, or reduce insurance premiums as you wish.</span>
                                            </div>

                                        </li>
                                        <li>
                                            <i class="icofont-holding-hands"
                                               style="display: inline-block;position: relative;top: -40px;color: red"></i>
                                            <div style="display:inline-block;width: 80%;">
                                                <strong><em>Choose</em> for yourself or those you care about</strong> <span>Provide protection for you and your loved ones with a simple click.</span>
                                            </div>

                                        </li>
                                    </ul>

                                    <div class="wrapper text-center" style="margin: 20px auto 0 auto"><a class="btn btn-primary" href="" style="width: 200px">download</a> {btn_buy}</div>
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

                                        <p style="font-size: .8rem">Option to adjust, increase or reduce your protection coverage</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">rule</span>

                                        <p style="font-size: .8rem">Protection against critical illnesses with coverage up to 3 million baht</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">health_and_safety</span>

                                        <p style="font-size: .8rem">Apply now without having to purchase life insurance.</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">elderly</span>

                                        <p style="font-size: .8rem">Coverage until the age of 65</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">local_atm</span>

                                        <p style="font-size: .8rem">Receive daily hospital cash and home nursing care benefits (if doctor recommended)</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">savings</span>

                                        <p style="font-size: .8rem">Annual premiums easily payable in 10 credit card installments</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">fact_check</span>

                                        <p style="font-size: .8rem">Covers five critical illnesses</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">do_not_disturb_alt</span>

                                        <p style="font-size: .8rem">Option to receive a second medical opinion as well as consulting a doctor online.</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">trending_down</span>

                                        <p style="font-size: .8rem">Insurance premiums are tax deductible*</p>
                                    </div>

                                    <div class="item"><span class="material-icons md-dark">medical_services</span>

                                        <p style="font-size: .8rem">Answer three simple health questions; there is no need to go to the hospital for a check-up</p>
                                    </div>
                                </div>
                            </div>

                            <div class="wrapper text-center">{btn_buy}</div>
                        </section>

                        <div class="service_flexi">
                            <h2 style="margin: 20px 0">Once you purchase myFlexi CI you will also be eligible to receive additional services provided by the company.</h2>

                            <div class="service_flexi_box">
                                <div class="inner">
                                    <img alt=""
                                         src="/storage/product/CI/health2go-520x480-en.jpg"/>
                                    <a class="btn btn-outline" href="/en/myHealth/health2go">more</a>

                                </div>
                                <div class="inner">
                                    <img alt=""
                                         src="/storage/product/CI/myelitedoctor520x480-en.jpg"/>
                                    <a class="btn btn-outline" href="/en/myHealth/health2go">more</a>
                                </div>
                            </div>

                            <div class="wrapper text-center">{btn_buy}</div>
                        </div>



                        <section class="why-ci">
                            <div>
                                <h2>Why purchase myFlexi CI?</h2>

                                <p>Because it is critical illness insurance that is ready to take care of you and your loved ones for both early and late stage illnesses. You can also choose additional critical illness coverage for a small additional cost. With this insurance coverage, you will not need to worry about the enormous medical bills that could occur for treatment.</p>
                            </div>

                            <div>
                                <h2>Top 5 deadly diseases in Thailand</h2>
                                <small>*Number of deaths per hour</small>

                                <ul>
                                    <li><strong style="width: 270px;">7.7</strong> <span> Cancer</span></li>
                                    <li><strong style="width: 113px;">3.2</strong> <span>Hemorrhagic stroke</span></li>
                                    <li><strong style="width: 98px;">2.8</strong> <span>Atrial fibrillation severe stroke</span></li>
                                    <li><strong style="width: 84px;">2.4</strong> <span>Lung disease</span></li>
                                    <li><strong style="width: 60px;">1.7</strong> <span>Chronic kidney disease</span></li>
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
                                        <li><strong>Breast cancer <span>3D radiation technique</span></strong> <span class="col-price">215,600</span></li>
                                        <li><strong>Lung cancer<span>3D radiation technique</span></strong> <span class="col-price">184,800</span></li>
                                        <li><strong>Cervical cancer<span>3D radiation technique</span></strong> <span class="col-price">184,800</span></li>
                                    </ul>
                                </div>

                                <div class="ci-cost-table">
                                    <h6>Heart Attack</h6>

                                    <ul>
                                        <li><strong>Balloon angioplasty therapy </strong> <span class="col-price">250,000</span></li>
                                        <li><strong>Coronary artery surgery</strong> <span class="col-price">340,000</span></li>
                                        <li><strong>Coronary angiography examination </strong> <span class="col-price">150,000</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div class="wrapper text-center">{btn_buy}</div>


                        <section class="installment-ci">
                            <img src="/storage/product/CI/waist-portrait-happy-smiling-young-600w-1959752341.webp" alt="ci">
                            <div>
                                <h2>Purchasing critical illness insurance myFlexi CI is a better choice! Because you can
                                    choose to pay your annual premium in 10 easy credit card installments.</h2>

                                <p>Pay for your insurance comfortably with the option of paying your annual premium in 10 credit card installments. Or you can pay the full annual premium via credit or debit cards accepted for all banks in Thailand.*<br />
                                    <em>*Payment terms and conditions are specified by each bank.</em></p>
                            </div>
                        </section>
                        <div class="wrapper text-center">{btn_buy}</div>

                        <div class="my-health-condition">
                            <h2>Insurance underwriting conditions</h2>

                            <ol class="has-bullet">
                                <li>The underwriting consideration is in accordance with the Company&#39;s guidelines.</li>
                                <li>The applicant must be between 18 to 60 years old (renewable up to 65 years).</li>
                                <li>The applicant must be in good health before the date of applying for insurance</li>
                                <li>A health declaration is needed without requiring medical tests (If the health declaration information is insufficient for consideration, the company reserves the right to request a health check-up before issuing the insurance.)</li>
                                <li>The information in this document is preliminary only and does not replace the policy wording. The applicant/insured should study the policy wording in detail to understand the details of coverage conditions, benefits, and exclusions before deciding to purchase the insurance.</li>
                                <li>The coverage conditions are specified in the actual policy wording.</li>
                                <li>If the insured needs a tax invoice or policy to be delivered by post, please contact customer service at 1183.</li>
                                <li>You have the right to amend and cancel the policy free of charge (Free Look Period) within 15 days of receiving the insurance policy.</li>
                            </ol>

                            <div class="wrapper text-center">{btn_buy}</div>
                        </div>
                    </div>
                </div>

            </main>

        </article>
    </main>
@endsection
