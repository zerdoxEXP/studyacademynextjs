import { AcademicCapIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
  {
    name: 'Gemeinsam wachsen:',
    description:
      'Es macht Spaß anderen zu helfen und im Gegenzug selbst Hilfe zu bekommen. Wir möchten das Gemeinschaftsgefühl fördern unter Studenten.',
    icon: AcademicCapIcon,
  },
]

export default function Feature1() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Spaces für Studenten</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              In diesen Bereichen können sich Studenten von anderen Hilfe holen oder selbst dazu beitragen, die Probleme von anderen zu lösen.
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
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/pro/studenten.jpg"
              alt="Product screenshot"
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10 block dark:hidden"
              width={2432}
              height={1442}
            />
            <Image
              src="/images/pro/studenten-dark.jpg"
              alt="Product screenshot"
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10 hidden dark:block"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
