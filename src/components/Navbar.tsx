import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='dark:bg-stone-950 bg-slate-200 p-3 sticky top-0 drop-shadow-xl z-10'>
      <div className='mx-auto px-3 md:w-[900px] flex justify-between items-center'>
        <h1 className='font-bold text-3xl'>
          <Link
            href='/'
            className='no-underline dark:hover:text-white/70 hover:text-black/70 transition-colors duration-500'
          >
            MY POSTS
          </Link>
        </h1>

        <div>
          <button className='py-1 px-2 transition-colors duration-500 rounded-md border-2 border-stone-200 hover:bg-stone-600 hover:text-white hover:border-stone-900 bg-white dark:bg-transparent dark:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-black'>
            Theme
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
