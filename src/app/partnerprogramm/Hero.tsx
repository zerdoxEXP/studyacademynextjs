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
        <div className="pt-24 sm:pt-32 pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl sm:pt-12 px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-left sm:text-center">
              <h1 className="mb-2 text-3xl font-caveat font-medium tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Study Academy Partnerprogramm
              </h1>
              <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Verdiene jetzt <span className="text-blue-600">25% Provision </span> durch jeden vermittelten Study Academy-Kunden.
              </p>
              <p className="mx-auto max-w-4xl mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Baue dir ein lukratives Nebeneinkommen auf, indem du unsere Lernsysteme Basic und Pro als Affiliate bewirbst. Du erhältst <b>professionelle Werbemittel</b> und kannst deiner Kreativität freien Lauf lassen.
              </p>
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

