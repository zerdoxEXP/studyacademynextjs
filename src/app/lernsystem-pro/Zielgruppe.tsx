import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, ExclamationTriangleIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Du willst Höchstleistungen.',
    description:
      'Viele Lernende fühlen sich zu Beginn eines neuen Themas oder Kurses überfordert und wissen nicht, wo sie anfangen sollen. Diese Unsicherheit kann zu Verzögerungen und Frustration führen.',
    href: '#',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Du hast sehr großen Ehrgeiz.',
    description:
      'Ein häufiges Hindernis beim Lernen ist die Schwierigkeit, sich über längere Zeit zu konzentrieren, was zu ineffektivem Lernen führt.',
    href: '#',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Du bist ein Perfektionist.',
    description:
      'Viele Lernende haben Probleme damit, Informationen langfristig zu speichern, was besonders bei komplexen Themen zu Herausforderungen führt.',
    href: '#',
    icon: CheckBadgeIcon,
  },
]

export default function Zielgruppe() {
  return (
    <section id="Zielgruppe">
    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-caveat text-4xl font-base leading-7 text-teal-600 dark:text-teal-500">Lorem ipsum dolor sit...</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Für wen ist das Lernsystem <span className="font-caveat text-6xl text-teal-600 dark:text-teal-500 font-medium">Pro</span> geeignet?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-gray-50 dark:bg-slate-800 p-6 rounded-xl ring-1 ring-gray-200 dark:ring-0">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
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
