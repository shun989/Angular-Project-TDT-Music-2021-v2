<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadAudio(Request $request){

        if ($request->hasFile('music')) {
            $file = $request->file('music');
            $fileName = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $audio = date('His').'-'.$fileName;
            $file->move(public_path('music'),$audio);
            return response()->json(['message'=> 'Audio upload Successfully']);
        }else{
            return response()->json(['message'=> 'Select file first']);
        }
    }

}
