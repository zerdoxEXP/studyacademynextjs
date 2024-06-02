// app/lernsystem/Hero.tsx
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import LoomVideo from '../components/LoomVideo';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Hero() {
  return (
    <section id="Übersicht">
      <div className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl sm:pt-12 px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-left sm:text-center">
            <p className="text-2xl mb-2 font-caveat leading-8 tracking-tight text-teal-600 sm:text-4xl">
              Schneller, effektiver & leichter Lernen.
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Das Lernsystem <span className="text-4xl font-caveat font-medium leading-8 tracking-tight text-teal-600 sm:text-7xl">Pro+</span> ist die ultimative Lösung für deinen Lernerfolg.
            </h1>
            <p className="mx-auto max-w-4xl mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Du bekommst ein Schritt für Schritt System, wie du richtig lernst. Von den Lernmethoden über das richtige Zeitmanagement bis hin zur neuesten Technik als Hilfestellung für deinen Lernerfolg.
            </p>
          <div className="mt-8 flow-root sm:mt-12">
            <LoomVideo embedUrl="https://www.loom.com/embed/9311179f765a49a184b1aca6296c29f5?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" />
          </div>
          <div className="mt-10 flex items-center justify-start sm:justify-center gap-x-6">
              <a
                href="#Preis"
                className="rounded-md bg-teal-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Jetzt sichern
              </a>
              <a href="#Inhalte" className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                Mehr erfahren <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </section>
  );
}
