import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Impressum() {
  return (
<section>
    <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="text-3xl sm:text-5xl font-caveat text-blue-600">Impressum</h1>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Angaben gemäß § 5 TMG:</h2>
        <div className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          <p>
          MEDstudents<br/>
          Henry Hildebrandt<br/>
          Holzweg 18<br/>
          67098 Bad Dürkheim
          </p>
          <p className="font-bold mt-5 text-gray-900 dark:text-white">Vertreten durch:</p>
          <p>
          Henry Hildebrandt
          </p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Kontakt</h2>
          <p className="mt-4">
          E-Mail: medstudents.eu@gmail.com
          </p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Umsatzsteuer-ID</h2>
          <p className="mt-4">
          Kleinunternehmer gemäß § 19 UStG
          </p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Redaktionell verantwortlich</h2>
          <p className="mt-4">
          Henry Hildebrandt
          </p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">EU-Streitschlichtung</h2>
          <p className="mt-4">Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Verbraucherstreitbeilegung/ Universalschlichtungsstelle</h2>
          <p className="mt-4">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
</section>
  )
}
