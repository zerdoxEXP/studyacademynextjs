import Image from 'next/image'
import Hero from './Hero';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
    </main>
  )
}