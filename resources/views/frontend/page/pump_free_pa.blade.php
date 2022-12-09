@extends('frontend.layout.main')

@section('page')
    <main>
        <div class="-wrapper">
            <section class="wrapper" id="pumpfreepa">
                <h1>Hello</h1>
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
