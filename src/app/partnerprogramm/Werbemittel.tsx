'use client'

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Lernsystem Basic',
    features: [
      {
        name: 'Bannerset Lernsystem Basic - Light Version',
        description:
          'Die schlichte Version in weiß passt perfekt zu unseren Verkaufsseite und passt perfekt zu unseren Verkaufsseiten.',
        imageSrc: '/images/partner/lernsystem-basic-light.png',
        imageAlt: 'Bannerset Lernsystem Basic - Light Version',
        downloadUrl: '/images/partner/lernsystem-basic-light.zip',
      },
      {
        name: 'Bannerset Lernsystem Basic - Blue Version',
        description:
          'Diese Version von Bannern ist auffälliger und ist auch in unseren Brand-Farben gestaltet.',
        imageSrc: '/images/partner/lernsystem-basic-blue.png',
        imageAlt: 'Bannerset Lernsystem Basic - Blue Version',
        downloadUrl: '/images/partner/lernsystem-basic-blue.zip',
      },
    ],
  },
  {
    name: 'Lernsystem Pro',
    features: [
      {
        name: 'Bannerset Pro - Light Version',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: '/images/partner/lernsystem-pro-light.png',
        imageAlt: 'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
        downloadUrl: '/images/partner/lernsystem-pro-light.zip',
      },
      {
        name: 'Bannerset Pro - Teal Version',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: '/images/partner/lernsystem-pro-teal.png',
        imageAlt: 'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
        downloadUrl: '/images/partner/lernsystem-pro-teal.zip',
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  // Funktion, die Farbklassen basierend auf dem Tab-Namen zurückgibt
  const tabColorClass = (tabName: string) => {
    switch (tabName) {
      case 'Lernsystem Basic':
        return {
          textColor: 'text-blue-600', // Blaue Schriftfarbe
          borderColor: 'border-blue-500', // Blauer Border für den aktiven Tab
          buttonColor: 'bg-blue-500', // Blauer Hintergrund für den Button
        }
      case 'Lernsystem Pro':
        return {
          textColor: 'text-teal-600', // Grüne Schriftfarbe
          borderColor: 'border-teal-500', // Grüner Border für den aktiven Tab
          buttonColor: 'bg-teal-500', // Grüner Hintergrund für den Button
        }
      default:
        return {
          textColor: 'text-gray-600',
          borderColor: 'border-transparent',
          buttonColor: 'bg-gray-500',
        }
    }
  }


  return (
    <div>
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-16 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Werbemittel
            </h2>
            <p className="mt-4 text-gray-500">
            Wir möchten dir einige Werbebanner zur Verfügung stellen um dir den Einstieg zu erleichtern und möglichst hohe Klickraten zu erzielen.
            </p>
            <p className="mt-4 text-gray-500">
            Es gibt extra Grafiken speziell für Instagram Posts und Reels/Stories. Die anderen Bannergrößen sind für Websites/Blogs geeignet.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
          <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
            <Tab.List className="-mb-px flex space-x-10">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    classNames(
                      selected ? tabColorClass(tab.name).borderColor : 'border-transparent',
                      tabColorClass(tab.name).textColor,
                      'whitespace-nowrap border-b-2 py-6 text-base font-semibold'
                    )
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </div>

        <Tab.Panels as={Fragment}>
          {tabs.map((tab) => (
            <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
              {tab.features.map((feature) => (
                <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                  <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    <a
                      href={feature.downloadUrl}
                      className={`mt-4 inline-block px-4 py-2 text-white rounded-md ${tabColorClass(tab.name).buttonColor}`}
                      target="_blank" rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </div>
                  <div className="lg:col-span-7">
                  <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                  </div>
                </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
        </div>
      </section>
    </div>
  )
}