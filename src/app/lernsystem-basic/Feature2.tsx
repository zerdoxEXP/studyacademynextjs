import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, QueueListIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
  {
    name: 'Überblick verschaffen:',
    description:
      'Anstatt einen rießen Knäuel von Informationen vor dir zu haben, teilst du die Inhalte in kleinere Teile ein. Du wirst dadurch viel unnötiges Chaos vermeiden.',
    icon: QueueListIcon,
  },
]

export default function Features2() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Inhalte strukturieren</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Um effektiv lernen zu können, muss du deine Inhalte strukturieren bevor du anfängst. Dann wirst du in der Lage sein dir jedes noch so schwere Thema selbst beizubringen.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/lerninhalte-strukturieren.png"
            alt="Lerninhalte Strukturieren"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

