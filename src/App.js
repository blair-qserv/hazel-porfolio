import React from 'react'
// components
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './components/About'
import AllProjects from './components/AllProjects'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Header from './components/Header'
import Nav from './components/Nav'
import Services from './components/Services'
import Work from './components/Work'

const App = () => {
  return (
    <Router>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Banner />
                <Nav />
                <About />
                <Services />
                <Work />
                <Contact />
              </>
            }
          />
          <Route path='/all-projects' element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
