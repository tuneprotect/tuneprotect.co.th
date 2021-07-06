<form method="post" action="" class="insurance-form">
    <div class="form-head">@lang('product.please_specify_birthdate_title')</div>
    <div class="form-inner">
        <h3>@lang('product.please_specify_birthdate')</h3>
        @include('frontend.component.form-date-input')

        @if($controller == 'portal')
            <div class="controls-wrapper">
                <input id="fdFromDate" name="fdFromDate" type="date" min="{{date('Y-m-d')}}" class="flatpickr"
                       data-maxdate="{{date('Y-m-d',strtotime( "+60 days"))}}"
                       data-error="@lang('product.error.travel_start_date')"
                />
                <label for="fdFromDate">@lang("product.effective_date")</label>
            </div>
        @endif
    </div>


    <div class="btn-wrapper">
        <button data-gtm="product-{{strtolower($selected)}}-proceed-step-1" data-step="2" class="btn btn-primary btn-goto">@lang('product.next')</button>
    </div>


    <input type="hidden" id="controller" value="{{$controller}}"/>

    @if($controller == 'portal')
        <div class="btn-wrapper">
            <input type="hidden" id="portal_key" value="{{$portal_key}}"/>
            <input type="hidden" id="status_api" value="{{$status_api}}"/>
            <input type="hidden" id="nopayment_status" value="{{$nopayment_status}}"/>
        </div>
    @endif

    @if($controller == 'biglife')
        <div class="btn-wrapper">
            <input type="hidden" id="member_id" value="{{$member_id}}"/>
            <input type="hidden" id="status_api" value="{{$status_api}}"/>
        </div>
    @endif

</form>
