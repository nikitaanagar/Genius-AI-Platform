import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
//importing of clerkprovider help in routing with clerk
import { ClerkProvider } from '@clerk/nextjs'
import { CrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'Ai Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       <html lang="en">
        <CrispProvider/>
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
