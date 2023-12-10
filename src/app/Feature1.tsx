import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const features = [
  {
    name: 'Erfolge sind unausweichlich',
    description:
      '- Wenn du systematisch lernst und aufhörst planlos zu lernen, ist es leicht gute Ergebnisse zu erreichen und dich auf Prüfungsergebnisse zu freuen.',
    icon: TrophyIcon,
  },
]

export default function Feature1() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Deine Ergebnisse sind besser.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Durch die richtigen Lernmethoden, eine gute Struktur und einen perfekten Lernplan wird keine Prüfung zu schwer für dich! Wenn du weißt wie gutes Lernen funktioniert, folgen die sehr guten Ergebnisse von alleine.
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
              src="/images/bessere_ergebnisse.jpg"
              alt="Studentin freut sich über Prüfungsergebnisse"
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
