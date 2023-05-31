@extends('frontend.layout.portal')

@section('page')

<style>
    header {
        display: none;
    }
</style>

<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>
                <p><img alt="" src="/storage/Icon/thankyou.jpg" /></p>
                <h1>@lang('product.thankyou_page.thankyou_title')</h1>
                <p>@lang('product.thankyou_page.thankyou_text1')</p>
                <p>@lang('product.thankyou_page.thankyou_text2'){{$doc_no}}</p>
                <p><a class="btn btn-primary" href={{$return_link}}>@lang('product.thankyou_page.thankyou_button')</a></p>

                @lang('product.thankyou_page.thankyou_remark')
            </div>

            <div>

            </div>
        </div>


    </article>



</main>

@endsection