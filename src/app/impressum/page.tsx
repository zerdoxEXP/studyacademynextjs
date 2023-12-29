import type { Metadata } from 'next'
import Image from 'next/image'
import Impressum from './Impressum';

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
  title: 'Impressum - Study Academy',
  description: 'Angaben gemäß § 5 TMG zur Study Academy',
}

export default function Home() {
  return (
    <main>
      <Impressum/>
    </main>
  )
}