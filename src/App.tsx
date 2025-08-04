import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Trial from './pages/Trial'
import AppLayout from './Layout/AppLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/trial" element={<Trial/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
