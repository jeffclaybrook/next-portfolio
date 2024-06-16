import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"
import Card from "@/components/Card"
import OutlinedButton from "@/components/OutlinedButton"
import { about } from "@/data"

const Page = () => {
 return (
  <>
   <Header>
    <div className="flex flex-col items-start justify-center h-full text-start text-neutral-content">
     <div className="px-4 lg:px-28">
      <h1 className="text-5xl">About</h1>
      <p className="text-2xl mb-5">A little bit about me</p>
     </div>
    </div>
   </Header>
   <Main>
    <Section>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {about.map((item, i) => (
       <Card
        key={i}
        icon={item.icon}
        title={item.title}
        subtitle={item.subtitle}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <OutlinedButton
       label="More About Me"
       href="https://linkedin.com/in/jeff-claybrook"
      />
     </div>
    </Section>
   </Main>
  </>
 )
}

export default Page