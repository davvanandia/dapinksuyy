import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Davina Anandia | Creative Portfolio',
  description:
    'Davina Anandia is a multi-disciplinary creative specialist focused on building premium digital experiences.',
  keywords: ['portfolio', 'design', 'strategy', 'creative', 'minimalist'],
  authors: [{ name: 'Davina Anandia' }],
  openGraph: {
    title: 'Davina Anandia | Creative Portfolio',
    description: 'Crafting narratives through design & strategy.',
    url: 'https://davinaanandia.com',
    siteName: 'Davina Anandia',
    images: [
      {
        url: 'https://davinaanandia.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davina Anandia | Creative Portfolio',
    description: 'Crafting narratives through design & strategy.',
    images: ['https://davinaanandia.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}