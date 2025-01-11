import { useForm } from '@inertiajs/react'
import React from 'react'

const TodoForm = () => {

    const {data, setData, post, reset, processing, errors} = useForm({
        title: '',
        description: ''
    })
    const submit = (e) => {
        e.preventDefault()
        post(route('todos.store'), {
            onSuccess: () => reset('title', 'description')
        })
    }
  return (
    <>
        <div>
            <form onSubmit={submit} className="space-y-4">
                <div className="space-y-1">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input placeholder="Title" value={data.title} onChange={(e) => setData('title', e.target.value)} type="text" name="title" id="title" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                {errors.title && <div className="text-red-500">{errors.title}</div>}

                <div className="space-y-1">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea placeholder="Description" value={data.description} onChange={(e) => setData('description', e.target.value)} name="description" id="description" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="3"></textarea>
                </div>
                {errors.description && <div className="text-red-500">{errors.description}</div>}

                <div>
                    <button disabled={processing} type="submit" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default TodoForm