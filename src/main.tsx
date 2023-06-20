import React from 'react'
import ReactDOM from 'react-dom/client'
// remove the .tsx from the App.tsx
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
