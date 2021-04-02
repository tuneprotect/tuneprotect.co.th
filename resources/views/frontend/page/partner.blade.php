@extends('frontend.layout.main')

@section('page')

    <main>
        <section class="wrapper">
            <h1>{{$content->locales[$locale]->title}}</h1>
            <form>
                <div class="two-col">
                    <div class="controls-wrapper">
                        <select id="ctrl_province" name="province">
                            <option value="">@lang('global.default_select_option')</option>
                            @foreach($province as $v)
                                <option value="{{$v->code}}">{{ $v->{$locale} }}</option>
                            @endforeach
                        </select>
                        <label for="ctrl_province">@lang('global.province')</label>
                    </div>
                    <div class="controls-wrapper">
                        <select id="ctrl_category" name="cat_id">
                            <option value="">@lang('global.default_select_option')</option>
                            @foreach($category as $v)
                                <option value="{{$v->id}}">{{$v->locales[$locale]->title}}</option>
                            @endforeach
                        </select>
                        <label for="ctrl_category">@lang('global.category')</label>
                    </div>
                    <div class="controls-wrapper">
                        <input id="ctrl_name" name="title" type="text" placeholder="@lang('global.search_from_name')"/>
                        <label for="ctrl_name">@lang('global.search_from_name')</label>
                    </div>
                    @if(!empty($partner_language))
                        <div class="controls-wrapper">
                            <select id="ctrl_language" name="partner_language">
                                <option value="">@lang('global.default_select_option')</option>
                                @foreach($partner_language as $k => $v)
                                    <option value="{{$k}}">{{ $k }}</option>
                                @endforeach
                            </select>
                            <label for="ctrl_language">@lang('global.language')</label>
                        </div>
                    @endif
                </div>
            </form>

        </section>

        <section class="wrapper">
            <table class="partner_table" data-website="@lang('global.website')" data-location="@lang('global.location')">
                <thead>
                <tr>
                    <th colspan="5"><h3>@lang('global.'.$type.'_list')</h3></th>
                </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                <tr>
                    <th colspan="5">
                        <a href="#" id="btn-more">@lang('global.more')</a>
                    </th>
                </tr>
                </tfoot>

            </table>

            <div id="div_result" style="display: none">
                {{ json_encode( $partner->toArray())}}
            </div>
        </section>
    </main>

@endsection
