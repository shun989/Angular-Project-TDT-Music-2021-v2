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
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
});

Route::get('/songs', [SongController::class,'index'])->name('songs.all');
Route::get('/songs/{songId}', [SongController::class,'show'])->name('songs.show');
Route::post('/songs', [SongController::class,'store'])->name('songs.store');
Route::put('/songs/{songId}', [SongController::class,'update'])->name('songs.update');
Route::delete('/songs/{songId}', [SongController::class,'destroy'])->name('songs.destroy');
Route::get('/latest/songs/',[SongController::class,'newSong'])->name('songs.latest');
Route::get('/{id_singer}/songs', [SongController::class,'songsOfSinger'])->name('songs.singer');


Route::get('/users', [UserController::class,'index'])->name('users.all');
Route::get('/users/{userId}', [UserController::class,'show'])->name('users.show');


Route::get('/singers', [SingerController::class,'index'])->name('singers.all');
Route::get('/singers/{singerId}', [SingerController::class,'show'])->name('singers.show');
Route::post('/singers', [SingerController::class,'store'])->name('singers.store');
Route::put('/singers/{singerId}', [SingerController::class,'update'])->name('singers.update');
Route::delete('/singers/{singerId}', [SingerController::class,'destroy'])->name('singers.destroy');
