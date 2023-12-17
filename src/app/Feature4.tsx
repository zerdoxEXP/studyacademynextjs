import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ScaleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const features = [
  {
    name: 'Starte die Erfolgsspirale:',
    description:
      'Wenn du glücklicher werden willst, dann machst du das durch persönliche Erfolgserlebnisse und mit jedem Mal wächst deine Selbstsicherheit.',
  },
]

export default function Features4() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Du wirst selbstsicherer.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Mit jedem Erfolgserlebnis steigerst du dein psychisches Wohlbefinden; dein Selbstwertgefühl wächst und die Ängste vor Prüfungen nehmen immer weiter ab.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 rounded-xl p-4 shadow ring-1 ring-gray-200 bg-gray-50 dark:bg-slate-800 dark:ring-0 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/selbstsichere_studentin.jpg"
            alt="Student sitzt vor seinem Laptop und entspannt sich"
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

