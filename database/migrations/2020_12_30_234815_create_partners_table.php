<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('partners')) {
                Schema::connection($k)->create('partners', function (Blueprint $table) {
                    $table->id();
                    $table->string('type_id')->nullable();
                    $table->integer('cat_id')->nullable();
                    $table->boolean('enable')->default(1);
                    $table->boolean('mark_delete')->default(0);
                    $table->dateTime('start_date')->nullable();
                    $table->dateTime('end_date')->nullable();
                    $table->string('website')->nullable();
                    $table->boolean('publish')->default(0);
                    $table->integer('s_order')->nullable();
                    $table->string('tel')->nullable();
                    $table->string('province')->nullable();
                    $table->string('partner_language')->nullable();
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
            Schema::connection($k)->dropIfExists('partners');
        }
    }
}
