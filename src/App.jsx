
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Eth from './component/Eth'
import Sol from './component/Sol'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/solana" element={<Sol/>} />
              <Route exact path="/eth" element={<Eth/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
