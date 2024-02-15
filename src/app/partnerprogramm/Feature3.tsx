import Image from 'next/image';

export default function Features3() {
  return (
    <div className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">3. Rabatt Code für deine Follower/Besucher</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Um es dir noch leichter zu machen Kaufanreize zu schaffen, bekommst du einen Rabattcode von uns gestellt.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Der Rabattcode lautet <span className="text-blue-600"> STUDY10</span> und muss nur im Checkout von den Käufern angegeben werden.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/partner/rabattcode-affiliate.jpg"
              alt="Effektive Lernmethoden"
              className="block rounded-md shadow-xl"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
