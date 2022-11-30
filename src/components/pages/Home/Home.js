import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import hero from "../../images/hero.png";
import skill1 from "../../images/skill1.png";
import skill2 from "../../images/skill2.png";
import skill3 from "../../images/skill3.png";
import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3> WELCOME TO MY WORLD </h3>
            <h1> Hi, I'm <span> Jone Lee </span> </h1>
            <h2>
              a <span> <Typewriter
                words={["Professional Coder", "Developer"]}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /> </span>
            </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet justo quis elit volutpat tincidunt. Vivamus suscipit tellus sed justo scelerisque </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4> FIND WITH ME </h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <AiFillFacebook />
                    {/* <i className='fab fa-facebook-f'></i> */}
                  </button>
                  <button className='btn_shadow'>
                    <FiInstagram />
                    {/* <i className='fab fa-instagram'></i> */}
                  </button>
                  <button className='btn_shadow'>
                    <BsLinkedin />
                    {/* <i className='fab fa-linkedin-in'></i> */}
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4> BEST SKILL ON </h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt="image" />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt="image" />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt="image" />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home