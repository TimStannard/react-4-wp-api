import React, { Component } from 'react'

// first components
import Navbar from './Navbar'
import Hero from './Hero'

// add router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "../pages/Home"
import News from "../pages/News"
import About from "../pages/About"

class App extends Component {
  // render() controls the contents of the container node you pass in. 
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App

// Note: other components we can use

