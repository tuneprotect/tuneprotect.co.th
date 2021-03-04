@extends('frontend.layout.main')

@section('page')

    <main>
      @include('frontend.component.contact-form',['content' => $content])
        <section class="map_section wrapper">
            <div class="video-wrapper" style="padding-bottom: 25%">{!! __('contact.map') !!}</div>
        </section>
        @include('frontend.component.faq')
    </main>

@endsection
