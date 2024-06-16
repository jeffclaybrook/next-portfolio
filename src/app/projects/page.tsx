import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"
import Project from "@/components/Project"
import OutlinedButton from "@/components/OutlinedButton"
import { projects } from "@/data"

const Page = () => {
 return (
  <>
   <Header>
    <div className="flex flex-col items-start justify-center h-full text-start text-neutral-content">
     <div className="px-4 lg:px-28">
      <h1 className="text-5xl">Projects</h1>
      <p className="text-2xl mb-5">A few side projects you can demo</p>
     </div>
    </div>
   </Header>
   <Main>
    <Section>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {projects.map((item, i) => (
       <Project
        key={i}
        image={item.image}
        title={item.title}
        href={item.href}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <OutlinedButton
       label="More Projects"
       href="https://github.com/jeffclaybrook"
      />
     </div>
    </Section>
   </Main>
  </>
 )
}

export default Page