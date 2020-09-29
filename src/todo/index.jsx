import React from 'react';
import {Input, Button, List} from "antd"
import 'antd/dist/antd.css'
import store from "../redux/store"
import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM
} from './../redux/action/action-types'
import {
  inputChangeValue,
  addItem,
  deleteItem
} from './../redux/action'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState() //
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
    console.log(store.getState())
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  // input输入框改变
  inputChange = (e) => {
    store.dispatch(inputChangeValue(e.target.value))
  }
  // 点击按钮添加item项
  handleBtnClick = () => {
    // const action = {
    //   type: ADD_ITEM
    // }
    store.dispatch(addItem())
  }
  // 点击item项删除
  deleteItemClick = (index) => {
    // console.log(index)
    // const action = {
    //   type: DELETE_ITEM,
    //   index: index
    // }
    store.dispatch(deleteItem(index))
  }

  render() {
    return (
      <div>
        <Input
          placeholder='todo info'
          style={{width: 250, marginRight: 15}}
          value={this.state.inputValue}
          onChange={this.inputChange}/>
        <Button type='primary' onClick={this.handleBtnClick}>添加</Button>
        <List
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.deleteItemClick(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
