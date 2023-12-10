import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Falsche Selbsteinschätzung',
    description:
      'Der Mere Exposure Effekt beschreibt das Phänomen, dass wir denken wir haben Lernstoff aufgenommen und abgespeichert, weil wir ihn oft wiederholt haben. Dann sitzt man aber in der Prüfung und merkt, man kann nicht mehr auf das Wissen zurückgreifen!',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Überwältigung beim Lernstart',
    description:
      'Viele Lernende fühlen sich zu Beginn eines neuen Themas oder Kurses überfordert und wissen nicht, wo sie anfangen sollen. Diese Unsicherheit kann zu Verzögerungen und Frustration führen. Diese Unsicherheit sorgt dafür, dass unser Lernplan von Beginn an zum Scheitern verurteilt ist.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Falsche Lernmethoden falscher Kontext',
    description:
      'Es gibt hunderte Lernmethoden, aber nur die wenigsten schaffen es die richtige Methode für das richtige Thema anzuwenden! Dadurch verzweifeln die meisten schon beim Aufnehmen der Informationen.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Mangelnde Konzentration',
    description:
      'Ein häufiges Hindernis beim Lernen ist die Schwierigkeit, sich über längere Zeit zu konzentrieren, was zu ineffektivem Lernen führt.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Behalten von Informationen',
    description:
      'Viele Lernende haben Probleme damit, Informationen langfristig zu speichern, was besonders bei komplexen Themen zu Herausforderungen führt.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Anwendung von Theorie in der Praxis',
    description:
      'Es ist eine Sache, theoretisches Wissen zu erlangen, aber eine andere, dieses Wissen auch effektiv anzuwenden.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Fehlende Motivation und Zielsetzung',
    description:
      'Viele Lernende kämpfen mit fehlender Motivation und Schwierigkeiten bei der Festlegung klarer Lernziele, was zu mangelnder Richtung und Fortschritt führt.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Starke Selbstzweifel',
    description:
      'Viele Lernende kämpfen mit fehlender Motivation und Schwierigkeiten bei der Festlegung klarer Lernziele, was zu mangelnder Richtung und Fortschritt führt.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
]

export default function Probleme2() {
  return (
    <section>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-caveat text-2xl font-base leading-7 text-blue-600 sm:text-4xl">Woran scheitern die meisten?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Die 6 häufigsten Probleme beim Lernen
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-gray-50 dark:bg-slate-800 p-6 rounded-xl ring-1 ring-gray-200 dark:ring-0">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
  )
}
