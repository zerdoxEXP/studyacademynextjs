import Image from 'next/image';


export default function Pro() {
  return (
    <section>
      <div className="mt-10 mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Schritte nach dem Kauf</h2>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8">
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-none dark:bg-slate-800">
            <div className="flex flex-1 flex-col space-y-4 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white"><span className="text-red-600 dark:text-red-500">1. Du hast noch keinen Account</span> bei Study Academy mit der angegebenen E-Mail Adresse</h3>
              <p className="text-lg dark:text-gray-400 text-gray-600">Wurde noch kein Account bei uns mit deiner E-Mail Adresse gefunden, dann wird automatisch ein Account angelegt und dir eine Einladung zugeschickt mit der du dich registrieren kannst.</p>
              <p className="text-lg dark:text-gray-400 text-gray-600">Suche nach der E-Mail mit dem Betreff &quot;Study Academy Zugang&quot; und folge zum Link zur Registrierung. Danach hast du vollen Zugriff auf deine Spaces und Lektionen des Lernsystems Pro+.</p>
            </div>
          </div>
          <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-none dark:bg-slate-800">
            <div className="flex flex-1 flex-col space-y-4 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white"><span className="text-green-600 dark:text-green-500">2. Du hast bereits einen Account</span> bei Study Academy mit der angegebenen E-Mail Adresse</h3>
              <p className="text-lg dark:text-gray-400 text-gray-600">Du kannst dich jetzt in deinen Account einloggen, wir haben dir die neuen Lektionen freigeschaltet.</p>
              <div className="flex items-center justify-start gap-x-6">
              <a href="http://studyacademy.circle.so/" target="_blank"
              className="rounded-md bg-teal-600 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              Zum Login
              </a>
              </div>
              <p className="text-lg dark:text-gray-400 text-gray-600">P.S.: Falls du deine Login-Daten nicht mehr weißt, dann suche nach der E-Mail mit dem Betreff &quot;Study Academy - Zugang&quot;. Oder nutze &quot;Forgot your Password&quot; um ein neues festzulegen.</p>
            </div>
          </div>
        </div>
        <p className="mt-10 dark:text-gray-400 text-gray-600 text-center">Bei Problemen kannst du dich an <span className="font-semibold text-gray-900 dark:text-white">support@study-academy.de</span> wenden und wir helfen dir.</p>
      </div>
    </section>
  )
}
