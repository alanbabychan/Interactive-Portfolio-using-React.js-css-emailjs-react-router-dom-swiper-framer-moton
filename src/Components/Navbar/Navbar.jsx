import React, { useContext } from 'react'
import './navbar.css'
import Toggle from '../Toggle/Toggle'
import { themeContext } from '../../Context/Context'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'



function Navbar() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <nav className="navbar-wrapper">
            <div className='navbar-left'>
                {darkMode ? <div className='navbar-name2'>Portfolio</div> : <div className='navbar-name1'>Portfolio</div>}
                <Toggle />
            </div>
            <div className='navbar-right'>
                <div className='navbar-list'>
                    <ul style={{ listStyleType: "none" }} >

                        <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass' >
                            <li>HOME</li>
                        </Link>

                        <Link spy={true} to="Services" smooth={true}>
                            <li>SERVICES</li>
                        </Link>

                        <Link spy={true} to="About" smooth={true} >
                            <li>ABOUT</li>
                        </Link>

                        <Link spy={true} to="Project" smooth={true} >
                            <li>PROJECTS</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to="Contact" smooth={true} >
                    <motion.button
                        className="contact-button"
                        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)" }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            border: "2px solid var(--orange)",
                        }}
                    >
                        Hire Me
                    </motion.button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
