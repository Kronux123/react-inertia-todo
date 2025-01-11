import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import {usePoll} from '@inertiajs/react'
const TodoShow = ({todo, comments}) => {
    usePoll(10000)
    const {data, setData, post, reset, processing, errors} = useForm({
        comment: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('comments.store', todo.id), {
            onSuccess: () => reset()
        })
    }
  return (
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Todo Show
            </h2>
        }
    >
      <Head title="Todo Show" />
      <section className="flex flex-col items-center justify-center p-5">
        <h1 className="text-2xl">{todo.title}</h1>
        <p className="text-xl m-5">{todo.description}</p>
        <span className={todo.completed ? 'bg-green-500 text-white px-3 py-1 rounded' : 'bg-red-500 text-white px-3 py-1 rounded'}>{todo.completed ? 'Completed' : 'Pending'}</span>
      </section>

      <section className="mt-5 bg-gray-100 p-5">
        <h1 className="text-2xl">Comments</h1>
        <div>
            <form onSubmit={submit}>
                <textarea value={data.comment} onChange={(e) => setData('comment', e.target.value)} placeholder="comment..." name="" id="" cols="30" rows="3" className="w-full rounded border-gray-300"></textarea>
                {errors.comment && <div className="text-red-500">{errors.comment}</div>}
                <button className="bg-blue-500 text-white px-3 py-1 rounded">comment</button>
            </form>
        </div>

        <div className="mt-5 space-y-3 p-3 bg-white h-max">
            {comments.length > 0 ? comments.map((comment) => (
                <div key={comment.id} className="p-3 hover:border-gray-600 border rounded border-gray-300">
                    <p className="text-md ">{comment.comment}</p>
                    <small>{comment.created_at}</small>
                </div>
            )) : <p className="text-center">No comments for this task</p>}
            
        </div>
      </section>
    </AuthenticatedLayout>
  )
}

export default TodoShow