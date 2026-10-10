import React from 'react';
import '../styles/navigation.css';

const Navigation = () => (
    <nav aria-label="Portfolio sections">
        <ul>
            <li id="navList1"><a href="#biography">Bio</a></li>
            <li id="navList2"><a href="#projects">Projects</a></li>
            <li id="navList3"><a href="#footer">Contact</a></li>
        </ul>
    </nav>
);

export default Navigation;

