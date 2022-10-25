@extends('frontend.layout.portal')

@section('page')
    <main data-package="{{$selected}}">
        @if(isset($current_package))
            @if(isset($portal_key))
                @if($portal_key == 'QAVM2LRWBGCXXGSFBQFR6LKW24JXXUJRX8MBNGFRGUSXXTARPQJRX')
                    <h1 class="product-header">iSafe</h1>
                @else
                    @if(isset($partner))
                        @if($partner==='LUMA' && ($selected==='ONTALN' || $selected==='TAIPOCT22'))
                            <h1 class="product-header">Luma Thailand Pass</h1>
                        @else
                            <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
                        @endif
                    @else
                        <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
                    @endif

                @endif
            @else
                <h1 class="product-header">{{$current_package->locales[$locale]->title}}</h1>
            @endif

            <div class="two-tone-icon">
                <span><img src="{{url($current_package->pic)}}" alt=""></span>
                <div class="description-product">
                    <!-- {!! $current_package->locales[$locale]->content !!} -->
                    {!! @str_replace('{ci_content1}',__('product.ci_portal_content1') , $current_package->locales[$locale]->content) !!}
                </div>
            </div>

            @includeIf('frontend.form.'.strtolower($selected) ,[ 'product' => $current_product,'package' => $current_package,'selected' => $selected])

                @if($selected === "CI")
                    <div id="h-cont">
                        {!! $current_package->locales[$locale]->remark !!}
                    </div>
                    @include('frontend.component.faq')
                    @include('frontend.component.lead-form')
                @endif

        @endif
    </main>

@endsection
