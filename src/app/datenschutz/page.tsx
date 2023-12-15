import type { Metadata } from 'next'
import Image from 'next/image'
import Impressum from './Impressum';

export const metadata: Metadata = {
  title: 'Impressum - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Home() {
  return (
    <main>
      <Impressum/>
    </main>
  )
}