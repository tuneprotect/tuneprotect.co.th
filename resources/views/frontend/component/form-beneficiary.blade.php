<h3 id="beneficiary_header">@lang('product.beneficiary')</h3>
<div class="two-col">
    <div class="controls-wrapper full">
        <select id="{{$prefix}}fdBenefit" class="fdBenefit">
            <option value="@lang('product.heir_at_law')">@lang('product.heir_at_law')</option>
            <option value="other">@lang('product.other')</option>
        </select>
    </div>
    <div class="controls-wrapper beneficiary_detail" style="display: none">
        <input id="{{$prefix}}fdBenefit_name" name="{{$prefix}}fdBenefit_name" type="text"
               placeholder="@lang('global.full_name')"
               data-error-beneficiary="@lang("product.error.beneficiary")"
        />
        <label for="{{$prefix}}fdBenefit_name">@lang('product.full_name')</label>
    </div>
    <div class="controls-wrapper beneficiary_detail" style="display: none">
        <select id="{{$prefix}}fdRelation" name="{{$prefix}}fdRelation"
                data-error-relation="@lang("product.error.relation")">
            <option value="">@lang('product.please_specify')</option>
            @foreach( array_unique(__('product.relation'))  as  $v)
                <option value="{{$v}}">{{$v}}</option>
            @endforeach
        </select>
        <label for="{{$prefix}}fdRelation">@lang('product.relationship')</label>
    </div>
</div>
<br>
