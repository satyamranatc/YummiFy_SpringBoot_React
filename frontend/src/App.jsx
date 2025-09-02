import React from 'react'

import NavBar from './components/NavBar.jsx'

import RestoAdmin from './components/RestoAdmin.jsx'
import DishAdmin from './components/DishAdmin.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div>
            <h1>Home</h1>
          </div>} />
          <Route path="/resto-admin" element={<RestoAdmin />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
