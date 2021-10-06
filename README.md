# react-hooks

> useful react hooks

[![NPM](https://img.shields.io/npm/v/react-hooks.svg)](https://www.npmjs.com/package/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hooks
```

## Usage

```tsx
import React from 'react'
import { useLocalStorage, useFetch } from '@david-sling/react-hooks'

const Example = () => {
  const [text, setText] = useLocalStorage<string>('text', 'initial value')
  const [data, dataLoading<boolean>, dataError] = useFetch<any>(
    url, // url
    {}, // Initial value
    { body: { text: 'text' }, method: 'GET' }, //params
    [url] // dependency array (Data will be refetched if any item in this array changes)
  )
}
```

## License

MIT © [david-sling](https://github.com/david-sling)
