<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartnerLocalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('partner_locales')) {
                Schema::connection($k)->create('partner_locales', function (Blueprint $table) {
                    $table->id();
                    $table->bigInteger('partner_id')->nullable();
                    $table->string('locale', 2);
                    $table->string('title')->nullable();
                    $table->text('address')->nullable();
                    $table->timestamps();
                    $table->unique(['partner_id', 'locale']);
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
            Schema::connection($k)->dropIfExists('partner_locales');
        }
    }
}
