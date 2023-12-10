import Image from 'next/image';

const navigation = {
    uebersicht: [
      { name: 'Community', href: '/community' },
      { name: 'Lernsystem Basic', href: '/lernsystem-basic' },
      { name: 'Lernsystem Pro', href: '/lernsystem-pro' },
    ],
    lernsystembasic: [
      { name: 'Community Fragen', href: '/community#CommunityFragen' },
      { name: 'Wobei helfen wir?', href: '/community#WobeiHelfenWir' },
      { name: 'Frage stellen', href: '#' },
    ],
    company: [
      { name: 'Übersicht', href: '#' },
      { name: 'Inhalte', href: '#' },
      { name: 'Vorteile', href: '#' },
      { name: 'Für wen geeignet?', href: '#' },
      { name: 'Preis', href: '#' },
    ],
    legal: [
      { name: 'Übersicht', href: '#' },
      { name: 'Inhalte', href: '#' },
      { name: 'Vorteile', href: '#' },
      { name: 'Für wen geeignet?', href: '#' },
      { name: 'Preis', href: '#' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer aria-labelledby="footer-heading">
        <div className="border-t border-gray-900/10 dark:border-white/10"></div>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-2xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
              <Image
              src="/Study-Academy-Logo-light.svg"
              width={220}
              height={31}
              alt="Study Academy Logo"
              className="hidden dark:inline-block"
              />
              <Image
              src="/Study-Academy-Logo.svg"
              width={220}
              height={31}
              alt="Study Academy Logo"
              className="inline-block dark:hidden"
              />
              <p className="text-sm leading-6 mt-6 text-gray-600 dark:text-gray-400">
              Wir möchten helfen das Lernen zu revolutionieren. Dazu nutzen wir neueste Techniken und Erkenntnissen der Wissenschaft.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Übersicht</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.uebersicht.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Community</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.lernsystembasic.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Lernsystem <span className="font-caveat text-2xl text-blue-600 leading-none">Basic</span></h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Lernsystem <span className="font-caveat text-2xl text-teal-600 leading-none">Pro</span></h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24 flex justify-between">
            <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">Copyright &copy; 2023 Study Academy · All rights reserved.</p>
            <div className="flex justify-between gap-4">
            <a href="/impressum" className="text-xs leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Impressum</a>
            <a href="/datenschutz" className="text-xs leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  