import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agência de Marketing Digital em Mosqueiro, Belém , Ananindeua e Brasil | BC Digital',
  description: 'Oferecemos criação de sites, landing pages, gestão de tráfego pago e otimização no Google Meu Negócio. Estratégias completas para negócios locais.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
