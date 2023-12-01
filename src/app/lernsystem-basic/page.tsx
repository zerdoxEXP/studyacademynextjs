import Image from 'next/image'
import Hero from './Hero'
import Features from './Features'
import Vorteile2 from './Vorteile2'
import FuerWen2 from './FuerWen2'
import Vorteile from './Vorteile'
import Stats from './Stats'
import CTA from './CTA'
import Preise from './Preise'
import Pricing from './Pricing'
import FAQ2 from './FAQ2'

export default function Lernsystem() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <Vorteile2 />
      <FuerWen2 />
      <Pricing />
      <FAQ2 />
    </main>
  )
}