import type { Metadata } from 'next'
import CheckoutProFree from './CheckoutProFree';
import Steps from './Steps';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: 'Checkout - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Home() {
  return (
    <main>
      <CheckoutProFree/>
      <Steps/>
    </main>
  )
}
