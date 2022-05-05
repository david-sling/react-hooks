# react-hooks

> useful react hooks

[![NPM](https://img.shields.io/npm/v/@david-sling/react-hooks.svg)](https://www.npmjs.com/package/@david-sling/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hooks
```

## Usage

```tsx
import React from 'react'
import {
  useLocalStorage,
  useFetch,
  useAsyncEffect,
  useAsyncMemo,
  useEventListener
} from '@david-sling/react-hooks'

const Example = () => {
  const [text, setText] = useLocalStorage<string>('text', 'initial value')

  const [data, dataLoading<boolean>, dataError] = useFetch<any>(
    url, // url
    {}, // Initial value
    { body: { text }, method: 'GET' }, //params
    [url, text] // dependency array (Data will be refetched if any item in this array changes)
  )

  const [data, setData, reloadData] = useAsyncMemo(async () => "RETURN FROM ASYNC FUNCTION")

  useAsyncEffect(async() => {
    await asyncStuffHappensHere()
  }, [])

  useEventListener("click", () => console.log("Clicked"))

  const ref = useOutsideClick(() => {
    console.log("Clicked outside the div)
  })

  return <di ref={ref}v>APP</div>
}
```

## License

MIT © [david-sling](https://github.com/david-sling)
