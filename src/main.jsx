import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Education from './Eduction.jsx'
import Contact from './Contact.jsx'
import Experience from './Experience.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact/>
    <Education />
    <Experience/>
  </StrictMode>,
)
