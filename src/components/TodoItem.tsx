import type { FC } from "react"

interface Todo {
     id: number,
     completed: boolean,
     title: string,
     handlecompleted: (id:number) => void,
     removeItem: (id:number) => void,
     mode: boolean
}



const TodoItem:FC<Todo> = ({id, completed, title, handlecompleted, removeItem, mode}) => {

  const light = 'bg-Very-Light-Grayish flex justify-between px-2 py-3  '
  const dark = 'bg-Very-Dark-Desaturated-Blue flex justify-between px-2 py-3 '

  return (
    <div key={id} className={mode ? dark : light}>
        <label>
        <input type='checkbox' checked={completed}  onChange={() => handlecompleted(id)} />
        <span>{title}</span>
        </label>
        <button onClick={() => removeItem(id)}>X</button>
    </div> 
  )
}

export default TodoItem