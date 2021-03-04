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
            <h1>ประกันความเสี่ยงภัยทุกชนิดของอุตสาหกรรม</h1>
            <div>
                <p>Non-Motor Claims Handling Processes: Claims Processes for Property Insurance, Cargo Insurance and
                    Miscellaneous Insurance
                </p>

                <br/>

                <h2>1. Steps of Claims Submission</h2>
                <ul>
                    <li><strong>1.1 Claims Submission and Contact Channels</strong>

                        <ul style="margin-left:20px;padding-left:20px;list-style: disc">
                            <li>Tel.: 0 2078 5656, press 1 and press 4</li>
                            <li>Contact the Company in person or by mail</li>
                            <li>
                                General Claims Department
                                <address style="font-style: italic">
                                    <strong>Tune Insurance Public Company Limited</strong><br/>
                                    3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei
                                    District, Bangkok Metropolis, 10110
                                </address>

                            </li>
                            <li>- E-mail Contact: <a href="mailto:TPTnonmotor.claim@tuneprotect.com"
                                                     title="TPTnonmotor.claim@tuneprotect.com">TPTnonmotor.claim@tuneprotect.com</a>
                            </li>
                        </ul>
                    </li>
                    <li><strong>1.2 Verification of Claim Entitlement or Claim Authentication for Opening a Claimed
                            Case.</strong></li>
                    <li><strong>1.3 Request for Additional Documents/Dispatch Surveyors</strong></li>
                    <li><strong>1.4 Claim Consideration and Negotiation</strong></li>
                    <li><strong>1.5 Notification of the Result of Claim Consideration for Indemnity</strong></li>
                </ul>
                <br/>
                <h2>2. Period of claims processing after all documents have been received by the
                    Company for consideration</h2>

                <p>The Company will indemnify within 15 working days after the insured, the beneficiary, or the
                    authorized person has signed the letter of claim acceptance and already submitted all the relevant
                    complete set of documents to the Company. </p>

                <br/>
                <h2>3. Required Documents for Consideration of Claims</h2>

                <p><strong>Property Insurance</strong></p>

                <p style="text-decoration: underline">Fire Insurance</p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Copy of the house registration of the place where the incident occurred</li>
                    <li>3. Copy of the identification card of the insured</li>
                    <li>4. Copy of the title deed</li>
                    <li>5. Receipt/Quotation of the repair cost in which the material cost and the labor cost are separated, together with the copy of identification card of the contractor
                    </li>
                    <li>6. Photos of the damaged item</li>
                    <li>7. Copy of daily report on the case (if the police report is required)</li>
                    <li>8. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>

                <p style="text-decoration: underline">All Risks Insurance</p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Incident report</li>
                    <li>3. List of damaged/lost property</li>
                    <li>4. Receipt/Quotation of the repair cost/spare parts cost</li>
                    <li>5. Photos of the damaged items/objects</li>
                    <li>6. Copy of daily report on the case (if the police report is required)</li>
                    <li>7. Letter of liability, if the property damage is caused by the third party</li>
                    <li>8. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>
                <br/>
                <p><strong>Cargo Insurance </strong></p>

                <p style="text-decoration: underline">Import/Export Cargo Insurance, Inland Cargo Insurance</p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Original insurance policy</li>
                    <li>3. Bill of Lading / Air Way bill / Loading Bill/ Shipping Note or alike etc.</li>
                    <li>4. Invoice and Packing List</li>
                    <li>5. Damage reports issued by the survey company, port authority, liner company, transportation company e.g. Survey Report, Wharf Survey Note, Devanning Report etc.
                    </li>
                    <li>6. Photos of the damage items and/or its packaging etc.</li>
                    <li>7. Quotation of the repair cost/spare parts cost</li>
                    <li>8. Letter of damage claim to the carrier/related parties and the response from those concerned parties.</li>
                    <li>9. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>

                <p style="text-decoration: underline">Carrier’s Liability Insurance</p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Letter of damage claim from the product owner to the carrier</li>
                    <li>3. Proforma invoice / tax invoice</li>
                    <li>4. Copy of car registration</li>
                    <li>5. Copy of driving license</li>
                    <li>6. Quotation of the repair cost/spare parts cost</li>
                    <li>7. Letter of damage claim to the carrier/related parties</li>
                    <li>8. Copy of daily report</li>
                    <li>9. Copy of relevant agreements and documents (as the case may be)</li>

                </ul>
                <br/>
                <p><strong>Miscellaneous Insurance </strong></p>

                <p style="text-decoration: underline">Golfer Insurance</p>

                <p><strong>Hole-In-One Claim</strong></p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Letter of acceptance of the award from the golf course or letter of notification of the award acceptance from Hole In One organizer and the golf course</li>
                    <li>3. Tournament promotional brochure</li>
                    <li>4. Tournament application or registration form</li>
                    <li>5. Letter of certification from the organizer</li>
                    <li>6. Certificate from the golf course</li>
                    <li>7. Score card</li>
                    <li>8. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>

                <p><strong>Third Party Liability </strong></p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Incident or damage report issued and certified by the golf course</li>
                    <li>3. Letter of damage claims of the third party and supporting evidence</li>
                    <li>4. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>

                <p><strong>Personal Accident </strong></p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Incident or damage report issued and certified by the golf course</li>
                    <li>3. Original receipt of medical expense</li>
                    <li>4. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>

                <p style="text-decoration: underline">Third Party Liability Insurance</p>

                <ul>
                    <li>1. Claims form</li>
                    <li>2. Incident report</li>
                    <li>3. Letter of damage claims of the third party and supporting evidence</li>
                    <li>4. Receipt, quotation of the repair cost/spare parts cost/medical expense</li>
                    <li>5. Copy of daily report on the case (if any)</li>
                    <li>6. Copy of relevant agreements and documents (as the case may be)</li>
                </ul>
                <br/>
                <h2 class="text-primary">4. Methods of Contact with the Company and Relevant Agencies in Case of
                    Disputes or Complaints</h2>

                <p>If the insured has any suggestions or complaints, please call 02-078 5656.</p>

                <p><strong>Complaints Management Section/Center: </strong><br/>
                    3199, Maleenont Tower, 14th Floor, Rama 4 Road, Khlong Tan Sub-district, Khlong Toei District,
                    Bangkok Metropolis, 10110</p>
                <br/>
                <h2>5. Download the Claims Forms</h2>
                <ul>
                    <li><strong>5.1 Claims Form for Property Insurance</strong> <a
                            href="/storage/claim-insurance/iar-fir-mar/5.1-property-claim-form.pdf"
                            style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong></a></li>
                    <li><strong>5.2 Claims Form for Cargo Insurance</strong> <a
                            href="/storage/claim-insurance/iar-fir-mar/5.2-marine-claim-form.pdf"
                            style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong></a></li>
                    <li><strong>5.3 Claims Form for Golfer Insurance</strong> <a
                            href="/storage/claim-insurance/iar-fir-mar/5.3-gfi-claim-form.pdf"
                            style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong></a></li>
                    <li><strong>5.4 Claims Form for Third Party Insurance</strong> <a
                            href="/storage/claim-insurance/iar-fir-mar/5.4-pli-claim-form.pdf"
                            style="color:rgb(0, 0, 238);" title="(click here to download)"><strong>(click here to
                                download)</strong></a></li>
                </ul>



            </div>
        </article>
    </main>
@endsection
