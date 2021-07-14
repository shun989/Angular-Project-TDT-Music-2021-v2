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
    Route::post('/refresh', [AuthController::class, 'refresh']);
});

Route::middleware('jwt')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::prefix('me')->group(function () {
        Route::post('/change-password', [AuthController::class, 'changePassword']);
        Route::get('/user-profile', [AuthController::class, 'userProfile']);
    });

    Route::prefix('songs')->group(function () {
        Route::get('{id_user}/user',[SongController::class,'songOfUser'])->name('songs.songsOfUser');
        Route::post('/', [SongController::class, 'store'])->name('songs.store');
        Route::put('/{songId}/update', [SongController::class, 'update'])->name('songs.update');
        Route::delete('/{songId}/delete', [SongController::class, 'destroy'])->name('songs.destroy');
    });

    Route::prefix('singers')->group(function () {
        Route::post('', [SingerController::class, 'store'])->name('singers.store');
        Route::put('/{singerId}/update', [SingerController::class, 'update'])->name('singers.update');
    });
});

Route::prefix('songs')->group(function () {
    Route::get('', [SongController::class, 'index'])->name('songs.all');
    Route::get('{songId}/show', [SongController::class, 'show'])->name('songs.show');
    Route::get('/new-song', [SongController::class, 'newSongs'])->name('songs.newSong');
    Route::get('/{id_singer}/songs', [SongController::class, 'songsOfSinger'])->name('songs.singer');
});

Route::prefix('singers')->group(function () {
    Route::get('', [SingerController::class, 'index'])->name('singers.all');
    Route::get('/{singerId}/show', [SingerController::class, 'show'])->name('singers.show');
});



