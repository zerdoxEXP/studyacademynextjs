import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'
import Auswahl from './Auswahl'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: 'Lernsystem Pro Upgrade- Study Academy',
  description: 'Sichere dir jetzt das Lernsystem Pro',
}

export default function Lernsystem() {
  return (
    <main>
      <Hero />
      <Auswahl />     
    </main>
  )
}