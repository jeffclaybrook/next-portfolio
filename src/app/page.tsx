import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"
import HeroButton from "@/components/HeroButton"
import Carousel from "@/components/Carousel"
import Typewriter from "@/components/Typewriter"
import OutlinedButton from "@/components/OutlinedButton"
import Card from "@/components/Card"
import Project from "@/components/Project"
import Form from "@/components/Form"
import Testimonial from "@/components/Testimonial"
import Resume from "@/icons/Resume"
import Github from "@/icons/Github"
import { about, projects, skills, testimonials } from "@/data"

const Home = () => {
  return (
    <>
      <Header>
        <div className="flex flex-col items-start justify-center h-full text-start text-neutral-content">
          <div className="px-4 lg:px-28">
            <h1 className="text-5xl mb-2">
              Hi, my name is{" "}
              <strong className="text-primary">Jeff</strong>
            </h1>
            <p className="text-2xl mb-5">
              and I&apos;m a{" "}
              <Typewriter />
            </p>
            <div className="flex gap-4">
              <HeroButton
                href="https://jeffclaybrook.s3.amazonaws.com/resume.min.pdf"
                className="btn btn-primary"
                label="My Resume"
                icon={<Resume />}
              />
              <HeroButton
                href="https://github.com/jeffclaybrook"
                className="btn"
                label="My GitHub"
                icon={<Github />}
              />
            </div>
          </div>
        </div>
      </Header>
      <Main>

        <Section title="About" subtitle="A few things I&apos;ve been known to dabble in">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
            {about.map((item, i) => (
              <Card
                key={i}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <OutlinedButton
              label="More About Me"
              href="/about"
            />
          </div>
        </Section>

        <Testimonial
          quote={testimonials[0].quote}
          name={testimonials[0].name}
          title={testimonials[0].title}
          image={testimonials[0].image}
        />

        <Section title="Skills" subtitle="I&apos;m a Jeff of all trades">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3.5">
            {skills.map((item, i) => (
              <Card
                key={i}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <OutlinedButton
              label="More Skills"
              href="/skills"
            />
          </div>
        </Section>

        <Testimonial
          quote={testimonials[1].quote}
          name={testimonials[1].name}
          title={testimonials[1].title}
          image={testimonials[1].image}
        />

        <Section title="Projects" subtitle="A few sample projects you can demo">
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
              href="/projects"
            />
          </div>
        </Section>

        <Testimonial
          quote={testimonials[2].quote}
          name={testimonials[2].name}
          title={testimonials[2].title}
          image={testimonials[2].image}
        />

        <Section title="Artboards" subtitle="Getting the most out of every pixel">
          <Carousel />
          <div className="flex justify-center mt-16">
            <OutlinedButton
              label="More Artboards"
              href="/artboards"
            />
          </div>
        </Section>

        <Testimonial
          quote={testimonials[3].quote}
          name={testimonials[3].name}
          title={testimonials[3].title}
          image={testimonials[3].image}
        />
        
        <Section title="Contact" subtitle="Let&apos;s get in touch!">
          <Form />
        </Section>
      </Main>
    </>
  )
}

export default Home