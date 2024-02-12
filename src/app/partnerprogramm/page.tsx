import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'
import Features from './Features'
import Produkte from './Produkte'
import Werbemittel from './Werbemittel'
import Vorteile from './Vorteile'
import FuerWen from './FuerWen'
import CTA from './CTA'
import FAQ from './FAQ'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: 'Study Academy - Partnerprogramm',
  description: 'Nimm am Partnerprogramm von Study Academy teil und werde Affiliate',
}

export default function Lernsystem() {
  return (
    <main>
      <Hero />
      <Produkte />
      <Werbemittel />
      <Features />
      <CTA />
      <Vorteile />
      <FuerWen />
      <FAQ />
    </main>
  )
}