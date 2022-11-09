@extends('frontend.layout.portal')

@section('page')
<style>
header{
    display:none;
}
</style>
    <body id="product_page" style="height: 100%;">
    <main>
        <h1 class="product-header"></h1>

        <section id="step1" class="wrapper">
            <form class="insurance-form" action="/{{$locale}}/tgism/Validation" method="post" id="frm_validate">
                <div class="form-head">{{$headertext}}</div>
                <div class="form-inner">
                    <h3>{{$labeltext}}</h3>
                    <div class="date-input">
                        <div class="date-wrapper">
                            <div class="controls-wrapper">
                                <input id="memberid" name="memberid" type="text" placeholder={{$placeholdertext}}
                                       required="required" data-error-required="The Member ID. field is required.">
                                <label for="memberid">{{$placeholdertext}}</label>
                            </div>
                        </div>
                        <cite></cite>
                    </div>
                </div>

                <div class="btn-wrapper">
                    <button data-gtm="validate-memberid" id="btnValidate" class="btn btn-primary btn-goto">{{$buttontext}}</button>
                </div>
                @if($partner==='LUMA' || $partner==='Luma')
                    LUMA
                @else
                    No LUMA
                @endif
                <input type="hidden" id="partner" value="{{$partner}}"/>

                @if(isset($status_api))
                    <input type="hidden" id="status_api" value="{{$status_api}}"/>
                @endif

                <input type="hidden" name="_token" id ="_token" value="{{ csrf_token() }}">
            </form>
            <br>

        </section>
    </main>


    </body>


@endsection
<style>
    main{
        margin: 30px 0 !important;
    }
    section{
        display: none !important;
    }
    article{
        background: #e32e6d;
        background: linear-gradient(135deg,#e32e6d,#f9ed1a);
        text-align: center;
        margin-top: 20px !important;
        margin-bottom: 20px !important;
        padding-top: 20px !important;
        padding-bottom: 20px !important;
        border-radius: 30px !important;
        border: 0;
        font: inherit;
        vertical-align: baseline;
    }
 
   
    
    article .inner-wrapper {
        background: #fff;
        text-align: center;
        border-radius: 30px;
        padding: 40px 20px;
    }
</style>


<!-- @section('page')
    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div>
                    @lang("product.errorpage.content")
                   {!! @str_replace('{point}',$point,@str_replace('{link}',$return_link,  @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content)))   !!}</div>
                </div>
            </div>
        </article>
    </main>

@endsection -->
