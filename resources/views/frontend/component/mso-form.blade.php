<div class="page-overlay" style="display: none">
    <style>

        @media all and (min-width: 768px) {
            .popup-wrapper {
                min-width: 600px;
            }
        }

    </style>
    <div class="popup-wrapper">
        <a data-gtm="index-question-close" class="close"><i class="icofont-close"></i></a>
        <div class="popup-inner-wrapper">

            <div class="contact-section" style="margin-top: 0;width: 100%" id="leadform-section">

                <form class="insurance-form" action="/{{$locale}}/service/sendContact" method="post"
                      id="frm_service_contact"
                      data-check-action="/{{$locale}}/service/checkPolicy"
                      data-form-type="leadform"
                      novalidate autocomplete="off"
                      data-error="@lang('contact.error')" data-error-description="@lang('contact.error_description')"
                      data-errors-no-policy-found="@lang('contact.error_no_policy_found')"

                      data-error-button="@lang('contact.error_button')"
                      data-success="@lang('contact.success')"
                      data-success-description="@lang('contact.success_description')"
                      data-success-button="@lang('contact.success_button')"

                >
                    <div class="form-inner">
                        <h3>@lang('global.lead_form_mso_header')</h3>
                        <div class="two-col">
                            <div class="controls-wrapper">
                                <input id="ctrl_policy" name="tel" type="text" placeholder="@lang('global.tel')"
                                       data-error-required="@lang('global.error.required',['attribute' => __('global.policy') ] )"/>
                                <label for="ctrl_policy">@lang('global.policy')</label>
                            </div>
                            <div class="controls-wrapper hideField">
                                <input id="ctrl_name" name="name" type="text" placeholder="@lang('global.name')"
                                       required="required"
                                       data-error-required="@lang('global.error.required',['attribute' => __('global.name') ] )"
                                />
                                <label for="ctrl_name">@lang('global.name')</label>
                            </div>
                        </div>
                        <div class="two-col hideField">
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

                        <div class="controls-wrapper full hideField">
                <textarea placeholder="@lang('global.message')" id="ctrl_message" name="message" cols="30" rows="5"
                          data-error-required="@lang('global.error.required',['attribute' => __('global.message') ] )"
                          required="required"></textarea>
                            <label for="ctrl_message">@lang('global.message')</label>
                        </div>
                        <div class="controls-wrapper full no-lable hideField">
                            <input id="ctrl_consent" name="consent" type="checkbox" value="1"
                                   data-error-required="@lang('global.error.required',['attribute' => __('global.consent') ] )"/>
                            <label for="ctrl_consent">
            <span class="small">
                @lang('global.lead_form_consent')<br/>
            </span>
                            </label>
                        </div>
                    </div>
                    <div class="btn-wrapper hideField">
                        <button data-gtm="contact-form-submit" class="btn btn-primary">@lang('global.submit')</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
