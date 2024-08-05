import React, { useContext } from 'react'
import './experience.css'
import { themeContext } from '../../Context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import StarSolid from '../../img/star-solid.svg'
import StarEmpty from '../../img/star-regular.svg'

const Experience = () => {

    const java = <FontAwesomeIcon icon={faJava} size="xl" style={{color:"var(--orange)"}} />
    const python = <FontAwesomeIcon icon={faPython} size="xl" style={{color:"var(--orange)"}} />
    const js = <FontAwesomeIcon icon={faJs} size="xl" style={{color:"var(--orange)"}} />

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="experience" id='Experience'>
            <div className="achievement" style={{color:darkMode ? "white" : "black"}}>
                <div className="circle" style={{background:darkMode?"#232D3F":"white"}}>{js}</div>
                <div className='stars'>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarEmpty} alt="solid star" /></span>
                </div>
                <span>Javascript</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{background:darkMode?"#232D3F":"white"}}>{python}</div>
                <div className='stars'>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarEmpty} alt="solid star" /></span>
                </div>
                <span>Python</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{background:darkMode?"#232D3F":"white"}}>{java}</div>
                <div className='stars'>
                    <span><img className="star" src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarSolid} alt="solid star" /></span>
                    <span><img className='star' src={StarEmpty} alt="solid star" /></span>
                    <span><img className='star' src={StarEmpty} alt="solid star" /></span>
                </div>
                <span>Java</span>
            </div>
        </div>
    )
}

export default Experience
