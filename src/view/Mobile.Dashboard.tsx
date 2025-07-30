import { type DashboardTinyFormate } from "../types/dashboardTinyFormate"

export const MobileDashboard = ({num, clearComplated}:DashboardTinyFormate ) => {
  return (
    <div className="flex flex-row justify-between px-4 bg-red-500 md:hidden">
         <p><a href='#Itens-left'>{num} itens left</a></p>
         <button onClick={clearComplated}>Clear Completed</button>
    </div>
  )
}