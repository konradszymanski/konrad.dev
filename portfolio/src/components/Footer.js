import React from 'react'
import '../styles/footer.css'
import Linkedin from '../icons/linkedin.png'
import Github from '../icons/github.png'

const Footer = () => {
    const social = [
        {
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/konrad-szymanski-92790311a',
            image:  Linkedin
        },
        {
            title: 'GitHub',
            link: 'https://github.com/konradszymanski',
            image:  Github
        }
    ]

    return (
        <footer>
            <ul>
                {social.map((item, index) =>
                    <li key={index}>
                        <a href={item.link} target='_blank' rel="noreferrer">
                            <img key={index}  src={item.image} alt={item.title} rel="noreferrer" />
                        </a>
                    </li>
                )}
            </ul>
        </footer>
    )
}

export default Footer