import { FC } from "react"
import Link from "next/link"

const NavbarItem: FC<{
 label: string
 href: string
 active: boolean
}> = ({
 label,
 href,
 active
}) => {
 return (
  <>
   {active ? (
    <Link
     href={href}
     className="text-primary focus:text-primary text-lg"
    >
     {label}
    </Link>
   ) : (
    <Link
     href={href}
     className="text-lg text-slate-50 hover:text-indigo-400"
    >
     {label}
    </Link>
   )}
  </>
 )
}

export default NavbarItem