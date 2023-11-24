import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-hobby',
    href: '#',
    price: '149€',
    description: 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
    features: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
  },
  {
    name: 'Basic + Bonus Templates',
    id: 'tier-team',
    href: '#',
    price: '199€',
    description: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
    features: [
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
    ],
  },
]

export default function Preise() {
  return (
    <section id="preise">
    <div className="isolate overflow-hidden dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-caveat text-4xl font-semibold leading-7 text-blue-600">Preise</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            All in One Lernsystem
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
            molestiae voluptatum.
          </p>
        </div>
      </div>
      <div className="flow-root dark:bg-gray-900 pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-gray-50 dark:bg-white/5 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className="text-base font-semibold leading-7 text-blue-600">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.price}</span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Jetzt kaufen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

