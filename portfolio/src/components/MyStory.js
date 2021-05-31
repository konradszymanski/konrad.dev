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
                            <br />My name is <span>Konrad</span> Szymanski.
                    </p>
                    <p>
                        I am creative front-end <span>website developer and designer</span> based in uk. 
                    </p>
                    <p>
                        I started my first job in IT industry in february <span>2021</span><span className='coma'>,</span> after transformation from gambling industry.
                    </p>
                    <p>
                        Apart of coding<span className='coma'>,</span> I love do sports and David Fincher's movie's but the most: exploring <span>medieval castles.</span>  
                    </p> 
                    <p>You can reach me at <span>LinkedIn</span></p>
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
