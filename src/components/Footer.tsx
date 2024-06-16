import Link from "next/link"
import { socials } from "@/data"

const Footer = () => {
 return (
  <footer className="footer footer-center p-10 bg-lightBlue text-base-content rounded">
   <Link href={"/"} className="flex text-lg uppercase">
    Jeffrey <strong className="text-indigo-500">Claybrook</strong>
   </Link>
   <div className="grid grid-flow-col gap-4">
    {socials.map((item, i) => (
     <a
      href={item.href}
      key={i}
      aria-label={item.label}
      className="btn btn-circle btn-ghost"
     >
      {item.icon}
     </a>
    ))}
   </div>
   <div>
    <p className="text-sm">© 2024 Jeffrey Claybrook</p>
   </div>
  </footer>
 )
}

export default Footer