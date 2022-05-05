/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useAsyncEffect } from './useAsyncEffect'

export const useAsyncMemo = <T, D = null>(
  fetcher: () => Promise<T | D> | T | D,
  deps: any[] = [],
  { defaultValue, storeLocal }: { storeLocal?: string; defaultValue?: D } = {}
): [T | D, Dispatch<SetStateAction<T | D>>, () => Promise<void>] => {
  const [value, setValue] = useState<T | D>(() => {
    if (storeLocal) {
      try {
        if (typeof window !== 'undefined') {
          const item = window.localStorage.getItem(storeLocal)
          return item ? JSON.parse(item) : defaultValue
        }
        return defaultValue
      } catch (error) {
        return defaultValue
      }
    } else {
      return defaultValue
    }
  })

  const getValue = async () => {
    setValue(await fetcher())
  }

  useAsyncEffect(getValue, deps)

  useEffect(() => {
    if (!storeLocal) return
    try {
      if (typeof window !== 'undefined')
        window.localStorage.setItem(storeLocal, JSON.stringify(value))
    } catch (error) {
      ///
    }
  }, [value, storeLocal])

  return [value, setValue, getValue]
}
