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
    <section id="CommunityFragen">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl sm:pt-8 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h1 className="font-caveat text-red-600 font-medium text-4xl mb-2">Last Minute <span className="max-w-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl lg:col-span-2 xl:col-auto"> Lernplan - 100% kostenlos</span></h1>
            <p className="max-w-2xl text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
            In 5 Tagen unter Zeitdruck lernen.
            </p>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Wie du es schaffst das bestmögliche Ergebnis zu erreichen, wenn du nur wenig Zeit zum Lernen vor einer Prüfung hast.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Sichere dir jetzt den Lernplan, indem du dich kostenlos bei der Study Academy registrierst unter folgendem Link:
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <div className="text-center">
                <a
                  href="https://studyacademy.circle.so/join?invitation_token=fb8265bae1f5ecee13257a21d805339609b3fee0-57ae8387-d25d-424c-af88-6c28d873a4c9" target="_blank"
                  className="rounded-md bg-red-600 px-7 py-4 text-2xl font-semibold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  Jetzt Zugang sichern
                </a>
                <p className="mt-6 text-sm font-light dark:text-white">Starte sofort mit den 8 kostenlosen Schritten!</p>
              </div>
              </div>
            </div>
            <Image
              src="/images/last-minute-lernplan.jpg"
              alt=""
              width={3000}
              height={2000}
              className="mt-20 w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-12 lg:max-w-none xl:row-span-2 xl:row-end-2"
              priority
            />
          </div>
        </div>
    </section>
  )
}
