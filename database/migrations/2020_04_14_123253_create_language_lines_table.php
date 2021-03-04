<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguageLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('language_lines')) {
                Schema::connection($k)->create('language_lines', function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->string('group');
                    $table->index('group');
                    $table->string('key');
                    $table->boolean('publish')->default(0);
                    $table->text('text');
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
            Schema::connection($k)->drop('language_lines');
        }
    }
}
