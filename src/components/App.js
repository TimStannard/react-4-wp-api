// import dependancies
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Navbar from './Navbar'
import Hero from './Hero'

// import pages
import Home from "../pages/Home"
import Dinosaurs from "../pages/Dinosaurs"
import SingleDinosaur from "../pages/SingleDinosaur"

const App = () => {
  // render() controls the contents of the container node you pass in. 
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dinosaurs' element={<Dinosaurs />} />
        <Route path='/dinosaur/:id' element={<SingleDinosaur />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

// Note: other components we can use

