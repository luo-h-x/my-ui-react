import * as React from 'react'
import * as PropTypes from 'prop-types'
import './message.scss'
import { info, success, warning, error, removeMessage } from './openMessage'

export interface MessageProps {
  content?: string | React.ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  position?: 'top' | 'middle' | 'bottom'
  autoClose?: number,
}

export interface Options {
  content: string | React.ReactNode
  autoClose?: number
  position?: string
}

class Message extends React.Component<MessageProps> {

  public static defaultProps = {
    content: '这是一条提示信息',
    type: 'info',
    position: 'top',
    autoClose: 3,
  }

  public static info: (options: Options) => any = info
  public static success: (options: Options) => any = success
  public static warning: (options: Options) => any = warning
  public static error: (options: Options) => any = error
  public static removeMessage: () => any = removeMessage

  public static propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
    position: PropTypes.oneOf(['top', 'middle', 'bottom']).isRequired,
    autoClose: PropTypes.number,
  }

  private closeTimeout: any
  private leaveTimeout: any

  public componentDidMount() {
    const { autoClose } = this.props
    if (autoClose) {
      this.closeTimeout = setTimeout(() => {
        this.close()
      }, autoClose * 1000)
    }
  }

  public componentWillUnmount() {
    const { closeTimeout, leaveTimeout } = this
    if (closeTimeout) {
      window.clearTimeout(closeTimeout)
    }
    if (leaveTimeout) {
      window.clearTimeout(leaveTimeout)
    }
  }

  public close = () => {
    this.leaveTimeout = setTimeout(() => {
      this.afterLeave()
    }, 100)
  }

  public afterLeave = () => {
    Message.removeMessage()
  }

  public render() {
    const { position, content, type } = this.props
    const MessageClasses = ['wrapper', `position-${position}`]
    const message = ['my-message', `is-${type}`]
    return (
      <div className={MessageClasses.join(' ')} >
        <div className={message.join(' ')}>
          <div className="message">
            {content}
          </div>
          <span className="close" onClick={this.close}>知道了</span>
        </div>
      </div >
    )
  }

}

export default Message