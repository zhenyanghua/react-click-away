# react-click-away

> Use this component to wrap other components to detect if it is clicked outside of the wrapped container.

[![NPM](https://img.shields.io/npm/v/react-click-away.svg)](https://www.npmjs.com/package/react-click-away) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[https://zhenyanghua.github.io/react-click-away/](https://zhenyanghua.github.io/react-click-away/)

## Install

```bash
npm install --save @leafyjava/react-click-away
```

## Usage

```tsx
import React from 'react'

import ClickOutside from '@leafyjava/react-click-away'

const App = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClickOutside = () => {
    setClicked(clicked => !clicked);
  }

  return (
    <div>
      <ClickOutside onClickOutside={handleClickOutside}>
        <h1>Click Outside of this Box to Toggle</h1>
      </ClickOutside>
      {clicked && <h1>Clicked Outside Toggled</h1>}
    </div>

  )
}

export default App
```

## License

MIT © [zhenyanghua](https://github.com/zhenyanghua)
