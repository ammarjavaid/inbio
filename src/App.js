import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home/Home"
import Blog from "./components/pages/blog/Blog"
import Features from "./components/pages/features/Features"
import Portfolio from "./components/pages/portfolio/Portfolio"
import Testimonials from "./components/pages/testimonials/Testimonials"
import Contact from "./components/pages/contact/Contact"
import Header from "./components/pages/Header"
import Footer from "./components/pages/footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      {/* <Resume /> */}
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App