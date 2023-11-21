import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '777lookup',
  description: 'Lookup data from the book of Quabbalaistic correspondences, Liber 777.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
