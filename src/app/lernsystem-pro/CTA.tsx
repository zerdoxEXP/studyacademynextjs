export default function CTA() {
  return (
    <section id="CallToAction">
      <div className="px-6 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Starte jetzt mit dem Lernsystem Pro
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Du erhältst ein allumfassendes Lernsystem, das auf jahrelangen Erfahrungen und wissenschaftlichen Fakten basiert.
          </p>
          <div className="mt-10 flex items-center justify-start sm:justify-center gap-x-6">
          <a
              href="#Preis"
              className="rounded-md bg-teal-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Jetzt sichern
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

  