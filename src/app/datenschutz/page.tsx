import type { Metadata } from 'next'
import Datenschutz from './Datenschutz';

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
  title: 'Datenschutz - Study Academy',
  description: 'Die Datenschutzerklärung von Study Academy',
}

export default function Home() {
  return (
    <main>
      <Datenschutz/>
    </main>
  )
}