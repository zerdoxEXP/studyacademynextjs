import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Hero() {
    return (
      <div className="px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-caveat text-2xl sm:text-4xl font-medium leading-7 text-teal-600 dark:text-teal-500">Glückwunsch, alles hat geklappt!</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Bestellung erfolgreich</h2>
          <div className="mt-8 flex justify-center items-center">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-teal-600 dark:text-teal-500" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-base text-teal-600 dark:text-teal-500">Hinweis: Die Abbuchung erfolgt durch Copecart.</p>
        </div>
      </div>
          <p className="mt-6 text-2xl leading-8 text-gray-600 dark:text-gray-400">
            Im folgenden erfährst du wie es weiter geht. Es gibt 2 unterschiedliche Fälle:
          </p>
        </div>
      </div>
    )
  }