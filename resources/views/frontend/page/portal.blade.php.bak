@extends('frontend.layout.portal')

@section('page')
    <main data-package="{{$selected}}">
        @if(isset($current_package))
            <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
            <div class="two-tone-icon">
                <span><img src="{{url($current_package->pic)}}" alt=""></span>
            </div>
            @includeIf('frontend.form.'.strtolower($selected) ,[ 'product' => $current_product,'package' => $current_package,'selected' => $selected])
        @endif
    </main>

@endsection
