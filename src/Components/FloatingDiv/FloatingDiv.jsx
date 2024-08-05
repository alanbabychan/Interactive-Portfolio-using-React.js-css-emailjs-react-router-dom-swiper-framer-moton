import React, { useContext } from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../Context/Context'

const FloatingDiv = ({img , txt1 , txt2}) => {
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='floating-div' style={{color:darkMode ? "white" : ""}} >
            <img src={img} alt="Crown" />
            <span >
                {txt1}
                <br/>
                {txt2}
            </span>
        </div>
    )
}

export default FloatingDiv
