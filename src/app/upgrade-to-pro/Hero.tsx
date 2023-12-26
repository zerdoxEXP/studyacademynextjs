import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Hero() {
    return (
      <div className="px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Lernsystem <span className="font-caveat text-teal-600 text-5xl sm:text-7xl">Pro</span></h2>
          <div className="mt-8 flex justify-center items-center">
      </div>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-400">
            Du hast jetzt die Chance dein <span className="font-semibold text-blue-600 dark:text-blue-500">Lernsystem Basic upzugraden (99€)</span>. Falls du das Lernsystem Basic noch nicht hast, dann kannst du dir <span className="font-semibold text-teal-600 dark:text-teal-500">direkt das Lernsystem Pro (198€)</span> sichern.
          </p>
        </div>
      </div>
    )
  }