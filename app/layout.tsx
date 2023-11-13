import type { Metadata } from 'next'
import { Fragment } from 'react';
import { Inter } from 'next/font/google'
import './globals.css'

import { Footer, Header } from './components';

const fontInterM = Inter({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--inter-500',
});

const fontInterL = Inter({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--inter-700',
});

export const metadata: Metadata = {
  title: 'Air Pods Max',
  description: 'Learning CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontInterM.variable} ${fontInterL.variable}`}>
      <body>
        <Header />
        <Fragment>{children}</Fragment>
        <Footer />
      </body>
    </html>
  )
}
