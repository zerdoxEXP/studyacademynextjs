import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'
import BasicNew from './BasicNew'

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
  title: 'Checkout - Lernsystem Basic - Study Academy',
  description: 'Bestellung erfolgreich durchgeführt',
}

export default function Lernsystem() {
  return (
    <main>
      <Hero />      
      <BasicNew />
    </main>
  )
}