import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"
import Carousel from "@/components/Carousel"
import OutlinedButton from "@/components/OutlinedButton"

const Page = () => {
 return (
  <>
   <Header>
    <div className="flex flex-col items-start justify-center h-full text-start text-neutral-content">
     <div className="px-4 lg:px-28">
      <h1 className="text-5xl">Artboards</h1>
      <p className="text-2xl mb-5">Getting the most out of every pixel</p>
     </div>
    </div>
   </Header>
   <Main>
    <Section>
     <Carousel />
     <div className="flex justify-center mt-16">
      <OutlinedButton
       label="More Artboards"
       href="https://photos.app.goo.gl/cRSBMus7XutXjv8y5"
      />
     </div>
    </Section>
   </Main>
  </>
 )
}

export default Page