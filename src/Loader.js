import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import { defaultTo, gt, has, reduce, without } from 'lodash'

const PROP_TYPES = {
  borderWidth: PropTypes.string,
  children: PropTypes.element,
  color: PropTypes.string,
  duration: PropTypes.string,
  huge: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  secondaryColor: PropTypes.string,
  size: PropTypes.string,
  small: PropTypes.bool
}

/*
 * Style configurations for the various size props that may be specified.
 **/
const sizeRelatedProps = ['huge', 'large', 'medium', 'size', 'small']

// const small = { borderWidth: '2', height: '17px', width: '17px' }
// const medium = { borderWidth: '12', height: '88px', width: '88px' }
// const large = { borderWidth: '12', height: '88px', width: '88px' }
// const huge = { borderWidth: '16', height: '120px', width: '120px' }

/*
 * Increment.
 * Provided a number, returns its value, incremented by one.
 **/
function inc(num) {
  return num + 1
}

export default class Loader extends Component {
  static propTypes = PROP_TYPES

  /*
   * Sum properties in object.
   * Provided a list of attributes, and provided an object, returns an integer
   * representing the total number of attributes encompassed by the object.
   **/
  sumPropsInObj(attrs = [], obj = {}) {
    return reduce(attrs, (acc, curr) => (has(obj, curr) ? inc(acc) : acc), 0)
  }

  /*
   * Ensure no prop conflicts.
   * Verifies that developer has not passed any conflicting props. Provided so,
   * throws an error.
   **/
  ensureNoConflicts(props = {}) {
    // const sizeRelatedProps = ['huge', 'large', 'medium', 'size', 'small']
    const sum = this.sumPropsInObj(sizeRelatedProps, props)

    if (gt(sum, 1)) {
      throw Error(
        `You have specified more than one of the following size-related props:
        small, medium, large, huge, size. Only one of these props may be 
        specified per each component instance.`
      )
    }
  }

  // omitUndefinedProps(obj = {}) {
  //   return reduce(obj, (acc, curr) => isUndefined(curr) ? omit(obj, curr)), {})
  // }

  resolveClassNames(props = {}) {
    const classes = without(sizeRelatedProps, 'size')

    return reduce(
      classes,
      (acc, curr) => (props[curr] ? acc.concat(`rev-Loader--${curr}`) : acc),
      ''
    )
  }

  resolveStyles(props = {}) {
    // const small = props.small ? { borderWidth: '2', height: '17px', width: '17px' } : {}
    // const medium = props.medium ? { borderWidth: '4', height: '32px', width: '32px' } : {}
    // const large = props.large ? { borderWidth: '12', height: '88px', width: '88px' } : {}
    // const huge = props.huge ? { borderWidth: '16', height: '120px', width: '120px' } : {}
    let styles = {
      animationDuration: props.duration,
      // border: 16px solid #f3f3f3,
      // borderTop: '16px solid #3498db,
      borderColor: props.secondaryColor,
      borderTopColor: props.color,
      // borderWidth: '12px',
      borderWidth: props.borderWidth,
      height: props.size,
      width: props.size
    }
    const overrides = props.style ? props.style : {}
    styles = { ...styles, ...overrides }

    return styles
  }

  render() {
    this.ensureNoConflicts(props)

    const { className, ...props } = this.props
    const classes = this.resolveClassNames(props)
    const styles = this.resolveStyles(props)

    return (
      <div className={`rev-Loader ${classes}`} style={styles}>
        {props.children}
      </div>
    )
  }
}
