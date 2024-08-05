import React, { useContext } from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import portResume from '../Services/portfolio-cv.pdf'
import { themeContext } from '../../Context/Context'
import { motion } from 'framer-motion'
import SlideTransition from '../../Transition/SlideTransition'


const Services = () => {

    let transition = SlideTransition
    transition={...transition , duration:1}
   
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='services' id='Services'>
            {/*  left side */}
            <div className='services-left'>
                <span style={{color:darkMode ? "white" : ""}}>My Awesome</span>
                <span>Services</span>
                <span style={{color:darkMode ? "white" : ""}}>
                    As a Fresh Graduate eager to kickstart my career, I offer Java Application Development,  
                    <br />
                    RESTful API Development, Web Development and Dataabase Management
                </span>
                <a href={portResume} download>
                    <motion.button 
                        className='cv-button'
                        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)" }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          border: "2px solid var(--orange)",
                        }}
                    >
                        Download CV
                    </motion.button>
                </a>
                {/* Blur effect */}
                <div 
                    className='blur submit-blur1'
                    style={{
                        background:"#ABF1FF94",
                        filter:"blur(40px)"
                    }}
                >
                </div>    
            </div>
            <div className="cards">
                {/* 1st card */}
                <motion.div
                    initial={{left:"20rem"}}
                    whileInView={{left:"14rem"}}
                    transition={transition}
                    style={{
                        left:"14rem"
                    }}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading="Programming Knowledges "
                        detail="Java Programming , Python Programming , Javascript Programming"
                        detail1=""
                        detail2=""
                    />
                </motion.div>
                {/* 2nd card */}
                <motion.div
                    initial={{left:"-10rem"}} 
                    whileInView={{left:"-4rem"}}
                    style={{
                        top:"12rem",
                        left:"-4rem"
                    }}
                >
                    <Card 
                        emoji={Glasses}
                        heading="Database Management"
                        detail="Java Programming "
                        detail1="SQL (MySQL)"
                        detail2="NoSQL (MongoDB) "
                    />
                </motion.div>
                {/* 3rd card */}
                <motion.div 
                    initial={{left:"18rem"}}
                    whileInView={{left:"12rem"}}
                    transition={transition}
                    style={{
                        top:"19rem",
                        left:"12rem"
                    }}
                >
                    <Card 
                        emoji={Humble}
                        heading="Web Development"
                        detail="Crafting dynamic websites with code and creativity for online presence"
                        detail1="Web development using"
                        detail2="HTML, CSS , Javascript , React.js "
                    />
                </motion.div>
                {/* Blur effect */}
                <div 
                    className="blur submit-blur2"
                    style={{
                        background:"var(--purple"
                    }}
                >
                </div>

            </div>
        </div>
    )
}

export default Services
