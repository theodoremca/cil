<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/', function () {
    return view('cil',[
        'auth_user' => Auth::user()
    ]);

})->where('any', '.*');

Route::get('/what-we-do/portfolio/{slug}', function ($slug) {
    return view('portfolio', compact('slug'));

})->where('slug', '.*');


Route::view('contact', 'contact');
Route::view('who-we-are/about', 'about');
Route::view('who-we-are/teams', 'teams');
Route::view('who-we-are/teams', 'teams');
Route::get('/who-we-are/teams/{id}', [App\Http\Controllers\HomeController::class,]);


Route::view('what-we-do', 'what_we_do');
Route::view('what-we-do/faq', 'faq');
Route::view('/what-we-do/portfolio','portfolio_list');
Route::get('/what-we-do/we-do/{slug}', function ($slug) {
    return view('do', compact('slug'));

});
