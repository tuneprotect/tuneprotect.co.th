@extends('frontend.layout.main')

@section('page')
    <main class="claim">
        <article class="wrapper">
            <h1>{{$content->locales[$locale]->title}}</h1>
            <div>@lang("product.claim.claim_description")</div>
            <br>
            <form action="#"
                  data-error="@lang("product.claim.data-error")"
                  data-error-description="@lang("product.claim.data-error-description")"
                  data-select="@lang('product.please_select')"
                  id="frm_claim" method="post">
            <div class="form-inner">
                <div class="controls-wrapper">
                    <select id="ctrl_category" name="ctrl_category">
                        @if($claim_category)
                            <option value="">@lang('product.please_select')</option>
                            @foreach ($claim_category as $v)
                                <option value="{{$v->id}}" >{{$v->locales[$locale]->title}}</option>
                            @endforeach
                        @endif
                    </select>
                    <label for="ctrl_category">@lang('product.claim.claim_category')</label>
                </div>
                <div class="controls-wrapper">
                    <select id="ctrl_detail" name="ctrl_detail">
                    </select>
                    <label for="ctrl_detail">@lang('product.claim.claim_detail')</label>
                </div>
            </div>
            <div id="div_result" style="display:none;">
                {{ json_encode( $claim) }}
            </div>
            <br/>
            <br/>
            <div>{!! $content->locales[$locale]->content !!}</div>
            <script type='text/javascript'
                    src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                    async='async'></script>
            <div class="sharethis-inline-share-buttons"></div>
            <br/>
        </article>
    </main>
@endsection
