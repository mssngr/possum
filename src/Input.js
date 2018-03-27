import React, {Component, Children, cloneElement} from 'react'
import PropTypes from 'prop-types'
import InputLabel from './InputLabel'
import classNames from 'classnames'
import InputHelpText from './InputHelpText'
import InputErrors from './InputErrors'

export default class Input extends Component {
  static defaultProps = {
    type: 'text',
  }

  render() {
    const {className, error, inputRef, ...props} = this.props
    const inputClassName = classNames(className, 'rev-Input', {
      'is-invalid-input': !!error,
      'is-invalid': !!error,
    })

    return <input className={inputClassName} {...props} ref={inputRef} />
  }
}

class InputStack extends Component {
  render() {
    const {error, help, className, label, ...props} = this.props

    const labelClassName = classNames(className, 'rev-InputStack')

    return (
      <InputLabel className={labelClassName} error={error}>
        {label}
        <Input {...props} error={error} />
        <InputHelpText>{help}</InputHelpText>
        <InputErrors>{error}</InputErrors>
      </InputLabel>
    )
  }
}
Input.Stack = InputStack
