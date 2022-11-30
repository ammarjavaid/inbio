import React, { useState } from 'react'
import contact1 from "../../images/contact.jpg";
import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {

const [list, setList] = useState({
    fname: "",
    phone: "",
    email: "",
    subject: "",
    msg: ""
})

const update = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setList((preVal)=>{
        return{
            ...preVal,
            [name] : value,
        }
    })
}

const formSubmit = (event)=>{
    event.preventDefault();
    alert(`My name is ${list.fname}
           My phone number is ${list.phone}
           My email is ${list.email}
           My subject on ${list.subject}
           Here is my message I want to say ${list.msg} `)
}

  return (
    <>
        <section className='Contact' id='contact'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4> CONTACT </h4>
                    <h1> Contact With Me </h1> 
                </div>

                <div className='content d_flex'>
                    <div className='left'>
                        <div className='box box_shadow'>
                            <div className='img'>
                                <img src={contact1} alt="image"/>
                            </div>
                            <div className='details'>
                                <h1> Nevine Acotanze </h1>
                                <p> I am available for freelance work. Connect with me via and call in to my account. </p>
                                <br/>
                                <p> Phone: +923020662962 </p>
                                <p> Email: bcs07183077@student.uol.edu.pk </p>
                                <span> FIND WITH ME </span>
                                <div className='button f_flex'>
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
                                        {/* <i className='fab fa-twitter'></i> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right box_shadow'>
                        <form onSubmit={formSubmit}>
                            <div className='amar'>
                                <div className='input'>
                                    <span> YOUR NAME </span>
                                    <input type="text" name='fname' value={list.fname} onChange={update} />
                                </div>
                                <div className='input'>
                                    <span> YOUR NUMBER </span>
                                    <input type="number" name='phone' value={list.phone} onChange={update} />
                                </div>
                                <div className='input'>
                                    <span> EMAIL </span>
                                    <input type="email" name='email' value={list.email} onChange={update} />
                                </div>
                                <div className='input'>
                                    <span> SUBJECT </span>
                                    <input type="text" name='subject' value={list.subject} onChange={update} />
                                </div>
                                <div className='input'>
                                    <span> YOUR MESSAGE </span>
                                    <textarea cols="30" rows='10' name='msg' value={list.msg} onChange={update} />
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact