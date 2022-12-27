<div class="date-input">
    <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
    <div class="date-wrapper">
        <div class="controls-wrapper">
            <input id="fdDOB" name="fdDOB" type="date" min="{{date('Y-m-d')}}" class="flatpickr"
                   data-mindate="{{date('Y-m-d')}}"
                   data-maxdate="{{date('Y-m-d',strtotime( "+180 days"))}}"
                   data-error="@lang('product.error.travel_start_date')"
            />
            <label for="fdDOB">@lang("product.effective_date")</label>
        </div>

        
    </div>
    <cite></cite>
</div>
