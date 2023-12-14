import Image from 'next/image'
import Hero from './Hero'
import Features from './Features'
import Vorteile from './Vorteile'
import FuerWen from './FuerWen'
import CTA from './CTA'
import Pricing from './Pricing'
import FAQ from './FAQ'

export default function Lernsystem() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <Vorteile />
      <FuerWen />
      <Pricing />
      <FAQ />
    </main>
  )
}