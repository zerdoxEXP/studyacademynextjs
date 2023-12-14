import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Mindmaps',
    href: '#',
    description: 'Visuelle Darstellungen erleichtern dir das Erfassen komplexer Informationen und fördern das assoziative Denken.',
    options: '8 colors',
    imageSrc: '/images/pro/1.jpg',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'KI und ChatGPT effektiv nutzen',
    href: '#',
    description: 'Mit der Integration von KI-Tools in deinen Lernprozess, kannst du die Effizienz des Lernvorgangs enorm verbessern.',
    options: 'Black',
    imageSrc: '/images/pro/2.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 3,
    name: 'Optimale Lernumgebung',
    href: '#',
    description: 'Du kannst alleine durch deine Lernumgebung deine Konzentration und Motivation steigern.',
    options: 'Black',
    imageSrc: '/images/pro/3.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 4,
    name: 'Zeitmanagement und Zielsetzung',
    href: '#',
    description: 'Strukturierte Zeitpläne und klare Ziele erhöhen deine Produktivität und den Lernerfolg.',
    options: 'Black',
    imageSrc: '/images/pro/4.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 5,
    name: 'Prokrastination & Lernblockaden',
    href: '#',
    description: 'Techniken zur Selbstmotivation reduzieren dein Aufschiebeverhalten und erhöhen den Lernfluss.',
    options: 'Black',
    imageSrc: '/images/pro/5.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 6,
    name: 'Gedächtnis verbessern',
    href: '#',
    description: 'Gezieltes Gedächtnistraining stärkt die Informationsaufnahme und sorgt für langfristiges Wissen.',
    options: 'Black',
    imageSrc: '/images/pro/6.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 7,
    name: 'Gamification beim Lernen',
    href: '#',
    description: 'Spielerische Elemente in Lernprozessen steigern Motivation und den Spaß am Lernen.',
    options: 'Black',
    imageSrc: '/images/pro/7.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 8,
    name: 'Stressmanagement',
    href: '#',
    description: 'Effektive Stressbewältigung fördet deinen Fokus und verhindert Erschöpfung beim Lernen.',
    options: 'Black',
    imageSrc: '/images/pro/8.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 9,
    name: 'Lernpartnerschaften & Mentoring',
    href: '#',
    description: 'Gemeinsames Lernen und das Anleiten durch Mentoren vertiefen dein Verständnis und deine Fähigkeiten.',
    options: 'Black',
    imageSrc: '/images/pro/9.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]

export default function Example() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-none dark:bg-slate-800"
            >
              <div className="aspect-h-9 aspect-w-16 sm:aspect-none sm:h-60">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  width={1600}
                  height={900}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-base text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
