import {
  INPUT_VALUE_CHANGE,
  LIST_ITEM_CHANGE,
  DELETE_ITEM
} from './actionTypes'
const defaultState = {
  // 需要用redux来保存的状态
  inputValue: '',
  list: []
}
// store里面的状态不允许直接修改
// reducer必须是纯函数
export default (state = defaultState, action) => {
  if (action.type === INPUT_VALUE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === LIST_ITEM_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state;
}
