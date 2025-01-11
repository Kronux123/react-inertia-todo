<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use App\Http\Resources\TodoResource;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('todos', TodoController::class);
Route::patch('todos/{todo}/complete', [TodoController::class, 'complete'])->name('todos.complete');
Route::resource('comments', CommentController::class);
Route::post('comments/{todo}', [CommentController::class, 'store'])->name('comments.store');

Route::get('/dashboard', function () {
    
    $todos = Auth::user()->todos()->where('completed', false)->latest()->get();

    return Inertia::render('Dashboard', ['todos' => TodoResource::collection($todos)]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/completed-todos', function() {
    $todos = Auth::user()->todos()->where('completed', true)->latest()->get();
    return inertia('Todo/Completed', ['todos' => TodoResource::collection($todos)]);
})->name('completed-todos');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
