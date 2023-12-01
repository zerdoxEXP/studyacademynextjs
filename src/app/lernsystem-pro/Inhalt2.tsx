import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Du hast extrem großen Ehrgeiz.',
    href: '#',
    description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: '/images/dark-project-app-screenshot-3.png',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/dark-project-app-screenshot-3.png',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/dark-project-app-screenshot-3.png',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/dark-project-app-screenshot-3.png',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/dark-project-app-screenshot-3.png',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/dark-project-app-screenshot-3.png',
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
              <div className="aspect-h-9 aspect-w-16 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-60">
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
