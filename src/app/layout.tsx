import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import './globals.css'

export const metadata = {
  title: 'My Review',
  description: 'A blog of myself for review everythings',
}

interface Props {
  children: React.ReactNode
}

const RootLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang='en' className='dark'>
      <body>
        <Navbar />
        <main className='mx-auto p-3 md:w-[900px]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
