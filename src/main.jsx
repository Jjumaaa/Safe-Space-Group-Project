import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Postform from './components/Postform.jsx'
import Editpost from './pages/Editpost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Postform />
    <Editpost />
  </StrictMode>,
)
