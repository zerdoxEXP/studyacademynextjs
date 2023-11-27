import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Studium - jedes Studienfach',
    description:
      'Ideal für Studierende, die ihre Lernfähigkeiten verbessern und Prüfungen mit Zuversicht bestehen möchten.',
    icon: InboxIcon,
  },
  {
    name: 'Schule - höhere Klassenstufen',
    description:
      'Perfekt für Schüler, die nach effektiven Wegen suchen, Lerninhalte leichter und nachhaltiger zu verstehen und zu behalten.',
    icon: UsersIcon,
  },
  {
    name: 'Berufliche Weiterbildung',
    description:
      'Ein unverzichtbares Tool für jeden, der persönliche Bildungsziele erreichen möchte – unabhängig vom Bildungsstand.',
    icon: TrashIcon,
  },
]

export default function FuerWen2() {
  return (
    <section>
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Wo kannst du die Methoden einsetzen?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col ring-1 ring-gray-200/50 bg-gray-50 rounded-3xl shadow-md p-8 dark:bg-gray-400/5 dark:ring-white/10 dark:ring-opacity-40">
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
  )
}
