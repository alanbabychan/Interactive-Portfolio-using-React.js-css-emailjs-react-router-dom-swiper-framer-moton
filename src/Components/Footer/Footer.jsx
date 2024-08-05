import React from 'react'
import './footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram-alt'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'


function Footer() {
    return (

        <div className='footer'>
            <img src={Wave} alt="wave" />
            <div className="footer-content">
                {/* <span>mathew5359302@gmail.com</span> */}
                <div className="footer-icons">
                    <a href="https://github.com/alanbabychan" target='_blank' rel='noopener noreferrer'><Github color={"white"} size={"3rem"} /></a>
                    <a href="https://www.linkedin.com/in/alanbabychan/" target='_blank' rel='noopener noreferrer'><LinkedIn color={"white"} size={"3rem"} /></a>
                    <a href="https://www.instagram.com/kiddo.x.__/" target='_blank' rel='noopener noreferrer'><Instagram color={"white"} size={"3rem"} /></a>
                    <a href="https://www.facebook.com/kiddo.x23" target='_blank' rel='noopener noreferrer'><Facebook color={"white"} size={"3rem"} /></a>
                    <a href="https://x.com/alan_babychan" target='_blank' rel='noopener noreferrer'><Twitter color={"white"} size={"3rem"} /></a>

                </div>
            </div>


        </div>
    )
}

export default Footer
