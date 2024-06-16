import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"
import Card from "@/components/Card"
import { skills } from "@/data"

const Page = () => {
 return (
  <>
   <Header>
    <div className="flex flex-col items-start justify-center h-full text-start text-neutral-content">
     <div className="px-4 lg:px-28">
      <h1 className="text-5xl">Skills</h1>
      <p className="text-2xl mb-5">I&apos;m a Jeff of all trades</p>
     </div>
    </div>
   </Header>
   <Main>
    <Section>
     <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3.5">
      {skills.map((item, i) => (
       <Card
        key={i}
        icon={item.icon}
        title={item.title}
       />
      ))}
     </div>
    </Section>
   </Main>
  </>
 )
}

export default Page