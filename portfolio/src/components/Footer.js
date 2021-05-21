import React from 'react'
import '../styles/footer.css'
const Footer = () => {
const social = [
    {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/konrad-szymanski-92790311a',
    },
    {
        title: 'GitHub',
        link: 'https://github.com/konradszymanski'
    }
    ]

    return (
        <footer>
        {social.map((item)=>
        <li><a href={item.link} target='_blank' rel="noreferrer">{item.title}</a></li>
        )}
        </footer>
    )
}

export default Footer
