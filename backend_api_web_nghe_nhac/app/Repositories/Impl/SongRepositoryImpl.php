<?php
namespace App\Repositories\Impl;

use App\Models\Song;
use App\Repositories\SongRepository;
use App\Repositories\Eloquent\EloquentRepository;

class SongRepositoryImpl extends EloquentRepository  implements SongRepository
{
    /**
     * get Model
     * @return string
     */
    public function getModel()
    {
        $model = Song::class;
        return $model;
    }
}
