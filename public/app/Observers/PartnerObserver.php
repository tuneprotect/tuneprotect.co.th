<?php

namespace App\Observers;

use App\Models\Partner;
use App\Models\PartnerLocale;
use Illuminate\Support\Facades\DB;

class PartnerObserver
{
    /**
     * Handle the Partner "created" event.
     *
     * @param  \App\Models\Partner  $partner
     * @return void
     */
    public function created(Partner $partner)
    {
        //
    }

    /**
     * Handle the Partner "updated" event.
     *
     * @param  \App\Models\Partner  $partner
     * @return void
     */
    public function updated(Partner $partner)
    {
        if ($partner->publish === 1 && $partner->getConnection()->getName() === 'staging') {

            $allLocale = PartnerLocale::where('partner_id', $partner->id)->get();

            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . PartnerLocale::TableName() . ' ON');
            foreach ($allLocale as $v) {
                PartnerLocale::on('live')->updateOrCreate([
                    'partner_id' => $partner->id,
                    'locale' => $v->locale
                ], $v->toArray());
            }
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . PartnerLocale::TableName() . ' OFF');

            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Partner::TableName() . ' ON');
            Partner::on('live')->updateOrCreate(['id' => $partner->id], $partner->toArray());
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Partner::TableName() . ' OFF');
        }
    }

    /**
     * Handle the Partner "deleted" event.
     *
     * @param  \App\Models\Partner  $partner
     * @return void
     */
    public function deleted(Partner $partner)
    {
        if ($partner->getConnection()->getName() === 'staging') {
            PartnerLocale::where('partner_id', $partner->id)->delete();
            Partner::on('live')->where('id', $partner->id)->delete();
            PartnerLocale::on('live')->where('partner_id', $partner->id)->delete();
        }
    }

    /**
     * Handle the Partner "restored" event.
     *
     * @param  \App\Models\Partner  $partner
     * @return void
     */
    public function restored(Partner $partner)
    {
        //
    }

    /**
     * Handle the Partner "force deleted" event.
     *
     * @param  \App\Models\Partner  $partner
     * @return void
     */
    public function forceDeleted(Partner $partner)
    {
        //
    }
}
