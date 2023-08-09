import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TagManager from 'react-gtm-module'

const inter = Inter({ subsets: ['latin'] })
const tagManagerArgs = {
  gtmId: 'GTM-PTH65K2Q'
}

TagManager.initialize(tagManagerArgs)

export const metadata: Metadata = {
  title: 'Goodeye Labs',
  description: 'Frontend Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
