<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return blog::latest()->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Blog[]
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'content'=>'required',
        ]);
        $title = $request->get('title');
        $content = $request->get('content');
        $image = $request->get('image');

        $blog = new Blog([
            'title' => $title,
            'content' => $content,
            'image'=>$image
        ]);

        $blog->save();

        return ['success'=>$blog];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return string[]
     */
    public function update(Request $request, $id)
    {
        {
            $request->validate([
                'title'=>'required',
                'content'=>'required',
            ]);

            $blog = blog::find($id);
            $title = $request->get('title');
            $content = $request->get('content');
            $image = $request->get('image');
            $blog->title = $title;
            $blog->content =$content;
            $blog->image = $image;
            $blog->save();

            return ['success'=>$blog];
        }

    }

    /**
     * Remove the specified resource from storage.
     *

     * @return string[]
     */
    public function destroy($id)
    {
        $blog = blog::find($id);
        $blog->delete();
        return ['message'=>'deleted'];
    }
}
