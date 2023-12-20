import { EnvelopeIcon, UserCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: '1. Überprüfe deine E-Mails',
    description: 'Gehe in dein E-Mail Konto, suche nach der Mail von Study Academy und öffne sie. P.S.: Bitte überprüfe auch deinen Spam-Ordner.',
    icon: EnvelopeIcon,
  },
  {
    name: '2. Logge dich ein',
    description: 'Mit dem Zugangslink in der E-Mail aktivierst du deinen Account und legst dein Passwort fest. Danach folgst du den Schritten.',
    icon: UserCircleIcon,
  },
  {
    name: 'Support',
    description: 'Falls du Probleme hast dich einzuloggen oder ein anderer Fehler auftritt, schreibe bitte an ',
    icon: QuestionMarkCircleIcon,
    isEmail: true,
    email: "support@study-academy.de",
  },
];

export default function Steps() {
  return (
    <section id="Schritte">
      <div className="mx-auto max-w-7xl pb-32 px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-gray-50 dark:bg-slate-800 p-6 rounded-xl ring-1 ring-gray-200 dark:ring-0">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-teal-600 dark:text-teal-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    {feature.description}
                    {feature.isEmail && (
                      <a href={`mailto:${feature.email}`} className="text-teal-600 hover:text-teal-800">
                        {feature.email}
                      </a>
                    )}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

