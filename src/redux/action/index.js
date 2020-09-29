import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM
} from './action-types'

export const inputChangeValue = (value) => ({
  type: INPUT_VALUE_CHANGE,
  value: value
})
export const addItem = () => ({
  type: ADD_ITEM
})
export const deleteItem = (index) => ({
  type: ADD_ITEM,
  index: index
})
