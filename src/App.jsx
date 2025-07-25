import { useState } from 'react'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Wallet from './component/wallet'
import Eth from './component/Eth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/wallet" element={<Wallet/>} />
              <Route exact path="/eth" element={<Eth/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
