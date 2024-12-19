import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Search from './pages/Search'
import Upload from './pages/Upload'
import Home from './pages/Home'
import ImageViewer from './components/ImageViewer'
import Popup from './components/Popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Routes>
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
      </Routes> */}
      {/* <Home /> */}
      {/* <Upload /> */}
      {/* <ImageViewer /> */}
      {/* <Search /> */}
      <Popup />
    </>
  )
}

export default App
