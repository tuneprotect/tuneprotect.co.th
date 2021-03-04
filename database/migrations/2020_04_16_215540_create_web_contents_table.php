<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('web_contents')) {
                Schema::connection($k)->create('web_contents', function (Blueprint $table) {
                    $table->id();
                    $table->string('type_id')->nullable();
                    $table->integer('cat_id')->nullable();
                    $table->string('pic')->nullable();
                    $table->string('pic_mobile')->nullable();
                    $table->text('video_link')->nullable();
                    $table->integer('parent_id')->default(0);
                    $table->string('friendly_url')->nullable();
                    $table->string('code')->nullable();
                    $table->string('og_image')->nullable();
                    $table->boolean('enable')->default(1);
                    $table->boolean('home')->default(0);
                    $table->boolean('mark_delete')->default(0);
                    $table->dateTime('start_date')->nullable();
                    $table->dateTime('end_date')->nullable();
                    $table->dateTime('action_date')->nullable();
                    $table->string('action_link')->nullable();
                    $table->boolean('publish')->default(0);
                    $table->integer('s_order')->nullable();
                    $table->string('custom_input_1')->nullable();
                    $table->string('custom_input_2')->nullable();
                    $table->string('custom_input_3')->nullable();
                    $table->timestamps();
                    $table->engine = "InnoDB";
                });
            }
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
            Schema::connection($k)->dropIfExists('web_contents');
        }
    }
}
