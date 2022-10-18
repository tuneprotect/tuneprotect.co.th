@extends('frontend.layout.portal')
<style>
header{
    display:none;
}
</style>
@section('page')
    <main>
        <article class="wrapper">
            <div class="inner-wrapper">
                <div>
                    <p><img alt="" src="/storage/Icon/thankyou.jpg" /></p>
                    <h1>Thank you for choosing Tune Protect</h1>
                    <p>Your coverage starts now</p>
                    <p>Please check your insurance policy following your specified channel. Your policy number for your<br />
                        reference:{{$doc_no}}</p>
                    <p><a class="btn btn-primary" href={{$return_link}}>Back to Main Page</a></p>
                    <br>

                </div>
                @if($selected==='TAISMTG')
                    <h2>For continuous protection, you can purchase additional travel insurance after the end of this policy.</h2>
                @else
                    <h2>Products you may be interested</h2>
                @endif                                              
                    
                <div>
                    <div>
                        @if($selected==='TAISMTG')
                            <div class="two-tone-icon">
                                <span><img src="https://www.tuneprotect.co.th/storage/Icon/Tune iPass.svg" alt=""></span>
                                <strong>iSmile</strong>
                            </div>
                            <div class="btn-wrapper">
                                <a class="btn btn-gradient" data-gtm="index-product-button-travel-insurance-TAISM" href="https://www.tuneprotect.co.th/en/product/travel-insurance/TAISM">Buy Now</a>
                            </div>
                        @else
                            <div class="two-tone-icon">
                                <span><img src="https://www.tuneprotect.co.th/storage/Icon/Tune iPass.svg" alt=""></span>
                                <strong>Tune iPass</strong>
                            </div>
                            <div class="btn-wrapper">
                                <a class="btn btn-gradient" data-gtm="index-product-button-travel-insurance-ONTALN" href="/en/portal/travel-insurance/ONTALN/{{$fdKeys}}">Buy Now</a>
                            </div>
                        @endif  
                    </div>

                    <br>
                    <div class="column">
                        <div class="two-tone-icon">
                            <span><img src="https://www.tuneprotect.co.th/storage/Icon/Domestic.svg" alt=""></span>
                            <strong>TA Domestic</strong>
                        </div>
                        <div class="btn-wrapper">
                            <a class="btn btn-gradient" data-gtm="index-product-button-travel-insurance-ONTADM" href="/en/portal/travel-insurance/ONTADM/{{$fdKeys}}">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>


        </article>



    </main>

@endsection
