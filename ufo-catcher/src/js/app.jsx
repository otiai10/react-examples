import React from 'react'
import { render } from 'react-dom'
import 'bulma/css/bulma.min.css'
import 'font-awesome-webpack'

import App from './Components/App'

/* ここがミソ */
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore((state = {position:{top: 0, left: 0}, logs: []}, action) => {
  let logs = state.logs.slice(0)
  logs.unshift(action)
  switch (action.type) {
    case 'MOVE':
      const step = 15;
      let position = Object.assign({}, state.position);
      switch (action.direction) {
        case 'UP':    position.top =  state.position.top  - step; break;
        case 'DOWN':  position.top =  state.position.top  + step; break;
        case 'LEFT':  position.left = state.position.left - step; break;
        case 'RIGHT': position.left = state.position.left + step; break;
      }
      return {position, logs}
    default:
      return state;
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
