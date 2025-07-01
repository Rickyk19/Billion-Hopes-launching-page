import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Billion Hopes - Launching Soon',
  description: 'Something amazing is coming soon. Join the waitlist and be the first to know.',
  keywords: 'launching soon, coming soon, waitlist, startup, billion hopes',
  authors: [{ name: 'Billion Hopes Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Billion Hopes - Launching Soon',
    description: 'Something amazing is coming soon. Join the waitlist and be the first to know.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billion Hopes - Launching Soon',
    description: 'Something amazing is coming soon. Join the waitlist and be the first to know.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 