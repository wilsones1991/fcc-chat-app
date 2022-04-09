import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import chat from './reducers'

const store = createStore(chat)
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, getElementById('root')
)
