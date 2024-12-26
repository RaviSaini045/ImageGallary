import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Search from './pages/Search'
import Upload from './pages/Upload'
import Home from './pages/Home'

function App() {
  console.log(import.meta.env.VITE_SERVER_URL);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>} 
        />
        <Route 
          path="/search"
          element={<Search/>}
        />
        <Route 
          path="/upload"
          element={<Upload/>}
        />
      </Routes>

    </>
  )
}

export default App
