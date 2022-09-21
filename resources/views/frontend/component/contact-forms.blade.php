<section class="wrapper contact-section" id="contact-section">

    <address>
        <h2>{{$content->locales[$locale]->title}}</h2>
        <div>{!! $content->locales[$locale]->content !!}</div>
    </address>
    <form class="insurance-form" action="/{{$locale}}/Contactus/save" method="post" id="frm_contact" novalidate
          data-error="@lang('contact.error')" data-error-description="@lang('contact.error_description')"
          data-success="@lang('contact.success')" data-success-description="@lang('contact.success_description')"
    >
        <div class="form-inner">
            <h3>@lang('global.contact_form_header')</h3>

            <div class="controls-wrapper full">
                <input id="ctrl_name" name="name" type="text" placeholder="@lang('global.name')"
                       required="required" data-error-required="@lang('global.error.required',['attribute' => __('global.name') ] )"
                />
                <label for="ctrl_name">@lang('global.name')</label>
            </div>



            <div class="two-col">
                <div class="controls-wrapper">
                    <input id="ctrl_tel" name="tel" type="text" placeholder="@lang('global.tel')"
                           data-error-required="@lang('global.error.required',['attribute' => __('global.tel') ] )"/>
                    <label for="ctrl_tel">@lang('global.tel')</label>
                </div>
                <div class="controls-wrapper">
                    <input id="ctrl_email" name="email" type="email" placeholder="@lang('global.email')"
                           data-error-required="@lang('global.error.required',['attribute' => __('global.email') ] )"
                           data-error-email="@lang('global.error.email',['attribute' => __('global.email') ] )"/>
                    <label for="ctrl_email">@lang('global.email')</label>
                </div>
            </div>
            <div class="controls-wrapper full">
                <textarea placeholder="@lang('global.message')" id="ctrl_message" name="message" cols="30" rows="5"
                          data-error-required="@lang('global.error.required',['attribute' => __('global.message') ] )"
                          required="required"></textarea>
                <label for="ctrl_message">@lang('global.message')</label>
            </div>
        </div>
        <div class="btn-wrapper">
            <button data-gtm="contact-form-submit" class="btn btn-primary">@lang('global.submit')</button>
        </div>
    </form>
</section>
