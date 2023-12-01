import Image from 'next/image'
import Hero from './Hero'
import Zielgruppe from './Zielgruppe'
import Inhalte from './Inhalte'
import Features from './Features'
import Stats from './Stats'
import FuerWen from './FuerWen'
import Vorteile from './Vorteile'
import CTA from './CTA'
import Preise from './Preise'
import Reviews from './Reviews'
import FAQ2 from './FAQ2'
import Pricing from './Pricing'

export default function Lernsystem() {
  return (
    <main>
      <Hero />
      <Zielgruppe />
      <Inhalte />
      <Stats />
      <Pricing />
      <Features />
      <CTA />
      <FAQ2 />
    </main>
  )
}