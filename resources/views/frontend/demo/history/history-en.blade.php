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

            <h1>Our story</h1>

            <div>
                <p>
                    Tune Insurance Public Company Limited (“TUNE”) was first established between the <a
                        href="https://www.tuneprotect.com/corporate/group/about-us/" target="_blank">Tune Protect Group
                        Berhad (“TPG”)</a> and Osotspa Insurance Company Limited and officially changed the name to Tune
                    Insurance.<br>
                    Currently, to reiterate the image and the One Tune
                    Protect policy, the Tune Insurance Company has
                    changed its name for communication to Tune
                    Protect Thailand.
                </p>
                <hr>
                <div class="timeline-wrapper">
                    <div id="timeline">
                        <div class="item"><strong>15 July 2014</strong>

                            <p>Tune Insurance Public Company Limited (“TUNE”) was first established between the Tune
                                Protect Group Berhad (“TPG”) and Osotspa Insurance Company Limited and officially
                                changed
                                the name to Tune Insurance</p>
                        </div>

                        <div class="item"><strong>4 September 2014</strong>

                            <p>Offering an exclusive travel insurance for AirAsia, called 'Tune Protect Travel'.</p>
                        </div>

                        <div class="item"><strong>9 December 2014</strong>

                            <p>Received an award “the Best of the Best Top 200 Small Enterprise in Asia”</p>
                        </div>

                        <div class="item"><strong>2015</strong>

                            <p>The Company was successfully in Thailand’s insurance market</p>
                        </div>

                        <div class="item"><strong>Year 2021</strong>

                            <p>Currently, the Tune
                                Insurance Company
                                has changed its name
                                for communication to
                                Tune Protect Thailand.</p>
                        </div>
                    </div>
                </div>
                <section>
                    <strong style="display:block;margin-bottom: 20px">2014</strong>
                    <div>
                        <span>15 July</span>
                        <p>
                            Tune Insurance Public Company Limited (“TUNE”) was first established between the Tune
                            Protect Group Berhad (“TPG”) and Osotspa Insurance Company Limited and officially changed
                            the name to Tune Insurance.
                        </p>
                    </div>
                    <div>
                        <span>4 September</span>
                        <p>Delivered the excellent travel insurance exclusively for AirAsia called ‘Tune Protect Travel
                            Insurance by AirAsia’.</p>
                    </div>
                    <div>
                        <span>9 December</span>
                        <p>Received an award “the Best of the Best Top 200 Small Enterprise in Asia” award from the
                            Forbe Asia Best Under a Million Award.</p>
                    </div>

                </section>

                <section>
                    <strong style="display:block;margin-bottom: 20px">2015</strong>
                    <div>
                        <p>The Company was successfully in Thailand’s insurance market, by tailoring non-life insurance
                            products to serve the individual’s need and the written premium has rapidly increased to
                            202% from 2014.
                        </p>
                    </div>
                </section>

                <section>
                    <strong style="display:block;margin-bottom: 20px">Year 2021</strong>
                    <div>
                        <p>The company aims to be the leader of digital insurers and travel insurance in Thailand, to
                            deliver the product for customer’s need and expand the partnership channel to align with
                            company’s strategies and policies.
                            <br>
                            Currently, the Tune
                            Insurance Company
                            has changed its name
                            for communication to
                            Tune Protect Thailand.
                        </p>
                    </div>
                </section>
                <hr>

                <section class="text-center" style="margin-bottom: 50px"><img alt="Tune Protect chart"
                                                                              src="/storage/Organization_Chart/Oganization_Chart_Desktop.jpg"/>
                </section>
                <div style="margin-bottom: 50px">{executive_member}</div>
                <section style="margin-bottom: 50px">
                    <h2 style="color: #262932" class="underline">Vision / Mission </h2>
                    <strong>
                        Vision
                    </strong>
                    <p>
                        The Trusted Digital Insurer of Choice, partnering with consumers throughout their life journey,
                        providing protection for their lifestyles.
                    </p>
                    <strong>
                        Mission
                    </strong>
                    <p>
                        To provide innovative profitable solutions for consumers in protection, healthcare, and
                        lifestyle needs conveniently through multiple means (Partnering, Intermediaries, Direct
                        Marketing, Internet) and using digital to delivering value to all stakeholders.
                    </p>
                </section>
                <section style="margin-bottom: 50px">
                    <h2 class="underline" style="color: #262932">Way Forward Strategy</h2>

                    <p>Strategic Plan for Growth</p>

                    <div class="text-center"><img alt="Tune Protect chart" src="/storage/Organization_Chart/Growth_EN.jpg" style="width: 600px;" /></div>
                </section>
            </div>
        </article>
    </main>
@endsection
