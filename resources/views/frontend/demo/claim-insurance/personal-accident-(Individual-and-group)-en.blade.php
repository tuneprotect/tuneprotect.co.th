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
            {{--<h1>{{$content->locales[$locale]->title}}</h1>--}}
            {{--<div>{!! $content->locales[$locale]->content !!}</div>--}}
            <h1>ประกันภัยอุบัติเหตุส่วนบุุคคลและกลุ่ม</h1>
            <div>
                <h2 class="text-primary">Claims Handling Process for Personal Accident and Group Accident Insurance</h2>
                <h2 class="text-primary">1. Process, Period, and Method of Claims Submission</h2>

                <ul>
                    <li><strong>1.1. Claims Submission Channels</strong>
                        <ul style="padding-left:20px;">
                            <li>- Tel.: 02-078-5656, press 1 and press 4</li>
                            <li>- Contact the Company in person or by mail
                            </li>
                            <li>General Claims Department
                                Tune Insurance Public Company Limited
                                3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei
                                District, Bangkok Metropolis, 10110
                            </li>
                            <li>- E-mail Contact: <a href="mailto:Tunepa.claim@tuneprotect.com"
                                                     title="Tunepa.claim@tuneprotect.com">Tunepa.claim@tuneprotect.com</a>
                            </li>
                        </ul>
                    </li>
                    <li><strong>1.2. Claim Authentication/Verification of the Right to be Informed for Claim Opening
                        </strong></li>
                    <li><strong>1.3. Request for Additional Documents, Notification via E-mail
                        </strong></li>
                    <li><strong>1.4. Consideration and Verification of the Documents Received
                        </strong></li>
                    <li><strong>1.5. Notification of the Result of Claims Consideration for Indemnity
                        </strong></li>
                </ul>

                <h2 class="text-primary">2. Notification and Claims Submission</h2>

                <p><strong>The policyholder and/or the insured,</strong> the beneficiary, or the representative thereof,
                    as the case may be, shall notify the Company of the injury or the sickness without delay and submit
                    the evidence and documents stated below to the Company.
                </p>
                <p>In the event of death, the Company shall be notified immediately unless the insured has an acceptable
                    reason for not notifying such death within the period determined or scheduled by the Company, for
                    which a letter of declaration shall be made.
                </p>
                <h2 class="text-primary">3. Period of claims processing after all documents have been received by the
                    Company for consideration
                </h2>
                <p>
                    The Company will indemnify within 15 working days <strong>after</strong> the insured, the
                    beneficiary, or the
                    authorized person has signed the letter of claim acceptance and submitted all relevant set of
                    documents to the Company.
                </p>

                <p>- In case of death, the Company may consider paying the indemnity to the beneficiary.

                </p>

                <p>- In other cases, such as dismemberment and sight, permanent disability, medical expense, flight
                    cancellation, damage of baggage and property, and so on, the Company shall pay the indemnity to the
                    insured.
                </p>

                <h2 class="text-primary">4. Required Documents for Consideration of Claims
                </h2>

                <p><strong>In case of death, the following supporting documents for consideration of claims <span
                                style="text-decoration: underline;">(original)</span> shall be submitted:</strong></p>

                <ul>
                    <li>1. Claims form <a href="/storage/claim-insurance/pa-choice/death.pdf"
                                          style="color:rgb(0, 0, 238);"
                                          title="(click here to download)"><strong>(click here to download)</strong>
                        </a> which shall be completed fully and correctly
                    </li>
                    <li>2. Copy of identification card of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>3. Copy of house registration of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>4. Certificate of name change of the insured (if any) signed for certification of true copy by
                        the beneficiary

                    </li>
                    <li>5. Copy of death certificate signed for certification of true copy by the beneficiary</li>
                    <li>6. Copy of death confirmation (issued by the hospital) signed for certification of true copy by
                        the beneficiary
                    </li>
                    <li>7. Daily report on the incident (signed for certification of true copy by the competent police
                        officer)
                    </li>
                    <li>8.Summary of the case and photo of the scene <span
                                style="text-decoration: underline;">(if any)</span> signed for certification of true
                        copy by the competent police officer
                    </li>
                    <li>9. Autopsy report (signed for certification of true copy by the competent police officer and the
                        pathologist who perform the autopsy)

                    </li>
                    <li>10. Forensic autopsy (if any)
                    </li>
                    <li>11. Copy of all medical history from the hospital, ranging from the occurrence of the incident
                        to the time of death

                    </li>
                    <li>12. Copy of identification card of the beneficiary signed for certification of the true copy
                    </li>
                    <li>13. Copy of house registration of the beneficiary signed for certification of the true copy
                    </li>
                    <li>14. Certificate of name change of the beneficiary (if any) signed for certification of the true
                        copy
                    </li>
                    <li>15. Document evidencing the relationship in the case that the beneficiary is the husband/
                        wife/child e.g. marriage certificate, child legitimization certificate, child birth certificate
                    </li>
                    <li>16. Copy of the first page of saving account passbook of the beneficiary
                    </li>
                </ul>
                <p><strong>In case of dismemberment and loss of sight, please submit the following supporting documents
                        for the claims consideration
                        <span style="text-decoration: underline;">(original)</span></strong>
                </p>
                <ul>
                    <li>1. Claims form <a
                                href="/storage/claim-insurance/pa-choice/permanent-disability.pdf"
                                style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong>
                        </a> which shall be completed fully and correctly
                    </li>
                    <li>2. Copy of identification card of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>3. Copy of house registration of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>4. Medical certificates from the hospital, ranging from the occurrence of the incident to the
                        present
                    </li>
                    <li>5. Copy of disabled person identification card
                    </li>
                    <li>6. Form of diagnosis and assessment of dismemberment and loss of sight issued by the physician
                    </li>
                    <li>7. Copy of all medical history from the hospital, ranging from the occurrence of the incident to
                        the present
                    </li>
                    <li>8. Recent full-body photo/photo of the lost organs</li>
                    <li>9. Daily report on the incident <span style="text-decoration: underline;">(if any)</span>
                        (signed for certification of true copy by the competent police officer)
                    </li>
                    <li>10. Summary of the case and photo of the scene <span style="text-decoration: underline;">(if any)</span>
                        signed for certification of true copy by the competent police officer
                    </li>
                    <li>11. Copy of the first page of saving account passbook of the insured
                    </li>
                </ul>

                <p><strong>In case of permanent disability, please submit the following supporting documents for the
                        claims consideration
                        <span style="text-decoration: underline;"> (original) </span></strong></p>
                <ul>
                    <li>1. Claims form <a
                                href="/storage/claim-insurance/pa-choice/permanent-disability.pdf"
                                style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong></a> which shall be completed fully and correctly
                    </li>
                    <li>2. Copy of identification card of the insured signed for certification of true copy by the
                        beneficiary

                    </li>
                    <li>3. Copy of house registration of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>4. Medical certificates from the hospital, ranging from the occurrence of the incident to the
                        present
                    </li>
                    <li>5. Copy of disabled person identification card
                    </li>
                    <li>6. Form of diagnosis and assessment of permanent disability issued by the physician

                    </li>
                    <li>7. Copy of all medical history from the hospital, ranging from the occurrence of the incident to
                        the present
                    </li>
                    <li>8. Recent full-body photo of the insured showing the present condition</li>
                    <li>9. Daily report on the incident <span style="text-decoration: underline;">(if any)</span>
                        (signed for certification of true copy by the competent police officer)
                    </li>
                    <li>10. Summary of the case and photo of the scene <span>(if any)</span> signed for certification of
                        true copy by
                        the competent police officer
                    </li>
                    <li>11. Copy of the first page of saving account passbook of the insured/the curator</li>
                    <li>12. Copy of identification card of the curator signed for certification of true copy</li>
                    <li>13. Copy of house registration of the curator signed for certification of true copy</li>
                    <li>14. Certificate or letter of appointment of the curator</li>
                    <li>15. Copy of the first page of saving account passbook of the insured/the curator</li>
                </ul>
                <p><strong>In case of Medical Expense per Occurrence, please submit the following supporting documents
                        for the claims consideration <span
                                style="text-decoration: underline;">(original)</span></strong>
                </p>
                <ul>
                    <li>1. Claims form <a
                                href="/storage/claim-insurance/pa-choice/pa-claim-form.pdf"
                                style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong></a> which shall be completed fully and correctly
                    </li>
                    <li>2. Medical certificate</li>
                    <li>3. Receipt of medical expense with details (original)</li>
                    <li>4. Expense summary/List of expense summary/Statement cover (in case IPD)</li>
                    <li>5. Copy of all medical history from the hospital, ranging from the occurrence of the incident to
                        the present
                    </li>
                    <li>6. Daily report on the incident <span style="text-decoration: underline;">(if any)</span>
                        (signed for certification of true copy by the competent
                        police officer)
                    </li>
                    <li>7. Summary of the case and photo of the scene <span
                                style="text-decoration: underline;">(if any)</span> signed for certification of true
                        copy by
                        the competent police officer
                    </li>
                    <li>8. Copy of identification card of the insured signed for certification of true copy
                    </li>
                    <li>9. Copy of the first page of saving account passbook of the insured</li>
                </ul>

                <h2 class="text-primary">5. Method of Indemnity Acceptance</h2>

                <p>- Money transfer (Please enclose the savings account details.)
                </p>

                <h2 class="text-primary">6. Methods of Contact with the Company and Relevant Agencies in Case of
                    Disputes or Complaints
                </h2>

                <p>If the insured has any suggestions or complaints, please call us at Telephone # 02-078-5656. </p>

                <p><strong>Complaints Management Section</strong><br/>
                    3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei District,
                    Bangkok Metropolis, 10110</p>
            </div>
        </article>
    </main>
@endsection
