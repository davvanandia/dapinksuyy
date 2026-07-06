import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Hobbies from '@/components/sections/Hobbies'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Hobbies />
      <Achievements />
      <Contact />
    </>
  )
}