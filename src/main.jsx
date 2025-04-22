import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Postform from './components/Postform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Postform />
  </StrictMode>,
)
