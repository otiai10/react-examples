import React from 'react'
import { render } from 'react-dom'
import 'bulma/css/bulma.min.css'
import 'font-awesome-webpack'

import App from './Components/App'

/* ここがミソ */
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore((state = {position:{top: 0, left: 0}}, action) => {
  console.log("[debug:000]", state, action)
  switch (action.type) {
    case 'MOVE':
      switch (action.direction) {
        case 'UP': state.position.top++;
          break;
      }
      return state;
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
