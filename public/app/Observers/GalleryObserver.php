<?php

namespace App\Observers;

use App\Models\Gallery;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class GalleryObserver
{
    /**
     * Handle the gallery "created" event.
     *
     * @param \App\Models\Gallery $gallery
     * @return void
     */
    public function created(Gallery $gallery)
    {
        //
    }

    /**
     * Handle the gallery "updated" event.
     *
     * @param \App\Models\Gallery $gallery
     * @return void
     */
    public function updated(Gallery $gallery)
    {
        if ($gallery->publish === 1 && $gallery->getConnection()->getName() === 'staging') {
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Gallery::TableName() . ' ON');
            Gallery::on('live')->updateOrCreate(['id' => $gallery->id], $gallery->toArray());
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . Gallery::TableName() . ' OFF');
        }
    }

    /**
     * Handle the gallery "deleted" event.
     *
     * @param \App\Models\Gallery $gallery
     * @return void
     */
    public function deleted(Gallery $gallery)
    {
        if($gallery->getConnection()->getName() === 'staging') {
            Gallery::on('live')->where('id', $gallery->id)->delete();
            $full_path = public_path($gallery->pic);
            if (file_exists($full_path)) {
                Storage::delete(str_replace('/storage/', '', $gallery->pic));
            }
        }
    }

    /**
     * Handle the gallery "restored" event.
     *
     * @param \App\Models\Gallery $gallery
     * @return void
     */
    public function restored(Gallery $gallery)
    {
        //
    }

    /**
     * Handle the gallery "force deleted" event.
     *
     * @param \App\Models\Gallery $gallery
     * @return void
     */
    public function forceDeleted(Gallery $gallery)
    {
        //
    }
}
