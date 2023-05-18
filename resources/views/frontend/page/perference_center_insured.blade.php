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
    src="https://privacyportal-apac.onetrust.com/ui/#/preferences/multipage/login/ad84881e-0270-4f98-add8-dff562b1e56c">
</iframe>
</div>
<!-- OneTrust Web Form end -->


@endsection
