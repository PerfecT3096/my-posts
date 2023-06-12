interface Props {
  children: React.ReactNode
  onClick: () => void
  active?: boolean
}

const Tab = (props: Props) => {
  const { children, onClick, active } = props

  const bgColor = active
    ? 'bg-stone-300 dark:bg-zinc-800'
    : 'bg-stone-200 dark:bg-zinc-700'

  return (
    <div
      className={`py-2 px-8 rounded-t-md cursor-pointer transition-colors duration-500 ${bgColor} hover:bg-stone-300 dark:hover:bg-zinc-800 border-2 border-t-0 border-l-0 border-r-0 border-b-stone-400 dark:border-b-zinc-900`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Tab
