<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatosHistoricosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datos_historicos', function (Blueprint $table) {
            $table->id();
            $table->string("FECHA");
            $table->string("PM10");
            $table->string("TEMP");
            $table->string("HUMEDAD");
            $table->string("DIR VIENTO");
            $table->string("Monto V");
            $table->string("Velocidad V");
            $table->string("Tem/Hum");
            $table->string("Tem/Hum/Vient");
            $table->string("PRESION ATM");
            $table->string("LLUVIA");
            $table->string("Intens lluv");
            $table->string("RADIACION SOL");
            $table->string("Radiac acum");
            $table->string("Max Rad");
            $table->string("UV Intens");
            $table->string("Max UV");
            $table->string("DENSIDAD AIRE");


           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datos_historicos');
    }
}
