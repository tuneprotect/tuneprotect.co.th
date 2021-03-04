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

            <h1 style="margin-bottom: 50px;text-align: center">Download Forms</h1>

            <div>
                <h2 style="color: #0c1021">Claim Forms</h2>
                <div>
                    <h3 style="text-decoration: underline;">
                        Travel Accident
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">Claims Form for Tune iPass
                            <a href="/storage/form/1-TA-Inbound-For-Foreign.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc"
                               title="download">download</a>
                        </li>
                        <li style="margin: 0 auto">Claims Form for Travel Insurance by AirAsia
                            <a href="/storage/form/11-Claim-Form-TAA-EN.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc"
                               title="download">download</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 style="text-decoration: underline;">
                        Personal Accident
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">
                            Claims Form for Personal Accident and Group Accident Insurance
                            <a href="/storage/form/4-PA-Claim-Form.pdf.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                        <li style="margin: 0 auto"> Claims Form for Personal Accident In case of death
                            <a href="/storage/form/5-Personal-Accident-In-case-of-death.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                        <li style="margin: 0 auto">Claims Form for Personal Accident In case of permanent disability
                            <a href="/storage/form/6-case-of-permanent-disability.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style="text-decoration: underline;">
                        COVID - 19
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">Claims Form for iPass COVID-19
                            <a href="/storage/form/3-covid2019.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style="text-decoration: underline;">
                        Business Insurance
                    </h3>
                    <ul style="margin-bottom: 20px;list-style: disc;padding-left:20px">
                        <li style="margin: 0 auto">Claims Form for Property Insurance
                            <a href="/storage/form/7-PROPERTY-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc"
                               title="download">download</a>
                        </li>
                        <li style="margin: 0 auto">Claims Form for Cargo Insurance
                            <a href="/storage/form/8-MARINE-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                        <li style="margin: 0 auto">Claims Form for Golfer Insurance
                            <a href="/storage/form/9-GFI-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                        <li style="margin: 0 auto">
                            Claims Form for Third Party Insurance
                            <a href="/storage/form/10-PLI-CLAIM-FORM.pdf" target="_blank"
                               style="text-decoration: underline;color: #0000cc" title="download">download</a>
                        </li>
                    </ul>
                </div>


            </div>



        </article>
    </main>
@endsection
