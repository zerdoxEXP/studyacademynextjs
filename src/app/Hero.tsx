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
      <div className="relative isolate pt-14">
        <div className="pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-6xl">
              Wir helfen dir <span className="text-blue-600">effektiver zu lernen</span> mit unserem Lernsystem.😎🤙
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              Beginne jetzt Deine Reise zum effektiven und selbstsicheren Lernen – mit unserem innovativen Lernsystem wirst du in kurzer Zeit große Fortschritte machen.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/lernsystem"
                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Jetzt starten
                </a>
                <a href="#lernsystem" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Image
              src="/images/circle-study-light.jpg"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-xl ring-1 ring-gray-400/10 sm:mt-24 block dark:hidden"
              priority
            />
              <Image
              src="/images/circle-study-dark.jpg"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24 hidden dark:block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
