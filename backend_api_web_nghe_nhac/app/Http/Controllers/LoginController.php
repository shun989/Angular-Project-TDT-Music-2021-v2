<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $arr = [
            'username'=>$request->username,
            'password'=>$request->password
        ];
        if (Auth::attempt($arr)){
            return response()->json('dang nhap thanh cong',200);
        }else{
            return response()->json('Tk hoac Mk khong dung',200);

        }
    }
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

}
