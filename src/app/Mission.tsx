import { ChevronRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Individuell angepasste Lernwege',
    description:
      'Wir bieten maßgeschneiderte Lernlösungen, die sich an die einzigartigen Bedürfnisse und Ziele jedes Lernenden anpassen.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Förderung von Selbstvertrauens',
    description:
      'Unser Ansatz stärkt das Selbstvertrauen und die Unabhängigkeit der Lernenden, indem wir effektive Strategien für das Selbststudium vermitteln.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Innovative Lehrmethoden',
    description:
      'Wir nutzen modernste Methoden und Technologien, um ein ansprechendes und effektives Lernerlebnis zu schaffen.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Lebenslanges Lernen',
    description:
      'Unser Ziel ist es, eine Liebe zum lebenslangen Lernen zu fördern und Lernende auf kontinuierliche persönliche und berufliche Entwicklung vorzubereiten.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Spaß und Motivation beim Lernen',
    description:
      'Wir glauben, dass Lernen am effektivsten ist, wenn es Freude bereitet, weshalb wir Methoden einsetzen, die Spaß und Motivation fördern, um eine positive und anregende Lernerfahrung zu schaffen.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Erfolg durch Wissen',
    description:
      'Wir glauben fest daran, dass durch den Erwerb von Wissen jeder Einzelne sein volles Potenzial erreichen und in seiner beruflichen und persönlichen Entwicklung erfolgreich sein kann.',
    icon: ChevronRightIcon,
  },
]

export default function Mission() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="font-caveat text-4xl leading-7 text-blue-600">Unsere Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Wofür steht die Study Academy?🤷
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Die Study Academy setzt sich mit Leidenschaft dafür ein, das Lernen zu revolutionieren und jedem Einzelnen zu ermöglichen, sein volles Potential zu entfalten.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
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
