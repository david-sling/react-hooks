/* eslint-disable prettier/prettier */
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'

export const useLocalStorage = <Type>(key: string, initialValue?: Type) => {
  const [value, setValue] = useState<Type>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      return initialValue
    }
  })

  const setStoredValue = useCallback(
    (val: Type) => {
      try {
        if (typeof window !== 'undefined')
          window.localStorage.setItem(key, JSON.stringify(val))
      } catch (error) {
        console.error(error)
      }
    },
    [value, key]
  )

  const syncValue = () => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key)
      setStoredValue(item ? JSON.parse(item) : initialValue)
    }
  }

  useEffect(() => {
    setStoredValue(value)
  }, [value, setStoredValue])

  return [value, { set: setValue, sync: syncValue }] as [
    Type,
    { set: Dispatch<SetStateAction<Type>>; sync: () => void }
  ]
}
