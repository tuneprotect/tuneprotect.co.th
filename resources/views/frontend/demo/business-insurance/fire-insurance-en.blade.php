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

            <h1 style="margin-bottom: 50px;text-align: center">Fire Insurance</h1>

            <div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        TUNE protects your property throughout Thailand
                    </h2>
                    <p>
                        Fire Insurance covers Fire damage to properties, building structures including house decorations
                        and your assets.
                    </p>
                </div>
                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Insured Property
                    </h2>
                    <p>
                        House, Building, Shop, Factory, Condominium
                    </p>
                </div>

                <div style="margin-bottom: 30px">
                    <h2 style="color: #262932">
                        Standard Coverage
                    </h2>
                    <ul>
                        <li>
                            1. Fire including consequential damage from fire i.e. water damage from fire extinguisher or smoke.
                        </li>
                        <li>
                            2. Lightning
                        </li>
                        <li>
                            3. Explosion from household gas.
                        </li>
                    </ul>

                </div>
            </div>
        </article>
    </main>
@endsection
