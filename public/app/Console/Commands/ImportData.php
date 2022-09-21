<?php

namespace App\Console\Commands;

use App\Models\WebContent;
use App\Models\WebContentLocale;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class ImportData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        WebContent::truncate();
        WebContentLocale::truncate();

        $result = (array)json_decode(Storage::disk('local')->get('data/back_web_content.json'));

        foreach ($result as $v) {
            $data = (array)$v;
            $locales = $data['locales'];

            unset($data['id']);
            unset($data['locales']);
            $webContent = WebContent::create($data);
            foreach ($locales as $k => $v1) {
                $localeData = (array)$v1;
                unset($localeData['id']);
                $localeData['web_content_id'] = $webContent->id;
                WebContentLocale::create($localeData);
            }

        }

        $result = (array)json_decode(Storage::disk('local')->get('data/province.json'));

        $arrProvince = [];

        foreach ($result as $v) {
            $data = (array)$v;
            $locales = $data['locales'];
//            unset($data['id']);
            unset($data['locales']);
            $webContent = WebContent::create($data);

            $arrProvince[$data['code']] = $webContent->id;

            foreach ($locales as $k => $v1) {
                $localeData = (array)$v1;
//                unset($localeData['id']);
                $localeData['web_content_id'] = $webContent->id;
                WebContentLocale::create($localeData);
            }
        }

        $result = (array)json_decode(Storage::disk('local')->get('data/district.json'));

        foreach ($result as $v) {
            $data = (array)$v;

            $locales = $data['locales'];
            $data['parent_id'] = $arrProvince[$data['ProvinceCode']];

            unset($data['ProvinceCode']);
//            unset($data['id']);
            unset($data['locales']);
            $webContent = WebContent::create($data);
            foreach ($locales as $k => $v1) {
                $localeData = (array)$v1;
//                unset($localeData['id']);
                $localeData['web_content_id'] = $webContent->id;
                WebContentLocale::create($localeData);
            }
        }
    }
}
