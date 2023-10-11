import './globals.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  weight:  ['300', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Nade Tech',
  description: 'Lineups, Tech, Tips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kanit.className}>
      <body>
        {children}
      </body>
    </html>
  )
}