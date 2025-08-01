import type { FC } from "react"

interface Todo {
     id: number,
     completed: boolean,
     title: string,
     handlecompleted: (id:number) => void,
     removeItem: (id:number) => void,
     mode: boolean
}

import close from '../assets/icon-cross.svg'


const TodoItem:FC<Todo> = ({id, completed, title, handlecompleted, removeItem, mode}) => {

  const light = 'bg-Very-Light-Gray flex justify-between px-3 py-4  shadow  '
  const dark = 'bg-Very-Dark-Desaturated-Blue flex justify-between px-3 py-4  shadow'

  const borderL = 'border-Dark-Grayish-Blue'
  const borderD = 'border-Light-Grayish-Blue'

  return (
    <>
    <div key={id} className={mode ? dark : light}>
        <label className='flex'>
        <div className=" custom-checkbox">
          <input type='checkbox' className="hidden" checked={completed}  onChange={() => handlecompleted(id)} />
          <span className='checkmark'></span>
        </div>
        <span className='ml-5 text-[1em]'>{title}</span>
        </label>
        <button className='p-2' onClick={() => removeItem(id)}><img src={close} alt=''/></button>
    </div> 
     <hr className={mode ? borderD : borderL}/>
    </>
  )
}

export default TodoItem