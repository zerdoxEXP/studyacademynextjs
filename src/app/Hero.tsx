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
      <div className="relative isolate">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl pt-20 px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <p className="font-caveat text-2xl sm:text-4xl dark:text-white mb-3">Schneller, effektiver und leichter Lernen.</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Wir helfen dir <span className="text-blue-600">effektiver zu lernen</span> mit unseren Lernsystemen.😎🤙
              </h1>
              <p className="mt-6 mx-auto max-w-4xl text-cente text-xl leading-8 text-gray-600 dark:text-gray-400">
              Beginne jetzt Dein Leben zu verändern und werde zu einem selbstsicheren Lerner – mit unseren innovativen Lernsystemen wirst du in kurzer Zeit große Fortschritte machen.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/lernsystem-basic"
                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Jetzt starten
                </a>
                <a href="#lernsystem" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
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
