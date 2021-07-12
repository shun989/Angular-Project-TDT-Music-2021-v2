<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\SingerController;
use App\Http\Controllers\SongController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth');
    Route::get('/user-profile', [AuthController::class, 'userProfile'])->middleware('auth');
    Route::post('/change-password', [AuthController::class, 'changePassword'])->middleware('auth');
});


Route::get('/songs', [SongController::class,'index'])->name('songs.all');
Route::get('/songs/{songId}', [SongController::class,'show'])->name('songs.show');
Route::post('/songs', [SongController::class,'store'])->name('songs.store')->middleware('auth');
Route::put('/songs/{songId}', [SongController::class,'update'])->name('songs.update')->middleware('auth');
Route::delete('/songs/{songId}', [SongController::class,'destroy'])->name('songs.destroy')->middleware('auth');
Route::get('/latest/songs/',[SongController::class,'newSong'])->name('songs.latest');
Route::get('/{id_singer}/songs', [SongController::class,'songsOfSinger'])->name('songs.singer');

Route::get('/singers', [SingerController::class,'index'])->name('singers.all');
Route::get('/singers/{singerId}', [SingerController::class,'show'])->name('singers.show');
Route::post('/singers', [SingerController::class,'store'])->name('singers.store')->middleware('auth');
Route::put('/singers/{singerId}', [SingerController::class,'update'])->name('singers.update')->middleware('auth');
