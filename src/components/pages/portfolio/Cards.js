import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import one from "./pix/1.jpg";

const Cards = (props) => {

const [modal, setModal] = useState(false);

const toggle = ()=>{
    setModal(!modal);
}

// if (modal){
//     document.body.classList.add("active-modal")
// }else{
//     document.body.classList.remove("active-modal")
// }

  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt="image" onClick={toggle}/>
            </div>
            <div className='category d_flex'>
                <span onClick={toggle}> {props.category} </span>
                <label>
                    <i className='far fa-heart'></i> {props.totalLike}
                </label>
            </div>
            <div className='title'>
                <h2 onClick={toggle}> {props.title} </h2>
                <a href='#popup' className='arrow'  onClick={toggle}>
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>
        </div>


        { modal && (
            <div className='modal'>
                    <div className='overlay' onClick={toggle}></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt="image" />
                        </div>
                        <div className='modal-text right'>
                            <span> Featured - Design </span>
                            <h1> {props.title} </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet justo quis elit volutpat tincidunt. Vivamus suscipit tellus sed justo scelerisque, </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet justo quis elit volutpat tincidunt. Vivamus suscipit tellus sed justo scelerisque, </p>

                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    LIKE THIS <i className='far fa-thumbs-up'></i>
                                </button>
                                <button className='btn_shadow'>
                                    VIEW PROJECT <i className='fas fa-chevron-right'></i>
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggle}>
                                <i className='fas fa-times'></i>
                            </button>
                        </div>
                    </div>
                </div>                
        )}



    </>
  )
}

export default Cards;