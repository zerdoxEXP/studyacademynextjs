import Image from 'next/image';

const navigation = {
    solutions: [
      { name: 'Community', href: '/community' },
      { name: 'Lernsystem', href: '/lernsystem' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
    ],
    company: [
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
      { name: 'Section 1', href: '#' },
    ],
    legal: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Übersicht</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
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
                    {navigation.support.map((item) => (
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
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Lernsystem</h3>
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
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Rechtliches</h3>
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
          <div className="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">Copyright &copy; 2023 Study Academy · All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  