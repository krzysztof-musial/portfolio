import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/project/:id" element={Project} />
        <Route path="*" element={Error} /> */}
      </Routes>
    </Router>
  )
}

export default App