@extends('frontend.layout.main')

@section('page')
    <main>
        <style>
           
            #pumpfreepa .section{
                display: grid;
                grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
                -moz-column-gap: 20px;
                column-gap: 20px;
                max-width: 700px;
            }
            #pumpfreepa .no-package{
                display:none !important;
            }
        </style>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div><p><img alt="" src="/storage/Icon/thankyou.jpg"></p>

<h1>Thank you for choosing Tune Protect</h1>

<p>Your coverage starts now</p>

<p>Please check your insurance policy following your specified channel. Your policy number for your<br>
reference: </p>

<p></p>

<p><a class="btn btn-primary" href="/en">Back to Main Page</a></p>

<p><strong>TuneTOUCH</strong> by Tune Protect. Stepping into the next level of development for our special customers.<br>
A brand-new application that connect customer experience and providing insurance services at your fingertips.Download APP now in both iOS and android service.<br>
For iOS <a href="https://apple.co/3CLWdOQ" target="_blank"><u>Click</u></a> and for android click <a href="https://bit.ly/3tfDS9I" target="_blank"><u>Click</u></a></p></div>
            </div>
        </article>
        
        <div class="-wrapper">
            <section class="wrapper" id="pumpfreepa">
                <div class="sub">
                    @foreach ($product_category as $k => $v)
                        <h3 data-index="{{$k}}" {{$k > 0 ?  "class=no-package" : ""}}>{{$v->locales[$locale]->title}} {!! $k > 0 ?  "<i class=icofont-caret-right></i>" : "" !!}</h3>
                        <div class="section {{$k > 0 ?  "no-package" : ""}}" data-index="{{$k}}">
                            @foreach ($product as $v1)
                                @if($v->id == $v1->cat_id)
                                    <div>
                                        <a class="category" data-gtm="main-nav-product-{{$v1->friendly_url}}"
                                            href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v1->friendly_url],false)}}">
                                            @if($v1->productPackage->first())
                                                @if($locale == 'en')
                                                    <img src="{{url($v1->pic_en)}}" alt="">
                                                @else
                                                    <img src="{{url($v1->pic)}}" alt="">
                                                @endif
                                            @endif
                                            <strong>{{$v1->locales[$locale]->title}}</strong>
                                        </a>
                                        @if($v1->productPackage)
                                            <ul>
                                                @foreach ($v1->productPackage as $v2)
                                                    <li>
                                                    @if($v2->code === 'ONVACINA' || $v2->code === 'CVCARE'|| $v2->code === 'ONCOVIDMW' || $v2->code === 'TGCVLP' || $v2->code === 'TAISMTG' || $v2->code === 'ONTALN' || $v2->code === 'ONVSUREA')
                                                    @else
                                                            <a data-gtm="main-nav-product-{{$v1->friendly_url}}-{{$v2->code}}"
                                                                href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $v1->friendly_url,'params' => $v2->code ])}}">
                                                                <span>{{$v2->locales[$locale]->title}}</span></a>
                                                        @endif
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    @endforeach
                </div>
            </section>
        </div>
    </main>
@endsection
