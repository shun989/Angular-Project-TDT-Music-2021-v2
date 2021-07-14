<?php

namespace App\Http\Controllers;

use App\Models\Song;
use App\Services\SongService;
use Illuminate\Http\Request;
use function Symfony\Component\String\u;

class SongController extends Controller
{
    protected $songService;

    public function __construct(SongService $songService)
    {
        $this->songService = $songService;
    }

    public function index()
    {
        $songs = $this->songService->getAll();

        return response()->json($songs, 200);
    }

    public function newSongs()
    {
        $songs = Song::all()->sortByDesc('id');
        return response()->json($songs, 200);
    }

    public function show($id)
    {
        $datasongs = $this->songService->findById($id);

        return response()->json($datasongs['songs'], $datasongs['statusCode']);
    }

    public function store(Request $request)
    {
        $datasongs = $this->songService->create($request->all());
        return response()->json($datasongs['songs'], $datasongs['statusCode']);
    }

    public function update(Request $request, $id)
    {
        $datasongs = $this->songService->update($request->all(), $id);

        return response()->json($datasongs['songs'], $datasongs['statusCode']);
    }

    public function destroy($id)
    {
        $datasongs = $this->songService->destroy($id);
        return response()->json($datasongs['message'], $datasongs['statusCode']);
    }

    public function songsOfSinger($singer_id)
    {
        $songs = Song::all()->where('singer_id','=',$singer_id);
        return response()->json($songs, 200);
    }
    public function songsOfUser($user_id)
    {
        $songs = Song::all()->where('user_id','=',$user_id);
        return response()->json($songs, 200);
    }

}
