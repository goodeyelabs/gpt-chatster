import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GTM from '@/tools/gtm'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'RedaxGPT | Goodeye Labs',
    description: 'How GPT chat apps should be.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
      <>
          <GTM />
          <html lang="en">
              <body className={inter.className}>
                  <Providers>{children}</Providers>
              </body>
          </html>
      </>
  )
}
