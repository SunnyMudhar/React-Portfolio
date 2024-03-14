import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </Navbar>
      </div>
    </Router>
  )
}

export default App
