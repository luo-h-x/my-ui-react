import * as React from 'react'
import * as PropTypes from 'prop-types'
import './button.scss'

export interface ButtonProps {
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  round?: boolean
  disabled?: boolean
  circle?: boolean
  plain?: boolean
  onClick?: React.MouseEventHandler
}

class Button extends React.Component<ButtonProps> {

  public static defaultProps = {
    type: 'default',
    round: false,
    disabled: false,
    circle: false,
    plain: false,
  }

  public static propTypes = {
    type: PropTypes.string,
    round: PropTypes.bool,
    disabled: PropTypes.bool,
    circle: PropTypes.bool,
    plain: PropTypes.bool,
    onClick: PropTypes.func,
  }

  public render() {
    const { type, children, plain, circle, disabled, round, onClick } = this.props
    const buttonClassName =`my-button my-button--${type}
      ${plain ? 'is-plain' : ''} 
      ${circle ? 'is-circle' : ''} 
      ${disabled ? 'is-disabled' : ''}
      ${round ? 'is-round' : ''}`
    return (
      <button
        onClick={onClick}
        className={buttonClassName}
      >
        <span >{children}</span>
      </button>)
  }

}

export default Button

