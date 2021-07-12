<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;
    protected $fillable = [
        'song_name',
        'description',
        'filename',
        'image',
        'musician',
        'singer_id',
        'user_id',
        'genre',
        'album'
    ];
}
