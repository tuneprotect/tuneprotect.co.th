<?php

namespace App\Providers;

use App\Models\BuyLog;
use App\Models\Gallery;
use App\Models\Language;
use App\Models\Partner;
use App\Models\Setting;
use App\Models\Translation;
use App\Models\User;
use App\Models\WebContent;
use App\Observers\BuyLogObserver;
use App\Observers\GalleryObserver;
use App\Observers\LanguageObserver;
use App\Observers\PartnerObserver;
use App\Observers\SettingObserver;
use App\Observers\TranslationObserver;
use App\Observers\UserObserver;
use App\Observers\WebContentObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Gallery::observe(GalleryObserver::class);
        Language::observe(LanguageObserver::class);
        Setting::observe(SettingObserver::class);
        Translation::observe(TranslationObserver::class);
        WebContent::observe(WebContentObserver::class);
        Partner::observe(PartnerObserver::class);
        BuyLog::observe(BuyLogObserver::class);
    }
}
