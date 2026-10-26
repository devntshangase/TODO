import { useState } from "react";
import type { Todo } from "./types";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setTodoList(prev=>[...prev, {id: Date.now(), content: text, checked: false}])
    console.log('submited')
  }

  return (
    <div className="flex flex-col gap-4 px-4">

      <h1 className='text-center'>TODO</h1>

      <div className="">
        <form onSubmit={handleSubmit}>
          <input  type="text" placeholder="Type To-Do item" onChange={handleChange}/>
          <button type="submit">ADD</button>
        </form>
      </div>

      <div>
        {todoList.map(item => <TodoItem key={item.id} todo={item} />)}
      </div>
    </div>
  )
}

export default App
