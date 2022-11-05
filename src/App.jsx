import React from 'react'
import Home from './pages/home'
import Contact from './pages/contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => {
  return (

    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App