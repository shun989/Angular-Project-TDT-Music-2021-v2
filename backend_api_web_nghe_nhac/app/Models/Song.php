<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'description',
        'mp3',
        'image',
        'artist',
        'singer_id',
        'user_id',
        'genre',
        'album',
        'listens'
    ];
}
