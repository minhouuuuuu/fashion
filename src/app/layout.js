import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fashion show',
  description: 'Stunning fashion website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="qmzXgCX8nKLiRUaSWY0vaJt5CK_CQRLXH8oCO3l_L1k" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
