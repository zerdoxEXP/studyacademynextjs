import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Schnelle Lernerfolge',
    description: 'Erziele in kürzester Zeit bemerkenswerte Fortschritte.',
  },
  { name: 'Wissenschaftlich fundierte Methoden', description: 'Wir nutzen neueste Erkenntnisse aus der Lernforschung & Neurowissenschaft.' },
  {
    name: 'Strukturiertes Lernen',
    description: 'Klare Struktur und effiziente Lernvorlagen die du individuell auf deine Inhalte anpassen kannst.',
  },
  {
    name: 'Flexibilität',
    description: 'Lerne jederzeit und überall mit digitalen Tools die du vorher eingerichtet hast.',
  },
  { name: 'Mehr Selbstvertrauen', description: 'Du wirst selbstsicherer in Prüfungen gehen und Lernblockaden vermeiden beim Lernen neuer Inhalte.' },
  { name: 'Spaß beim Lernen', description: 'Unsere Methoden machen das Lernen zu einem angenehmen und bereichernden Erlebnis mithilfe von Gamification-Elementen.' },
]

export default function Vorteile() {
  return (
    <section id="Vorteile">
    <div className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="font-caveat text-2xl font-medium leading-7 text-blue-600">Was zeichnet das Lernsystem aus?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Vorteile des Lernsystem Basic</p>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-400 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
  )
}
