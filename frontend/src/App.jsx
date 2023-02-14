import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        {/* <Route path="/" element={<Dashboard/>}/> */}
        </Routes>          
        <NavBar/>

      </BrowserRouter>
    </div>
  )
}

export default App
