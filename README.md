# react-transition-collapse

### Installation
```bash
npm install --save react-transition-collapse
```

```bash
yarn add react-transition-collapse
```


### Usage

ReactTransitionCollapse takes three props:
```
expanded: boolean
duration: number | string // number of milliseconds
children: Element
```

#### Full example

```jsx
import React, { useState } from 'react'
import ReactTransitionCollapse from 'react-transition-collapse'

export const Expandable = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <button onClick={() => setExpanded(expanded => !expanded)}>Expand</button>
      <div>
        <ReactTransitionCollapse expanded={expanded} duration={200}>
          Lorem nostrud velit ullamco dolore exercitation consectetur occaecat enim laboris cillum
          incididunt ullamco ex. Adipisicing eu nulla anim laborum. Exercitation consequat anim
          culpa aute fugiat dolor in aliqua Lorem labore mollit anim id dolore. Sunt ut sunt duis
          commodo irure dolore adipisicing occaecat non nisi sit. Labore consequat amet anim nulla
          ipsum excepteur do duis labore.
        </ReactTransitionCollapse>
      </div>
    </>
  )
}

```

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
