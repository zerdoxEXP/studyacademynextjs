import Image from 'next/image';

const incentives = [
    {
      name: 'Studium - jedes Studienfach',
      description: "Ideal für Studierende, die ihre Lernfähigkeiten verbessern und Prüfungen mit Zuversicht bestehen möchten.",
      imageSrc: '/icons/Platzhalter.png',
    },
    {
      name: 'Schule - höhere Klassenschufen',
      description: 'Perfekt für Schüler, die nach effektiven Wegen suchen, Lerninhalte leichter und nachhaltiger zu verstehen und zu behalten.',
      imageSrc: '/icons/Platzhalter.png',
    },
    {
      name: 'Berufliche Weiterbildung',
      description: "Ein unverzichtbares Tool für jeden, der persönliche Bildungsziele erreichen möchte – unabhängig vom Bildungsstand.",
      imageSrc: '/icons/Platzhalter.png',
    },
  ]
  
  export default function FuerWen() {
    return (
      <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl mb-8 md:mb-12 lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Wo kannst du die Methoden am besten einsetzen?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <Image
                    width={96}
                    height={112}
                    className="mx-auto h-24 w-24"
                    src={incentive.imageSrc}
                    alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{incentive.name}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  