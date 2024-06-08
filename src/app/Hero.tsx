import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {

  return (
    <section id="Hero">
      <div className="relative isolate">
        <div className="pt-32">
          <div className="mx-auto max-w-7xl sm:pt-12 px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-left sm:text-center">
              <p className="font-caveat text-2xl sm:text-4xl dark:text-white mb-2">Transformiere deinen Lernprozess</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Wir helfen dir <span className="text-blue-600">effektiver zu lernen</span> mit unserem Lernsystem.😎🤙
              </h1>
              <p className="mt-6 mx-auto max-w-4xl text-cente text-xl leading-8 text-gray-600 dark:text-gray-400">
              Bist du unzufrieden mit deinen Noten? Sehr oft gestresst wegen anstehenden Prüfungen? Dann könnte das Lernsystem Pro+ genau richtig für dich sein.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/lernsystem"
                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Jetzt starten
                </a>
                <a href="#Vorteile" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            </div>
            <Image
              src="/images/study-academy-studenten.jpg"
              alt="Unterschiedliche Studenten und Studentinnen lernen konzentriert mit den Study Academy Lernsystemen"
              width={5000}
              height={1442}
              className="mt-16 bg-white/5 sm:mt-24 items-center block"
              priority
            />
          </div>
        </div>
    </section>
  )
}
