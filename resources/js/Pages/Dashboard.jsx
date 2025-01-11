import TodoForm from '@/Components/TodoForm';
import TodoList from '@/Components/TodoList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <TodoForm />
                        </div>
                    </div>

                    <div className="overflow-hidden mt-5 bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-4 p-2">
                                <form action="" className="flex items-center">
                                    <input
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        type="search"
                                        className="rounded px-2 py-1 w-full"
                                        placeholder="Search..."
                                    />
                                </form>
                            </div>

                            <div>
                                <TodoList todos={props.todos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
