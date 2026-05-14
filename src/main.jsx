import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import TodoListApp from './TodoListApp.jsx'
import CounterApp from './CounterApp.jsx'
import HomeApp from './HomeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>
)
