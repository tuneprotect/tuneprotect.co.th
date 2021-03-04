<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\WebContent;
use App\Models\WebContentLocale;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $result = (array)json_decode(Storage::disk('local')->get('data/province.json'));

        $arrProvince = [];

        foreach ($result as $v) {
            $data = (array)$v;
            $locales = $data['locales'];
            unset($data['locales']);

            $webContent = WebContent::create($data);

            $arrProvince[$data['code']] = $webContent->id;

            foreach ($locales as $k => $v1) {
                $localeData = (array)$v1;
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
