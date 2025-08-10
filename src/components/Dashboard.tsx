import { type FC } from "react"
import { type DashboardFormate } from "../types/dashboardProps"
import { DashboadTheme } from "../themes/dark.light"


const Dashboard:FC<DashboardFormate> = ({num,setSelect, clearComplated,darkMode,select}) => {
  const {dark, light} = DashboadTheme;
  const result = darkMode ? dark : light;

  return (
    <div className={`hidden lg:flex flex-col md:flex-row justify-between items-center h-[50px] my-1.5 px-5 md:px-5 ${result}`}>
        <p><a href='#Itens-left' className='hidden lg:flex'> {num} itens left</a></p>
        <div className='flex flex-row justify-between relative lg:left-[1em]'>
          <button onClick={() => setSelect(0)} className={select === 0 ? 'font-black text-blue-500 cursor-pointer' : 'font-black text-Light-Grayish-Blue cursor-pointer' }>All</button>
          <button onClick={() => setSelect(2)}  className={select === 2 ? 'font-black mx-5 items-center cursor-pointer text-blue-500' : 'font-black mx-5 items-center text-Light-Grayish-Blue cursor-pointer' }>Active</button>
          <button onClick={() => setSelect(1)} className={select === 1 ? 'font-black text-blue-500 cursor-pointer' : 'font-black text-Light-Grayish-Blue cursor-pointer' }>Completed</button>
        </div>
        <button onClick={clearComplated} className='hidden lg:flex font-semibold'>Clear Completed</button>
     </div>
  )
}

export default Dashboard