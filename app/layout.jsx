import './globals.css'
import Sidebar from '/components/Sidebar'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nade Tech',
  description: 'Nade Lineups and Tech Tips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}