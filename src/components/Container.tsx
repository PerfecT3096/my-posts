'use client'

import { useState } from 'react'

import Tab from './Tab'
import List from './List'

const Container = () => {
  const [tab, setTab] = useState<number>(0)

  const handleSetTab = (val: number) => {
    setTab(val)
  }

  return (
    <div>
      <div className='flex'>
        {[0, 1, 2, 3].map((item) => (
          <Tab
            key={item}
            active={tab === item}
            onClick={() => handleSetTab(item)}
          >
            {item + 1}
          </Tab>
        ))}
      </div>
      <List />
    </div>
  )
}

export default Container
