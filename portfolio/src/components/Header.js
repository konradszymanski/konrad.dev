import React from 'react'
import '../styles/header.css'
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
                    <ul>
                        <li></li>
                        <li>Bio</li>
                        <li>Projets</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </section>
            <NextSection />
        </header>
    )
}

export default Header
