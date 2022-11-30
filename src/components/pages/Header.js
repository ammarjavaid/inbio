import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import logo from "../images/logo.png";

const Header = () => {

const [click, setClick] = useState(false);
const [shadows, setShadows] = useState(false);

const clicked = ()=>{
    setClick(!click);
}

const scrollEffect = ()=>{
    if(window.scrollY >= 90 ){
        setShadows(true);
    }else{
        setShadows(false);
    }
}

window.addEventListener("scroll", scrollEffect);

  return (
    <>
        <header className={ shadows ? "header header-active" : "header" }>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt='image' />
                </div>
                <div className='icons' onClick={clicked}>
                    {click ? <FaTimes className='times' /> : <FaBars /> } 
                </div>
                    <div className='navlinks'>
                    <ul className={click ? 'nav-menu active f_flex uppercase' : 'nav-menu f_flex uppercase'}>
                        <li onClick={clicked}> <a href="#home">Home</a> </li>
                        <li onClick={clicked}> <a href="#features">features</a> </li>
                        <li onClick={clicked}> <a href="#portfolio">portfolio</a> </li>
                        <li onClick={clicked}> <a href="#resume">resume</a> </li>
                        <li onClick={clicked}> <a href="#clients">clients</a> </li>
                        <li onClick={clicked}> <a href="#blog">blog</a> </li>
                        <li onClick={clicked}> <a href="#contact">contact</a> </li>
                        <li> <button className='home-btn'> BUY NOW </button> </li>
                    </ul>
                    </div>
                </div>
        </header>
    </>
  )
}

export default Header