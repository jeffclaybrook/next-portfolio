import NewTab from "@/icons/NewTab"

type ProjectProps = {
 image: string
 title: string
 href: string
}

const Project = ({ image, title, href }: ProjectProps) => {
 return (
  <a
   href={href}
   className="hero rounded-md overflow-hidden"
   style={{ backgroundImage: `url(${image})`}}
   target="_blank"
   rel="noreferrer"
  >
   <div className="hero-overlay flex flex-col justify-center items-center py-20 bg-opacity-70 text-slate-50 hover:bg-opacity-75">
    <h3 className="text-2xl tracking-wide mb-3.5">{title}</h3>
    <NewTab />
   </div>
  </a>  
 )
}

export default Project