import React from 'react';
import logo1 from "../../images/f_logo.png";

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='img'>
                    <img src={logo1} alt="logo" />
                </div>
                <p> @2022. All right reserved AmmarCoder-Themes </p>
            </div>
        </footer>
    </>
  )
}

export default Footer