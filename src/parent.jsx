import React from 'react';
import Child from "./child/child"

export default class Parent extends React.Component {
  state = {
    parentMsg: '我是父组件的信息',
    msg: ''
  }
  sendMessage = (props) => {
    console.log(props)
    this.setState({
      msg: props
    })

  }

  render() {
    const {parentMsg, msg} = this.state
    return (
      <div>
        我是父组件
        <Child msg={parentMsg} add={this.sendMessage}/>
        {msg}
      </div>
    );
  }
}
