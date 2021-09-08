@extends('frontend.layout.main')

@section('page')
    <main data-package="{{$selected}}">
        @if(isset($current_package))
            <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
            <div class="two-tone-icon" id="two-tone-icon">
                <span><img src="{{url($current_package->pic)}}"></span>
                <div class="description-product">
                    {!! $current_package->locales[$locale]->content !!}
                </div>
            </div>
            @includeIf('frontend.form.'.strtolower($selected) ,[ 'product' => $current_product,'package' => $current_package,'selected' => $selected])

            @if($selected === "CI")
                <div id="h-cont">
                    {!! $current_package->locales[$locale]->remark !!}
                </div>
                @include('frontend.component.faq')
                @include('frontend.component.lead-form')
            @endif


        @endif

    </main>

@endsection
