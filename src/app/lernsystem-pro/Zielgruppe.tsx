import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Du willst Höchstleistungen.',
    description:
      'Wenn du erste Erfolgserlebnisse hast und zu wahrer Meisterschaft im Lernen kommen willst, die dich von allen anderen abhebt.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Du hast sehr großen Ehrgeiz.',
    description:
      'Du bist jemand, der sich immer weiter verbessern will und motiviert ist von Experten zu lernen.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Du bist ein Perfektionist.',
    description:
      'Für dich gibt es nur ein Ziel und das bedeutet das Thema des Lernens zu perfektionieren.',
    icon: CheckBadgeIcon,
  },
]

export default function Zielgruppe() {
  return (
    <section id="Zielgruppe">
    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:text-center">
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
