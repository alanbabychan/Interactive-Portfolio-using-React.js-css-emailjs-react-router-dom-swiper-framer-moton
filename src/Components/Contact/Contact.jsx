import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context/Context';
import {motion} from 'framer-motion'


const Contact = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const [sId , tId , pubKey] = [
        process.env.REACT_APP_SERVICE_ID ,
        process.env.REACT_APP_TEMPLATE_ID ,
        process.env.REACT_APP_PUBLIC_KEY
    ]

    const form = useRef();
    
    const [done,setDone] = useState(false)

    const sendEmail = e => {
        e.preventDefault();
        emailjs
            .sendForm(sId, tId, form.current, {
                publicKey: pubKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true)
                    setTimeout(()=>setDone(false),3000)
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='contact-form' id='Contact'>
            <div className="contact-left">
                <div className="contact">
                    <span style={{color:darkMode ? "white" : ""}}>Get In Touch</span>
                    <span>Contact Me</span>
                </div>
                {/* blur effect */}
                <div
                    className="blur contact-blur"
                    style={{
                        background: "#ABF1FF94"
                    }}
                >
                </div>
            </div>
            <div className='contact-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name='user-name'
                        className='user'
                        placeholder='Name'
                    />

                    <input
                        type="email"
                        name='user-email'
                        className='user'
                        placeholder='Email'
                    />

                    <textarea
                        name='message'
                        className='user'
                        placeholder='Message'
                    />

                    <motion.button
                        type="submit"
                        className='send-button'
                        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)" }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          border: "2px solid var(--orange)",                          
                        }}
                    >
                        Send
                    </motion.button>

                    <span>{done && "Thanks for Contacting Me! "}</span>

                    <div
                        className="blur s-blur"
                        style={{
                            background: "var(--purple)"
                        }}
                    >
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Contact
