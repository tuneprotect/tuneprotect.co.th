<?php

namespace App\Observers;

use App\Models\Setting;
use Illuminate\Support\Facades\DB;

class SettingObserver
{
    /**
     * Handle the setting "created" event.
     *
     * @param  \App\Models\Setting  $setting
     * @return void
     */
    public function created(Setting $setting)
    {
        //
    }

    /**
     * Handle the setting "updated" event.
     *
     * @param  \App\Models\Setting  $setting
     * @return void
     */
    public function updated(Setting $setting)
    {
        if ($setting->publish === 1 && $setting->getConnection()->getName() === 'staging') {
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Setting::TableName() . ' ON');
            Setting::on('live')->updateOrCreate(['id' => $setting->id], $setting->toArray());
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Setting::TableName() . ' OFF');
        }
    }

    /**
     * Handle the setting "deleted" event.
     *
     * @param  \App\Models\Setting  $setting
     * @return void
     */
    public function deleted(Setting $setting)
    {
        //
    }

    /**
     * Handle the setting "restored" event.
     *
     * @param  \App\Models\Setting  $setting
     * @return void
     */
    public function restored(Setting $setting)
    {
        //
    }

    /**
     * Handle the setting "force deleted" event.
     *
     * @param  \App\Models\Setting  $setting
     * @return void
     */
    public function forceDeleted(Setting $setting)
    {
        //
    }
}
