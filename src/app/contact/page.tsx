import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"
import Form from "@/components/Form"

const Page = () => {
 return (
  <>
   <Header>
    <div className="flex flex-col items-start justify-center h-full text-start text-neutral-content">
     <div className="px-4 lg:px-28">
      <h1 className="text-5xl">Contact</h1>
      <p className="text-2xl mb-5">Let&apos; get in touch!</p>
     </div>
    </div>
   </Header>
   <Main>
    <Section>
     <Form />
    </Section>
   </Main>
  </>
 )
}

export default Page