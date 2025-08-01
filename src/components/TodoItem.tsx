import type { FC } from "react"
import { type TodoItemFormate} from "../types/todoFormate"
import close from '../assets/icon-cross.svg'
import { TodoItemTheme } from "../themes/dark.light"


const TodoItem:FC<TodoItemFormate> = ({id, completed, title, handlecompleted, removeItem, mode}) => {
  const {Light,Dark,BorderLight,BorderDark} = TodoItemTheme

  return (
    <>
    <div key={id} className={` flex justify-between px-3 py-4 transition ease-in-out shadow ${mode ? Dark : Light}`}>
        <label className='flex'>
        <div className=" custom-checkbox">
          <input type='checkbox' className="hidden" checked={completed}  onChange={() => handlecompleted(id)} />
          <span className='checkmark'></span>
        </div>
        <span className='ml-5 text-[1em] title '>{title}</span>
        </label>
        <button className='p-2' onClick={() => removeItem(id)}><img src={close} alt=''/></button>
    </div> 
     <hr className={`opacity-50 border-1  ${mode ? BorderDark : BorderLight}`}/>
    </>
  )
}

export default TodoItem