<?php
namespace Database\Seeders;
use App\Models\Language;
use App\Models\Setting;
use Illuminate\Database\Seeder;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'code' => 'th',
                'default' => '1',
                'enable' => '1',
                'title' => 'Thai',
                'application' => 'front',
            ],
            [
                'code' => 'en',
                'default' => '0',
                'enable' => '0',
                'title' => 'English',
                'application' => 'front',
            ]
        ];

        foreach ($data as $v1) {
            Language::create($v1);
        }

        $data = [
            [
                'id' => 'GOOGLE_AUTH_API_FOR_BACKSTAGE',
                'value' => "912646770587-dlo3nek8bq4u8k4tv2frp90tb87ftmps.apps.googleusercontent.com"
            ]
        ];

        foreach ($data as $v1) {
            Setting::create($v1);
        }
    }
}
