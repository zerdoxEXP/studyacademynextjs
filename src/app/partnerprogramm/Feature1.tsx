import Image from 'next/image';

export default function Features1() {
  return (
    <div className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">1. Kostenlosen Account bei CopeCart erstellen</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Klicke am Ende der Seite auf den &quot;Jetzt registrieren&quot;-Button um deinen kostenlosen CopeCart-Account zu erstellen (oder die Produkte zu deinem bestehenden Account hinzuzufügen) und Provisionen zu sammeln, die du automatisch auf dein Konto ausgezahlt bekommst.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/partner/copecart-startseite.png"
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
