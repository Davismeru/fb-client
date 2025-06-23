import { useState } from 'react'
import Home from "./Home.jsx"
import Confirm from "./Confirm.jsx"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component = {Home}/>
        <Route path='/confirm' Component = {Confirm}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
