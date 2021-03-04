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
            <h1>
                iPass COVID-19
            </h1>
            <div>
                <h2 class="text-primary">Claims Handling Process for Personal Accident Insurance: TUNE I–PASS: COVID-19
                    (VISA 100K USD)
                </h2>
                <h2 class="text-primary">1. Process, Period, and Method of Claims Submission
                </h2>
                <ul>
                    <li>
                        <strong>1.1. Claims Submission Channels</strong>
                        <ul style="padding-left:20px;">
                            <li>- Tel.: 02-078-5656, press 1 and press 4</li>
                            <li>
                                - Contact the Company in person or by mailing service to Non-Motor Claims Department
                                (for general claims other than motor claims)
                            </li>
                            <li>
                                Tune Insurance Public Company Limited
                                3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei
                                District, Bangkok Metropolis, 10110
                            </li>
                            <li>
                                - E-mail Contact: <a href="mailto:tunetraveleasy.claim@tuneprotect.com"
                                                     title="tunetraveleasy.claim@tuneprotect.com">tunetraveleasy.claim@tuneprotect.com</a>
                            </li>
                        </ul>
                    </li>
                    <li><strong>1.2. Claim Authentication/Verification of the Right to be Informed for Claim
                            Opening</strong></li>
                    <li><strong>1.3. Request for Additional Documents, Notification via E-mail</strong></li>
                    <li><strong>1.4. Consideration and Verification of the Documents Received</strong></li>
                    <li><strong>1.5. Notification of the Result of Claims Consideration for Indemnity</strong></li>
                </ul>

                <h2 class="text-primary">
                    2. Notification and Claims Submission
                </h2>
                <p>
                    <strong>The policyholder and/or the insured,</strong>
                    the beneficiary, or the representative thereof, as the case may be, shall notify the Company of the
                    injury or the sickness without delay and submit the evidence and documents stated below to the
                    Company.
                </p>
                <p>
                    In the event of death, the Company shall be notified immediately unless the insured has an
                    acceptable reason for not notifying such death within the period determined or scheduled by the
                    Company, for which a letter of declaration shall be made.
                </p>
                <h2 class="text-primary">3. Period of claims processing after all documents have been received by the
                    Company for consideration.
                </h2>
                <p>
                    The Company will indemnify within 15 working days <strong>after</strong> the insured, the
                    beneficiary, or the authorized person has signed the letter of claim acceptance and submitted all
                    relevant set of documents to the Company.
                </p>
                <p>
                    In case of medical expenses for infection of the COVID-2019 infectious disease (COVID-19) and the
                    sickness in a COMA condition which caused by or from the consequence of COVID-19 infection, the
                    Company will consider paying the indemnity to the insured.

                </p>
                <h2 class="text-primary">4. Required Documents for Consideration of Claims</h2>
                <p>
                    <strong>Initial Documents
                        <span style="text-decoration: underline;">(Original)</span></strong>
                </p>
                <ul>
                    <li>
                        1. Claims form <a
                                href="/storage/claim-insurance/ipass-covid19/covid19.pdf"
                                style="color:rgb(0, 0, 238);" title="(click here to download)">
                            <strong>(click here to download)</strong></a> which shall be completed fully and correctly
                    </li>
                    <li>
                        2. Travel Itinerary
                    </li>
                    <li>
                        3. Copy of the insurance policy of the policyholder
                    </li>
                    <li>4. Copy of passport and the page showing the immigration stamp on arrival
                    </li>
                    <li>
                        5. Bank account details
                    </li>
                    <li>
                        6. FIT-TO-FLY Doctor Certificate confirming that the insured passed the COVID-19 test issued by
                        the Country of Origin
                    </li>
                </ul>
                <p>
                    <strong> In case of a COMA sickness due to COVID-2019 infection (COVID-19), the following supporting
                        documents for consideration of claims <span
                                style="text-decoration: underline;">(original)</span> shall be submitted:</strong>
                </p>
                <ul>
                    <li>1. Medical report or physician’s medical certificate indicating significant symptom, diagnosis
                        result, and treatment
                    </li>
                    <li>2. Receipt (true copy) listing the expenses and statement cover (summarizing all expenses) of
                        the medical care facility issued by the medical healthcare institution/hospital with list of
                        medication and expenses
                    </li>
                    <li>3. Copy of all medical history including all the related lab tests
                    </li>

                </ul>
                <p>
                    <strong> Medical Expenses due to COVID-2019 infectious disease (COVID-19)
                        <span style="text-decoration: underline;">(original)</span></strong>
                </p>
                <ul>
                    <li>1. Medical report or medical certificate indicating significant symptom, diagnosis result, and
                        treatment
                    </li>
                    <li>2. Receipt (original) listing the expenses and statement cover (summarizing all expenses) of the
                        medical care facility issued by the medical healthcare institution/hospital with list of
                        medication and expenses
                    </li>
                    <li>3. Copy of all medical history including all the related lab tests
                    </li>
                </ul>
            </div>
        </article>
    </main>
@endsection