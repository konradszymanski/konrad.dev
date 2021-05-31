import React from 'react'
import '../styles/header.css'
import Navigation from './Navigation';
import NextSection from './NextSection';


const Header = () => {
    return (
        <header>
            <section id='starter'>
                <div className='introLeft'>
                    <h1>Konrad</h1>
                    <h2>.dev</h2>
                </div>
                <nav className='introRight' >
                    <div className='lines'>
                        <div className="line"></div>
                    </div>
                  <Navigation />
                </nav>
            </section>
            <NextSection />
        </header>
    )
}

export default Header
