import React from 'react';
import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import './globals.css'
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' })

export const metadata: Metadata = {
  title: 'Study Academy',
  description: 'Wir zeigen dir wie man lernt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} ${caveat.variable} font-inter bg-white dark:bg-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-WMTK3V3" />
    </html>
  )
}

