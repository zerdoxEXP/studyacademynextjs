import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Erste Schritte im Lernen',
    description:
      'Unsicher, wo Du anfangen sollst? Wir helfen Dir, den ersten Schritt zu machen und bieten Orientierung für Deinen Lernweg.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Umgang mit Herausforderungen',
    description:
      'Stehst Du vor einer Lernblockade? Lass uns gemeinsam Lösungen finden, die Dir den Weg ebnen.',
    icon: LockClosedIcon,
  },
  {
    name: 'Einfache Tipps für den Alltag',
    description:
      'Brauchst Du praktische Tipps für Deinen Lernalltag? Wir geben Dir einfache, aber effektive Ratschläge, um sofort loszulegen.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Motivation steigern',
    description:
      'Fehlt Dir die Antriebskraft? Entdecke mit uns, wie Du Deine Motivation wecken und aufrechterhalten kannst.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Lernziele festlegen',
    description:
      'Unsicher über Deine Ziele? Wir unterstützen Dich dabei, klare und erreichbare Ziele zu setzen, um Deinen Fokus zu schärfen.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Entdecke Dein Potenzial',
    description:
      'Möchtest Du wissen, wie weit Du gehen kannst? Lass uns gemeinsam Dein Lernpotenzial erkunden und entfalten.',
    icon: FingerPrintIcon,
  },
]

export default function Mission() {
  return (
    <section id="mission">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-caveat text-3xl leading-7 text-blue-600">Unsere Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Wobei können wir dir helfen?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Stelle uns deine Lernfragen – wir sind hier, um Dir den Einstieg zu erleichtern:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
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
