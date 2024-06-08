import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'
import Zielgruppe from './Zielgruppe'
import Features from './Features'
import Inhalte from './Inhalte'
import Stats from './Stats'
import Testimonials from './Testimonials'
import Vorteile from './Vorteile'
import FuerWen from './FuerWen'
import CTA from './CTA'
import Pricing from './Pricing'
import Community from './Community'
import FAQ from './FAQ'
import ScrollPopup from '../components/ScrollPopup'

export const metadata: Metadata = {
  title: 'Lernsystem Pro+ - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Lernsystem() {
  return (
    <main>
      <ScrollPopup />
      <Hero />
      <Zielgruppe />
      <Features />
      <Inhalte />
      <Stats />
      <CTA />
      <Vorteile />
      <Testimonials />
      <Pricing />
      <Community />
      <FAQ />
    </main>
  )
}