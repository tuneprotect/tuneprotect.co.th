<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebContentLocalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('web_content_locales')) {
                Schema::connection($k)->create('web_content_locales', function (Blueprint $table) {
                    $table->id();
                    $table->bigInteger('web_content_id')->nullable();
                    $table->string('locale', 2);
                    $table->string('title')->nullable();
                    $table->text('sub_title')->nullable();
                    $table->text('content')->nullable();
                    $table->text('remark')->nullable();
                    $table->string('page_title')->nullable();
                    $table->string('page_keyword')->nullable();
                    $table->string('page_desc')->nullable();
                    $table->string('og_title')->nullable();
                    $table->string('og_desc')->nullable();
                    $table->timestamps();

                    $table->unique(['web_content_id', 'locale']);
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
            Schema::connection($k)->dropIfExists('web_content_locales');
        }
    }
}
