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
            <h1>Tune Protect Travel Insurance by AirAsia</h1>
            <div>
                <h2 class="text-primary">Claims Handling Process for Tune Protect Travel Insurance by AirAsia</h2>
                <h2 class="text-primary">1. Process, Period, and Method of Claims Submission</h2>
                <ul>
                    <li>
                        <strong>1.1. Claims Submission Channels</strong>
                        <ul style="padding-left:20px;">
                            <li>- Tel.: 02-078-5656, press 1 and press 4
                            </li>
                            <li>
                                Contact the Company in person or by mailing to
                                Non-Motor Claims Department (for General Claims other than Motor Claims):
                            </li>
                            <li>
                                <strong>Tune Insurance Public Company Limited</strong>
                                3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei
                                District, Bangkok Metropolis, 10110
                            </li>
                            <li>
                                - E-mail Contact: <a href="mailto:Airasia_claim@tuneprotect.com"
                                                     title="Airasia_claim@tuneprotect.com">Airasia_claim@tuneprotect.com</a>
                            </li>
                        </ul>
                    </li>
                    <li><strong>1.2. Claim Authentication/Verification of the Right to be Informed and for Claims
                            Opening
                        </strong></li>
                    <li><strong>1.3. Request for Additional Documents, Notification via E-mail
                        </strong></li>
                    <li><strong>1.4. Consideration and Verification of the Documents Received
                        </strong></li>
                    <li><strong>1.5. Notification of the Result of Claims Consideration for Indemnity
                        </strong></li>
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
                    Company for consideration
                </h2>
                <p>
                    The Company will indemnify within 15 working days <strong>after</strong> the insured, the
                    beneficiary, or the authorized person has signed the letter of claim acceptance and submitted all
                    relevant documents to the Company.

                </p>
                <p>
                    - In case of death, the Company may consider paying the indemnity to the beneficiary
                </p>
                <p>
                    - In other cases such as dismemberment and sight, permanent disability, medical expense, flight
                    cancellation, damage of baggage and property, and so on, the Company shall pay the indemnity to the
                    insured.
                </p>
                <h2 class="text-primary">4. Required Documents for Consideration of Claims
                </h2>
                <p>
                    <strong>Initial Documents <span style="text-decoration: underline;">(Original)</span></strong>
                </p>
                <ul>
                    <li>
                        1. Claims form <a
                                href="/storage/claim-insurance/ta-airasia/claim-form-taa-en.pdf"
                                style="color:rgb(0, 0, 238);"
                                title="(click here to download)">
                            <strong>(click here to download)</strong></a> which shall be completed fully and correctly
                    </li>
                    <li>2. Travel Itinerary of AirAsia</li>
                    <li>3. Ticket and boarding pass</li>
                    <li>4. Invoice of AirAsia X (indicating fare and other expenses)</li>
                    <li>5. Copy of the passport or identification card</li>
                    <li>6. Bank account details</li>
                </ul>
                <p>
                    <strong>In case of death, the following supporting documents for consideration of claims
                        <span style="text-decoration: underline;">(original)</span> shall be submitted:</strong>
                </p>
                <ul>
                    <li>1. Copy of identification card of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>2. Copy of house registration of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>3. Certificate of name change of the insured (if any) signed for certification of true copy by
                        the beneficiary

                    </li>
                    <li>4. Copy of death certificate signed for certification of true copy by the beneficiary
                    </li>
                    <li>5. Copy of death confirmation (issued by the hospital) signed for certification of true copy by
                        the beneficiary

                    </li>
                    <li>6. Daily report on the incident (signed for certification of true copy by the competent police
                        officer)

                    </li>
                    <li>7. Summary of the case and photo of the scene (if any) signed for certification of true copy by
                        the competent police officer
                    </li>
                    <li>8. Autopsy report (signed for certification of true copy by the competent police officer and the
                        pathologist who performs the autopsy)

                    </li>
                    <li>9. Forensic autopsy (if any)

                    </li>
                    <li>10. Copy of all medical history from the hospital, ranging from the occurrence of the incident
                        to the time of death

                    </li>
                    <li>11. Copy of identification card of the beneficiary signed for certification of the true copy
                    </li>
                    <li>12. Copy of house registration of the beneficiary signed for certification of the true copy
                    </li>
                    <li>13. Certificate of name change of the beneficiary (if any) signed for certification of the true
                        copy
                    </li>
                    <li>14. Document evidencing the relationship in the case that the beneficiary is the husband/
                        wife/child e.g. marriage certificate, child legitimization certificate, child birth certificate

                    </li>
                    <li>15. Copy of the first page of saving account passbook of the beneficiary
                    </li>
                </ul>
                <p>
                    <strong>In case of dismemberment and loss of sight, please submit the following supporting documents
                        for the claims consideration
                        <span style="text-decoration: underline;">(original)</span></strong>
                </p>
                <ul>
                    <li>1. Copy of identification card of the insured signed for certification of true copy by the
                        beneficiary

                    </li>
                    <li>2. Copy of house registration of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>3. Medical certificates from the hospital, ranging from the occurrence of the incident to the
                        present

                    </li>
                    <li>4. Copy of disabled person identification card
                    </li>
                    <li>5. Form of diagnosis and assessment of dismemberment and loss of sight issued by the physician

                    </li>
                    <li>6. Copy of all medical history from the hospital, ranging from the occurrence of the incident to
                        the present
                    </li>
                    <li>7. Recent full-body photo/photo of the lost organs</li>
                    <li>8. Daily report on the incident (if any) (signed for certification of true copy by the competent
                        police officer)
                    </li>
                    <li>9. Summary of the case and photo of the scene (if any) signed for certification of true copy by
                        the competent police officer
                    </li>
                </ul>
                <p>
                    <strong>In case of permanent disability, please submit the following supporting documents for the
                        claims consideration
                        <span style="text-decoration: underline;">(original)</span></strong>
                </p>
                <ul>
                    <li>1. Copy of identification card of the insured signed for certification of true copy by the
                        beneficiary
                    </li>
                    <li>2. Copy of house registration of the insured signed for certification of true copy by the
                        beneficiary

                    </li>
                    <li>3. Medical certificates from the hospital, ranging from the occurrence of the incident to the
                        present

                    </li>
                    <li>4. Copy of disabled person identification card

                    </li>
                    <li>5. Form of diagnosis and assessment of permanent disability issued by the physician
                    </li>
                    <li>6. Copy of all medical history from the hospital, ranging from the occurrence of the incident to
                        the present
                    </li>
                    <li>7. Recent full-body photo of the insured showing the present condition

                    </li>
                    <li>8. Daily report on the incident (if any) (signed for certification of true copy by the competent
                        police officer)
                    </li>
                    <li>9. Summary of the case and photo of the scene (if any) signed for certification of true copy by
                        the competent police officer


                    </li>
                    <li>10. Copy of the first page of saving account passbook of the insured/the curator</li>
                    <li>11. Copy of identification card of the curator signed for certification of true copy</li>
                    <li>12. Copy of house registration of the curator signed for certification of true copy
                    </li>
                    <li>13. Certificate or letter of appointment of the curator or guardian
                    </li>
                    <li>14. Copy of the first page of saving account passbook of the insured/the curator
                    </li>
                </ul>
                <p>
                    <strong>Flight Cancellation</strong>
                </p>
                <ul>
                    <li>1. Medical report or medical certificate indicating significant symptom, diagnosis result, and
                        treatment

                    </li>
                    <li>2. Copy of death certificate of the deceased (if it is caused by death) signed for certification
                        of true copy
                    </li>
                    <li>3. Copy of birth certificate, copy of marriage certificate, or any other documents confirming
                        the relationship if the incident is related to the spouse, child, or close relative.
                    </li>
                </ul>
                <p>
                    <strong>Trip Curtailment</strong>
                </p>
                <ul>
                    <li>1. Medical report or medical certificate indicating significant symptom, diagnosis result, and
                        treatment


                    </li>
                    <li>2. Copy of death certificate of the deceased (if it is caused by death) signed for certification
                        of true copy

                    </li>
                    <li>3. Copy of birth certificate, copy of marriage certificate, or any other documents confirming
                        the relationship if the incident is related to the spouse, child, or close relative.
                    </li>
                    <li>4. Copy of receipt of expense for trip curtailment and the boarding pass of AirAsia
                    </li>
                    <li>5. Copy of receipt of the air ticket of other commercial airlines to replace the original trip
                        and the boarding pass

                    </li>
                </ul>
                <p>
                    <strong>On-Time Guarantee</strong>
                </p>
                <ul>
                    <li>1. Boarding pass


                    </li>
                    <li>2. Document indicating the departure date, delay period, and the cause of delay issued by the
                        airliner

                    </li>
                </ul>
                <p>
                    <strong>Loss of Baggage and/or Personal Effects
                    </strong>
                </p>
                <ul>
                    <li>1. Irregularity report of AirAsia
                    </li>
                    <li>2. Photo of depicting such damage
                    </li>
                    <li>3. Quotation or receipt of the repair cost
                    </li>
                    <li>4. Details of the price, brand, year of purchase of the baggage

                    </li>
                    <li>5. Baggage tag or baggage check-in tag of AirAsia
                    </li>
                    <li>6. Daily report of the local police officer signed for certification of true copy by the
                        competent police officer if the loss or damage is caused by threat or violent force.

                    </li>
                </ul>
                <p>
                    <strong>Flight Delay and/or Public Transportation Delay
                    </strong>
                </p>
                <ul>
                    <li>1. Document indicating the departure date, delay period, and the cause of delay issued by the
                        airliner or the public transportation company

                    </li>
                    <li>2. Other required documents as requested by the Company
                    </li>
                </ul>
                <p>
                    <strong>Missing Connecting Flight

                    </strong>
                </p>
                <ul>
                    <li>1. Boarding pass</li>
                    <li>2. Other required documents as requested by the Company
                    </li>
                </ul>
                <p>
                    <strong>Baggage Delay
                    </strong>
                </p>
                <ul>
                    <li>1. Baggage tag or baggage check-in tag of AirAsia</li>
                    <li>2. Irregularity report of AirAsia or the management of the public transportation company
                    </li>
                </ul>
                <p>
                    <strong>Medical Expense due to Injury or Sickness
                    </strong>
                </p>
                <ul>
                    <li>1. Medical report or medical certificate indicating significant symptom, diagnosis result, and
                        treatment

                    </li>
                    <li>2. Receipt (original) listing the expenses and statement cover (summarizing all expenses) of the
                        medical care facility

                    </li>
                </ul>
                <h3 class="text-primary">Emergency Medical Evacuation & Repatriation Expense
                </h3>
                <ul>
                    <li> You may contact Asia Assistance Network which is available for 24 hours at +662 203 9798.
                    </li>
                </ul>
                <p>
                    <strong>Loss of Personal Effects</strong>
                </p>
                <ul>
                    <li>1. List of lost or damaged personal effects
                    </li>
                    <li>2. Copy of daily report of the local police officer at the jurisdiction where the incident
                        occurred, as the case may be

                    </li>
                    <li>3. Other required evidence as requested by the Company

                    </li>
                </ul>
                <p>
                    <strong>Loss or Damage of Travel Documents
                    </strong>
                </p>
                <ul>
                    <li>1. Copy of passport of the insured and/or travel evidence, as the case may be


                    </li>
                    <li>2. Copy of daily report of the local police officer at the jurisdiction where the incident
                        occurred, as the case may be

                    </li>
                    <li>
                        3. Original receipt of the expenses
                    </li>
                    <li>4. Document confirming the loss or damage of the manager or owner of the lodging where the
                        insured stayed at the time of such loss or damage, as well as the document indicating the
                        payment of such manager or owner of the lodging (if any)

                    </li>
                </ul>
                <p>
                    <strong>Third Party Liability
                    </strong>
                </p>
                <ul>
                    <li>1. Copy of the passport of the insured and/or travel evidence, as the case may be
                    </li>
                    <li>2. Copy of daily report of the local police officer at the jurisdiction where the incident
                        occurred, as the case may be

                    </li>
                    <li>3. Other required evidence as requested by the Company
                    </li>
                </ul>
                <h2 class="text-primary">5. Method of Indemnity Acceptance
                </h2>
                <p>
                    - Money transfer (Please enclose the bank account details.)
                </p>
                <h2 class="text-primary">6. Methods of Contact with the Company and Relevant Agencies in Case of
                    Disputes or Complaints</h2>
                <p>
                    If the insured has any suggestions or complaints, please call 02-078-5656.

                </p>
                <p>
                    <strong>Complaints Management Section/Center

                    </strong><br>
                    3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei District,
                    Bangkok Metropolis, 10110
                </p>
            </div>
        </article>
    </main>
@endsection
