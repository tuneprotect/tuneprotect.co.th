@extends('frontend.layout.main')
<style>
.slide_wrapper{
    display:none !important;
}
    </style>
@section('page')
    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                @lang("product.errorpage.content")
            </div>
        </article>
    </main>

@endsection
