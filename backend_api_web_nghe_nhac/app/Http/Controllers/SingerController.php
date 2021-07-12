<?php

namespace App\Http\Controllers;

use App\Services\SingerService;
use Illuminate\Http\Request;

class SingerController extends Controller
{
    protected $singerService;

    public function __construct(SingerService $singerService)
    {
        $this->singerService = $singerService;
    }

    public function index()
    {
        $singers = $this->singerService->getAll();

        return response()->json($singers, 200);
    }

    public function show($id)
    {
        $datasinger = $this->singerService->findById($id);

        return response()->json($datasinger['singers'], $datasinger['statusCode']);
    }

    public function store(Request $request)
    {
        $datasinger = $this->singerService->create($request->all());

        return response()->json($datasinger['singers'], $datasinger['statusCode']);
    }

    public function update(Request $request, $id)
    {
        $datasinger = $this->singerService->update($request->all(), $id);

        return response()->json($datasinger['singers'], $datasinger['statusCode']);
    }

    public function destroy($id)
    {
        $datasinger = $this->singerService->destroy($id);

        return response()->json($datasinger['message'], $datasinger['statusCode']);
    }
}
