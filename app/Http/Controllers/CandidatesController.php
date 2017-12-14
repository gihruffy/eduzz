<?php

namespace App\Http\Controllers;
use App\Candidate;
use Illuminate\Http\Request;

class CandidatesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }


    public function index(){
        $candidates = Candidate::all();
        return response()->json(['candidades'=>$candidates]);
    }


    public function show($id){
        $candidate = Candidate::find($candidate);
        return response()->json(['candidate' => $candidate]);
    }


    public function create(Request $request){
        $this->validate($request, [
            'name'=>'required|max:100',
            
        ]);
    }

    public function update(Request $request){
        $this->validate($request, [
            
        ]);


        return response()->json(['candidate' => $candidate]);
    }

    public function delete($id){
        return response()->json(['candidate' => $candidate]);
    }

    //
}
