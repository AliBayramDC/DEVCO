import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Devco',
    template: 'Devco | %s'
  },
  description: 'Devco - Məsləhətçilik və Təlimdə Mükəmməlliyə gedən yolunuz',
  metadataBase: new URL('https://www.devco.az'), // Set your base URL here
  openGraph: {
    title: 'Devco - Məsləhətçilik və Təlimdə Mükəmməlliyə gedən yolunuz',
    description: 'Devco - Məsləhətçilik və Təlimdə Mükəmməlliyə gedən yolunuz',
    url: 'https://www.devco.az',
    images: [
      {
        url: '/logos/logo-no-background.png', // Path to your Open Graph image
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <head>
        <link rel='icon' href='/logos/logo-no-background.png' />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  )
}
