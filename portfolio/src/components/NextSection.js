import React from 'react'
import '../styles/features.css'
import logo from '../icons/arrowDown.png'
// this component is edited is features.css file
const NextSection = () => {


    return (
        <button
            id='nextSetion'
            className='nextSection'
        >
            <img src={logo} alt='icon' />

        </button>
    )
}

export default NextSection
