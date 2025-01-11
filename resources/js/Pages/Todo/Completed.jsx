import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TodoList from "@/Components/TodoList";
const Completed = (props) => {
    return (
        
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Completed Todos
                </h2>
            }
        >
            <Head title="Completed" />

            <section className="flex items-center justify-center p-5">
                <h1 className="text-2xl">Completed Tasks</h1>
            </section>

            <section className=" p-5">
                <TodoList todos={props.todos} />
            </section>
        </AuthenticatedLayout>
    );
};

export default Completed;
