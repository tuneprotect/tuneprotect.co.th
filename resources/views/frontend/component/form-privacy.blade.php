<h3 id="receve_channel_title">@lang('product.receive_by_channel')</h3>
<div class="two-col">
    <div class="controls-wrapper">
        <ul class="check-wrapper">
            <li>
                <input id="ctrl_channel_email" name="fdSendType" type="radio" checked
                       value="E"/><label
                    for="ctrl_channel_email">@lang('global.email')</label>
            </li>
            <li>
                <input id="ctrl_channel_post" name="fdSendType" type="radio"
                       value="P"/><label
                    for="ctrl_channel_post">@lang('product.post')</label>
            </li>
        </ul>
    </div>
</div>
<h3>{{__('product.accept_insurance_header')}}</h3>
<div class="privacy-box small">
    <p class="small">{!! nl2br(__('product.accept_insurance_description')) !!}</p>
</div>

<div class="controls-wrapper full">
    <input id="ctrl_accept_insurance_term" name="ctrl_accept_insurance_term" type="checkbox"
           data-error-insurance_term="@lang("product.error.insurance_term")"
           value="1"/><label
        for="ctrl_accept_insurance_term">@lang('product.accept_insurance')</label>
</div>
<p class="small">{!! nl2br(__('product.privacy_description')) !!}</p>
<div class="privacy-box small">
  {!! $privacy->locales[$locale]->content !!}
</div>
<div class="controls-wrapper full">
    <input id="ctrl_terms" name="ctrl_terms" type="checkbox" value="1"
           data-error-terms="@lang("product.error.terms")"
    /><label
        for="ctrl_terms">@lang('product.accept_terms')</label>
</div>
