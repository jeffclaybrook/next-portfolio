interface CardProps {
 title: string
 subtitle?: string
 icon: JSX.Element
}

const Card = ({ title, subtitle, icon }: CardProps) => {
 return (
  <div className="flex flex-col items-center justify-center gap-3.5 bg-light-blue shadow-sm rounded-md py-6 px-3.5">
   <span className="flex items-center justify-center bg-blue h-14 w-14 rounded-md p-3.5 text-primary">
    {icon}
   </span>
   <h4 className="text-xl tracking-wide text-black">{title}</h4>
   {subtitle && <p className="text-center text-black">{subtitle}</p>}
  </div>
 )
}

export default Card