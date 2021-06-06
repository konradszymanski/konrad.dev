import React from 'react'
import '../styles/header.css'
import Navigation from './Navigation';
import NextSection from './NextSection';

setTimeout(function(){
    document.getElementById('element3').style.opacity = '1'; 
}, 1500); 

const Header = () => {
    return (
        <header>
            <section id='starter'>
                <div className='introLeft'>
                    <h1 id='element1'>Konrad</h1>
                    <h2 id='element2'>.dev</h2>
                </div>
                <nav className='introRight' >
                    <div className='lines'>
                        <div className="line"></div>
                    </div>
                    <div id="element3">
                  <Navigation />
                  </div>
                </nav>
            </section>
            <NextSection id='element4'/>
        </header>
    )
}

export default Header
