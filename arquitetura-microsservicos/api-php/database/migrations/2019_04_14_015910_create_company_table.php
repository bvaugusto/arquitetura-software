<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @return void
     */
    public function up()
    {
        Schema::create('company', function (Blueprint $table) {

            $table->increments('id');

            $table->unsignedInteger('id_address')->nullable();
            $table->unsignedInteger('id_segment')->nullable();

            $table->string('cnpj', 14)->unique();
            $table->string('social_name');
            $table->string('fantasy_name')->nullable();
            $table->string('municipal_registration');
            $table->string('state_registration')->nullable();
            $table->string('mail');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company');
    }
}
