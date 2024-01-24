import { useState } from "react";
import InputField from "./components/InputField";
import "./App.css"
import TodoList from "./components/TodoList";

export interface Todo {
  id: number,
  todo: string,
  isDone: boolean
}

const App = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    }
    setTodo("")
  }

  console.log(todos)

  return (
    <div className="container">
      <h1>Taskify</h1>

      <InputField setTodo={setTodo} handleAdd={handleAdd} todo={todo}/>
      {todos.length===0?<h3>You Don't have any tasks</h3>:<TodoList todos={todos} setTodos={setTodos}/>}
    </div>
  )
}

export default App;
