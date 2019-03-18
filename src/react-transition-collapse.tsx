// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import * as React from 'react'

type styleType = {
  transition: string
  overflow: string
  height: string
}

const wrapperStyle: styleType = {
  transition: 'height 0.5s ease',
  overflow: 'hidden',
  height: 'auto'
}

type DomEl = null | HTMLDivElement

class ReactTransitionCollapse extends React.PureComponent<{
  expanded: boolean
  children: Element
}> {
  el: DomEl = null

  state = {
    initialRender: true
  }

  componentDidMount() {
    this.setState({
      initialRender: false
    })
  }

  setHeight = (el: DomEl) => {
    this.el = el

    if (!el) {
      return
    }

    this.setState({
      height: el.offsetHeight
    })
  }

  render() {
    const { expanded, children } = this.props
    const { initialRender } = this.state

    const style = {
      ...wrapperStyle
    }

    if (!initialRender) {
      style.height = ''
    }

    return (
      <div style={style} ref={this.setHeight}>
        {children}
      </div>
    )
  }
}

export default ReactTransitionCollapse
