import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GTM from './gtm'

const inter = Inter({ subsets: ['latin'] })

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
      <GTM />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
