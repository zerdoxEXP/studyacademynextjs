"use client"

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const mailingLists = [
  { id: 1, title: 'Ja, ich habe das Lernsystem Basic', description: 'Upgrade deinen Account - schalte zusätzliche 63 Lektionen und Spaces des Lernsystem Pro frei + dein eigenes Lern-Dashboard.', users: 'Hinweis: Upgrade nur möglich, wenn du das Lernsystem Basic hast.' },
  { id: 2, title: 'Nein, habe ich nicht.', description: 'Sichere dir jetzt das Lernsystem Pro und schalte das gesamte Wissen frei.', users: 'Hinweis: Lernsystem Pro = Lernsystem Basic + 63 Lektionen + Lern-Dashboard.' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Auswahl() {
  const [selectedMailingList, setSelectedMailingList] = useState(null);
  const [buttonText, setButtonText] = useState('');

  const redirectTo = (id) => {
    if (id === 1) {
      window.location.href = 'https://copecart.com/products/0368727f/checkout';
    } else if (id === 2) {
      window.location.href = 'https://copecart.com/products/54da3563/checkout';
    }
  }

  const handleSelection = (mailingList) => {
    setSelectedMailingList(mailingList);
    // Setzen Sie hier den individuellen Text für den Button
    if (mailingList.id === 1) {
      setButtonText('Upgrade jetzt durchführen');
    } else if (mailingList.id === 2) {
      setButtonText('Lernsystem Pro sichern');
    }
  }

  return (
    <div className="mt-5 mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-4xl lg:px-8">
      <RadioGroup value={selectedMailingList} onChange={handleSelection}>
      <div className="text-center pb-4">
        <RadioGroup.Label className="text-2xl sm:text-4xl font-bold leading-8 text-gray-900 dark:text-white">
          Hast du das Lernsystem <span className="font-caveat text-blue-600 dark:text-blue-500 text-3xl sm:text-5xl">Basic</span> schon?
        </RadioGroup.Label>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          {mailingLists.map((mailingList) => (
            <RadioGroup.Option
              key={mailingList.id}
              value={mailingList}
              className={({ active }) =>
                classNames(
                  active ? 'border-teal-600 ring-2 ring-teal-600' : 'border-gray-300',
                  'relative flex cursor-pointer rounded-lg border bg-white dark:bg-slate-800 dark:border-none p-4 shadow-sm focus:outline-none'
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <RadioGroup.Label as="span" className="block text-xl font-bold text-gray-900 dark:text-white">
                        {mailingList.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-600 dark:text-gray-400">
                        {mailingList.description}
                      </RadioGroup.Description>
                      <RadioGroup.Description as="span" className="mt-6 text-sm font-bold text-gray-900 dark:text-white">
                        {mailingList.users}
                      </RadioGroup.Description>
                    </span>
                  </span>
                  <CheckCircleIcon
                    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-teal-600')}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-teal-600' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-lg'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {selectedMailingList && (
        <div className="flex justify-center mt-4">
        <button
          className="mt-4 bg-teal-600 text-white font-semibold py-4 px-6 rounded"
          onClick={() => redirectTo(selectedMailingList.id)}
        >
          {buttonText}
        </button>
        </div>
      )}
    </div>
  );
}


