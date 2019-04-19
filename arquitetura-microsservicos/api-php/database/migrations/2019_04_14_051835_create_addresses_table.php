<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddressesTable extends Migration
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
        Schema::create('addresses', function (Blueprint $table) {
            
            $table->increments('id');

            $table->unsignedInteger('id_company');

            $table->integer('cep');
            $table->string('public_place');
            $table->string('number');
            $table->string('telephone', 11);
            $table->string('complement')->nullable();
            $table->string('neightborhood');
            $table->string('city');
            $table->string('state', 2);
            
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
        Schema::dropIfExists('addresses');
    }
}
