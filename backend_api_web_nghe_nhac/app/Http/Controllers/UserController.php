<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function store(Request $request)
    {
        $datauser = $this->userService->create($request->all());

        return response()->json($datauser['users'], $datauser['statusCode']);
    }

    public function update(Request $request, $id)
    {
        $datauser = $this->userService->update($request->all(), $id);

        return response()->json($datauser['users'], $datauser['statusCode']);
    }
}
