@if($faq->first())
    <section class="faq_section">
        <div class="header">
            <h1>Q&A</h1>
            <span>@lang('faq.faq_header')</span>
        </div>

        <div class="wrapper">

            @foreach($faq as $k=>$v)
                <section class="wrapper-inner">
                    <div class="title">
                        <h3>{{ $k }}</h3>
                        <span></span>
                    </div>
                        <div class="inner">
                            <ul>
                                @foreach($v as $kk=>$vv)
                                <li>
                                    <h3>{{$vv['q']}}</h3>
                                    <div class="detail-faq">{!! $vv['a'] !!}</div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                </section>
            @endforeach
        </div>
    </section>
@endif
