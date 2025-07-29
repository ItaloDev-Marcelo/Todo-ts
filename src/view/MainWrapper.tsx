import type { PropsWithChildren } from "react"

type MainWrapperProps = PropsWithChildren;

const MainWrapper = ({children}:MainWrapperProps) => {
  return<main>{children}</main>
}

export default MainWrapper