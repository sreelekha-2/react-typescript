import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../App'

interface props {
    todo: Todo,
    index: number,
    todos: Array<Todo>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [isEdit])

    const handleDelete = (id: number) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const handleDone = (id: number) => {
        setTodos(todos.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item))
    }

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault()
        setTodos(todos.map(item => item.id === todo.id ? { ...item, todo: editText } : item))
        setEditText("");
        setIsEdit(false)
    }

    const onEditClick = () => {
        setIsEdit(true)
    }

    return (
        <div className='todo-container'>
            <form onSubmit={e=>handleEdit(e)}>
                {isEdit ?
                    <input value={editText} onChange={e => setEditText(e.target.value)} ref={inputRef} /> :
                    todo.isDone ? <s className='task-name'>{todo.todo}</s> : <span className='task-name'>{todo.todo}</span>
                }
            </form>
            <div className='action-container'>
                <button onClick={onEditClick}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={() => handleDone(todo.id)}>Done</button>
            </div>
        </div>
    )
}

export default SingleTodo
