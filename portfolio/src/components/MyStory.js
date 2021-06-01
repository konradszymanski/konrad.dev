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
                    
                    <p className='helloWorld'>Hello World!</p>
                    <p>
                        <br />My name is <span>Konrad</span> Szymanski.
                    </p>
                    <p>
                        I am creative front-end <span>website developer and designer</span> based in uk.
                    </p>
                    <p>
                        I started my first job in <span>IT</span> industry in february <span>2021</span><span className='coma'>,</span> after transformation from gambling industry.
                    </p>
                    <p>
                        Apart of <span>coding</span> and <span>learning</span><span className='coma'>,</span> I love do sports and David Fincher's movie's but the most: exploring <span>medieval castles.</span>
                    </p>
                    <p>You can reach me at
                        <span>
                            <a
                                href='https://www.linkedin.com/in/konrad-szymanski-92790311a/'
                                target='_blank'
                                rel="noreferrer"> LinkedIn
                            </a>
                        </span>
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
