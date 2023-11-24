import Image from 'next/image'
import Hero from './Hero'
import Stats from './Stats'
import FuerWen from './FuerWen'
import Vorteile from './Vorteile'
import CTA from './CTA'
import Anwendungsbereiche from './Anwendungsbereiche'
import Preise from './Preise'
import Reviews from './Reviews'
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
      <Preise />
      <Reviews />
      <FAQ />
    </main>
  )
}