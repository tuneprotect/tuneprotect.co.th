<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaymentStatusToBuylog extends Migration
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
                $table->text('payment_status')->nullable();
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
                $table->dropColumn('payment_status');
            });
        }
    }
}


//php artisan migrate
