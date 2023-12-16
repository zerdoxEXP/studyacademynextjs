import type { Metadata } from 'next'
import Datenschutz from './Datenschutz';

export const metadata: Metadata = {
  title: 'Datenschutz - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Home() {
  return (
    <main>
      <Datenschutz/>
    </main>
  )
}