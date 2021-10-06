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
import { useLocalStorage } from '@david-sling/react-hooks'

const LocalStorageExample = () => {
  const [text, setText] = useLocalStorage<string>('text', 'initial value')
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
      />
    </div>
  )
}
```

## License

MIT © [david-sling](https://github.com/david-sling)
