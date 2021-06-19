import React from 'react'
import '../styles/header.css'
import Navigation from './Navigation';
import NextSection from './NextSection';

setTimeout(function () {
    document.getElementById('element1').style.opacity = '1';
}, 1000);
setTimeout(function () {
    document.getElementById('element2').style.opacity = '1';
}, 1500);
setTimeout(function () {
    document.getElementById('element3').style.opacity = '1';
}, 2000);
setTimeout(function () {
    document.getElementById('element4').style.opacity = '1';
}, 2500);

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
            <div id='element4'>
                <NextSection />
            </div>
        </header>
    )
}

export default Header
