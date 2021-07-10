<?php
namespace App\Services\Impl;

use App\Repositories\SingerRepository;
use App\Services\SingerService;

class SingerServiceImpl implements SingerService
{
    protected $singerRepository;


    public function __construct(SingerRepository $singerRepository)
    {
        $this->singerRepository = $singerRepository;
    }

    public function getAll()
    {
        $singers = $this->singerRepository->getAll();

        return $singers;
    }

    public function findById($id)
    {
        $singer = $this->singerRepository->findById($id);

        $statusCode = 200;
        if (!$singer)
            $statusCode = 404;

        $data = [
            'statusCode' => $statusCode,
            'singers' => $singer
        ];

        return $data;
    }

    public function create($request)
    {
        $singer = $this->singerRepository->create($request);

        $statusCode = 201;
        if (!$singer)
            $statusCode = 500;

        $data = [
            'statusCode' => $statusCode,
            'singers' => $singer
        ];

        return $data;
    }

    public function update($request, $id)
    {
        $oldsinger = $this->singerRepository->findById($id);

        if (!$oldsinger) {
            $newsinger = null;
            $statusCode = 404;
        } else {
            $newsinger = $this->singerRepository->update($request, $oldsinger);
            $statusCode = 200;
        }

        $data = [
            'statusCode' => $statusCode,
            'singers' => $newsinger
        ];
        return $data;
    }

    public function destroy($id)
    {
        $singer = $this->singerRepository->findById($id);

        $statusCode = 404;
        $message = "Singer not found";
        if ($singer) {
            $this->singerRepository->destroy($singer);
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
