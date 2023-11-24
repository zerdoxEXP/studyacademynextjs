import Image from 'next/image';

const incentives = [
    {
      name: 'Studenten die sich verbessern und Prüfungen bestehen wollen',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: '/icons/icon-delivery-light.svg',
    },
    {
      name: 'Schüler denen es schwer fällt Lerninhalte zu behalten',
      description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
      imageSrc: '/icons/icon-chat-light.svg',
    },
    {
      name: 'Alle die ihr volles Potential ausschöpfen wollen',
      description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc: '/icons/icon-fast-checkout-light.svg',
    },
  ]
  
  export default function FuerWen() {
    return (
      <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl mb-8 md:mb-12 lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Für wen ist unser Lernsystem geeignet?
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
                    className="mx-auto h-24 w-28"
                    src={incentive.imageSrc}
                    alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  