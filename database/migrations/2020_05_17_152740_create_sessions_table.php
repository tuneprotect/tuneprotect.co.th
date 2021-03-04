<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach (config('database.connections') as $k => $v) {
            if (!Schema::connection($k)->hasTable('sessions')) {
                Schema::connection($k)->create('sessions', function (Blueprint $table) {
                    $table->string('id')->unique();
                    $table->unsignedBigInteger('user_id')->nullable();
                    $table->string('ip_address', 45)->nullable();
                    $table->text('user_agent')->nullable();
                    $table->text('payload');
                    $table->integer('last_activity');
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
            Schema::connection($k)->dropIfExists('sessions');
        }
    }
}
