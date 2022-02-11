import { DependencyList, useCallback, useEffect } from "react";

const useAsyncEffect = (
  effect: () => Promise<void>,
  deps?: DependencyList,
  destructor?: () => void
) => {
  const asyncFunction = useCallback(effect, deps);
  useEffect(() => {
    asyncFunction();
    return destructor;
  }, [asyncFunction]);
};

export default useAsyncEffect;
