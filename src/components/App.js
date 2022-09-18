// import dependancies
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

// ---import pages---
import Home from "../pages/Home"
import Dinosaurs from "../pages/Dinosaurs"
import SingleDinosaur from "../pages/SingleDinosaur"
import News from "../pages/News"
import NewsItem from "../pages/NewsItem"
import Artists from "../pages/Artists"
import ArtistItem from "../pages/ArtistItem"
import ArtistsViaGenre from "../pages/ArtistsViaGenre"
import Contact from "../pages/Contact"
// shop
import Shopfront from "../pages/shop/Shopfront"
import Product from "../pages/shop/Product"
import Cart from "../pages/shop/Cart"
import Checkout from "../pages/shop/Checkout"

const App = () => {
  // render() controls the contents of the container node you pass in. 
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        {/* ----- page routes ----- */}
        {/* regular pages */}
        <Route path='/' element={<Home />} />
        <Route path='/dinosaurs' element={<Dinosaurs />} />
        <Route path='/dinosaur/:id' element={<SingleDinosaur />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<NewsItem />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<ArtistItem />} />
        <Route path='/genre/:id' element={<ArtistsViaGenre />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Contact />} />
        {/* shop pages */}
        <Route path='/shop' element={<Shopfront />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App

// Note: other components we can use

