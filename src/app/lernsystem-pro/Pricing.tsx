import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  '3 Module',
  '20 Lektionen',
  '43 Lernvorlagen',
  '100% Mehrwert',
]

export default function Pricing() {
  return (
  <section id="Preis">
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Erlebe, wie einfach Lernen sein kann...</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Nutze die Gelegenheit, um dein Lernenverhalten für immer zu transformieren und sichere dir jetzt das Lernsystem Basic!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl shadow-md ring-1 ring-gray-200 dark:bg-gray-400/5 dark:ring-white/10 dark:ring-opacity-40 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lernsystem <span className="font-caveat text-3xl font-medium text-teal-600 dark:text-teal-500">Pro</span> - 20 Lektionen</h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-base font-semibold leading-6 text-teal-600 dark:text-teal-500">Was du alles von uns bekommst</h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-600" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-200 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-teal-500 dark:text-teal-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-slate-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 dark:text-gray-200">Einmalig oder per Ratenzahlung</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">199€</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-200">(3 Raten à 69€)</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Zugang kaufen
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consect etur adipisicing elit.
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
