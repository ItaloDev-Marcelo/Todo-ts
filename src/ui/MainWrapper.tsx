import type { PropsWithChildren } from "react"
type MainWrapperProps = PropsWithChildren;

const MainWrapper = ({children}:MainWrapperProps) => {
  return<main className='rounded=[5px]'>{children}</main>
}

export default MainWrapper