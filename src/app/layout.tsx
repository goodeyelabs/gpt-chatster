import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goodeye Labs',
  description: 'Frontend Development',
}

useEffect(() => {
  TagManager.initialize({ gtmId: "GTM-PTH65K2Q" })
}, [])

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
