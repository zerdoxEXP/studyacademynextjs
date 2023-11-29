import Image from 'next/image'
import Hero from './Hero'
import Helfen from './Helfen'
import CTA from './CTA'
import FAQ from './FAQ'

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