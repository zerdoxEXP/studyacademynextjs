import Image from 'next/image'
import Hero from './Hero'
import Features from './Features'
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
      <Features />
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