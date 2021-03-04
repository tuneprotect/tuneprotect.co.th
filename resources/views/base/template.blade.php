<?php use App\Helper\TemplateHelper; ?>
{!! $template[TemplateHelper::DOCTYPE] !!}

<html <?php echo TemplateHelper::genAttribute($template[TemplateHelper::HTML]) ?>>
<head>
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

@if(isset($template[TemplateHelper::FOOT_JS] ))
    @foreach ($template[TemplateHelper::FOOT_JS] as $v)
        <script src="{{ $v['path'] }}" <?php echo TemplateHelper::genAttribute($v['property']) ?>></script>
    @endforeach
@endif
@if(isset($template[TemplateHelper::FOOT_OTHER] ))
    @foreach ($template[TemplateHelper::FOOT_OTHER] as $v)
        {!! $v !!}
    @endforeach
@endif
</body>
</html>

