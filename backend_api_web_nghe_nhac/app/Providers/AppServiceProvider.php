<?php

namespace App\Providers;

use App\Repositories\Impl\SingerRepositoryImpl;
use App\Repositories\Impl\UserRepositoryImpl;
use App\Repositories\SingerRepository;
use App\Repositories\SongRepository;
use App\Repositories\Impl\SongRepositoryImpl;
use App\Repositories\UserRepository;
use App\Services\Impl\SingerServiceImpl;
use App\Services\Impl\SongServiceImpl;
use App\Services\Impl\UserServiceImpl;
use App\Services\SingerService;
use App\Services\SongService;
use App\Services\UserService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            SongRepository::class,
            SongRepositoryImpl::class
        );
        $this->app->singleton(
            SongService::class,
            SongServiceImpl::class
        );
        $this->app->singleton(
            UserRepository::class,
            UserRepositoryImpl::class
        );
        $this->app->singleton(
            UserService::class,
            UserServiceImpl::class
        );
        $this->app->singleton(
            SingerRepository::class,
            SingerRepositoryImpl::class
        );
        $this->app->singleton(
            SingerService::class,
            SingerServiceImpl::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
