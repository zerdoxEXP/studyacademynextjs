import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, BoltSlashIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
  {
    name: 'Informationsaufnahme steigern:',
    description:
      'Finde die Faktoren und Einflüsse die dich davon abhalten fokussiert zu Lernen. Manchmal sind es nur Kleinigkeiten die du ändern musst...',
    icon: BoltSlashIcon,
  },
]

export default function Features4() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Wie du Lernprobleme löst</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Du kannst den besten Lernplan und den höchsten IQ haben, wenn du dich ständig selbst sabotierst, wirst du scheitern. Wir geben dir nützliche Tipps um motiviert und strukturiert zu lernen.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-teal-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/lernblockaden-entfernen.png"
            alt="Lernblockaden vermeiden"
            className="block dark:hidden"
            width={2432}
            height={1442}
          />
          <Image
            src="/images/lernblockaden-entfernen-dark.png"
            alt="Lernblockaden vermeiden"
            className="hidden dark:block"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

