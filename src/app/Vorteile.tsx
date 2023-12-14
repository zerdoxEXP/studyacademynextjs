import { CheckIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Individuell angepasste Lernwege',
    description: 'Wir bieten maßgeschneiderte Lernlösungen, die sich an die einzigartigen Bedürfnisse und Ziele jedes Lernenden anpassen.',
  },
  { name: 'Innovative Lehrmethoden',
    description: 'Wir nutzen modernste Methoden und Technologien, um ein ansprechendes und effektives Lernerlebnis zu schaffen.' },
  {
    name: 'Spaß und Motivation beim Lernen',
    description: 'Wir glauben, dass Lernen am effektivsten ist, wenn es Freude bereitet, weshalb wir Methoden einsetzen, die Spaß und Motivation fördern, um eine positive und anregende Lernerfahrung zu schaffen.',
  },
  { name: 'Erfolg durch Wissen',
    description: 'Wir glauben fest daran, dass die Fähigkeit des Lernens zu den wichtigsten Skills dieses Jahrhunderts gehört! Indem du schnell Wissen erwerben kannst, steht deinem Erfolg kaum etwas im Wege.'
  },
]

export default function Vorteile() {
  return (
    <section id="StudyAcademy">
    <div className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Was zeichnet die Study Academy aus?</p>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Die Study Academy setzt sich mit Leidenschaft dafür ein, das Lernen zu revolutionieren und jedem Einzelnen zu ermöglichen, sein volles Potential zu entfalten.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Wenn du Hilfe brauchst, dann stelle deine Frage in der Community an unsere Lernexperten:
            </p>
            <div className="mt-5">
            <a href="/community" className="mt-4 rounded-md bg-blue-600 px-5 py-3.5 text-base font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Zur Community
            </a>
            </div>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-400 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                  <CheckBadgeIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
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
