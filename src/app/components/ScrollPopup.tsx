// components/ScrollPopup.tsx
"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      if (scrollPercentage > 20) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showPopup ? (
    <div className="fixed bottom-0 left-0 w-full bg-teal-600 shadow-lg flex flex-col md:flex-row md:justify-center md:space-x-4 items-center p-4 z-50">
      <p className="text-white text-lg font-semibold text-center md:text-left mb-4 md:mb-0">
        Lerne in 130 Lektionen, wie du richtig lernst.
      </p>
      <a 
        href="https://copecart.com/products/724d86fe/checkout" 
        target="_blank" 
        className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-2 px-4 rounded"
        style={{ whiteSpace: 'nowrap' }}
      >
        Jetzt starten
      </a>
    </div>
  ) : null;
};

export default ScrollPopup;
