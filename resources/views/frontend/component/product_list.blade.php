<section class="product-list wrapper reveal">
    <div class="product-list-outer-wrapper rotate-bg no-rotate">
        <div class="inner-wrapper">
            <h1>{{$product->locales[$locale]->title}}</h1>
            <div class="item-wrapper">
                @foreach ($product->productPackage as $v)
                @if($v->code === 'ONCSHC' || $v->code === 'ONCANCER' || $v->code === 'CI'|| $v->code === 'DIABETES' || $v->code === 'ONPACA' || $v->code === 'ONPAKD' || $v->code === 'ONPASN' || $v->code === 'TAISM' || $v->code === 'TAIPOCT22' || $v->code === 'ONTADM' || $v->code === 'ONTAOB' || $v->code === 'ONFIMP' || $v->code === 'ONMHS')
                        <div class="item">
                            <div class="two-tone-icon">
                                <span><img src="{{url($v->pic)}}" alt=""></span>
                                <strong>{{$v->locales[$locale]->title}}</strong>
                            </div>
                            <div class="description ">
                                @if(strpos($v->locales[$locale]->content, 'data-gtm') === false)
                                    @if($controller == 'portal')
                                        <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
                                        {!! @str_replace('{portal_key}',$portal_key , $v->locales[$locale]->content) !!}
                                    @else
                                        {!! $v->locales[$locale]->content !!}
                                    @endif

                                    <a href="{{route('current',['locale' => $locale,'controller' => 'product','func' => $product->friendly_url,'params' => $v->code ])}}"
                                        data-gtm="all-product-{{strtolower($product->friendly_url)}}-{{$v->code}}"
                                        class="btn btn-block btn-outline">@lang('global.choose_product')</a>

                                @else
                                    @if($controller == 'portal')
                                        <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
                                        {!! @str_replace('{portal_key}',$portal_key , $v->locales[$locale]->content) !!}
                                    @else
                                        {!! $v->locales[$locale]->content !!}
                                    @endif
                                @endif
                            </div>

                        </div>
                    @endif

                @endforeach
            </div>
        </div>
    </div>
</section>
<div class="wrapper">
    <section class="wrapper-inner">
        {!! $product->locales[$locale]->content !!}
    </section>
</div>
@include('frontend.component.faq')
