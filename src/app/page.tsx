import Image from 'next/image'
import Hero from './Hero';
import Lernsystem from './Lernsystem';
import CTA from './CTA';
import Mission from './Mission';
import Blog from './Blog';

export default function Home() {
  return (
    <main>
      <Hero />
      <Lernsystem />
      <CTA />
      <Mission />
      <Blog />
    </main>
  )
}
