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
            <div class="ot-form-wrapper">
                <iframe
                    src="https://privacyportaluatde.onetrust.com/ui/#/preferences/multipage/login/ec966dee-bdbd-40cb-bd09-945e77bcb36c">
                </iframe>
            </div>
            <!-- OneTrust Web Form end -->

        </article>
        <br>
    </main>


@endsection
