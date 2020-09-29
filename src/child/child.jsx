import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childMsg: '我是子组件的信息'
    }
  }

  sendMsg = () => {
    this.props.add(this.state.childMsg)
  }

  render() {
    // console.log(this.props)
    const {msg} = this.props
    return (
      <div>
        我是子组件
        <p> {msg}</p>
        <button onClick={this.sendMsg}>向父组件传递数据</button>
      </div>
    );
  }
}
