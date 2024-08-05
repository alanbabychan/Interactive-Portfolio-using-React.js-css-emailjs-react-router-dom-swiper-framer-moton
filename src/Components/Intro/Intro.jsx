import React, { useContext, useState } from 'react'
import './Intro.css'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import thumbUp from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesEmoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context/Context'
import Git from '../Fontawesome/Git'
import Facebook from '../Fontawesome/Facebook'
import Instagram from '../Fontawesome/Instagram'
import Twitter from '../Fontawesome/Twitter'
import LinkedIn from '../Fontawesome/LinkedIn'
import alan from '../../img/alan.png'
import { motion } from 'framer-motion'
import SlideTransition from '../../Transition/SlideTransition'

const Intro = () => {

    const transition = SlideTransition

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const [emojiBurst, setEmojiBurst] = useState(false)

    const handleEmojiClick = () => {
        setEmojiBurst(true)
        setTimeout(() => {
            setEmojiBurst(false)
        }, 1000) // Reset after 1 second
    }

    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hey! I'm</span>
                    <span>Alan</span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Step into my portfolio,
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        As a fresh graduate skilled in
                        <b className='text' style={{ color: darkMode ? "white" : "", textShadow: darkMode ? "2px 2px 4px rgba(215, 215, 215, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Frontend</b>,<b className='text' style={{ color: darkMode ? "white" : "", textShadow: darkMode ? "2px 2px 4px rgba(215, 215, 215, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Backend</b>, and<b className='text' style={{ color: darkMode ? "white" : "", textShadow: darkMode ? "2px 2px 4px rgba(215, 215, 215, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.5)" }}> Web Development</b>,
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        I'm venturing into the realm of design.
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Join me in exploring the fusion of technical expertise and creative vision.
                    </span>
                </div>

                <div className="intro-icons">
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/alanbabychan" className='i'>{Git}</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/alanbabychan/" className='i'>{LinkedIn}</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/kiddo.x.__/" className='i'>{Instagram}</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/kiddo.x23" className='i'>{Facebook}</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://x.com/alan_babychan" className='i'>{Twitter}</a>
                </div>
            </div>
            <div className="intro-right">
                <img src={vector1} alt="vetor 1" />
                <img src={vector2} alt="vetor 2" />
                <img src={alan} alt="boy" />
                <motion.img
                    initial={{ left: '-46%' }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesEmoji}
                    alt="glassesEmoji"
                    animate={{
                        y: emojiBurst ? [-20, -30, -40] : 0,
                        scale: emojiBurst ? [1, 1.2, 1.5] : 1,
                        opacity: emojiBurst ? [1, 0.8, 0] : 1,
                        transition: { duration: 5, type: "spring" }
                    }}
                    className={emojiBurst ? "burst" : ""}
                    onClick={handleEmojiClick}
                />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}
                    className='floating-div'
                >
                    <FloatingDiv img={crown} txt1="Front End" txt2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: "18.4rem", left: "1.5rem" }}
                    className='floating-div'
                >
                    <FloatingDiv img={thumbUp} txt1="Web" txt2="Developer" />
                </motion.div>
                {/* blurred divs */}
                <div
                    className='blur'
                    style={{
                        backgroundColor: "rgb(238, 210, 255)"
                    }}
                />
                <div
                    className='blur'
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                        filter: "blur(50px)"
                    }}
                />
            </div>
        </div>
    )
}

export default Intro
