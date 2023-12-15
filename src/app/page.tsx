import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero';
import Wasbietenwiran from './Wasbietenwiran';
import Features from './Features';
import Lernsysteme from './Lernsysteme';
import Vorteile from './Vorteile';
import Probleme from './Probleme';
import CTA from './CTA';
import Anwendungsbereiche from './Anwendungsbereiche';

export const metadata: Metadata = {
  title: 'Schneller, effektiver & leichter Lernen mit Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Wasbietenwiran />
      <Features />
      <Lernsysteme />
      <Vorteile />
      <Probleme />
      <CTA />
      <Anwendungsbereiche />
    </main>
  )
}
