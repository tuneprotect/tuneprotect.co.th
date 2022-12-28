<?php use App\Helper\TemplateHelper; ?>
{!! $template[TemplateHelper::DOCTYPE] !!}

<html <?php echo TemplateHelper::genAttribute($template[TemplateHelper::HTML]) ?>>
<head>

{{--    TEST--}}
{{--    <!-- OneTrust Cookies Consent Notice start for tuneprotect.co.th -->--}}
{{--    <script type="text/javascript" src="https://cdn-apac.onetrust.com/consent/e1a3cf11-6147-44de-b09e-241fa390bac3-test/OtAutoBlock.js" ></script>--}}
{{--    <script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="e1a3cf11-6147-44de-b09e-241fa390bac3-test" ></script>--}}
{{--    <script type="text/javascript">--}}
{{--        function OptanonWrapper() { }--}}
{{--    </script>--}}
{{--    <!-- OneTrust Cookies Consent Notice end for tuneprotect.co.th -->--}}

    <!-- OneTrust Cookies Consent Notice start for tuneprotect.co.th -->
    <script type="text/javascript" src="https://cdn-apac.onetrust.com/consent/e1a3cf11-6147-44de-b09e-241fa390bac3/OtAutoBlock.js" ></script>
    <script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="e1a3cf11-6147-44de-b09e-241fa390bac3" ></script>
    <script type="text/javascript">
        function OptanonWrapper() { }
    </script>
    <!-- OneTrust Cookies Consent Notice end for tuneprotect.co.th -->


    <meta name="facebook-domain-verification" content="pa4vdurvww8ktkzh7xbm2tyrc7iwzv" />
    @if(isset($template[TemplateHelper::META] ))
        @foreach ($template[TemplateHelper::META] as $v)
            <meta <?php echo TemplateHelper::genAttribute($v) ?>/>
        @endforeach
    @endif
    <title>{{ $template[TemplateHelper::TITLE] }}</title>
    @if(isset($template[TemplateHelper::STYLESHEET] ))
        @foreach ($template[TemplateHelper::STYLESHEET] as $v)
            <link rel="stylesheet" type="text/css"
                  href="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>/>
        @endforeach
    @endif
    @if(isset($template[TemplateHelper::FAVICON] ))
        @foreach ($template[TemplateHelper::FAVICON] as $v)
            <link href="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>/>
        @endforeach
    @endif
    @if(isset($template[TemplateHelper::HEAD_JS] ))
        @foreach ($template[TemplateHelper::HEAD_JS] as $v)
            <script type="text/javascript"
                    src="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>></script>
        @endforeach

    @endif
    @if(isset($template[TemplateHelper::HEAD_OTHER] ))
        @foreach ($template[TemplateHelper::HEAD_OTHER] as $v)
            {!! $v !!}
        @endforeach
    @endif
</head>
<body <?php echo @TemplateHelper::genAttribute($template[TemplateHelper::BODY]) ?>>
@if(isset($template[TemplateHelper::OPEN_BODY] ))
    @foreach ($template[TemplateHelper::OPEN_BODY] as $v)
        {!! $v !!}
    @endforeach
@endif

@yield('layout')

// @if(isset($template[TemplateHelper::FOOT_JS] ))
//     @foreach ($template[TemplateHelper::FOOT_JS] as $v)
//         <script src="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>></script>
//     @endforeach
// @endif
// @if(isset($template[TemplateHelper::FOOT_OTHER] ))
//     @foreach ($template[TemplateHelper::FOOT_OTHER] as $v)
//         {!! $v !!}
//     @endforeach
// @endif

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.css">
	<script src="https://flatpickr.js.org/javascripts/modernizr.js"></script>


		<input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.."  data-id="xxx" readonly="readonly">
		<input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.." data-id="disableSpecific" readonly="readonly">
	
	

<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/confirmDate/confirmDate.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/weekSelect/weekSelect.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/rangePlugin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/minMaxTimePlugin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/index.js"></script>
<script src="https://flatpickr.js.org/flatpickr.js"></script>


<script src="https://flatpickr.js.org/themer.js"></script>

<style>
#onetrust-consent-sdk{
    display: none !implements;
}
</style>
</body>
</html>



	
