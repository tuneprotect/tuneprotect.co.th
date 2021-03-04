<?php

namespace App\Observers;


use App\Enum\ProjectEnum;
use App\Models\Gallery;
use App\Models\WebContent;
use App\Models\WebContentLocale;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class WebContentObserver
{

    protected $cache = [
        ProjectEnum::CACHE_MENU_ENABLE,
    ];

    /**
     * Handle the web content "created" event.
     *
     * @param \App\Models\WebContent $webContent
     * @return void
     */
    public function created(WebContent $webContent)
    {
        if (empty($webContent->friendly_url)) {
            WebContent::where('id', $webContent->id)->update([
                'friendly_url' => $webContent->type_id . '_' . $webContent->id
            ]);
        }
    }

    public function saved(WebContent $webContent)
    {
        if ($webContent->getConnection()->getName() === 'staging') {
            foreach ($this->cache as $v) {
                Cache::store('database')->forget($v);
            }
        }
    }


    /**
     * Handle the web content "updated" event.
     *
     * @param \App\Models\WebContent $webContent
     * @return void
     */
    public function updated(WebContent $webContent)
    {


        if ($webContent->publish === 1 && $webContent->getConnection()->getName() === 'staging') {
            foreach ($this->cache as $v) {
                Cache::store('file')->forget($v);
            }

            $allLocale = WebContentLocale::where('web_content_id', $webContent->id)->get();

            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . WebContentLocale::TableName() . ' ON');
            foreach ($allLocale as $v) {
                WebContentLocale::on('live')->updateOrCreate([
                    'web_content_id' => $webContent->id,
                    'locale' => $v->locale
                ], $v->toArray());
            }
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . WebContentLocale::TableName() . ' OFF');

            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . WebContent::TableName() . ' ON');
            WebContent::on('live')->updateOrCreate(['id' => $webContent->id], $webContent->toArray());
            DB::connection('live')->unprepared('SET IDENTITY_INSERT ' . WebContent::TableName() . ' OFF');

            $allGallery = Gallery::where('type_id', $webContent->type_id)->where('ref_id', $webContent->id)->get();

            if ($allGallery->first()) {
                foreach ($allGallery as $v) {
                    Gallery::publish($v->id);
                }
            }
        }
    }

    /**
     * Handle the web content "deleted" event.
     *
     * @param \App\Models\WebContent $webContent
     * @return void
     */
    public function deleted(WebContent $webContent)
    {
        if ($webContent->getConnection()->getName() === 'staging') {
            WebContentLocale::where('web_content_id', $webContent->id)->delete();
            WebContent::on('live')->where('id', $webContent->id)->delete();
            WebContentLocale::on('live')->where('web_content_id', $webContent->id)->delete();

            $path = $webContent->type_id . DIRECTORY_SEPARATOR . $webContent->id;

            $full_path = public_path(Storage::url($path));

            if (file_exists($full_path)) {
                Storage::deleteDirectory($path);
            }
        }
    }

    /**
     * Handle the web content "restored" event.
     *
     * @param \App\Models\WebContent $webContent
     * @return void
     */
    public function restored(WebContent $webContent)
    {
        //
    }

    /**
     * Handle the web content "force deleted" event.
     *
     * @param \App\Models\WebContent $webContent
     * @return void
     */
    public function forceDeleted(WebContent $webContent)
    {
        //
    }
}
