import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Projects from './Projects';
import "./index.css";
import HomePage from './HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={ <Projects />} />       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
