import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {

  return (
    <section id="Übersicht">
        <div className="pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl sm:pt-12 px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-left sm:text-center">
            <p className="text-2xl sm:text-4xl font-caveat tracking-tight text-teal-600 dark:text-teal-500 mb-1">Dein Weg zu den Top 5%!</p>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Mit unserem Lernsystem <span className="text-4xl font-caveat font-medium leading-none tracking-tight text-teal-600 dark:text-teal-500 sm:text-7xl">Pro </span> entfaltest du dein volles Potenzial und bist bereit für Bestleistungen!
              </h1>
              <p className="mx-auto max-w-4xl mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Basierend auf dem soliden Fundament des <a href="/lernsystem-basic" className="font-bold dark:text-white">Lernsystem Basic</a>, hebt das Lernsystem Pro dein Lernen auf das nächste Level – werde jetzt Teil der akademischen Elite.
              </p>
              <div className="mt-10 flex items-center justify-start sm:justify-center gap-x-6">
              <a
              href="#Preis"
              className="rounded-md bg-teal-600 dark:bg-teal-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Jetzt sichern
            </a>
                <a href="#Zielgruppe" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                <Image
                  src="/images/lernsystem-pro-screenshot-light.jpg"
                  alt="Lernsystem Pro"
                  width={2432}
                  height={1442}
                  className="rounded-md block dark:hidden"
                  priority
                />
                <Image
                  src="/images/lernsystem-pro-screenshot-dark.jpg"
                  alt="Lernsystem Pro"
                  width={2432}
                  height={1442}
                  className="rounded-md hidden dark:block"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
    </section>
  )
}

