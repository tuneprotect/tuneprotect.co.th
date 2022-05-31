@extends('frontend.layout.main')

@section('page')
    <main>
        <br>
        <article class="wrapper">
            <!-- OneTrust Web Form start -->
            <style>
                .ot-form-wrapper {
                    max-width: 750px;
                    height: 800px;
                    border: 1px solid #c0c2c7;
                    margin: auto;
                }
                .ot-form-wrapper iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>

{{--            UAT--}}
            <div class="ot-form-wrapper">
{{--                <iframe src="https://privacyportaluatde.onetrust.com/webform/57ee11fd-b018-48a4-be73-4abc0f30bbbe/9a9a04ad-b58a-42b7-80c7-448abc656867"></iframe>--}}
                <iframe src="https://privacyportal-apac.onetrust.com/webform/c77257a4-4ff5-4509-be4e-5197730f8725/90a86f78-9652-4a55-8968-514c08d6a775"></iframe>

            </div>

            <!-- OneTrust Web Form end -->
        </article>
        <br>
    </main>
@endsection
