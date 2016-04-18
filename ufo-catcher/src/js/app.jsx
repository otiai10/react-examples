import React from 'react'
import { render } from 'react-dom'
import 'bulma/css/bulma.min.css'
import 'font-awesome-webpack'

import App from './Components/App'

/* ここがミソ */
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore((state = {position:{top: 0, left: 0}}, action) => {
  switch (action.type) {
    case 'MOVE':
      switch (action.direction) {
        case 'UP': return {position:{top:state.position.top + 1}}
      }
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
