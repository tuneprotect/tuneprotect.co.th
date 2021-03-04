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
            <h1>Process of Incident Report and Disbursement of Claims</h1>
            <div>
                <h2 class="text-primary">(Voluntary)</h2>
                <h2 class="text-primary">Process of Incident Report</h2>
                <ul>
                    <li>1.Call the company to notify the accident immediately at 1183 or 02-0785656 which is available
                        24 hours.
                    </li>
                    <li>2. Details to be notified
                        <ul style="padding-left:20px;">
                            <li>2.1 Registration number of the insured car
                            </li>
                            <li>2.2 Policy number or the insured’s name</li>
                            <li>2.3 First name/last name of the insured car driver and contact number
                            </li>
                            <li>2.4 Date and time of accident
                            </li>
                            <li>2.5 Nature of the accident
                            </li>
                            <li>2.6 Place of accident with the obvious point
                            </li>
                            <li>2.7 Information about the other party e.g. car registration number and brand
                            </li>
                            <li>2.8 Information about the damaged property of the other party
                            </li>
                        </ul>
                    </li>
                    <li>
                        3. The officer who accepts the report will contact the surveyor to inspect the place of incident
                        and update the progress from time to time.
                    </li>
                    <li>
                        4. After that, the driver shall wait for the officer at the place of incident without making any
                        agreement until the approval is obtained from the company’s officer (except for the case of
                        Knock for Knock document exchange).
                    </li>
                    <li>5. In case of transfer by the government officer, the place of appointment shall be confirmed to
                        the company again.

                    </li>
                    <li>
                        6. The officer will issue the damage certificate to the customer after completion of the
                        inspection so that the customer can proceed with the repair.
                    </li>
                    <li>
                        7. In the Knock for Knock case, the officer may not be informed.
                        <ul style="padding-left:20px;">
                            <li> 7.1 The insured car and the other party’s car are both four-wheeled and have Type 1
                                insurance with Knock for Knock document.
                            </li>
                            <li>7.2 The cars are sedan, pickup truck weighing up to 4 tons with up to 20 seats.
                            </li>
                            <li>7.3 After the accident where both parties reached an agreement regardless of which party
                                is at fault, the cars shall be moved to the side of the road, and both parties sign the
                                document.

                            </li>
                            <li>7.4 The parties complete the Knock for Knock document and sign it.</li>
                            <li>7.5 The parties exchange the Knock for Knock document.</li>
                            <li>7.6 The parties separate from the place of incident without having to wait for the
                                officer.
                            </li>
                            <li>7.7 The document exchanged with the other party shall be given to the officer for
                                examination and repair.
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2 class="text-primary">
                    Process of Disbursement of Claims
                </h2>
                <p>
                    <strong>In case of the repair at the company’s contracted repair shops, the required documents are
                        as follows:</strong>
                </p>
                <p>
                    <strong>The Insured Car</strong>
                </p>
                <ul>
                    <li>1. Damage certificate
                    </li>
                    <li>2. Copy of driving license/identification card (signed for certification of true copy)
                    </li>
                    <li>3. Copy of car registration manual (signed for certification of true copy)
                    </li>
                </ul>
                <p><strong>The Other Party’s Car</strong></p>
                <ul>
                    <li>1. Damage certificate</li>
                    <li>2. Copy of driving license/identification card (signed for certification of true copy)
                    </li>
                    <li>3. Copy of car registration manual (signed for certification of true copy)
                    </li>
                    <li>4. Copy of Voluntary Insurance Policy or Compulsory Motor Insurance Policy
                    </li>
                </ul>
                <p><strong>In Case of Repair at Other Repair Shops (Non-contracted Repair Shops)
                    </strong></p>
                <ul>
                    <li>1. Please take your car and the quotation of the repair shop of which service you will use to
                        the company for assessment of damage prior to conducting the repair.
                    </li>
                    <li>2. Or the officer may assess damage for you on site in case of severe damage to the extent that
                        the car cannot be moved.
                    </li>
                    <li>3. After the repair, you are required to advance the repair costs and submit the relevant
                        documents to the company to reimburse the costs as assessed by the company.
                    </li>
                </ul>
                <p><strong>Required Documents for Reimbursement</strong></p>
                <p><strong>Insured Car</strong></p>
                <ul>
                    <li>1. Certificate of damage</li>
                    <li>2. Price assessment document</li>
                    <li>3. Receipt/Tax invoice</li>
                    <li>4. Photo of the car under repair</li>
                    <li>5. Taking the car for inspection after the repair</li>
                    <li>6. Returning the car scraps (upon request)</li>
                    <li>7. Copy of identification card/driving license (signed for certification of true copy)</li>
                    <li>8. Copy of the first page of account passbook (in case of money transfer)</li>
                </ul>
                <p><strong>The Other Party’s Car</strong></p>
                <ul>
                    <li>1. Certificate of damage
                    </li>
                    <li>2. Price assessment document
                    </li>
                    <li>3. Returning the car scraps (upon request)
                    </li>
                    <li>4. Copy of car registration manual, or contract, or ownership evidence (signed for certification
                        of true copy)
                    </li>
                    <li>5. Copy of Voluntary Insurance Policy or Compulsory Motor Insurance Policy</li>
                    <li>6. Copy of the first page of account passbook (in case of money transfer)
                    </li>
                    <li>7. Copy of identification card/driving license (signed for certification of true copy)
                    </li>
                </ul>
                <p><strong>In Case of Proxy</strong></p>
                <ul>
                    <li>1. Power of Attorney
                    </li>
                    <li>2. Copy of identification card of the Principal and the Attorney (signed for certification of
                        true copy)
                    </li>
                </ul>
                <p><strong>In Case of Juristic Person
                    </strong></p>
                <ul>
                    <li>1. Company Registration Certificate
                    </li>
                    <li>2. Copy of identification card of the Authorized Person
                    </li>
                    <li>3. Document affixed with the juristic person seal and signed by the Authorized Person
                    </li>
                </ul>
                <h2 class="text-primary">Process of Consideration and Payment of Indemnity
                </h2>
                <p><strong>Period of Consideration of the Indemnity Payment</strong></p>
                <ul>
                    <li>1. Not over 30,000 Baht – 3 working days
                    </li>
                    <li>2. Not over 300,000 Baht – 10 working days
                    </li>
                    <li>3. Over 300,000 Baht – 15 working days
                    </li>
                </ul>
                <p><strong>Period of Indemnity Payment</strong></p>
                <ul>
                    <li>1. No over 5,000 Baht – paid in cash at the company on the date of submission of the
                        disbursement documents
                    </li>
                    <li>2. Over 5,000 Baht – paid in cheque in Week 1 and Week 3 of each month
                    </li>
                </ul>
                <h2 class="text-primary">Process of Incident Report and Indemnity Claims</h2>
                <p class="text-primary"><strong>(Compulsory Motor Insurance)</strong></p>
                <ul>
                    <li>1. Call the company to notify the accident immediately at 1183 or 02-0785656 which is available 24 hours.</li>
                    <li>2. Details to be notified
                        <ul style="padding-left:20px;">
                            <li>2.1 Registration number of the insured car
                            </li>
                            <li>2.2 Policy number or the insured’s name
                            </li>
                            <li>2.3 First name/last name of the insured car driver and contact number
                            </li>
                            <li>2.4 Date and time of accident</li>
                            <li>2.5 Nature of the accident</li>
                            <li>2.6 Place of accident with the obvious point</li>
                            <li>2.7 Information about the other party e.g. car registration number and brand</li>
                            <li>2.8 Information about the damaged property of the other party</li>
                        </ul>
                    </li>
                </ul>
                <h2 class="text-primary">Required Documents for Disbursement of Indemnity</h2>
                <p><strong>In Case of Injury/Dismemberment/Permanent Disability</strong></p>
                <p><strong>Preliminary Compensation</strong></p>
                <ul>
                    <li>1. Receipt or invoice of the hospital or medical facility (original)</li>
                    <li>2. Medical certificate or physician’s opinion indicating the injury, treatment, or dismemberment, or permanent disability
                    </li>
                    <li>3. Daily record of the incident of the inquiry officer</li>
                    <li>4. Copy of either of the following documents:
                        <ul style="padding-left:20px;">
                            <li>- Identification card of the damaged person
                            </li>
                            <li>- Identification card of the alien
                            </li>
                            <li>- Passport
                            </li>
                        </ul>
                    </li>
                    <li>5. House registration of the damaged person
                    </li>
                    <li>6. Medical history in case of dismemberment or permanent disability
                    </li>
                    <li>7. Copy of the first page of passbook in case of money transfer</li>
                </ul>
                <p><strong>Additional Documents in Case of Disbursement of the Damage Exceeding the Preliminary Compensation
                    </strong></p>
                <ul>
                    <li>1. Copy of either of the following documents:
                        <ul style="padding-left:20px;">
                            <li>- Daily record of the inquiry officer indicating the fine imposed on the driver of the insured car
                            </li>
                            <li>- Daily record of the inquiry officer indicating that the driver of the insured car pled guilty</li>
                            <li>- Court judgment indicating that the insured car is at fault
                            </li>
                        </ul>
                    </li>
                    <li>2. Medical history in case of dismemberment or permanent disability, physician’s opinion indicating the injury
                    </li>
                </ul>
                <p><strong>In Case of Death</strong></p>
                <ul>
                    <li>1. Copy of death certificate</li>
                    <li>2. Copy of daily record of the inquiry officer
                    </li>
                    <li>3. Copy of either of the following documents:
                        <ul style="padding-left:20px;">
                            <li>- Identification card of the damaged person</li>
                            <li>- Identification card of the alien</li>
                            <li>- Passport</li>
                        </ul>
                    </li>
                    <li>4. House registration of the damaged person</li>
                    <li>5. Copy of house registration of the legal heir</li>
                    <li>6. Copy of either of the following documents:
                        <ul style="padding-left:20px;">
                            <li>- Identification card of the legal heir
                            </li>
                            <li>- Identification card of the alien
                            </li>
                            <li>- Passport
                            </li>
                        </ul>
                    </li>
                    <li> 7. Copy of the first page of passbook in case of money transfer
                    </li>
                    <li></li>
                </ul>
                <p>
                    <strong>
                        Additional Documents in Case of Disbursement of the Damage Exceeding the Preliminary Compensation
                    </strong>
                </p>
                <ul>
                    <li>1. Daily record of the inquiry officer indicating that the driver of the insured car pled guilty</li>
                    <li>2. Court judgment indicating that the insured car is at fault</li>
                </ul>
                <h2 class="text-primary">Remark:</h2>
                <p><strong>All copies shall be signed for certification of true copies.</strong></p>
            </div>
        </article>
    </main>
@endsection