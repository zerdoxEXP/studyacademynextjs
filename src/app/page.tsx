import Image from 'next/image'
import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';
import Vorteile2 from './Vorteile2';
import Wasbietenwiran from './Wasbietenwiran';
import Probleme2 from './Probleme2';
import Probleme from './Probleme';
import Lernsystem from './Lernsystem';
import Mission from './Mission';
import Lernsysteme from './Lernsysteme';

export default function Home() {
  return (
    <main>
      <Hero />
      <Wasbietenwiran />
      <Features />
      <Lernsysteme />
      <Vorteile2 />
      <Probleme2 />
      <CTA />
    </main>
  )
}
