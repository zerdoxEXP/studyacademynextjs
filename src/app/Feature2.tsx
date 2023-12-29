import Image from 'next/image';

const features = [
  {
    name: 'Learn-Life-Balance ist wichtig:',
    description:
      'Höre auf Termine mit Freunden abzusagen und dich zu isolieren, nur weil eine Prüfung ansteht. Du kannst in Lernphasen trotzdem Spaß haben!',
  },
]

export default function Features2() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Du hast mehr Freizeit.</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Mit minimalem Aufwand schaffst du es maximale Ergebnisse zu erzielen. Das ermöglicht es dir das zu machen worauf du Lust hast! Beginne wieder dein Leben zu genießen.
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
            src="/images/mehr-freizeit.jpg"
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

