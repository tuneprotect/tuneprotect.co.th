@extends('frontend.layout.main')
<style>
    main{
        margin: 30px 0;
    }
    section{
        display: none;
    }
    article{
        background: #e32e6d;
        background: linear-gradient(135deg,#e32e6d,#f9ed1a);
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 30px;
        border: 0;
        font: inherit;
        vertical-align: baseline;
    }
    .wrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
    }
   
    
    article .inner-wrapper {
    background: #fff;
    text-align: center;
    border-radius: 30px;
    padding: 40px 20px;
}
</style>
@section('page')
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

@endsection
