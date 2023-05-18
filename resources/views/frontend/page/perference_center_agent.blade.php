@extends('frontend.layout.mainview')

@section('page')

<!-- OneTrust Web Form start -->
<style>
.ot-form-wrapper {
    max-width: 750px;
    height: 800px;
    border: 1px solid #c0c2c7;
    margin: auto;
}
.ot-form-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>
<div class="ot-form-wrapper">
<iframe
    src="https://privacyportal-apac.onetrust.com/ui/#/preferences/multipage/login/8fe20210-20da-4c58-8c11-8b4b7dfa3ce4">
</iframe>
</div>
<!-- OneTrust Web Form end -->


@endsection
