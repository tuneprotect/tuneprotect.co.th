@if($prefix === 'loc_' )
    <h3>@lang('product.address_location_data')</h3>
@else
    <h3>@lang('product.address_data')</h3>
@endif

<div class="two-col">
    <label for="fdAddr_Address_Data">@lang("product.address_data")</label>
    <label for="loc_fdAddr_Address_Data">@lang("product.address_location_data")</label>

    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Home" name="{{$prefix}}fdAddr_Home" type="text"
               data-error-address_home="@lang("product.error.address_home")"
               placeholder="@lang("product.address_home")"/>
        <label for="{{$prefix}}fdAddr_Home">*@lang("product.address_home")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Moo" name="{{$prefix}}fdAddr_Moo" type="text"
               data-error-address_moo="@lang("product.error.address_moo")"
               placeholder="@lang("product.address_moo")"/>
        <label for="{{$prefix}}fdAddr_Moo">@lang("product.address_moo")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Village" name="{{$prefix}}fdAddr_Village" type="text"
               data-error-address_village="@lang("product.error.address_village")"
               placeholder="@lang("product.address_village")"/>
        <label for="{{$prefix}}fdAddr_Village">@lang("product.address_village")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Building" name="{{$prefix}}fdAddr_Building" type="text"
               data-error-address_building="@lang("product.error.address_building")"
               placeholder="@lang("product.address_building")"/>
        <label for="{{$prefix}}fdAddr_Building">@lang("product.address_building")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Floor" name="{{$prefix}}fdAddr_Floor" type="text"
               data-error-address_building="@lang("product.error.address_floor")"
               placeholder="@lang("product.address_floor")"/>
        <label for="{{$prefix}}fdAddr_Floor">@lang("product.address_floor")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Alley" name="{{$prefix}}fdAddr_Alley" type="text"
               data-error-address_alley="@lang("product.error.address_alley")"
               placeholder="@lang("product.address_alley")"/>
        <label for="{{$prefix}}fdAddr_Alley">@lang("product.address_alley")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_Street" name="{{$prefix}}fdAddr_Street" type="text"
               data-error-address_street="@lang("product.error.address_street")"
               placeholder="@lang("product.address_street")"/>
        <label for="{{$prefix}}fdAddr_Street">@lang("product.address_street")</label>
    </div>

    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_District" name="{{$prefix}}fdAddr_District" type="text"
               data-error-district="@lang("product.error.district")"
               placeholder="@lang("product.district")"/>
        <label for="{{$prefix}}fdAddr_District">*@lang("product.district")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdAddr_PostCode" name="{{$prefix}}fdAddr_PostCode" type="tel"
               data-error-postal_code="@lang("product.error.postal_code")"
               placeholder="@lang("product.postal_code")" autocomplete='off' />
        <label for="{{$prefix}}fdAddr_PostCode">*@lang("product.postal_code")</label>
    </div>
    <div class="controls-wrapper">
        <select id="{{$prefix}}ctrl_province" name="{{$prefix}}ctrl_province"
                data-please-select="@lang("global.default_select_option")"
                data-error-province="@lang("product.error.province")"></select>
        <label for="{{$prefix}}ctrl_province">*@lang("product.province")</label>
    </div>
</div>
