import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Brands from '@/components/Brands'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <Brands />
      <About />
      <Contact />
    </main>
  )
}
