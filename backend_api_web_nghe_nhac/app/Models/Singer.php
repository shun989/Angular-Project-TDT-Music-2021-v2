<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Singer extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'sex',
        'dob',
        'genre',
        'history',
        'band',
        'famous_song',
        'more_information'
    ];

}
