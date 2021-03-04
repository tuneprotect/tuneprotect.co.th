<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuyLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('buy_logs')) {
                Schema::connection($k)->create('buy_logs', function (Blueprint $table) {
                    $table->id();
                    $table->string('RefCode')->nullable();
                    $table->string('fdInvoice')->nullable();
                    $table->text('data')->nullable();
                    $table->text('result')->nullable();
                    $table->timestamps();
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
            Schema::connection($k)->dropIfExists('buy_logs');
        }
    }
}
