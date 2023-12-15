import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'
import Zielgruppe from './Zielgruppe'
import Inhalte from './Inhalte'
import Stats from './Stats'
import Pricing from './Pricing'
import Features from './Features'
import CTA from './CTA'
import FAQ from './FAQ'

export const metadata: Metadata = {
  title: 'Lernsystem Pro - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

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
      <FAQ />
    </main>
  )
}