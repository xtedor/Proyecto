<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVariablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('variables', function (Blueprint $table) {
            $table->id();
            $table->integer("id_comuna");
            $table->decimal('variable_1', 10, 4);
            $table->decimal('variable_2', 10, 4);
            $table->decimal('variable_3', 10, 4);
            $table->decimal('variable_4', 10, 4);
            $table->decimal('variable_5', 10, 4);
            $table->decimal('variable_6', 10, 4);
            $table->decimal('variable_7', 10, 4);
            $table->decimal('variable_8', 10, 4);


            $table->decimal('contaminacion',10,4);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('variables');
    }
}
