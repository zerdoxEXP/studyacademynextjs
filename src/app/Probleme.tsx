import { ChevronRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Überwältigung beim Lernstart',
    description:
      'Viele Lernende fühlen sich zu Beginn eines neuen Themas oder Kurses überfordert und wissen nicht, wo sie anfangen sollen. Diese Unsicherheit kann zu Verzögerungen und Frustration führen.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Mangelnde Konzentration',
    description:
      'Ein häufiges Hindernis beim Lernen ist die Schwierigkeit, sich über längere Zeit zu konzentrieren, was zu ineffektivem Lernen führt.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Schwierigkeiten beim Behalten von Informationen',
    description:
      'Viele Lernende haben Probleme damit, Informationen langfristig zu speichern, was besonders bei komplexen Themen zu Herausforderungen führt.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Schwierigkeiten bei der Anwendung von Theorie in der Praxis',
    description:
      'Es ist eine Sache, theoretisches Wissen zu erlangen, aber eine andere, dieses Wissen effektiv in praktischen Situationen anzuwenden.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Fehlende Motivation und Zielsetzung',
    description:
      'Viele Lernende kämpfen mit fehlender Motivation und Schwierigkeiten bei der Festlegung klarer Lernziele, was zu mangelnder Richtung und Fortschritt führt.',
    icon: ChevronRightIcon,
  },
  {
    name: 'Selbstweifel durch schlechte Erfahrungen',
    description:
      'Viele Lernende kämpfen mit fehlender Motivation und Schwierigkeiten bei der Festlegung klarer Lernziele, was zu mangelnder Richtung und Fortschritt führt.',
    icon: ChevronRightIcon,
  },
]

export default function Probleme() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="font-caveat text-4xl leading-7 text-blue-600">Hast du auch Lernblockaden?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Die häufigsten Probleme beim Lernen 🤷
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Die Study Academy setzt sich mit Leidenschaft dafür ein, das Lernen zu revolutionieren und jedem Einzelnen zu ermöglichen, sein volles Potential zu entfalten.
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
