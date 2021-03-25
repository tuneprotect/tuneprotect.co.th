@extends('frontend.layout.main')

@section('page')

    <main>
        <article class="wrapper">
            @if(isset($articleImage))
                <div class="reveal">
                    <div class="main-img rotate-bg no-rotate">
                        <img src="{{url($content->pic)}}" alt="">
                    </div>
                </div>
            @endif
            <h1>{{$content->locales[$locale]->title}}</h1>
            <div>{!! $content->locales[$locale]->content !!}</div>
            <br/>
            <script type='text/javascript'
                    src='https://platform-api.sharethis.com/js/sharethis.js#property=5fe33658948afa0012592b2d&product=inline-share-buttons'
                    async='async'></script>
            <div class="sharethis-inline-share-buttons"></div>
            <br/>
        </article>
        {{--        @include('frontend.component.contact-form',['content' => $contact])--}}
        <section class="wrapper contact-section" id="contact-section">
            <address>
                <h2>{{$content_contactus->locales[$locale]->title}}</h2>
                <div>{!! $content_contactus->locales[$locale]->content !!}</div>
            </address>
            <section class="wrapper contact-section" id="leadform-section">
                <form class="insurance-form" action="/{{$locale}}/Contactus/savelead" method="post" id="frm_contact"
                      data-form-type="leadform"
                      novalidate
                      data-friendly_url="{{$content['friendly_url']}}"
                      data-error="@lang('contact.error')" data-error-description="@lang('contact.error_description')"
                      data-error-button="@lang('contact.error_button')"
                      data-success="@lang('contact.success')"
                      data-success-description="@lang('contact.success_description')"
                      data-success-button="@lang('contact.success_button')"
                >
                    <div class="form-inner">
                        <h3>@lang('global.lead_form_header')</h3>

                        <div class="two-col">
                            <div class="controls-wrapper">
                                <input id="ctrl_name" name="name" type="text" placeholder="@lang('global.name')"
                                       required="required"
                                       data-error-required="@lang('global.error.required',['attribute' => __('global.name') ] )"
                                />
                                <label for="ctrl_name">@lang('global.name')</label>
                            </div>
                            <div class="controls-wrapper">
                                <input id="ctrl_tel" name="tel" type="text" placeholder="@lang('global.tel')"
                                       data-error-required="@lang('global.error.required',['attribute' => __('global.tel') ] )"/>
                                <label for="ctrl_tel">@lang('global.tel')</label>
                            </div>
                        </div>


                        <div class="two-col">

                            <div class="controls-wrapper">
                                <input id="ctrl_email" name="email" type="email" placeholder="@lang('global.email')"
                                       data-error-required="@lang('global.error.required',['attribute' => __('global.email') ] )"
                                       data-error-email="@lang('global.error.email',['attribute' => __('global.email') ] )"/>
                                <label for="ctrl_email">@lang('global.email')</label>
                            </div>

                            <div class="controls-wrapper">
                                <select name="available_time" id="ctrl_available_time"
                                        data-error-required="@lang('global.error.required',['attribute' => __('global.available_time') ] )">
                                    <option value="">@lang('global.available_time')</option>
                                    @foreach($category_leadform as $v)
                                        <option
                                            value="{{$v['locales'][$locale]['title']}}">{{$v['locales'][$locale]['title']}}</option>
                                    @endforeach
                                </select>

                            </div>
                        </div>

                        <div class="controls-wrapper full">
                <textarea placeholder="@lang('global.message')" id="ctrl_message" name="message" cols="30" rows="5"
                          data-error-required="@lang('global.error.required',['attribute' => __('global.message') ] )"
                          required="required"></textarea>
                            <label for="ctrl_message">@lang('global.message')</label>
                        </div>

                        <div class="controls-wrapper full no-lable">
                            <input id="ctrl_consent" name="consent" type="checkbox" value="1"
                                   data-error-required="@lang('global.error.required',['attribute' => __('global.consent') ] )"/>
                            <label for="ctrl_consent">
            <span class="small">
                @lang('global.lead_form_consent')<br/>
            </span>
                                {{--                    <span class="text-primary small">@lang('product.lead_form_consent_remark')</span>--}}
                            </label>
                        </div>
                    </div>
                    <div>
                        <input type="hidden" id="ctrl_product_id" value="{{$content->id}}">
                    </div>
                    <div class="btn-wrapper">
                        <button data-gtm="contact-form-submit" class="btn btn-primary">@lang('global.submit')</button>
                    </div>
                </form>
            </section>

        </section>
    </main>

@endsection
