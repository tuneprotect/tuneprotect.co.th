<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguagesTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('languages')) {
                Schema::connection($k)->create('languages', function (Blueprint $table) {
                    $table->id();
                    $table->string('code', 2);
                    $table->string('application')->nullable();
                    $table->string('title')->nullable();
                    $table->boolean('publish')->default(0);
                    $table->boolean('delete')->default(0);
                    $table->boolean('default')->default(0);
                    $table->boolean('enable')->default(0);
                    $table->unique(['code', 'application']);
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
            Schema::connection($k)->dropIfExists('languages');
        }
    }
}
