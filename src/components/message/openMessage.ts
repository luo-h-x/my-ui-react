import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Message from './Message'

export interface Options {
  content: string | React.ReactNode
  autoClose?: number
  position?: string
}

let container: HTMLDivElement

function openMessage(
  options: Options,
  type: 'info' | 'success' | 'warning' | 'error'
) {
  if (container) {
    removeMessage()
  }
  const {
    content,
    autoClose = 3,
    position = 'top'
  } = options
  container = document.createElement('div')
  document.body.append(container)

  const messageInstance = React.createElement(
    Message as React.ComponentClass,
    {
      content,
      type,
      position,
      autoClose,
    } as React.ClassAttributes<any>
  )
  ReactDOM.render(messageInstance, container)
}

export function removeMessage() {
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
}

export function info(options: Options) {
  openMessage(options, 'info')
}

export function success(options: Options) {
  openMessage(options, 'success')
}

export function warning(options: Options) {
  openMessage(options, 'warning')
}

export function error(options: Options) {
  openMessage(options, 'error')
}