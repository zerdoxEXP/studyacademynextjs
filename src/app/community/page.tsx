import Image from 'next/image'
import Hero from './Hero'
import Mission from './Mission'
import CTA from './CTA'
import FAQ from './FAQ'

export default function Community() {
  return (
    <main>
      <Hero />
      <Mission />
      <CTA />
      <FAQ />
    </main>
  )
}