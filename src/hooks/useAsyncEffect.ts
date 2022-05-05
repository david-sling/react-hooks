/* eslint-disable prettier/prettier */
import { useCallback, useEffect } from 'react'

export const useAsyncEffect = (
  effect: () => Promise<void>,
  deps?: any[],
  destructor?: () => void
) => {
  const asyncFunction = useCallback(effect, deps || [])
  useEffect(() => {
    asyncFunction()
    return destructor
  }, [asyncFunction])
}
