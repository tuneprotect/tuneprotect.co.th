<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGalleriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('galleries')) {
                Schema::connection($k)->create('galleries', function (Blueprint $table) {
                    $table->id();
                    $table->string('type_id');
                    $table->integer('ref_id');
                    $table->string('pic')->unique();
                    $table->text('alt')->nullable();
                    $table->boolean('enable')->default(1);
                    $table->boolean('mark_delete')->default(0);
                    $table->boolean('publish')->default(0);
                    $table->integer('s_order')->nullable();
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
            Schema::connection($k)->dropIfExists('galleries');
        }
    }
}
