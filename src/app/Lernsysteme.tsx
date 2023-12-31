import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Lernsystem Basic',
    id: 'basic',
    href: 'https://copecart.com/products/c7bc980a/checkout',
    more: '/lernsystem-basic',
    priceMonthly: '3x33€',
    description: 'Alle Grundlagen über das Lernen und die praktische Anwendung unseres eigenen Lernsystems.',
    features: ['3,5 Stunden Videomaterial', 'Die häufigsten Fehler beim Lernen', 'Die effektivsten Lernmethoden', 'Die beste Lernsoftware', 'Dein eigenes Lerntemplate', 'Minimaler Aufwand - maximale Ergebnisse' ],
  },
  {
    name: 'Lernsystem Pro',
    id: 'pro',
    href: 'https://copecart.com/products/13bb873e/checkout',
    more: '/lernsystem-pro',
    priceMonthly: '3x66€',
    description: 'Du erhältst das Lernsystem Basic und gleichzeitig noch fortgeschrittene Techniken um zum Elite-Lerner zu werden.',
    features: [
      '10 Stunden Videomaterial',
      'Der gesamte Basic Teil',
      'Community mit Fachbereichen & Experten',
      'Dein eigenes Lerndashboard',
      'Intensive & innovative Lernstrategien',
    ],
  },
]

export default function Lernsysteme() {
  return (
    <section id="Lernsysteme">
      <div className="mx-auto max-w-7xl px-6 pb-16 text-left sm:text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-caveat text-2xl font-medium leading-7 text-blue-600 sm:text-4xl">Willst du richtig durchstarten?</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Wähle jetzt ein Lernsystem aus und beginne sofort!
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Du kannst gleichzeitig Prüfungen bestehen und dein Leben genießen, wenn du unsere Methoden anwendest. Geballtes Wissen zur sofortigen Anwendung.
          </p>
        </div>
      <div className="flow-root py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-6 shadow ring-1 ring-gray-900/10 sm:p-8"
                >
                  <div>
                  <h3
                   id={tier.id}
                   className={`text-xl text-left font-semibold leading-7 ${tier.id === 'pro' ? 'text-teal-600 dark:text-teal-500' : 'text-blue-600 dark:text-blue-500'}`}
                   >
                   {tier.name}
                   </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.priceMonthly}</span>
                      <span className="text-base font-semibold leading-7 text-gray-600 dark:text-gray-400">inkl. Mwst.</span>
                    </div>
                    <p className="mt-6 text-left text-base leading-7 text-gray-600 dark:text-gray-400">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                    className={`h-6 w-5 flex-none ${tier.id === 'pro' ? 'text-teal-600 dark:text-teal-500' : 'text-blue-600 dark:text-blue-500'}`}
                    aria-hidden="true"
                    />
                    {feature}
                    </li>
                    ))}
                  </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={`mt-8 block rounded-md px-3.5 py-3 text-center text-base font-semibold leading-6 text-white shadow-sm hover:bg-${tier.id === 'pro' ? 'teal-500' : 'blue-500'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${tier.id === 'pro' ? 'teal-600' : 'blue-600'} ${tier.id === 'pro' ? 'bg-teal-600' : 'bg-blue-600'}`}
                    >
                    Kurs kaufen
                  </a>
                  <a
                    href={tier.more}
                    aria-describedby={tier.id}
                    className="block rounded-md px-3.5 py-3 text-center text-base font-semibold leading-6 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:dark:bg-white/20 dark:ring-white/20"
                  >
                    Mehr erfahren
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}


  