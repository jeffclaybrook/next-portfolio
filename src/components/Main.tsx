import { ReactNode } from "react"

type MainProps = {
 children: ReactNode
}

const Main = ({ children }: MainProps) => {
 return (
  <main className="p-3.5">{children}</main>
 )
}

export default Main