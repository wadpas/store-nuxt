import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple Store',
  description: 'Smart shopping',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`bg-gray-50  antialiased`}>{children}</body>
    </html>
  )
}
