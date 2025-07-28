import type { FC } from "react"

interface Todo {
     id: number,
     completed: boolean,
     title: string,
     handlecompleted: (id:number) => void,
     removeItem: (id:number) => void
}



const TodoItem:FC<Todo> = ({id, completed, title, handlecompleted, removeItem}) => {
  return (
    <div key={id}>
        <label>
        <input type='checkbox' checked={completed}  onChange={() => handlecompleted(id)} />
        <span>{title}</span>
        </label>
        <button onClick={() => removeItem(id)}>X</button>
    </div> 
  )
}

export default TodoItem