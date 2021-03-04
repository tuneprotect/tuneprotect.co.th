<h3>{{ isset($index) ? __('product.profiles').' '.$index : __('product.profile')   }}</h3>
@if(isset($eng_only))
    <h4 data-error-eng-only="@lang('product.error.eng_only')" class="text-primary">@lang('product.eng_only')</h4>
@endif
<div class="two-col">
    <div class="controls-wrapper">
        <ul class="check-wrapper">
            <li>
                <input id="{{$prefix}}male" name="{{$prefix}}fdSex" type="radio" value="M"
                       data-error-sex="@lang('product.error.sex')"/><label
                    for="{{$prefix}}male">@lang('product.male')</label>
            </li>
            <li>
                <input id="{{$prefix}}female" name="{{$prefix}}fdSex" type="radio" value="F"/><label
                    for="{{$prefix}}female">@lang('product.female')</label>
            </li>
        </ul>
        <label for="{{$prefix}}fdSex">@lang('product.sex')</label>
    </div>
    <div class="controls-wrapper">
        <ul class="check-wrapper" id="title_wrapper" data-error-title="@lang('product.error.title')">
            @foreach(__('product.prefix_'.$locale) as $k => $v)
                <li class="title-wrapper" id="li_title_{{$k}}{{ isset($index) ? '_'.$index : ""   }}">
                    <input id="title_{{$k}}{{isset($index) ? "_{$i}_" : '' }}" name="{{$prefix}}fdTitle" type="radio"
                           value="{{$k}}"/><label
                        for="title_{{$k}}{{isset($index) ? "_{$i}_" : '' }}">{{$v}}</label>
                </li>
            @endforeach
        </ul>
        <label>@lang("product.prefix")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdName" name="{{$prefix}}fdName" type="text" placeholder="@lang("product.first_name")"
               data-error-name="@lang('product.error.name')"
        />
        <label for="{{$prefix}}fdName">@lang("product.first_name")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdSurname" name="{{$prefix}}fdSurname" type="text"
               placeholder="@lang("product.last_name")"
               data-error-last_name="@lang('product.error.last_name')"/>
        <label for="{{$prefix}}fdSurname">@lang("product.last_name")</label>
    </div>

    @if($id_card_field === 'both')
        <div class="controls-wrapper">
            <select id="{{$prefix}}ctrl_document_type" name="{{$prefix}}ctrl_document_type">
                <option value="บัตรประจำตัวประชาชน">@lang("product.id_card")</option>
                <option value="เลขที่หนังสือเดินทาง">@lang("product.passport")</option>
            </select>
            <label for="{{$prefix}}ctrl_document_type">@lang("product.document_type")</label>
        </div>
    @endif
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdNationalID"
               name="{{$prefix}}fdNationalID"
               type="text"
               placeholder="{{$id_card_field_title}}"
               data-type="{{$id_card_field}}"
               data-error-idcard="@lang("product.error.id_card")"
               data-error-passport="@lang("product.error.passport")"
        />
        <label for="{{$prefix}}fdNationalID">{{$id_card_field_title}}</label>
    </div>
    @if(isset($has_nationality))
        <div class="controls-wrapper">
            <select id="{{$prefix}}fdNationality" name="{{$prefix}}fdNationality"
                    data-error-nationality="@lang("product.error.nationality")"
                    data-please-select="@lang('product.please_select')">
            </select>
            <label for="{{$prefix}}fdNationality">@lang("product.nationality")</label>
        </div>
    @endif
    @if(isset($has_birthdate))
        <div class="controls-wrapper no-padding">
            <div class="date-input">
                <div class="date-wrapper">
                    <div class="controls-wrapper">
                        <input id="{{$prefix}}ctrl_day" type="tel" placeholder="@lang('product.day')"
                               data-birthdate="@lang('product.birthdate')"
                               data-years-old="@lang('product.years_old')"
                               data-error-format="@lang('product.error.birthdate.format')"
                               data-error-not-qualify="@lang('product.error.birthdate.not-qualify')"
                        />
                        <label for="{{$prefix}}ctrl_day">@lang('product.day')</label>
                    </div>
                    <div class="controls-wrapper">
                        <select id="{{$prefix}}ctrl_month">
                            <option selected="selected" value="">@lang('product.please_select')</option>
                            <option value="01">@lang('product.month_list.jan')</option>
                            <option value="02">@lang('product.month_list.feb')</option>
                            <option value="03">@lang('product.month_list.mar')</option>
                            <option value="04">@lang('product.month_list.apr')</option>
                            <option value="05">@lang('product.month_list.may')</option>
                            <option value="06">@lang('product.month_list.jun')</option>
                            <option value="07">@lang('product.month_list.jul')</option>
                            <option value="08">@lang('product.month_list.aug')</option>
                            <option value="09">@lang('product.month_list.sep')</option>
                            <option value="10">@lang('product.month_list.oct')</option>
                            <option value="11">@lang('product.month_list.nov')</option>
                            <option value="12">@lang('product.month_list.dec')</option>
                        </select>
                        <label for="{{$prefix}}ctrl_month">@lang('product.month')</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="{{$prefix}}ctrl_year" type="tel" placeholder="@lang('product.year')"/>
                        <label for="{{$prefix}}ctrl_year">@lang('product.year')</label>
                    </div>
                </div>
                <cite></cite>
            </div>
        </div>
    @endif

    <div class="controls-wrapper">
        <input id="{{$prefix}}fdEmail" name="{{$prefix}}fdEmail" type="email" placeholder="@lang("product.email")"
               data-error-email-require="@lang("product.error.email.require")"
               data-error-email-format="@lang("product.error.email.format")"
        />
        <label for="{{$prefix}}fdEmail">@lang("product.email")</label>
    </div>
    <div class="controls-wrapper">
        <input id="{{$prefix}}fdTelephone" name="{{$prefix}}fdTelephone" type="tel" placeholder="@lang("product.tel")"
               data-error-tel-require="@lang("product.error.tel.require")"
               data-error-tel-format="@lang("product.error.tel.format")"
        />
        <label for="{{$prefix}}fdTelephone">@lang("product.tel")</label>
    </div>
</div>
<br>
