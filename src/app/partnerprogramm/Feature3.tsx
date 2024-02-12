import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, InboxArrowDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

export default function Feature3() {
  return (
    <div className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">3. Bewerben der Produkte</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Du hast die Freiheit auf allen möglichen Kanälen unsere Produkte zu bewerben.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Dein Partnerlink wird folgendermaßen aussehen:
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/partner/copecart-startseite.png"
              alt="Behalten von Informationen"
              className="block rounded-md"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
