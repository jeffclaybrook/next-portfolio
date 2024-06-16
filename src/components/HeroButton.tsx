type HeroButtonProps = {
 href: string
 className: string
 label: string
 icon: JSX.Element
}

const HeroButton = ({ href, className, label, icon }: HeroButtonProps) => {
 return (
  <a
   href={href}
   className={className}
   target="_blank"
   rel="noreferrer"
  >
   {icon}
   {label}
  </a>
 )
}

export default HeroButton