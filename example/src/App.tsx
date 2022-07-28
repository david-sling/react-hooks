import React from 'react'
import { AsyncMemo } from './components/AsyncMemo'
import Fetch from './components/Fetch'
import LocalStorage from './components/LocalStorage'

const App = () => {
  return (
    <>
      <LocalStorage />
      <Fetch />
      <AsyncMemo />
    </>
  )
}

export default App
