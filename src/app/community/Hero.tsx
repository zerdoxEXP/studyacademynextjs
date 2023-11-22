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
          <p className="font-caveat text-blue-600 text-4xl">Community Fragen</p>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
            Stelle deine Frage an Lernexperten in unserer Community
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Nutze die Chance, Deine Lernfragen direkt an unsere Community und Experten zu stellen. Du erhältst persönliche Hilfe und kannst Deine Fortschritte mit unserer Community teilen!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Frage kostenlos stellen
                </a>
                <a href="#mission" className="text-sm font-semibold leading-6 text-gray-900">
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Image
              src="/images/photo-team.jpg"
              alt=""
              width={512}
              height={427}
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
            />
          </div>
        </div>
    </section>
  )
}
