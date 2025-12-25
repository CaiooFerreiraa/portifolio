import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/header.css'
import './css/apresentation.css'
import './css/cardProfile.css'
import './css/aboutMe.css'
import './css/skills.css'
import './css/works.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
