import {createStore} from "redux"
import reducer from "./../reducer"
import {composeWithDevTools} from "redux-devtools-extension" // 安装redux调试插件

const store = createStore(reducer, composeWithDevTools())
export default store
