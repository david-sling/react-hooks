import React, { useState } from 'react'
import { useFetch } from '@david-sling/react-hooks'

export default function Fetch() {
  const [url, setUrl] = useState('https://reqres.in/api/users?page=2')
  const [data, dataLoading, dataError] = useFetch<any>(url, {}, {}, [url])
  const obj = { data, dataLoading, dataError }
  console.log(obj)
  return (
    <div>
      <h2>useFetch</h2>
      <input
        placeholder='url'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type='text'
      />
      <pre>
        {dataLoading
          ? 'Loading...'
          : JSON.stringify(dataError || obj, undefined, 2)}
      </pre>
    </div>
  )
}
