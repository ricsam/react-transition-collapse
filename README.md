# react-transition-collapse

Performant animated accordion/collapse react component powered by css transitions and css transform.

| npm | build |
| ----|------ |
| ![npm](https://img.shields.io/npm/v/react-transition-collapse.svg) | ![travis](https://travis-ci.org/ricsam/react-transition-collapse.svg?branch=master) |

### Installation
```bash
npm install --save react-transition-collapse
```

```bash
yarn add react-transition-collapse
```


### Usage

ReactTransitionCollapse takes these props:
```
children: Element
duration: number | string // number of milliseconds
expanded: boolean
animationType: 'scale' | 'translate' // which css transform should be applied to animate the transition
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
