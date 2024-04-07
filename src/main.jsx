import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import Root from './layout/Root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
