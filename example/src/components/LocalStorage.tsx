import React from 'react'
import { useLocalStorage } from '@david-sling/react-hooks'

export default function LocalStorage() {
  const [text, setText] = useLocalStorage<string>('text')
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
      />
    </div>
  )
}
