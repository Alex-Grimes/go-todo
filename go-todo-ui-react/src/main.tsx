import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Todo } from './Components/Todo/todo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
)
