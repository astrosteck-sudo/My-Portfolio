import RiserLanding from './Riser/riser-landing'
import './App.css'
import { Homepage } from './HomePage/Hompage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/riser-landing" element={<RiserLanding/>} />
      </Routes>

      
    </>
  )
}

export default App