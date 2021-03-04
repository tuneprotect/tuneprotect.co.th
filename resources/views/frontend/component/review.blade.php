@if($review->first())
    <section class="review_section">
        <div class="wrapper">
            <h1>@lang('global.review_header')</h1>
            <p>@lang('global.review_description')</p>
        </div>

        <div id="review_slider">
            @foreach ($review as $v)

                <div class="review-slide-item">
                    <img src="{{url($v->pic)}}" alt=""/>
                    <div class="caption">
                        <strong>{{$v->locales[$locale]->title}}</strong>
                        <p>
                            {{$v->locales[$locale]->sub_title}}
                        </p>
                        <span class="rating">
                            {!!  str_repeat('<i class="icofont-ui-rating"></i>',$v->action_link)   !!}
                            {!! str_repeat('<i class="icofont-ui-rate-blank"></i>', (5 - $v->action_link))  !!}
                        </span>
                    </div>
                </div>
            @endforeach
        </div>
    </section>
@endif
