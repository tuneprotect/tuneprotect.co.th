<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\WebContent;
use App\Models\WebContentLocale;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class AddBannerWebContentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $all = WebContent::all();
$arr = [];

        foreach ($all as $v) {

            $pic_en = $this->check_en_pic($v->pic);

            if ($v->pic !== $pic_en) {
                echo $pic_en . "\n";

                $v->pic_en = $pic_en;
            }

            $pic_mobile_en = $this->check_en_pic($v->pic_mobile);

            if ($v->pic_mobile !== $pic_mobile_en) {
                echo $pic_mobile_en . "\n";

                $v->pic_mobile_en = $pic_mobile_en;
            }

            if($v->isDirty()){
                $v->save();
            }

        }



    }

    protected function check_en_pic($pic)
    {


        $basename = basename($pic);
        $en_name = pathinfo($pic, PATHINFO_FILENAME) . '_EN.' . pathinfo($pic, PATHINFO_EXTENSION);

        $exist = Storage::disk('public')->exists(
            str_replace('/storage', '', str_replace($basename, $en_name, $pic))
        );

        if ($exist) {
            return str_replace($basename, $en_name, $pic);
        } else {
            return $pic;
        }

    }

}
