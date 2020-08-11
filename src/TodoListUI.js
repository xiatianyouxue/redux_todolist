import React from 'react';
import {Button, Input, List} from "antd"

export default class TodoListUI extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div>
        <Input
          placeholder={'todo info'}
          style={{width: '300px', marginRight: 10}}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <Button type="primary" onClick={this.props.handleBtnChange}>Button</Button>
        <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {
              this.props.handleItemDelete(index)
            }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
