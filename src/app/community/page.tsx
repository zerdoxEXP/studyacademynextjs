import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'
import Helfen from './Helfen'
import CTA from './CTA'
import FAQ from './FAQ'

export const metadata: Metadata = {
  title: 'Community - Stelle deine Frage',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Community() {
  return (
    <main>
      <Hero />
      <Helfen />
      <CTA />
      <FAQ />
    </main>
  )
}