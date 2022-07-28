import React from 'react'
import { useLocalStorage } from '@david-sling/react-hooks'

export default function LocalStorage() {
  const [text, textProps] = useLocalStorage<string>('text')
  return (
    <div>
      <h2>useLocalStorage</h2>
      <input
        value={text}
        onChange={(e) => textProps.set(e.target.value)}
        type='text'
      />
    </div>
  )
}
