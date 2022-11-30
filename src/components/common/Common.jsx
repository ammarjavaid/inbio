import React from 'react'
import Blog from './components/pages/blog/Blog'
import Contact from './components/pages/contact/Contact'
import Features from './components/pages/features/Features'
import Footer from './components/pages/footer/Footer'
import Header from './components/pages/Header'
import Home from './components/pages/Home/Home'
import Portfolio from './components/pages/portfolio/Portfolio'
import Resume from './components/pages/resume/Resume'
import Testimonials from './components/pages/testimonials/Testimonials'

export default function Common() {
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
