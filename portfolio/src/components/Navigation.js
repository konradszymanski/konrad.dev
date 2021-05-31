import React from 'react'
import '../styles/navigation.css'
import { Link } from 'react-scroll'

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to={'biography'}>Bio</Link>
                </li>
                <li>
                    <Link to={'projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'footer'}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation

    // <Link 
    // activeClass="active" 
    // to="test1" 
    // spy={true} 
    // smooth={true} 
    // offset={50} 
    // duration={500} 
    // onSetActive={this.handleSetActive}>
    //       Test 1
    // </Link>