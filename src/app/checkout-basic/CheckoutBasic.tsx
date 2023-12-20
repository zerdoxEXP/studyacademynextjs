import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function CheckoutBasic() {
  return (
    <div className="px-6 pt-24 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Kauf erfolgreich abgeschlossen</h2>
      <div className="mt-8 flex justify-center items-center">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-blue-600 dark:text-blue-500" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-600 dark:text-blue-500">Hinweis: Die Abbuchung erfolgt durch Digistore24.com</p>
        </div>
      </div>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Dein Account bei der Study Academy wurde erstellt und wir haben dir deine Zugangsdaten per E-Mail zugeschickt. So loggst du dich ein:
        </p>
      </div>
    </div>
  )
}
