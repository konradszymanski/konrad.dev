import React from 'react'
import '../styles/navigation.css'
import { Link } from 'react-scroll'



const Navigation = () => {

    return (
        <nav>
            <ul>
                <li id='navList1' >
                    <Link to={'biography'}>Bio</Link>
                </li>
                <li id='navList2' >
                    <Link to={'projects'}>Projects</Link>
                </li>
                <li id='navList3' >
                    <Link to={'footer'}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation

