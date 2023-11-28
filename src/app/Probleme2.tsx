import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Überwältigung beim Lernstart',
    description:
      'Viele Lernende fühlen sich zu Beginn eines neuen Themas oder Kurses überfordert und wissen nicht, wo sie anfangen sollen. Diese Unsicherheit kann zu Verzögerungen und Frustration führen.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Mangelnde Konzentration',
    description:
      'Ein häufiges Hindernis beim Lernen ist die Schwierigkeit, sich über längere Zeit zu konzentrieren, was zu ineffektivem Lernen führt.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Behalten von Informationen',
    description:
      'Viele Lernende haben Probleme damit, Informationen langfristig zu speichern, was besonders bei komplexen Themen zu Herausforderungen führt.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Anwendung von Theorie in der Praxis',
    description:
      'Es ist eine Sache, theoretisches Wissen zu erlangen, aber eine andere, dieses Wissen effektiv in praktischen Situationen anzuwenden.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Fehlende Motivation und Zielsetzung',
    description:
      'Viele Lernende kämpfen mit fehlender Motivation und Schwierigkeiten bei der Festlegung klarer Lernziele, was zu mangelnder Richtung und Fortschritt führt.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Selbstweifel durch schlechte Erfahrungen',
    description:
      'Viele Lernende kämpfen mit fehlender Motivation und Schwierigkeiten bei der Festlegung klarer Lernziele, was zu mangelnder Richtung und Fortschritt führt.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Probleme2() {
  return (
    <section>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-caveat text-4xl font-base leading-7 text-blue-600">Woran scheitern die meisten?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Die 6 häufigsten Probleme beim Lernen
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
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
