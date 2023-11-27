import { ChevronRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Schnelle Lernerfolge',
    description:
      'Erziele in kürzester Zeit bemerkenswerte Fortschritte.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Wissenschaftlich fundierte Methoden',
    description:
      'Wir nutzen neueste Erkenntnisse aus der Lernforschung & Neurowissenschaft.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Strukturiertes Lernen',
    description:
      'Klare Struktur und effiziente Lernvorlagen die du individuell auf deine Inhalte anpassen kannst.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Flexibilität',
    description:
      'Lerne jederzeit und überall mit digitalen Tools die du vorher eingerichtet hast.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Mehr Selbstvertrauen',
    description:
      'Du wirst selbstsicherer in Prüfungen gehen und Lernblockaden vermeiden beim Lernen neuer Inhalte.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Spaß beim Lernen',
    description:
      'Unsere Methoden machen das Lernen zu einem angenehmen und bereichernden Erlebnis mithilfe von Gamification-Elementen.',
    icon: ChevronRightIcon,
  },
]

export default function Vorteile() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-caveat text-3xl leading-7 text-blue-600">Was zeichnet das Lernsystem aus?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Die größten Vorteile des Lernsystems
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
