<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPicEnToWebContents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            Schema::connection($k)->table('web_contents', function (Blueprint $table) {
                $table->string('pic_en')->nullable();
                $table->string('pic_mobile_en')->nullable();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach (config('database.connections') as $k => $v) {
            Schema::connection($k)->table('web_contents', function (Blueprint $table) {
                $table->dropColumn('pic_en');
                $table->dropColumn('pic_mobile_en');
            });
        }
    }
}
