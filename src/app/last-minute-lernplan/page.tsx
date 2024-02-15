import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from './Hero'


export const metadata: Metadata = {
  title: 'Last Minute Lernplan - In 5 Tagen',
  description: 'Wie du es schaffst das bestmögliche Ergebnis zu erreichen, wenn du nur wenig Zeit hast zum Lernen vor einer Prüfung.',
}

export default function LastMinuteLernplan() {
  return (
    <main>
      <Hero />
    </main>
  )
}