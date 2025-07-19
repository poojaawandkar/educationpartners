import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EducationPartners from './EducationPartners.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EducationPartners />
  </StrictMode>,
)
