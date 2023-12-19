const features = [
    {
      name: 'Erste Schritte im Lernen',
      description:
        'Unsicher, wo Du anfangen sollst? Wir helfen Dir, den ersten Schritt zu machen und bieten Orientierung für Deinen Lernweg.',
    },
    {
      name: 'Umgang mit Herausforderungen',
      description:
        'Stehst Du vor einer Lernblockade? Lass uns gemeinsam Lösungen finden, die Dir den Weg ebnen.',
    },
    {
      name: 'Einfache Tipps für den Alltag',
      description:
        'Brauchst Du praktische Tipps für Deinen Lernalltag? Wir geben Dir einfache, aber effektive Ratschläge, um sofort loszulegen.',
    },
    {
      name: 'Motivation steigern',
      description:
        'Fehlt Dir die Antriebskraft? Entdecke mit uns, wie Du Deine Motivation wecken und aufrechterhalten kannst.',
    },
    {
      name: 'Lernziele festlegen',
      description:
        'Unsicher über Deine Ziele? Wir unterstützen Dich dabei, klare und erreichbare Ziele zu setzen, um Deinen Fokus zu schärfen.',
    },
    {
      name: 'Entdecke Dein Potenzial',
      description:
        'Möchtest Du wissen, wie weit Du gehen kannst? Lass uns gemeinsam Dein Lernpotenzial erkunden und entfalten.',
    },
  ]
  
  export default function Helfen() {
    return (
    <section id="WobeiHelfenWir">
        <div className="mx-auto max-w-7xl pt-24 sm:pt-32 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Wobei können wir dir helfen?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Wir sind hier um euch zu helfen und den Einstieg ins effektive Lernen zu erleichtern.
            </p>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-lg" key={feature.name}>
                <dt className="text-lg font-semibold text-blue-700 dark:text-blue-500">{feature.name}</dt>
                <dd className="mt-1 text-gray-600 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
    </section>
    )
  }
  