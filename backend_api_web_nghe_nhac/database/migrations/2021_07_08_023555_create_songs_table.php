<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('description');
            $table->string('mp3');
            $table->string('image');
            $table->string('artist');
            $table->integer('singer_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->string('genre');
            $table->string('album');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('singer_id')->references('id')->on('singers');
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
        Schema::dropIfExists('songs');
    }
}
