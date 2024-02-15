import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from './Header';
import Footer from './Footer';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Study Academy',
  description: 'Wir zeigen dir wie man lernt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="font-inter bg-white dark:bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-NC86G2HX" />
    </html>
  );
}
