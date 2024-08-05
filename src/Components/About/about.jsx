import React, { useContext } from 'react';
import './about.css';
import { themeContext } from '../../Context/Context';
import SlideTransition from '../../Transition/SlideTransition';
import { motion } from 'framer-motion';
import Music from '../../img/music-solid.svg';
import Football from '../../img/futbol-solid.svg';
import TT from '../../img/table-tennis-paddle-ball-solid.svg';
import Compass from '../../img/compass-solid.svg';
import Coffee from '../../img/mug-saucer-solid.svg';

const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    let transition = SlideTransition;
    transition = { ...transition, duration: 3.5 };

    return (
        <div className='about' id='About'>
            <div className='services-left'>
                <span style={{ color: darkMode ? "white" : "" }}>A Lil Bit About me</span>
                {darkMode ? <div className='navbar-name2'>ALAN BABYCHAN</div> : <div className='navbar-name1'>ALAN BABYCHAN</div>}
                <span style={{ color: darkMode ? "white" : "" }}>
                   <p>Hey there! I am a dedicated and aspiring student from Munnar. I completed my college education at the
                    College of Engineering Munnar, where I earned a BTech degree in Computer Science.</p> 
                    <p>Throughout my academic journey, I have developed a strong background in various programming languages. I am now
                    eager to leverage my technical skills in a professional setting and take on new challenges and opportunities
                    in the field of computer science.</p> 
                    <p> My goal is to make a positive impact by utilizing my technical expertise and
                    contributing to the advancement of the field. I am excited about the possibilities that lie ahead and I am
                    ready to embrace them wholeheartedly.</p>

                </span>
                {/* Blur effect */}
                <div
                    className='blur submit-blur1'
                    style={{
                        background: "#ABF1FF94",
                        filter: "blur(40px)"
                    }}
                >
                </div>
            </div>
            <div className="about-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={transition}
                    className="about-mainCircle"
                    style={{
                        background: darkMode ? "hsl(219, 30%, 17%)" : ""
                    }}
                >
                    <div className="about-secCircle">
                        <img src={Coffee} alt="coffee" />
                    </div>
                    <div className="about-secCircle">
                        <img src={Football} alt="Football" />
                    </div>
                    <div className="about-secCircle">
                        <img src={TT} alt="TT" />
                    </div>
                    <div className="about-secCircle">
                        <img src={Compass} alt="Compass" />
                    </div>
                    <div className="about-secCircle">
                        <img src={Music} alt="Music" />
                    </div>
                </motion.div>

                <div className="about-backCircle blueCircle"></div>
                <div className="about-backCircle yellowCircle"></div>
            </div>
        </div>
    );
}

export default About;

