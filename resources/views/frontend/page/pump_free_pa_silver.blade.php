@include('frontend.component.form-stepper-pumppa')
<section id="step1" class="wrapper">
    @include('frontend.component.form-birthdate')
    <br/>
    {!! $package->locales[$locale]->remark !!}
</section>

<section style="display: none" id="step3" class="wrapper">
    
</section>
