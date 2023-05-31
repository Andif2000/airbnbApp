import CLientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'My First CLone App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <CLientOnly>
          <Modal actionLabel="Submit" isOpen title="Hello Fahmi" />
          <Navbar />
        </CLientOnly>
        {children}
      </body>
    </html>
  )
}
