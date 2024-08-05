import React, { useContext } from 'react'
import './card.css'
import { themeContext } from '../../Context/Context'

const Card = ({emoji , heading  , detail ,detail1 , detail2}) => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='card'>
            <img src={emoji} alt="Emoji" />
            <span style={{color:darkMode?"white":""}}>{heading}</span>
            <span style={{color:darkMode?"white":""}}>{detail}</span>
            <span style={{color:darkMode?"white":""}}>{detail1}</span>
            <span style={{color:darkMode?"white":""}}>{detail2}</span>
        </div>
    )
}

export default Card
