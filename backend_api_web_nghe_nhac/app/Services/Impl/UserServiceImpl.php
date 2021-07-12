<?php
namespace App\Services\Impl;

use App\Repositories\UserRepository;
use App\Services\UserService;

class UserServiceImpl implements UserService
{
    protected $userRepository;


    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getAll()
    {
        $users = $this->userRepository->getAll();

        return $users;
    }

    public function findById($id)
    {
        $user = $this->userRepository->findById($id);

        $statusCode = 200;
        if (!$user)
            $statusCode = 404;

        $data = [
            'statusCode' => $statusCode,
            'users' => $user
        ];

        return $data;
    }

    public function create($request)
    {
        $user = $this->userRepository->create($request);

        $statusCode = 201;
        if (!$user)
            $statusCode = 500;

        $data = [
            'statusCode' => $statusCode,
            'users' => $user
        ];

        return $data;
    }

    public function update($request, $id)
    {
        $olduser = $this->userRepository->findById($id);

        if (!$olduser) {
            $newuser = null;
            $statusCode = 404;
        } else {
            $newuser = $this->userRepository->update($request, $olduser);
            $statusCode = 200;
        }

        $data = [
            'statusCode' => $statusCode,
            'users' => $newuser
        ];
        return $data;
    }

    public function destroy($id)
    {
        $user = $this->userRepository->findById($id);

        $statusCode = 404;
        $message = "User not found";
        if ($user) {
            $this->userRepository->destroy($user);
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
