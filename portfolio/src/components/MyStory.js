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
                        I am a creative front-end <span>web developer and designer</span> based in UK.
                    </p>
                    <p>
                        I started my first job in the <span>IT</span> industry in February <span>2021</span><span className='coma'>,</span> after moving from the gambling industry.
                    </p>
                    <p>
                        Apart from <span>coding</span> and <span>learning</span><span className='coma'>,</span> I love to engage in sports and watch David Fincher's movies<span className='coma'>,</span> and I enjoy exploring <span>medieval castles.</span>
                    </p>
                    <p>You can reach me on
                        <span>
                            <a
                                href='https://www.linkedin.com/in/konrad-szymanski-92790311a/'
                                target='_blank'
                                rel="noreferrer"> LinkedIn.
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
