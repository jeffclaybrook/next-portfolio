import { ReactNode } from "react"

type HeaderProps = {
 children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
 return (
  <header className="hero min-h-screen" style={{ backgroundImage: "url(/images/hero.webp)" }}>
   <div className="hero-overlay bg-opacity-60">
    {children}
   </div>
  </header>
 )
}

export default Header