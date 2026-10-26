import type { Todo } from '../types'
type TodoItemProps = { todo: Todo }

function TodoItem( {todo}: TodoItemProps) {
  return (
    <div key={todo.id}>
        <p>{todo.content}</p>
        <div className="">
            <button>Delete</button>
            <button>{todo.checked? "checked" : "not Checked"}</button>
        </div>
    </div>
  )
}

export default TodoItem