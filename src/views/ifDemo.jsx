import React from 'react';

export default class IfDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 59
    }
  }

  render() {
    let {score} = this.state
    if (score >= 80) {
      return (
        <div>成绩优秀</div>
      )
    } else if (score >= 60) {
      return (
        <div>成绩合格</div>
      )
    } else {
      return <div>成绩不合格</div>
    }
  }
}
