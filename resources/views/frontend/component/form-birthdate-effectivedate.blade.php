<form method="post" action="" class="insurance-form">
    <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
    <div class="form-inner">
        <h3>@lang('product.please_specify_birthdate')</h3>
        @include('frontend.component.form-date-input')
        @include('frontend.component.form-effectivedate')
    </div>


    <div class="btn-wrapper">
        <a href="{{url()->current()}}#step2" data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" class="btn btn-primary btn-goto">@lang('product.next')</a>
    </div>


    <input type="hidden" id="controller" value="{{$controller}}"/>

    @if($controller == 'portal')
        <div class="btn-wrapper">
            <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
            <input type="hidden" id="status_api" value="{{$status_api}}"/>
            <input type="hidden" id="nopayment_status" value="{{$nopayment_status}}"/>
            <input type="hidden" id="partner" value="{{$partner}}"/>
        </div>
    @endif

    @if($controller == 'biglife' || $controller == 'tg')
        <div class="btn-wrapper">
            <input type="hidden" id="member_id" value="{{$member_id}}"/>
            <input type="hidden" id="status_api" value="{{$status_api}}"/>
        </div>
    @endif

</form>
