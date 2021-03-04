<h3>@lang('product.address_data')</h3>

<div class="two-col">
    <div class="controls-wrapper full">
        <textarea placeholder="Address" id="{{$prefix}}fdAddr_Num" name="{{$prefix}}fdAddr_Num" cols="30" rows="5"
                  data-error-address="@lang("product.error.address")"
        ></textarea>
        <label for="{{$prefix}}fdAddr_Num">@lang("product.address")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_District" name="{{$prefix}}fdAddr_District" type="text"
               data-error-district="@lang("product.error.district")"
               placeholder="@lang("product.district")"/>
        <label for="{{$prefix}}fdAddr_District">@lang("product.district")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_PostCode" name="{{$prefix}}fdAddr_PostCode" type="tel"
               data-error-postal_code="@lang("product.error.postal_code")"
               placeholder="@lang("product.postal_code")"/>
        <label for="{{$prefix}}fdAddr_PostCode">@lang("product.postal_code")</label>
    </div>
    <div class="controls-wrapper">
        <select id="{{$prefix}}ctrl_province" name="{{$prefix}}ctrl_province"
                data-please-select="@lang("global.default_select_option")"
                data-error-province="@lang("product.error.province")"></select>
        <label for="{{$prefix}}ctrl_province">@lang("product.province")</label>
    </div>
</div>
<br>
