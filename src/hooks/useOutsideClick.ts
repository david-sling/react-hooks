/* eslint-disable prettier/prettier */
import { useEffect, useRef } from 'react'

export const useOutsideClick = (
  callback: (event: MouseEvent) => void,
  deps: any[] = []
) => {
  const ref = useRef<any>()
  const listener = (event: MouseEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) return
    callback(event)
  }

  useEffect(() => {
    document.removeEventListener('click', listener)
    document.addEventListener('click', listener)

    return () => document.removeEventListener('click', listener)
    // eslint-disable-next-line
  }, deps)
  return ref
}
