import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Clock from './digitalclock.jsx'
import Input from './input.jsx'
import TODO from './toDoLists.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TODO/>
  </React.StrictMode>,
)
