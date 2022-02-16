// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import * as React from 'react'

const innerBaseStyle = {
  height: 'auto',
  transitionProperty: 'transform',
  transitionDuration: '0.5s',
  transitionTimingFunction: 'ease',
  transformOrigin: 'top'
}

const wrapperBaseStyle = {
  transitionProperty: 'height',
  transitionDuration: '0.5s',
  transitionTimingFunction: 'ease',
  height: '0px',
  overflow: 'hidden'
}

type DomEl = null | HTMLElement

type transitionProps = {
  expanded: boolean
  children: React.ReactNode
  duration?: number | string
  animationType?: 'scale' | 'translate'
}

class ReactTransitionCollapse extends React.PureComponent<transitionProps> {
  static defaultProps = {
    animationType: 'translate'
  }

  innerEl: DomEl = null
  wrapperEl: DomEl = null
  height: number | null = null
  detachReMeasureListeners: (() => void) | null = null

  componentDidMount() {
    this.detachReMeasureListeners = this.reMeasure()
  }

  getListener = (cb: () => void) => {
    if (!(window as any).ResizeObserver) {
      window.addEventListener('resize', cb)
      return () => {
        window.removeEventListener('resize', cb)
      }
    }
    const ro = new (window as any).ResizeObserver(cb)
    ro.observe(this.innerEl)
    return () => {
      ro.disconnect()
    }
  }

  reMeasure = () => {
    let timeout: NodeJS.Timeout
    return this.getListener(() => {
      if (!this.wrapperEl || !this.innerEl || !this.wrapperEl.contains(this.innerEl)) {
        return
      }
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.measure(this.innerEl)
        this.setHeight()
      }, 500)
    })
  }

  componentDidUpdate() {
    this.setHeight()
  }

  updateInnerHeight = (height: number | null) => {
    if (!this.wrapperEl || height === null) {
      return
    }
    if (this.wrapperEl.style.height !== height + 'px') {
      this.wrapperEl.style.height = height + 'px'
    }
    if (!this.height || !this.innerEl) {
      return
    }
    if (this.props.animationType === 'scale') {
      this.innerEl.style.transform = 'scaleY(' + height / this.height + ')'
    } else {
      this.innerEl.style.transform = 'translateY(-' + (this.height - height) + 'px)'
    }
  }

  setHeight = () => {
    if (!this.innerEl || !this.wrapperEl) {
      return
    }
    if (this.props.expanded) {
      if (!this.wrapperEl.contains(this.innerEl)) {
        this.wrapperEl.appendChild(this.innerEl)
        const reexec = () =>
          requestAnimationFrame(() => {
            if (this.wrapperEl && this.innerEl && this.wrapperEl.contains(this.innerEl)) {
              this.measure(this.innerEl)
              this.updateInnerHeight(this.height)
            } else {
              reexec()
            }
          })
        reexec()
      } else {
        this.measure(this.innerEl)
        this.updateInnerHeight(this.height)
      }
    } else if (this.wrapperEl) {
      this.updateInnerHeight(0)
    }
  }

  transitionEnd = () => {
    if (
      !this.props.expanded &&
      this.wrapperEl &&
      this.innerEl &&
      this.wrapperEl.contains(this.innerEl)
    ) {
      this.wrapperEl.removeChild(this.innerEl)
    }
  }

  measure = (el: DomEl) => {
    if (!el) {
      return
    }
    this.innerEl = el
    this.height = el.offsetHeight
  }

  setWrapperEl = (el: DomEl) => {
    this.wrapperEl = el
  }

  render() {
    const { children, duration } = this.props

    const wrapperStyle = {
      ...wrapperBaseStyle
    }
    const innerStyle = {
      ...innerBaseStyle
    }

    if (typeof duration === 'number' || typeof duration === 'string') {
      wrapperStyle.transitionDuration = duration + 'ms'
      innerStyle.transitionDuration = duration + 'ms'
    }

    return (
      <div style={wrapperStyle} ref={this.setWrapperEl} onTransitionEnd={this.transitionEnd}>
        <div style={innerStyle} ref={this.measure}>
          {children}
        </div>
      </div>
    )
  }
}

export default ReactTransitionCollapse
