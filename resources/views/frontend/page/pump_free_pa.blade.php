@extends('frontend.layout.main')

@section('page')
    <main>
        <style>
           article {
    background: #e32e6d;
    background: linear-gradient(135deg,#e32e6d,#f9ed1a);
    
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 30px;
}
article .inner-wrapper {
    background: #fff;
    border-radius: 30px;
    padding: 40px 20px;
}
            #pumpfreepa .section{
                display: grid;
                grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
                -moz-column-gap: 20px;
                column-gap: 20px;
                max-width: 900px;
            }
            #pumpfreepa .no-package{
                display:none !important;
            }
            .wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px 10px;
}
        </style>
       

        <div class="-wrapper">
            <section id="pumpfreepa">
                <article class="wrapper">
                    <div class="inner-wrapper">
                        <div class="sub">
                            @foreach ($product_category as $k => $v)
                            <div class="section {{$k > 0 ?  "no-package" : ""}}" data-index="{{$k}}">
                            <div>
                                            <a class="category" data-gtm="main-nav-product-health" href="/th/product/health">
                                                                                                                                                            <img src="http://staging.webtest2.tuneinsurance.co.th/storage/Banner/Banner-baowan-main-th.jpg" alt="">
                                                                                                                                                    <strong>ประกันสุขภาพและโรคร้ายแรง</strong>
                                            </a>
                                                                                            <ul>
                                                                                                            <li>
                                                                                                                        <a data-gtm="main-nav-product-health-CI" href="http://staging.webtest2.tuneinsurance.co.th/th/product/health/CI">
                                                                    <span>myFlexi CI</span></a>
                                                                                                                    </li>
                                                                                                            <li>
                                                                                                                        <a data-gtm="main-nav-product-health-DIABETES" href="http://staging.webtest2.tuneinsurance.co.th/th/product/health/DIABETES">
                                                                    <span>เบาหวาน Protect</span></a>
                                                                                                                    </li>
                                                                                                            <li>
                                                                                                                        <a data-gtm="main-nav-product-health-ONCSHC" href="http://staging.webtest2.tuneinsurance.co.th/th/product/health/ONCSHC">
                                                                    <span>Chill Sure</span></a>
                                                                                                                    </li>
                                                                                                    </ul>
                                                                                    </div>
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
                    </div>
                </article>
                
            </section>
        </div>
    </main>
@endsection
