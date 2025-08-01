import type { FC } from "react"
import { type DashboardFormate } from "../types/dashboardProps"

const Dashboard:FC<DashboardFormate> = ({num,setSelect, clearComplated,darkMode}) => {
  const L =  'hidden md:flex flex-col md:flex-row justify-between items-center h-[50px] my-1.5 px-5 md:px-5 text-Very-Dark-Grayish-Blue';
  const D =  'hidden md:flex flex-col md:flex-row justify-between items-center h-[50px] my-1.5 px-5 md:px-5 text-Very-Dark-Grayish-Blue';


  return (
    <div className={darkMode ? D : L}>
        <p><a href='#Itens-left' className='hidden lg:flex'> {num} itens left</a></p>
        <div className='flex flex-row justify-between relative lg:left-[1em]'>
          <button  onClick={() => setSelect(0)}>All</button>
          <button className="mx-5 items-center" onClick={() => setSelect(2)}>Active</button>
          <button onClick={() => setSelect(1)}>Completed</button>
        </div>
        <button onClick={clearComplated} className='hidden lg:flex'>Clear Completed</button>
     </div>
  )
}

export default Dashboard