import Image from 'next/image'
import Hero from './Hero';
import Probleme from './Probleme';
import Lernsystem from './Lernsystem';
import CTA from './CTA';
import Mission from './Mission';

export default function Home() {
  return (
    <main>
      <Hero />
      <Probleme />
      <CTA />
      <Lernsystem />
      <CTA />
      <Mission />
    </main>
  )
}
