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

            <h1 style="margin-bottom: 50px;text-align: center">Data Privacy Policy</h1>

            <div>
                <p>
                    Tune Insurance Public Company Limited (“Tune”) is aware of our responsibilities to handle your
                    personal data and protect your personal data with care. We, Tune, would like to inform and explain
                    the purpose and reasons, how and when we collect and use your information with the following;
                </p>
                <h3>Part 1: What personal data do we collect?</h3>
                <p>
                    Tune will collect, use, process and disclose your personal data below;
                </p>
                <div style="padding-bottom: 20px">
                    <ul style="padding-left: 10px">
                        <li>
                            1.Your personal data such as name-surname, gender, date of birth, age, nationality, marital
                            status, address, telephone number, email, identity card number, passport number, work permit
                            number
                        </li>
                        <li>
                            2.Contact details including IP address.
                        </li>
                        <li>
                            3.Any relevant personal data such as your family members, beneficiary, payee, policy holder,
                            policy member.
                        </li>
                        <li>
                            4.Any contact information between you and Tune, either from telephone, letter, email or
                            other channels.
                        </li>
                        <li>
                            5.Your personal sensitive data such as health data, medical history, religious, genetic,
                            disability, ethic origin.
                        </li>
                        <li>
                            6.Your health information such as health/ medical history, medical consultant, medical
                            record, health questionnaire.
                        </li>
                        <li>
                            7.Your financial or source of income and any sources from financial need analysis.
                        </li>
                        <li>
                            8.Your information for performing ‘Know Your Customer’ (KYC) or due diligence.
                        </li>
                        <li>
                            9.Your payment information related to premium payment or claims payment .
                        </li>
                        <li>
                            10.Your information from the private agency or government agency or regulator such as the
                            Office of Insurance Commission, The Anti-Money Laundering Office.
                        </li>
                    </ul>
                </div>


                <h3>Part 2: What do we use your personal data for?</h3>
                <p>
                    We will use, collect, process and/or disclose your personal data with the following purpose;
                </p>
                <div style="padding-bottom: 20px">
                    <ul style="padding-left: 10px">
                        <li>
                            1.To consider an application for an insurance policy, assess and evaluate and underwrite
                            your application including insurance administration.
                        </li>
                        <li>
                            2.To provide any information about our products and services.
                        </li>
                        <li>
                            3.To administer your policy such as policy changes, renewal, policy cancellation or premium
                            payment or any payment related to your policy.
                        </li>
                        <li>
                            4.To manage and administer the company’s operation under regulation requirement and
                            company’s policies.
                        </li>
                        <li>
                            5.To conduct due diligence and know your customer base on underwriting guideline process.
                        </li>
                        <li>
                            6.To perform internal audit or on-site audit from the regulator.
                        </li>
                        <li>
                            7.To manage your personal data on our IT system to align with the information security
                            policy.
                        </li>
                        <li>
                            8.To provide and offer our products and services, marketing campaign and promotions which
                            may suit you.
                        </li>
                        <li>
                            9.To comply with the applicable laws and regulations.
                        </li>
                        <li>
                            10.To deal with your request or inquiries.
                        </li>
                        <li>
                            11.To handle any complaints, suggestions in relation to your insurance policy or your
                            insurance application.
                        </li>
                    </ul>
                </div>

                <h3>Part 3: Who do we share your personal data with?</h3>
                <p>
                    From the above purpose, we do share your personal data with the following parties;
                </p>
                <div style="padding-bottom: 20px">
                    <ul style="padding-left: 10px">
                        <li>
                            1.Our service provider and consultant such as third-party administrators, loss adjuster and
                            claims expert, assistance providers, lawyer, fund manager, IT services.
                        </li>
                        <li>
                            2.Your families, upon request from you or allowed by you.
                        </li>
                        <li>
                            3.Our regulators.
                        </li>
                        <li>
                            4.Our business partners or our agents/brokers for offering our products and services or
                            provide any assistance to you.
                        </li>
                        <li>
                            5.Our reinsurer.
                        </li>
                        <li>
                            6.Your policyholder.
                        </li>
                    </ul>
                </div>

                <h3>Part 4: How long do we keep your personal data? </h3>
                <p>
                    We will retain your personal data for as long as is reasonably necessary for the purpose in Part 2
                    and our record retention policy. In some circumstances we may retain your personal data for longer
                    periods of time, for instance where we are required to do so in accordance with legal, regulator,
                    tax or accounting requirements. Where your personal data is no longer required, we will ensure it is
                    either securely deleted or stored in a way it no longer be used by the business.
                </p>

                <h3>Part 5: Your personal sensitive data</h3>
                <p>
                    We may collect, use, process and disclose your personal sensitive data after we received your
                    explicit consent except the legislation allows us to use your personal sensitive data without your
                    consent. We only process your sensitive personal data for the insurance application purpose which
                    stated in Part 2
                </p>
                <h3>Part 6: Your Cookies</h3>
                <p>
                    Tune may record your actions or history when you visit our website to enhance your experience and
                    ability to reconnect between Tune and you. You can click ‘Accept Cookies’ to allow us to collect
                    your consent and cookies.
                </p>

                <h3>Part 7: What is your right?</h3>
                <p>
                    Under Personal Data Protection Act, you have the rights detailed below;
                </p>
                <div style="padding-bottom: 20px">
                    <ul style="padding-left: 10px">
                        <li>
                            <strong>
                                1.Right to Withdraw the Consent
                            </strong>
                            <p>
                                You have the right to withdraw your prior consent except that the withdrawal impacts the
                                insurance policy administration or claims.
                            </p>
                        </li>
                        <li>
                            <strong>
                                2.Right of Access
                            </strong>
                            <p>
                                You have the right to access and request us to confirm whether we are processing your
                                personal data or giving you a copy of your personal data.
                            </p>
                        </li>
                        <li>
                            <strong>
                                3.Right to Data Portability
                            </strong>
                            <p>
                                You have right to data portability and request us to provide your personal data to you
                                in structure commonly used to us or another data controller, but in each case, only
                                where; the processing is based on your consent or the performance of a contract with you
                                or the provision or porting would not violate the rights and freedoms of Tune or other
                                persons.
                            </p>
                        </li>
                        <li>
                            <strong>
                                4.Right to Object
                            </strong>
                            <p>
                                You can object to any processing of your personal data which has our legitimate interest
                                as the legal basis if you believe your fundamental rights and freedom outweigh our
                                legitimate interest.
                            </p>
                        </li>
                        <li>
                            <strong>
                                5.Right to Erasure
                            </strong>
                            <p>
                                You can ask Tune to ease your personal data but only where it has been processed
                                unlawfully or it is no longer needed for the purposes for which it was collected.
                            </p>
                        </li>
                        <li>
                            <strong>
                                6.Right to Restrict Processing
                            </strong>
                            <p>
                                You can ask Tune to restrict your personal data, but only where its accuracy is
                                contested, to allow us to verify its accuracy or the processing is unlawful, but you do
                                not want it erased.
                            </p>
                        </li>
                        <li>
                            <strong>
                                7.Right to Rectification
                            </strong>
                            <p>
                                You can ask Tune to rectify inaccurate personal data or may seek to verify the accuracy
                                of the data before ratifying it.
                            </p>
                        </li>
                        <li>
                            <strong>
                                8.Right to Complaint
                            </strong>
                            <p>
                                You have the right to complain if we have proceeded your data illegally or our data
                                processor breach the regulations
                            </p>
                        </li>
                    </ul>
                </div>
                <br>
                <p>If you have any issues arising from the data privacy policy or request to exercise data subject rights, please contact
                    <strong>
                        the Data Protection Officer (‘DPO’),
                    </strong>
                    Tune Insurance at<br>
                    3199 Maleenon Tower, 14th Floor, Rama IV RD, Khlong Ton, Khlong Toei, Bangkok, 10110
                </p>

            </div>
        </article>
    </main>
@endsection
