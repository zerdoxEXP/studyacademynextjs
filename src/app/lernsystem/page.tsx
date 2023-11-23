import Image from 'next/image'
import Hero from './Hero'
import Stats from './Stats'
import FuerWen from './FuerWen'
import Vorteile from './Vorteile'
import CTA from './CTA'
import Anwendungsbereiche from './Anwendungsbereiche'
import Testimonials from './Testimonials'
import FAQ from './FAQ'

export default function Lernsystem() {
  return (
    <main>
      <Hero />
      <Stats />
      <FuerWen />
      <Vorteile />
      <CTA />
      <Anwendungsbereiche />
      <Testimonials />
      <CTA />
      <FAQ />
    </main>
  )
}