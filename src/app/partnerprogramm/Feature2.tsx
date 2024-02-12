import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, QueueListIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

export default function Features2() {
  return (
    <div className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">2. Affiliate Link generieren</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              In deinem CopeCart Account findest du unter xxx die Produkte die du bewerben kannst.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Auch bei Ratenzahlungen erhältst du jedes Mal deine 25% Provision! D.h. 3x8,25€ =24,45€
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Dein Partnerlink wird folgendermaßen aussehen:
              </p>
            </div>
          </div>
          <Image
            src="/images/partner/copecart-startseite.png"
            alt="Lerninhalte Strukturieren"
            className="block rounded-md"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

