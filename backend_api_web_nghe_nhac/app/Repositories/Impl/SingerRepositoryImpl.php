<?php
namespace App\Repositories\Impl;

use App\Models\Singer;
use App\Repositories\SingerRepository;
use App\Repositories\Eloquent\EloquentRepository;

class SingerRepositoryImpl extends EloquentRepository  implements SingerRepository
{
    /**
     * get Model
     * @return string
     */
    public function getModel()
    {
        $model = Singer::class;
        return $model;
    }
}
