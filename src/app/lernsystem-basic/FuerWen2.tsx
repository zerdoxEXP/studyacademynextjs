import { BuildingLibraryIcon, HomeIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Studium - jedes Studienfach',
    description:
      'Ideal für Studierende, die ihre Lernfähigkeiten verbessern und Prüfungen mit Zuversicht bestehen möchten.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Schule - höhere Klassenstufen',
    description:
      'Perfekt für Schüler, die nach effektiven Wegen suchen, Lerninhalte leichter und nachhaltiger zu verstehen und zu behalten.',
    icon: HomeIcon,
  },
  {
    name: 'Berufliche Weiterbildung',
    description:
      'Ein unverzichtbares Tool für jeden, der persönliche Bildungsziele erreichen möchte – unabhängig vom Bildungsstand.',
    icon: ComputerDesktopIcon,
  },
]

export default function FuerWen2() {
  return (
    <section>
    <div className="pt-24 sm:pt-32">
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
        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col ring-1 ring-gray-200 bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl shadow dark:ring-0">
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950 border shadow shadow-blue-100/50 dark:shadow-blue-950/50 border-blue-100 dark:border-blue-500/30">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
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
