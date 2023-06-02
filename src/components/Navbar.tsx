import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='dark:bg-slate-950 bg-slate-200 p-3 sticky top-0 drop-shadow-xl z-10'>
      <div className='mx-auto px-3 md:w-[900px]'>
        <h1 className='font-bold text-3xl'>
          <Link
            href='/'
            className='no-underline dark:hover:text-white/70 hover:text-black/70 transition-colors'
          >
            MY REVIEW
          </Link>
        </h1>
      </div>
    </nav>
  )
}

export default Navbar
