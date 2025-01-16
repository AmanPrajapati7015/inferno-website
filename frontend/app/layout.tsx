import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Inferno - Mars Rover Team',
  description: 'Building the future of Mars exploration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white`}>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        {/* <Contact /> */}
        <Footer />
      </body>
    </html>
  )
}

