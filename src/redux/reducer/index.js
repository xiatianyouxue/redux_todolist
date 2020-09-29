import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM
} from './../action/action-types'

const initState = {
  inputValue: '',
  list: []
}
// 通过分发的action来改变store里面的数据,但是store里面的数据不能直接改变
export default (state = initState, action) => {
  if (action.type === INPUT_VALUE_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  } else if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  } else if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    let index = action.index
    newState.list.splice(index, 1)
    return newState
  }
  return state
}
