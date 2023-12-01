const stats = [
    { id: 1, name: 'Module', value: '6' },
    { id: 2, name: 'Lektionen', value: '29' },
    { id: 3, name: 'Lernvorlagen', value: '56' },
    { id: 4, name: 'Mehrwert', value: '100%' },
  ]
  
  export default function Stats() {
    return (
      <section id="stats">
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Extrem umfangreich!
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="tracking-widest uppercase text-sm font-normal leading-6 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        </div>
      </section>
    )
  }
  