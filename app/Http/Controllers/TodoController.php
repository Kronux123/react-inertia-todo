<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {
        $user = Auth::user();
        $user->todos()->create($request->all());
        return to_route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        return inertia('Todo/TodoShow', [
            'todo' => $todo,
            'comments' => $todo->comments()->latest()->get()->map(function ($comment) {
                return [
                    'id' => $comment->id,
                    'comment' => $comment->comment,
                    'created_at' => Carbon::parse($comment->created_at)->diffForHumans(),
                ];
            })
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        return inertia('Todo/EditTodo', ['todo' => $todo]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        $todo->update($request->all());
        return to_route('dashboard');
    }

    public function complete(Todo $todo)
    {
        $todo->update(['completed' => true]);
        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
        return to_route('dashboard');
    }
}
