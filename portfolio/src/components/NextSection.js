import React from 'react'
import '../styles/features.css'
import logo from '../icons/arrowDown.png'
// this component is edited is features.css file

import { animateScroll as scroll } from 'react-scroll';

const NextSection = () => {
    
    let windowH = window.innerHeight
    
    function scrollMoreDown() {
        scroll.scrollMore(windowH);
      }
    return (
        <div>
        <button
            id='nextSetion'
            aria-label='Scroll to the next section'
            className='nextSection'
            onClick={scrollMoreDown}
        >
            <img src={logo} alt='icon' />
        </button>
        
        </div>
    )
}

export default NextSection
