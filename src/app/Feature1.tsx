import Image from 'next/image';

const features = [
  {
    name: 'Erfolge sind unausweichlich:',
    description:
      'Wenn du systematisch lernst und aufhörst planlos zu lernen, ist es leicht gute Ergebnisse zu erreichen und dich auf Prüfungsergebnisse zu freuen.',
  },
]

export default function Feature1() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Deine Ergebnisse sind besser.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Durch die richtigen Lernmethoden, eine gute Struktur und einen perfekten Lernplan wird keine Prüfung zu schwer für dich! Wenn du weißt wie gutes Lernen funktioniert, folgen die sehr guten Ergebnisse von alleine.
              </p>
              <dl className="mt-6 max-w-xl space-y-8 rounded-xl p-4 shadow ring-1 ring-gray-200 bg-gray-50 dark:bg-slate-800 dark:ring-0 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
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
