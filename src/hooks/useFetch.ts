/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'

export const useFetch = <TYPE>(
  url: string,
  initialValue?: TYPE,
  params?: RequestInit,
  deps?: any[]
) => {
  const [data, setData] = useState<TYPE | undefined>(initialValue)
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  console.log({ error })

  const getData = () => {
    setLoading(true)
    fetch(url, params)
      .then((data) => data.json())
      .then(setData)
      .then(() => setError(null))
      .catch((e: Error) =>
        setError({
          message: e.message,
          name: e.name,
          stack: e.stack
        })
      )
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, deps || [])

  return [data, { loading, error, setData, setLoading, setError }]
}
