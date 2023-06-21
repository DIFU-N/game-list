import ReactDOM from 'react-dom/client'
// remove the .tsx from the App.tsx
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import ErrorBoundary from './components/ErrorBoundary'
import ThemeProvider from './components/ThemeProvider'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
