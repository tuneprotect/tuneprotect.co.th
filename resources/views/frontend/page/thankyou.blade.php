@extends('frontend.layout.main')

@section('page')

    @if(isset($doc_no))
        @switch(session()->get('thankyou_param'))
            @case("ONCSHC")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "ChillSure_{{$package}}",
                                item_name: "ChillSure Plan Code {{$package}}",
                                item_brand: "Chill Sure",
                                item_category: "Health Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("CI")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "myFlexiCI_{{$package}}",
                                item_name: "myFlexi CI Plan Code {{$package}}",
                                item_brand: "myFlexi CI",
                                item_category: "Health Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("DIABETES")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "Diabetes_{{$package}}",
                                item_name: "Diabetes Plan Code {{$package}}",
                                item_brand: "Diabetes",
                                item_category: "Health Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("ONPACA")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "PAChoiceCare_{{$package}}",
                                item_name: "PA Choice Care Plan Code {{$package}}",
                                item_brand: "PA Choice Care",
                                item_category: "PA Choice",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("ONPAKD")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "PAChoiceKids_{{$package}}",
                                item_name: "PA Choice Kids Plan Code {{$package}}",
                                item_brand: "PA Choice Kids",
                                item_category: "PA Choice",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("ONPASN")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "PAChoiceSenior_{{$package}}",
                                item_name: "PA Choice Senior Plan Code {{$package}}",
                                item_brand: "PA Choice Senior",
                                item_category: "PA Choice",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("TAISM")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "iSmile_{{$package}}",
                                item_name: "iSmile Plan Code {{$package}}",
                                item_brand: "iSmile",
                                item_category: "Travel Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>

                @if(!empty($promotionCode))
                    <script>
                        dataLayer.push({
                        event: "select_promotion",
                        ecommerce: {
                            promotion_id: "{{$promotionCode}}",
                            promotion_name: "{{$promotionCode}}",
                            items: [{
                                item_id: "iSmile_Promotions",
                            }]
                        }
                    });
                    </script>
                @endif
            @break
            @case("TAIPOCT22")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "TuneiPass_{{$package}}",
                                item_name: "TuneiPass Plan Code {{$package}}",
                                item_brand: "Tune iPass",
                                item_category: "Travel Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
        
                @if(!empty($promotionCode))
                    <script>
                        dataLayer.push({
                        event: "select_promotion",
                        ecommerce: {
                            promotion_id: "{{$promotionCode}}",
                            promotion_name: "{{$promotionCode}}",
                            items: [{
                                item_id: "TuneiPass_Promotions",
                            }]
                        }
                    });
                    </script>
                @endif 
            @break
            @case("ONTADM")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "Domestic_{{$package}}",
                                item_name: "Domestic Plan Code {{$package}}",
                                item_brand: "TA Domestic",
                                item_category: "Travel Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("ONTAOB")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "iTravel_{{$package}}",
                                item_name: "iTravel Plan Code {{$package}}",
                                item_brand: "iTravel",
                                item_category: "Travel Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>

                @if(!empty($promotionCode))
                    <script>
                        dataLayer.push({
                        event: "select_promotion",
                        ecommerce: {
                            promotion_id: "{{$promotionCode}}",
                            promotion_name: "{{$promotionCode}}",
                            items: [{
                                item_id: "iTravel_Promotions",
                            }]
                        }
                    });
                    </script>
                @endif
            @break
            @case("ONFIMP")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "myHomePlus_{{$package}}",
                                item_name: "myHome Plus Plan Code {{$package}}",
                                item_brand: "myHome Plus",
                                item_category: "Fire Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
            @case("ONMHS")
                <script>
                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "{{$refCode}}",
                            value: {!! $payAmount !!},
                            currency: "THB",
                            items: [{
                                item_id: "myHomeSmart_{{$package}}",
                                item_name: "myHome Smart Plan Code {{$package}}",
                                item_brand: "myHome Smart",
                                item_category: "Fire Insurance",
                                price: {!! $payAmount !!}
                            }]
                        }
                    });
                </script>
            @break
        @endswitch
    @endif                

<main>
    <article class="wrapper">
        <div class="inner-wrapper">
            <div>{!! @str_replace('{point}',$point, @str_replace('{agentCode}',$agentCode, @str_replace('{payAmount}',$payAmount, @str_replace('{link}',$return_link, @str_replace('{doc_no}'," ".$doc_no,$content->locales[$locale]->content))))) !!}</div>
            @if(session()->get('thankyou_param') === 'ONTAOB' || session()->get('thankyou_param') === 'TAIPOCT22' || session()->get('thankyou_param') === 'TAISM' || session()->get('thankyou_param') === 'ONPACA' || session()->get('thankyou_param') === 'ONPAKD' || session()->get('thankyou_param') === 'ONPASN')
                @lang('product.PromotionCode.promotion_code_thankyou')
            @endif
        </div>
    </article>
</main>


@endsection