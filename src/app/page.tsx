import Image from 'next/image'
import Hero from './Hero';
import Wasbietenwiran from './Wasbietenwiran';
import Features from './Features';
import Lernsysteme from './Lernsysteme';
import Vorteile from './Vorteile';
import Probleme from './Probleme';
import CTA from './CTA';
import Anwendungsbereiche from './Anwendungsbereiche';

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
