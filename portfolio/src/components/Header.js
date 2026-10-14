import React, { useEffect } from 'react'
import '../styles/header.css'
import Navigation from './Navigation';
import NextSection from './NextSection';


const Header = () => {
    useEffect(() => {
        const timers = ['element1', 'element2', 'element3', 'element4'].map((id, index) =>
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.style.opacity = '1';
            }, 1000 + index * 500)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

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
