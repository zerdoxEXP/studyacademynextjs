import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  '7 Module',
  '57 Lektionen',
  '43 Lernvorlagen',
  '100% Mehrwert',
]

export default function Pricing() {
  return (
    <section id="Preis">
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Du wirst <span className="text-blue-600 dark:text-blue-500">nie wieder Probleme haben Neues zu lernen</span> mit diesem System.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Du hast jetzt die Möglichkeit dein Leben für immer zu verändern und über dich hinaus zu wachsen. Nutzt du deine Chance oder nicht?
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl shadow-md ring-1 ring-gray-200 dark:bg-gray-400/5 dark:ring-white/10 dark:ring-opacity-40 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lernsystem <span className="font-caveat text-3xl font-medium text-blue-600 dark:text-blue-500">Basic </span> - 57 Lektionen</h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
              Perfekt für jeden der seine geistigen Fähigkeiten optimal nutzen will und Ängste vor Prüfungen verlieren will. Du wirst mit dem System in kürzester Zeit enorme Erfolge sehen.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-base font-semibold leading-6 text-blue-600">Was du alles von uns bekommst</h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-600" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-200 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
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
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">3x33€</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-200">inkl. Mwst.</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
        <p className="mt-16 text-gray-600 dark:text-gray-400 text-center text-xl">P.S.: Für extrem ambitionierte Menschen haben wir auch unser <a href="/lernsystem-pro" className="font-bold underline hover:no-underline decoration-dashed underline-offset-8 dark:text-white">Lernsystem <span className="font-caveat text-2xl text-teal-600 dark:text-teal-500">Pro </span></a> entwickelt.</p>
      </div>
    </div>
    </section>
  )
}
