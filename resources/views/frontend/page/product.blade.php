@extends('frontend.layout.main')

@section('page')
    <main data-package="{{$selected}}">
        @if(isset($current_package))
            <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
            @if(empty($current_package->locales[$locale]->sub_title))
                <div class="two-tone-icon" id="two-tone-icon">
                    <span><img src="{{url($current_package->pic)}}"></span>
                    <div class="description-product">
                        {!! $current_package->locales[$locale]->content !!}
                    </div>
                </div>

                @includeIf('frontend.form.'.strtolower($selected) ,[ 'product' => $current_product,'package' => $current_package,'selected' => $selected])
            @else
                <div>
                    {!!  str_replace('{btn_buy}','<a href="'.'/'.$locale.'/'.'product/form/'.strtolower($current_product->friendly_url).'/'.$current_package->code.'" class="btn btn-primary" style="width: 200px;margin: 10px">'.__('global.choose_product').'</a>',$current_package->locales[$locale]->sub_title) !!}
                </div>
            @endif

            @include('frontend.component.faq')
            @include('frontend.component.lead-form')
        @endif

    </main>

@endsection
