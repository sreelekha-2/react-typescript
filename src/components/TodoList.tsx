import React from 'react'
import { Todo } from '../App'
import SingleTodo from './SingleTodo'

interface props{
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<props> = ({todos,setTodos}) => {
  return (
    <div>
      {todos.map((todo,index)=>(
        <SingleTodo key={todo.id} todo={todo} index={index} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodoList
