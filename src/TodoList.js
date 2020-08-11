import React from 'react';
import 'antd/dist/antd.css'
import store from "./store"
import TodoListUI from "./TodoListUI"
import {inputValueAction, deleteItemAction, listItemChangeAction} from "./store/actionCreator"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoListUI
        value={this.state.inputValue}
        handleChange={this.handleChange}
        handleBtnChange={this.handleBtnChange}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }


  // input框发生改变时分发事
  handleChange = (e) => {
    const action = inputValueAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  // 点击按钮实现增加功能
  handleBtnChange = () => {
    const action = listItemChangeAction()
    store.dispatch(action);
  }

  // 点击item项实现删除功能
  handleItemDelete(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
