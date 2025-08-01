import { type DashboardTinyFormate } from "../types/dashboardTinyFormate"

export const MobileDashboard = ({num, clearComplated}:DashboardTinyFormate ) => {
  return (
    <div className="flex flex-row justify-between items-center px-4 h-[60px] nt:hidden">
         <p><a href='#Itens-left'>{num} itens left</a></p>
         <button onClick={clearComplated}>Clear Completed</button>
    </div>
  )
}