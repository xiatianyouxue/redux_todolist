// import {createStore, applyMiddleware} from "redux"
// import reducer from "./reducer"
//
// const {composeWithDevTools} = require('redux-devtools-extension');
// // import thunk from "redux-thunk"
// const store = createStore(
//   reducer,
//   composeWithDevTools()
//   // applyMiddleware(thunk)
// )
// export default store

import {createStore, applyMiddleware, compose} from 'redux';
import reducer from "./reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  // - const store = createStore(reducer, /* preloadedState, */ compose(
  applyMiddleware(thunk)
));
export default store
