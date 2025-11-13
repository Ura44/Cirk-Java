import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fetch from './fetch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fetch/>
  </StrictMode>,
)
