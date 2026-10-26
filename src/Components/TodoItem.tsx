import React from 'react'

function TodoItem({content, id, checked}) {
  return (
    <div>
        <p>{content}</p>
        <div className="">
            <button>Delete</button>
            <button>{checked? "checked" : "not Checked"}</button>
        </div>
    </div>
  )
}

export default TodoItem