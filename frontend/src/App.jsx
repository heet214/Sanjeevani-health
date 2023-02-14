import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        </Routes>          
         <NavBar/>

      </BrowserRouter>
    </div>
  )
}

export default App
