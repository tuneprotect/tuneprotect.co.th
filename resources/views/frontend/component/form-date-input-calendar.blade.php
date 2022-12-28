<style>
    .d-none{
        display: none !important;
    }
</style>
<div class="date-input">
    <strong data-your-details="@lang('product.your-details')" data-loved-one="@lang('product.loved-one')"></strong>
    <div class="date-wrapper">
        <div class="controls-wrapper"></div>
        <div class="controls-wrapper">
            <input class="flatpickr flatpickr-input active" 
                    type="text" 
                    id="ctrl_dob" 
                    placeholder="@lang('product.day')"
                    data-birthdate="@lang('product.birthdate')"
                    data-years-old="@lang('product.years_old')"
                    data-error-format="@lang('product.error.birthdate.format')"
                    data-error-not-qualify="@lang('product.error.birthdate.not-qualify')"
                    readonly="readonly" />
            <label for="ctrl_dob">@lang('product.day')</label>
        </div>
        <div class="controls-wrapper"></div>
    </div>
    <cite></cite>
</div>



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.css">
	<script src="https://flatpickr.js.org/javascripts/modernizr.js"></script>


		<input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.."  data-id="xxx" readonly="readonly">
		<input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.." data-id="disableSpecific" readonly="readonly">
	
<script src="https://flatpickr.js.org/javascripts/application.js"></script>

<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/confirmDate/confirmDate.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/weekSelect/weekSelect.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/rangePlugin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/minMaxTimePlugin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/index.js"></script>
<script src="https://flatpickr.js.org/flatpickr.js"></script>


<script src="https://flatpickr.js.org/themer.js"></script>