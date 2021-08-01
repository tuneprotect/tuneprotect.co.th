@extends('frontend.layout.portal')

@section('page')
    <main data-package="{{$selected}}">
        @if(isset($current_package))
            @if(isset($portal_key))
                @if($portal_key == 'QAVRZTUXAJUWNY9QXD5R6DERA2UBNGFRGUSXXTARPQJRX')
                    <h1 class="product-header">iSafe</h1>
                @else
                    <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
                @endif
            @else
                <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
            @endif

            <div class="two-tone-icon">
                <span><img src="{{url($current_package->pic)}}" alt=""></span>
                <div class="description-product">
                    {!! $current_package->locales[$locale]->content !!}
                </div>
            </div>
            @includeIf('frontend.form.'.strtolower($selected) ,[ 'product' => $current_product,'package' => $current_package,'selected' => $selected])
            @include('frontend.component.faq')
        @endif
    </main>

@endsection
