import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div className="bg-portfolio-back text-portfolio-white">
        <main
          className="w-full max-w-screen-lg min-h-screen m-auto grid gap-8 p-4 sm:p-8"
          style={{ gridTemplateRows: 'min-content auto min-content' }}
        >
          <div>
            <Header />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/project/:id" element={Project} />
            <Route path="*" element={Error} /> */}
          </Routes>
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App