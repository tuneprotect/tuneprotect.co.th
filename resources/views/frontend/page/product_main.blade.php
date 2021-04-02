@extends('frontend.layout.main')

@section('page')
    <main>
        @include('frontend.component.product_list',[ 'product' => $current_product,'locale' => $locale ])
    </main>

@endsection
