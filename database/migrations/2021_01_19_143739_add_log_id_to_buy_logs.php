<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLogIdToBuyLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            Schema::connection($k)->table('buy_logs', function (Blueprint $table) {
                $table->string('log_id')->nullable();
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
            Schema::connection($k)->table('buy_logs', function (Blueprint $table) {
                $table->dropColumn('log_id');
            });
        }
    }
}
