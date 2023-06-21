import React from 'react'
import ReactDOM from 'react-dom/client'
// remove the .tsx from the App.tsx
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
