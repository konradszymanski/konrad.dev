import React from 'react'
import '../styles/navigation.css'
import { NavLink as Link } from 'react-router-dom'

const Navigation = () => {

    return (

        <nav>
            <ul>
                <li>
                    <Link to={'#biography'}>Bio</Link>
                </li>

                <li>
                    <Link to={'#projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'#footer'}>Footer</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
