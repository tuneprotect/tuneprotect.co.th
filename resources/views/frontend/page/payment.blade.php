@extends('frontend.layout.main')

@section('page')
    <form id="frm_test" method="post" action="{{config('payment.link')}}">
        @foreach ($arr_post as $k => $v)
            <div style="display: block"><label>{{$k}}</label><input type="text" name="{{$k}}" value="{{$v}}"/></div>
        @endforeach
        <input style="display: block" type="submit" name="btn_submit" value="Confirm"/>
    </form>
{{--    <script type="text/javascript">--}}
{{--        document.getElementById("frm_test").submit();--}}
{{--    </script>--}}
@endsection
