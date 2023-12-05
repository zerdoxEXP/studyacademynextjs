import { BeakerIcon, RocketLaunchIcon, AcademicCapIcon, LightBulbIcon, HeartIcon, BuildingLibraryIcon, ChatBubbleLeftRightIcon, EllipsisHorizontalIcon, ChartPieIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Naturwissenschaften',
    description:
      'Dieser Bereich umfasst Studienfelder wie Biologie, Chemie, Physik, Astronomie und Erdwissenschaften.',
    icon: BeakerIcon,
  },
  {
    name: 'Ingenieurwissenschaften',
    description:
      'Dazu gehören Disziplinen wie Maschinenbau, Elektrotechnik, Bauingenieurwesen, Informatik und Umwelttechnik.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Medizin & Gesundheitswissenschaften',
    description:
      'Dies umfasst Bereiche wie Humanmedizin, Veterinärmedizin, Pflegewissenschaft, Pharmazie und öffentliche Gesundheit.',
    icon: HeartIcon,
  },
  {
    name: 'Sozialwissenschaften',
    description:
      'Hierzu zählen Fächer wie Psychologie, Soziologie, Anthropologie, Politikwissenschaften und Wirtschaftswissenschaften.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Geisteswissenschaften',
    description:
      'Dazu gehören Fächer wie Geschichte, Philosophie, Sprach- und Literaturwissenschaften, Kunstgeschichte und Theologie.',
    icon: LightBulbIcon,
  },
  {
    name: 'Wirtschaftswissenschaften',
    description:
      'Dieser Bereich umfasst Studienrichtungen wie Betriebswirtschaftslehre, Volkswirtschaftslehre, Finanzwesen und Marketing.',
    icon: ChartPieIcon,
  },
  {
    name: 'Rechtswissenschaften',
    description:
      'Hierunter fallen Studiengänge wie Jura, internationales Recht und öffentliches Recht.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Bildungswissenschaften',
    description:
      'Dies umfasst Studienfelder wie Pädagogik, Lehrerbildung, Bildungsmanagement und Erwachsenenbildung.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Und vieles mehr...',
    description:
      'Du wirst dein Leben lang Neues lernen müssen um ein erfülltes und erfolgreiches Leben zu führen.',
    icon: EllipsisHorizontalIcon,
  },
]

export default function Anwendungsbereiche() {
  return (
    <section className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-caveat text-3xl leading-7 text-blue-600">Vielfältig einsetzbar...</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          In folgenden Bereichen wirst du unsere Lernsysteme anwenden können
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
