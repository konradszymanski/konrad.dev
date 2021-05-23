import React,  { useRef } from 'react'
import '../styles/myStory.css'
import NextSection from './NextSection'

const MyStory = () => {

    const mystory = useRef(null);

    return (
        <section 
        ref={mystory}
        className='bio'
         id='biography'>
            <h2>Bio</h2>
            <p>blabla bla bla bla bla bla  </p>
            <NextSection />
        </section>
    )
}

export default MyStory
