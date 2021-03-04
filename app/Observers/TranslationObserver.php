<?php

namespace App\Observers;

use App\Models\Translation;
use Illuminate\Support\Facades\DB;

class TranslationObserver
{
    /**
     * Handle the translation "created" event.
     *
     * @param  \App\Models\Translation  $translation
     * @return void
     */
    public function created(Translation $translation)
    {
        //
    }

    /**
     * Handle the translation "updated" event.
     *
     * @param  \App\Models\Translation  $translation
     * @return void
     */
    public function updated(Translation $translation)
    {
        if ($translation->publish === 1 && $translation->getConnection()->getName() === 'staging') {
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Translation::TableName() . ' ON');
            Translation::on('live')->updateOrCreate(['id' => $translation->id], $translation->toArray());
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Translation::TableName() . ' OFF');
        }
    }

    /**
     * Handle the translation "deleted" event.
     *
     * @param  \App\Models\Translation  $translation
     * @return void
     */
    public function deleted(Translation $translation)
    {
        //
    }

    /**
     * Handle the translation "restored" event.
     *
     * @param  \App\Models\Translation  $translation
     * @return void
     */
    public function restored(Translation $translation)
    {
        //
    }

    /**
     * Handle the translation "force deleted" event.
     *
     * @param  \App\Models\Translation  $translation
     * @return void
     */
    public function forceDeleted(Translation $translation)
    {
        //
    }
}
