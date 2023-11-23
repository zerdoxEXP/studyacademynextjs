"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Community', href: '/community' },
  { name: 'Unser Lernsystem', href: '/lernsystem' },
  { name: 'Blog', href: '/blog' },
  { name: 'Erfolgsgeschichten', href: '/erfolgsgeschichten' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    // Initialen Scrollwert setzen
    setScrollPosition(window.pageYOffset);
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`inset-x-0 top-0 z-50 fixed ${scrollPosition > 0 ? 'backdrop-blur-lg bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-90 dark:border-transparent-white border-b border-gray-900/10 dark:border-white/10 border-opacity-40' : ''}`}>
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zerdox Experience</span>
            <Image
             src="/Study-Academy-Logo-light.svg"
             width={220}
            height={31}
            alt="Study Academy Logo"
            className="hidden dark:block"
             />
            <Image
             src="/Study-Academy-Logo.svg"
             width={220}
            height={31}
            alt="Study Academy Logo"
            className="block dark:hidden"
             />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base font-medium leading-6 text-gray-900 dark:text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
            Anmelden<span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Study Academy Logo</span>
              <Image
             src="/Study-Academy-Logo-light.svg"
             width={220}
            height={31}
            alt="Study Academy Logo"
            className="hidden dark:block"
             />
            <Image
             src="/Study-Academy-Logo.svg"
             width={220}
            height={31}
            alt="Study Academy Logo"
            className="block dark:hidden"
             />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 hover:bg-gray-50 dark:ring-0 dark:text-white dark:hover:bg-gray-800 dark:bg-slate-800"
                >
                  Anmelden
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}