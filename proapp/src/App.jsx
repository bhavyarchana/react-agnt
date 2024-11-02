import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route path='/p' element={<Product/>}/>
        <Route path='/h' element={<Home/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
