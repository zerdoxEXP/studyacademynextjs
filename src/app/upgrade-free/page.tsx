import type { Metadata } from 'next'
import Image from 'next/image'
import Select from './Select'

export const metadata: Metadata = {
  title: 'Lernsystem Pro - Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function Lernsystem() {
  return (
    <main>
      <Select />
    </main>
  )
}