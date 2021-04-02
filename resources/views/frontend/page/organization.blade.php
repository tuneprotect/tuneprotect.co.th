<section id="organization_page">

    <div class="organization">
        @foreach ($organization as $v)
            <div class="officer"
                 data-gtm="organization-{{$v->id}}"
                 data-name="{{$v->locales[$locale]->title}}"
                 data-position="{{$v->locales[$locale]->sub_title}}"
                 data-img="{{url($v->pic)}}"
                 data-department="{{$v->locales[$locale]->content}}">
                <div class="clip" style="background-image: url('{{url($v->pic)}}')">
                    <div class="overlay"></div>
                </div>
                <strong>
                    {{$v->locales[$locale]->title}}<br/>
                    {{$v->locales[$locale]->sub_title}}
                </strong>
            </div>
        @endforeach
    </div>

    <div class="page-overlay" style="display: none">
        <div class="popup-wrapper">
            <a data-gtm="index-organization-close" class="close"><i class="icofont-close"></i></a>
            <div class="popup-inner-wrapper">
                <div class="img">
                    <img id="sp_image" src="" alt="">
                </div>
                <div class="description">
                    <h2 id="span_name"></h2>
                    <p>
                        <strong id="span_position"></strong> <br><br>
                        <span id="span_department"></span>
                    </p>
                </div>
            </div>

        </div>

    </div>
</section>
