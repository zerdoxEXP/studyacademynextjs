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
        <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl sm:pt-8 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h1 className="font-caveat text-blue-600 text-4xl mb-2">Community Fragen</h1>
            <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
            Wir beantworten eure Lernfragen in Live-Sessions
            </p>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Wir möchten euch die Möglichkeit geben kostenlos von unserem Wissen zu profitieren und gleichzeitig andere auch daran teilhaben zu lassen. Deswegen nutze deine Chance!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <div className="text-center">
                <a
                  href="https://studyacademy.circle.so/join?invitation_token=fb8265bae1f5ecee13257a21d805339609b3fee0-57ae8387-d25d-424c-af88-6c28d873a4c9" target="_blank"
                  className="rounded-md bg-blue-600 px-7 py-4 text-2xl font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Stelle jetzt deine Frage
                </a>
                <p className="mt-6 text-sm font-light dark:text-white">Kostenloser Zugang • Hilfe von der Community</p>
              </div>
              </div>
            </div>
            <Image
              src="/images/study-academy-community.png"
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
