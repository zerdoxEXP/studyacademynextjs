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
            <div className="mx-auto max-w-6xl text-left sm:text-center">
              <p className="text-2xl mb-2 font-caveat leading-8 tracking-tight text-blue-600 sm:text-4xl">Prüfungen bestehen ist einfach, wirklich.</p>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Du willst Prüfungen sicher bestehen? Im Lernsystem <span className="text-4xl font-caveat font-medium leading-8 tracking-tight text-blue-600 sm:text-7xl">Basic </span> lernst du alles was du dazu brauchst.
              </h1>
              <p className="mx-auto max-w-4xl mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Mit bewährten Methoden und modernster Technologie zum Lernerfolg: Unser Basis-Programm ist dein Schlüssel zum Lernen von neuen Inhalten in kürzester Zeit - effektiv, schnell & leicht.
              </p>
              <div className="mt-10 flex items-center justify-start sm:justify-center gap-x-6">
              <a
              href="#Preis"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Jetzt sichern
            </a>
                <a href="#Inhalte" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                <Image
                  src="/images/basic/lernsystem-basic-screenshot-light.jpg"
                  alt="Lernsystem Basic Screenshot Screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10 block dark:hidden"
                  priority
                />
                <Image
                  src="/images/basic/lernsystem-basic-screenshot-dark.jpg"
                  alt="Lernsystem Basic Screenshot Screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10 hidden dark:block"
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

