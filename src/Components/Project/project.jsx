import React, { useContext } from 'react';
import './project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { themeContext } from '../../Context/Context';
import autism from '../../SliderComponents/autism.png';
import auction from '../../SliderComponents/auction.png';
import portfolio from '../../SliderComponents/portfolio.png';
import fasttrack from '../../SliderComponents/fasttrack.png';

const Project = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
const show = false
const active = show ==true? 'autism_show' : 'autism_disabled'
    return (
        <div className='project' id='Project'>
            <span style={{ color: darkMode ? 'white' : '' }}>PORTFOLIO</span>
            <span>My Projects</span>

            <Swiper
                spaceBetween={0}
                slidesPerView={2.8}
                grabCursor={true}
                className='project-slider'
            >
                <SwiperSlide>
                    <img src={autism} alt="autism" />
                    <div className > ${show==false}
                        
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={auction} alt="auction" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio} alt="portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fasttrack} alt="fasttrack" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}

export default Project;