import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Attraktive Provision',
    description: 'Mit einer Provision von 25% pro Verkauf bieten wir Dir als Affiliates eine lukrative Möglichkeit, durch den Verkauf unserer Produkte Einnahmen zu erzielen.',
  },
  { name: 'Hochwertige Produkte',
    description: 'Wir legen höchsten Wert auf die Qualität unserer Produkte und verbessern unsere Lernsysteme ständig um unseren Kunden maximale Erfolgserlebnisse zu liefern.'
  },
  {
    name: 'Umfassende Werbe-Ressourcen',
    description: 'Wir stellen Dir umfangreiche Marketingmaterialien zur Verfügung um dir den Einstieg zu erleichtern. Du musst dich also nur darauf konzentrieren deine Reichweite zu erhöhen und Interessenten zu uns weiter zu leiten.',
  },
  {
    name: 'Transparente und zeitnahe Auszahlungen',
    description: 'Du erhältst Deine Provisionen regelmäßig und ohne Verzögerungen durch unseren zuverlässigen Zahlungsdienstleister CopeCart.',
  },
  { name: 'Persönlicher Support und Kommunikation',
    description: 'Du kannst jederzeit Kontakt zu uns aufnehmen, wir sind offen für Fragen, Unterstützung und Feedback um mit Dir eine langfristige Partnerschaft aufzubauen.'
  },
  { name: 'Exklusive Promotions und Boni',
    description: 'Wir werden in Zukunft noch zusätzlich zu den 25% Provisionen weitere exklusiven Promotions anbieten für die erfolgreichsten Affiliates von uns.'
  },
]

export default function Vorteile() {
  return (
    <section id="Vorteile">
    <div className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="font-caveat text-2xl font-medium leading-7 text-blue-600">Was habe ich davon?</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Vorteile des Partnerprogramms von Study Academy</h2>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Mit dem bewerben von unseren Lernsystemen kannst du bis zu 41,50 € mit einem Verkauf verdienen.
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
