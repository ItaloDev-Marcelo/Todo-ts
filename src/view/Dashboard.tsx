import type { FC } from "react"
import { type DashboardFormate } from "../types/dashboardProps"

const Dashboard:FC<DashboardFormate> = ({num,setSelect, clearComplated}) => {
  return (
    <div className='dashboard'>
        <p><a href='#Itens-left' className='hidden lg:flex'> {num} itens left</a></p>
        <div className='flex flex-row justify-between'>
          <button onClick={() => setSelect(0)}>All</button>
          <button onClick={() => setSelect(2)}>Active</button>
          <button onClick={() => setSelect(1)}>Completed</button>
        </div>
        <button onClick={clearComplated} className='hidden lg:flex'>Clear Completed</button>
     </div>
  )
}

export default Dashboard