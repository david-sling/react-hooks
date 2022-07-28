import React from 'react'
import { useAsyncMemo } from '@david-sling/react-hooks'

export const AsyncMemo = () => {
  const [data] = useAsyncMemo(async () => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    return await res.json()
  }, [])
  console.log({ data })
  return <div>AsyncMemo</div>
}
