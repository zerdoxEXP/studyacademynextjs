export default function CTA() {
  return (
    <section id="CTA">
      <div className="px-6 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          <p className="text-2xl sm:text-4xl font-caveat leading-8 tracking-tight text-blue-600">Ich kann dir nur raten...</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Höre auf dich selbst zu sabotieren und werde zum Lern-Profi!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Es hat nur Vorteile für dich schnell neues Wissen aufnehmen und behalten zu können. Alles was du dazu brauchst ist im System:
          </p>
          <div className="mt-10 flex items-center justify-start sm:justify-center gap-x-6">
            <a
              href="/lernsystem"
              className="rounded-md bg-teal-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Zum Lernsystem Pro+
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

  