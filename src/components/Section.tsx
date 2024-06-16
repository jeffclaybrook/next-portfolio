import { ReactNode } from "react"
import Link from "next/link"

type SectionProps = {
 title?: string
 subtitle?: string
 children: ReactNode
}

const Section = ({ title, subtitle, children }: SectionProps) => {
 return (
  <section className="block py-24 max-w-[1200px] mx-auto">
   {title && <h2 className="text-4xl text-primary text-center tracking-wide">{title}</h2>}
   {subtitle && <h3 className="text-lg text-secondary text-center tracking-wide mb-12">{subtitle}</h3>}
   {children}
  </section>
 )
}

export default Section