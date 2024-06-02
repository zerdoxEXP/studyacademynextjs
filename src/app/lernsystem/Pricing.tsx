import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  '15 Module',
  '130 Lektionen',
  'über 10 Stunden Videomaterial',
  '100% Mehrwert',
]

export default function Pricing() {
  return (
    <section id="Preis">
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Du wirst <span className="text-teal-600 dark:text-teal-500">nie wieder Probleme haben Neues zu lernen</span> mit diesem System.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Sichere dir jetzt das Lernsystem Pro+ und erreiche die Noten, die du wirklich willst.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl shadow-md ring-1 ring-gray-200 dark:bg-gray-400/5 dark:ring-white/10 dark:ring-opacity-40 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Lernsystem <span className="font-caveat text-5xl font-medium text-teal-600 dark:text-teal-500">Pro+ </span></h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Du bekommst ein extrem umfangreiches Lernsystem von dem du dein Leben lang profitieren wirst mit praxisnahe Beispiele und wissenschaftlich fundiert.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-base font-semibold leading-6 text-teal-600">Was du alles von uns bekommst</h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-600" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-200 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-teal-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-slate-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 dark:text-gray-200">Sichere deinen Zugang für nur</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">19€</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-200">pro Monat</span>
                </p>
                <a
                  href="https://copecart.com/products/724d86fe/checkout"
                  className="mt-10 block w-full rounded-md bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Zugang kaufen
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-200">
                Sofort verfügbar & starten
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
