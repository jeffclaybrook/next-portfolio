import Link from "next/link"
import { ChevronRight } from "lucide-react"

type OutlinedButtonProps = {
 label: string
 href: string
}

const OutlinedButton = ({ label, href }: OutlinedButtonProps) => {
 return (
  <Link href={href} className="btn btn-outline btn-primary mx-auto font-normal">
   {label}
   <ChevronRight />
  </Link>
 )
}

export default OutlinedButton