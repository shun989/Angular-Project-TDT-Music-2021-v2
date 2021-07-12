<?php
namespace App\Services\Impl;

use App\Repositories\SongRepository;
use App\Services\SongService;

class SongServiceImpl implements SongService
{
    protected $songRepository;


    public function __construct(SongRepository $songRepository)
    {
        $this->songRepository = $songRepository;
    }

    public function getAll()
    {
        $songs = $this->songRepository->getAll();

        return $songs;
    }

    public function findById($id)
    {
        $song = $this->songRepository->findById($id);

        $statusCode = 200;
        if (!$song)
            $statusCode = 404;

        $data = [
            'statusCode' => $statusCode,
            'songs' => $song
        ];

        return $data;
    }

    public function create($request)
    {
        $song = $this->songRepository->create($request);

        $statusCode = 201;
        if (!$song)
            $statusCode = 500;

        $data = [
            'statusCode' => $statusCode,
            'songs' => $song
        ];

        return $data;
    }

    public function update($request, $id)
    {
        $oldsong = $this->songRepository->findById($id);

        if (!$oldsong) {
            $newsong = null;
            $statusCode = 404;
        } else {
            $newsong = $this->songRepository->update($request, $oldsong);
            $statusCode = 200;
        }

        $data = [
            'statusCode' => $statusCode,
            'songs' => $newsong
        ];
        return $data;
    }

    public function destroy($id)
    {
        $song = $this->songRepository->findById($id);

        $statusCode = 404;
        $message = "Song not found";
        if ($song) {
            $this->songRepository->destroy($song);
            $statusCode = 200;
            $message = "Delete success!";
        }

        $data = [
            'statusCode' => $statusCode,
            'message' => $message
        ];
        return $data;
    }
}
