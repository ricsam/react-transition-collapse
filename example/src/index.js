import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactTransitionCollapse from 'react-transition-collapse'

const Index = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <button onClick={() => setExpanded(expanded => !expanded)}>Expand</button>
      <div style={{ display: 'flex' }}>
        <div>
          <ReactTransitionCollapse expanded={expanded}>
            Lorem nostrud velit ullamco dolore exercitation consectetur occaecat enim laboris cillum
            incididunt ullamco ex. Adipisicing eu nulla anim laborum. Exercitation consequat anim
            culpa aute fugiat dolor in aliqua Lorem labore mollit anim id dolore. Sunt ut sunt duis
            commodo irure dolore adipisicing occaecat non nisi sit. Labore consequat amet anim nulla
            ipsum excepteur do duis labore.
          </ReactTransitionCollapse>
        </div>
        <div>
          <ReactTransitionCollapse expanded={expanded} animationType="scale">
            Lorem nostrud velit ullamco dolore exercitation consectetur occaecat enim laboris cillum
            incididunt ullamco ex. Adipisicing eu nulla anim laborum. Exercitation consequat anim
            culpa aute fugiat dolor in aliqua Lorem labore mollit anim id dolore. Sunt ut sunt duis
            commodo irure dolore adipisicing occaecat non nisi sit. Labore consequat amet anim nulla
            ipsum excepteur do duis labore.
          </ReactTransitionCollapse>
        </div>
      </div>
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
