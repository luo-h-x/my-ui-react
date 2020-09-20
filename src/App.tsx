import * as React from 'react'
import Button from './components/button/Button'
import Message from './components/message/Message'

class App extends React.Component {

  handle = () => {
    Message.warning({content:'ok'})
  }
  handle1 = () => {
    Message.success({content:'ok'})
  }
  handle2 = () => {
    Message.info({content:'ok'})
  }
  handle3 = () => {
    Message.error({content:'ok'})
  }

  public render() {
    return(
      <div className = "App" >
        <Button onClick={this.handle} type="primary">按钮</Button>
        <Button onClick={this.handle1} type="primary">按钮</Button>
        <Button onClick={this.handle2} type="primary">按钮</Button>
        <Button onClick={this.handle3} type="primary">按钮</Button>
      </div>
    );
  }
  
}

export default App;
