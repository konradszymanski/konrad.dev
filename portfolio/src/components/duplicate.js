import React from 'react'
import '../styles/features.css'
import logo from '../icons/arrowDown.png'
// this component is edited is features.css file

const NextSection = () => {
   
    return (
        <div>
        <button
            id='nextSetion'
            className='nextSection'
        >
            <img src={logo} alt='icon' />

        </button>
        
        </div>
    )
}

export default NextSection
