import React, { Component } from 'react'

// first components
import Navbar from './Navbar'
import Hero from './Hero'

// add router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "../pages/Home"
import Dinosaurs from "../pages/Dinosaurs"

const App = () => {
  // render() controls the contents of the container node you pass in. 
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dinosaurs' element={<Dinosaurs />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

// Note: other components we can use

