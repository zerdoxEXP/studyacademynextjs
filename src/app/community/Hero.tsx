import { useState } from 'react'
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
    <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="font-caveat text-blue-600 text-4xl">Community Fragen</p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
            Stelle deine Frage an Lernexperten in unserer Community
            </h1>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              Nutze die Chance, Deine Lernfragen direkt an unsere Community und Experten zu stellen. Du erhältst persönliche Hilfe und kannst Deine Fortschritte mit unserer Community teilen!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <div className="text-center">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-6 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Stelle jetzt deine Frage
                </a>
                <p className="mt-6 text-sm font-light dark:text-white">Kostenloser Zugang • Hilfe von der Community</p>
              </div>
              </div>
            </div>
            <Image
              src="/images/collage-people.png"
              alt=""
              width={3000}
              height={2000}
              className="mt-10 w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
              priority
            />
          </div>
        </div>
    </section>
  )
}
