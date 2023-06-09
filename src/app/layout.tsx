import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import './globals.css'

export const metadata = {
  title: 'My Posts',
  description: 'A blog of myself for review everythings',
}

interface Props {
  children: React.ReactNode
}

const RootLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang='en'>
      <body className='bg-white dark:bg-[#1e1e1f] text-black dark:text-white'>
        <Navbar />
        <main className='mx-auto p-3 md:w-[900px]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
