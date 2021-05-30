import React, { useRef } from 'react'
import '../styles/myStory.css'
import Circle from './Circle';
import NextSection from './NextSection'

const MyStory = () => {

    const mystory = useRef(null);

    return (
        <section ref={mystory} className='bio' id='biography'>
            <h2>Bio</h2>
            <div className='bioBox' >
                <article className='leftArticle'>
                    <p>
                        <span>Hello World!</span>
                            <br />My name is Konrad Szymanski
                    </p>
                    <p>
                        and I am <span>website developer</span>. 
                    </p>
                </article>
                <article className='rightArticle'>
                    <Circle />
                </article>
            </div>
            <NextSection />
        </section>  
    )
}

export default MyStory
