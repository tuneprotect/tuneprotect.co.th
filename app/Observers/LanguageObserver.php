<?php

namespace App\Observers;

use App\Models\Language;
use Illuminate\Support\Facades\DB;

class LanguageObserver
{
    /**
     * Handle the language "created" event.
     *
     * @param  \App\Models\Language  $language
     * @return void
     */
    public function created(Language $language)
    {
        //
    }

    /**
     * Handle the language "updated" event.
     *
     * @param  \App\Models\Language  $language
     * @return void
     */
    public function updated(Language $language)
    {
        if ($language->publish === 1 && $language->getConnection()->getName() === 'staging') {
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Language::TableName() . ' ON');
            Language::on('live')->updateOrCreate(['id' => $language->id], $language->toArray());
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Language::TableName() . ' OFF');
        }
    }

    /**
     * Handle the language "deleted" event.
     *
     * @param  \App\Models\Language  $language
     * @return void
     */
    public function deleted(Language $language)
    {
        //
    }

    /**
     * Handle the language "restored" event.
     *
     * @param  \App\Models\Language  $language
     * @return void
     */
    public function restored(Language $language)
    {
        //
    }

    /**
     * Handle the language "force deleted" event.
     *
     * @param  \App\Models\Language  $language
     * @return void
     */
    public function forceDeleted(Language $language)
    {
        //
    }
}
