import { type DashboardTinyFormate } from "../types/dashboardTinyFormate"

export const MobileDashboard = ({num, clearComplated, darkMode}:DashboardTinyFormate ) => {
   const darkT = 'flex flex-row justify-between items-center px-4 h-[60px] nt:hidden text-Very-Dark-Grayish-Blue';
 const lightT = 'flex flex-row justify-between items-center px-4 h-[60px] nt:hidden text-Very-Dark-Grayish-Blue-1'

  return (
    <div className={darkMode ? darkT : lightT }>
         <p><a href='#Itens-left'>{num} itens left</a></p>
         <button onClick={clearComplated}>Clear Completed</button>
    </div>
  )
}