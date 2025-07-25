
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Eth from './component/Eth'
import Wallet from './component/wallet'

function App() {
  

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
