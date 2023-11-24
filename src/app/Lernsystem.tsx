import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Lernsystem() {
  return (
    <div className="overflow-hidden py-24 sm:py-32" id="lernsystem">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-caveat text-4xl leading-7 text-blue-600">Unser Lernsystem</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Study Blueprint: Lerne zu lernen mit unserem System 💯</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Meistere die Kunst des Lernens 🧙 und erfahre durch unsere Videos, wie Du effektiv lernst und dieses Wissen auf Deine Studien anwendest.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/female-student.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 block dark:hidden"
            width={2432}
            height={1442}
          />
                    <Image
            src="/images/female-student-night.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hidden dark:block"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

