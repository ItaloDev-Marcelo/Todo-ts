import { type DashboardTinyFormate } from "../types/dashboardTinyFormate"
import { DashboadTheme } from "../themes/dark.light"
import type { FC } from "react";
export const MobileDashboard:FC<DashboardTinyFormate> = ({num, clearComplated, darkMode}) => {
  const {dark, light} = DashboadTheme;
  const result = darkMode ? dark : light;

  return (
    <div className={`hidden nt:flex flex-col hover:border-Light-Grayish-Blue-hover md:flex-row justify-between items-center h-[50px] my-1.5 px-5 md:px-5 ${result}`}>
         <p><a href='#Itens-left'>{num} itens left</a></p>
         <button onClick={clearComplated}>Clear Completed</button>
    </div>
  )
}