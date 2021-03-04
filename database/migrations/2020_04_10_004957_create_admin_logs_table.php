<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        if (!Schema::hasTable('admin_logs')) {
            Schema::create('admin_logs', function (Blueprint $table) {
                $table->id();
                $table->string('action')->nullable();
                $table->text('description')->nullable();
                $table->string('user')->nullable();
                $table->string('ip')->nullable();
                $table->integer('admin_id')->nullable();
                $table->text('data')->nullable();
                $table->timestamps();
                $table->engine = "InnoDB";
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
        Schema::dropIfExists('admin_logs');
    }
}
