import type { Metadata } from 'next'
import CheckoutBasic from './CheckoutBasic';
import Steps from './Steps';

export const metadata: Metadata = {
  title: 'Checkout - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Home() {
  return (
    <main>
      <CheckoutBasic/>
      <Steps/>
    </main>
  )
}