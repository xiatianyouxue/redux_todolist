// 将所有的action全部放到一个文件中
import {
  INPUT_VALUE_CHANGE,
  LIST_ITEM_CHANGE,
  DELETE_ITEM
} from './actionTypes'

export const inputValueAction = (value) => ({
  type: INPUT_VALUE_CHANGE,
  value
})
export const listItemChangeAction = () => ({
  type: LIST_ITEM_CHANGE
})
export const deleteItemAction = () => ({
  type: DELETE_ITEM
})

