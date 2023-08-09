import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GTM from '@/tools/gtm'
import PageTitle from '@/tools/page-title'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GPT Chatty | Goodeye Labs',
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
      <PageTitle />
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
