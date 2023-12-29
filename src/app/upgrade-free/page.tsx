import type { Metadata } from 'next'
import Image from 'next/image'
import Select from './Select'

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
  title: 'Lernsystem Basic Upgrade- Study Academy',
  description: 'Sichere dir jetzt das Upgrade von Free zum Lernsystem Basic',
}

export default function Lernsystem() {
  return (
    <main>
      <Select />
    </main>
  )
}