import Link from 'next/link'

const List = () => {
  return (
    <section className='grid grid-cols-3 md:grid-cols-4 gap-3 p-5 rounded-tr-md rounded-b-md bg-stone-200 dark:bg-zinc-800'>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <li
            key={item}
            className='mb-3 text-xl hover:text-stone-500 dark:hover:text-zinc-400'
          >
            <Link href={`/posts/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
