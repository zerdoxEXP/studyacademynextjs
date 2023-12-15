import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
  {
    name: 'Dein individueller Lernstil:',
    description:
      'Alle Lernmethoden sind darauf ausgelegt schnell Resultate zu erzielen. Am besten kombinierst du die für dich passenden Techniken einfach.',
    icon: RocketLaunchIcon,
  },
]

export default function Feature1() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Effektive Lernmethoden</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Du bekommst mehr als nur einen stumpfen Ablaufplan. Wir zeigen dir wissenschaftlich erforschte Lernmethoden die in der praktischen Anwendung funktionieren.
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
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/rocket-book-light.png"
              alt="Effektive Lernmethoden"
              className="block dark:hidden"
              width={2432}
              height={1442}
            />
            <Image
              src="/images/rocket-book-dark.png"
              alt="Effektive Lernmethoden"
              className="hidden dark:block"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
