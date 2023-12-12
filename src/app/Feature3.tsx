import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const features = [
  {
    name: 'Positive Motivation:',
    description:
      'Wir möchten dir zeigen, wie du unnötigen Stress vermeidest und stattdessen deine Energie nutzt um fokussiert zu lernen.',
  },
]

export default function Feature3() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Du bist weniger gestresst.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Lernstress und Nervosität vor Prüfungen sind kein Muss! Sobald du die richtige Strategie an der Hand hast, wird die nächste Prüfungsphase ein Kinderspiel für dich!
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
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/weniger_gestresst.jpg"
              alt="Studentin sitzt selbstsicher an ihrem Schreibtisch"
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
