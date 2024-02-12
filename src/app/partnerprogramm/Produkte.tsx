import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Lernsystem Basic',
    id: 'basic',
    href: 'https://copecart.com/products/c7bc980a/checkout',
    more: '/lernsystem-basic',
    priceMonthly: '99€',
    description: 'Alle Grundlagen über das Lernen und die praktische Anwendung unseres eigenen Lernsystems.',
    features: ['3,5 Stunden Videomaterial', 'Die häufigsten Fehler beim Lernen', 'Die effektivsten Lernmethoden', 'Die beste Lernsoftware', 'Dein eigenes Lerntemplate', 'Minimaler Aufwand - maximale Ergebnisse' ],
  },
  {
    name: 'Lernsystem Pro',
    id: 'pro',
    href: 'https://copecart.com/products/13bb873e/checkout',
    more: '/lernsystem-pro',
    priceMonthly: '198€',
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

export default function Produkte() {
  return (
    <section id="Produkte" className="bg-gray-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 pt-16 text-left sm:text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-caveat text-2xl font-medium leading-7 text-blue-600 sm:text-4xl">Welche Produkte bieten wir an?</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Bewirb unsere beiden Lernsysteme
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Wir haben zwei verschiedene Lernsysteme die du bewerben kannst. Im <span className="font-bold">Lernsystem Basic</span> werden die Grundladen vermittelt um Prüfungen sicher zu bestehen mit effektiven Lernmethoden und das <span className="font-bold">Lernsystem Pro</span> ist dazu da Bestleistungen zu erreichen.
          </p>
        </div>
      <div className="flow-root py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-900 p-6 shadow ring-1 ring-gray-900/10 sm:p-8"
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
                      <span className="text-base font-semibold leading-7 text-gray-600 dark:text-gray-400">inkl. MwSt.</span>
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
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}


  