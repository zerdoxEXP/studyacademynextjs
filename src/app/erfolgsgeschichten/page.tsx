import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero';

export const metadata: Metadata = {
  title: 'Erfolgsgeschichten - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Erfolgsgeschichten() {
  return (
    <main>
      <Hero />
    </main>
  )
}