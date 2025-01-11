import React from "react";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

const TodoList = ({ todos }) => {
  
    const [search, setSearch] = useState("");
    const editTodo = async (e, id) => {
        e.preventDefault();
        await router.get(route("todos.edit", id), {
            preserveScroll: true,
        });
    };

    const deleteTodo = async (e, id) => {
        e.preventDefault();
        await router.delete(route("todos.destroy", id), {
            preserveScroll: true,
        });
    };

    const completeTodo = async (e, id) => {
        e.preventDefault();
        await router.patch(route("todos.complete", id), {
            preserveScroll: true,
        });
    };
    return (
        <>
            <section>
                <ul className="space-y-4">
                    {todos.data.map((todo) => (
                        <Link
                            key={todo.id}
                            href={route("todos.show", todo.id)}
                            className="flex ease-in-out duration-100 hover:border-l-green-400 hover:border-l-4 items-center justify-between hover:bg-gray-300 rounded p-1"
                        >
                            <div className="flex  items-center">
                                <div className="text-sm">
                                    <p className="font-medium">{todo.title}</p>
                                    <small className="text-gray-500 font-semibold">
                                        {todo.created_at}
                                    </small>
                                    <p className="text-gray-600">
                                        {todo.description}
                                        fff
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                {!todo.completed && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                editTodo(e, todo.id)
                                            }
                                            className="text-yellow-600 hover:text-yellow-900 text-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.49 3.17a1 1 0 01.726 0l4 4a1 1 0 01-1.414 1.791l-4-4a1 1 0 01-.683-.833l12.071-11.57a1 1 0 011.027 0l12.071 11.57a1 1 0 01-.683.833L11.73 4.852a1 1 0 01-.726 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                completeTodo(e, todo.id)
                                            }
                                            className="text-green-600 hover:text-green-900 text-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                <button
                                    type="button"
                                    onClick={(e) => deleteTodo(e, todo.id)}
                                    className="text-red-600 hover:text-red-900 text-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button> 
                            </div>
                        </Link>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default TodoList;
