import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F3A5F',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Samriddhi - Nature & Nurture',
  description: 'Samriddhi Foundation - Nurturing minds through neuroscience-informed education and holistic development',
  keywords: ['education', 'neuroscience', 'learning', 'development', 'holistic', 'growth', 'mindfulness'],
  authors: [{ name: 'Samriddhi Foundation' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://samriddhi.org',
    siteName: 'Samriddhi Foundation',
    title: 'Samriddhi - Nature & Nurture',
    description: 'Nurturing minds through neuroscience-informed education and holistic development',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
